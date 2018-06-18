//=============================================================================
// ExtraEquipType.js
//=============================================================================

/*:
 * @plugindesc add/remove extra equip type to an actor
 * @author Sasuke KANNAZUKI
 * @help
 * Plugin Command:
 * ExtraEquipType arg0 arg1 arg2 arg3
 * arg0 must be 'add' or 'remove'.
 * arg1 must be actor ID number.
 * arg2 must be 'weapon' or 'armor'.
 * arg3 must be type id number of weapon/armor.
 * ex.
 * ExtraEquipType add 1 weapon 4  # actor#1 can equip weapon whose type is 4.
 * ExtraEquipType remove 2 armor 3 # actor#2 cannot equip armor whose type is 3
 * note:
 * database is higher priority than this plugin. so, even if an actor is
 * removed equip type, it won't disable if it's enabled on database.
 * 
 */
/*:ja
 * @plugindesc クラスや装備を変更せずに、武器/防具タイプを増やす
 * @author 神無月サスケ
 * @help
 * プラグインコマンドの書式:
 * ExtraEquipType arg0 arg1 arg2 arg3
 * arg0 は add か remove にします。addだと追加、removeだと削除です。
 * arg1 は 装備可能にするアクターのIDです。
 * arg2 は weapon か armor にします。
 * arg3 は タイプIDです。
 *
 * 例：
 * ExtraEquipType add 1 weapon 5
 * → アクターID1番のキャラが、武器タイプ5(ムチ)を装備可能になります。
 * ExtraEquipType add 3 armor 6
 * → アクターID3番のキャラが、防具タイプ6(大型盾)を装備可能になります。
 * ExtraEquipType remove 1 weapon 5
 * → アクターID1番のキャラが、さっき装備可能になったムチが装備出来なくなります。
 * ムチを装備していた場合、自動的にはずされます。
 * ExtraEquipType remove 3 armor 6
 * → アクターID3番のキャラが、さっき装備可能になった大型盾が装備できなくなります。
 * 大型盾を装備していた場合、自動的にはずされます。
 * 
 * 注意:
 * remove で装備出来なくなるのは、このプラグインで装備可能にしたものだけで、
 * データベースで装備可能になっているものは、removeしても装備不可にはなりません。
 */

(function() {
  //
  // process plugin commands
  //
  var _Game_Interpreter_pluginCommand =
   Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'ExtraEquipType') {
      var actor = $gameActors.actor(Number(args[1]));
      var typeId = Number(args[3]);
      if (!actor || typeId == 0){
        return;
      }
      if(args[0] === 'add'){
        if(args[2] === 'weapon'){
           actor.addWtypeId(typeId);
        } else if (args[2] === 'armor'){
           actor.addAtypeId(typeId);
        }
      } else if (args[0] === 'remove'){
        if(args[2] === 'weapon'){
           actor.removeWtypeId(typeId);
           actor.releaseUnequippableItems(false);
        } else if (args[2] === 'armor'){
           actor.removeAtypeId(typeId);
           actor.releaseUnequippableItems(false);
        }
      }
    }
  };

  //
  // initialize
  //
  var _Game_Actor_initialize = Game_Actor.prototype.initialize;
  Game_Actor.prototype.initialize = function(actorId) {
    _Game_Actor_initialize.call(this, actorId);
    this.initAddedWtypeIds();
    this.initAddedAtypeIds();
  };

  Game_Actor.prototype.initAddedWtypeIds = function() {
    this._addedWtypeIds = [];
  };

  Game_Actor.prototype.initAddedAtypeIds = function() {
    this._addedAtypeIds = [];
  };

  //
  // add W/AtypeId
  //
  Game_Actor.prototype.addWtypeId = function(wtypeId) {
    if(!this._addedWtypeIds) {
      this.initAddedWtypeIds();
    }
    this._addedWtypeIds[wtypeId] = true;
  };

  Game_Actor.prototype.addAtypeId = function(atypeId) {
    if(!this._addedAtypeIds){
      this.initAddedAtypeIds();
    }
    this._addedAtypeIds[atypeId] = true;
  };

  //
  // remove W/AtypeId
  //
  Game_Actor.prototype.removeWtypeId = function(wtypeId) {
    if(!this._addedWtypeIds) {
      this.initAddedWtypeIds();
    }
    this._addedWtypeIds[wtypeId] = false;
  };

  Game_Actor.prototype.removeAtypeId = function(atypeId) {
    if(!this._addedAtypeIds) {
      this.initAddedAtypeIds();
    }
    this._addedAtypeIds[atypeId] = false;
  };

  //
  // check W/AtypeId is added or not
  //
  Game_Actor.prototype.isAddedWtypeId = function(wtypeId){
    if(!this._addedWtypeIds) {
      return false;
    }
    return !!this._addedWtypeIds[wtypeId];
  };

  Game_Actor.prototype.isAddedAtypeId = function(atypeId){
    if(!this._addedAtypeIds) {
      return false;
    }
    return !!this._addedAtypeIds[atypeId];
  };

  //
  // check whether the actor can equip it.
  //
  var _Game_Actor_isEquipWtypeOk = Game_Actor.prototype.isEquipWtypeOk;
  Game_Actor.prototype.isEquipWtypeOk = function(wtypeId) {
    if(this.isAddedWtypeId(wtypeId)) {
      return true;
    }
    return _Game_Actor_isEquipWtypeOk.call(this, wtypeId);
  };

  var _Game_Actor_isEquipAtypeOk = Game_Actor.prototype.isEquipAtypeOk;
  Game_Actor.prototype.isEquipAtypeOk = function(atypeId) {
    if(this.isAddedAtypeId(atypeId)) {
      return true;
    }
    return _Game_Actor_isEquipAtypeOk.call(this, atypeId);
  };
})();
