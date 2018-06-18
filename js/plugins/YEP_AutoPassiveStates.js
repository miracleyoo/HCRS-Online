//=============================================================================
// Yanfly Engine Plugins - Auto Passive States
// YEP_AutoPassiveStates.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_AutoPassiveStates = true;

var Yanfly = Yanfly || {};
Yanfly.APS = Yanfly.APS || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 This plugin allows for some states to function as
 * passives for actors, enemies, skills, and equips.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Passive states are states that are automatically active. You can think of
 * them as an extension of traits but with more flexibility. They will always
 * be there as long as the actor or enemy has auto passive state notetags.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Actor, Class, Skills, Weapon, Armor, Enemy Notetags:
 *   <Passive State: x>
 *   <Passive State: x, x, x>
 *   This will allow the actor or enemy to have state x as a passive state.
 *   If placed inside a weapon or armor notebox, the user will have that
 *   passive state.
 *
 *   <Passive State: x to y>
 *   This will add the states x through y (in a sequence) for the actor or
 *   enemy to have as a passive state. If placed inside a weapon or armor
 *   notebox, the user will have that passive state.
 */
//=============================================================================

//=============================================================================
// DataManager
//=============================================================================

Yanfly.APS.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!Yanfly.APS.DataManager_isDatabaseLoaded.call(this)) return false;
		this.processAPSNotetags($dataActors);
		this.processAPSNotetags($dataClasses);
		this.processAPSNotetags($dataEnemies);
    this.processAPSNotetags($dataSkills);
		this.processAPSNotetags($dataWeapons);
		this.processAPSNotetags($dataArmors);
		return true;
};

DataManager.processAPSNotetags = function(group) {
  var note1 = /<(?:PASSIVE STATE):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note2 = /<(?:PASSIVE STATE):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.passiveStates = [];

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.passiveStates = obj.passiveStates.concat(array);
      } else if (line.match(note2)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
					parseInt(RegExp.$2));
        obj.passiveStates = obj.passiveStates.concat(range);
      }
		}
	}
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.APS.Game_BattlerBase_states = Game_BattlerBase.prototype.states;
Game_BattlerBase.prototype.states = function() {
    var array = Yanfly.APS.Game_BattlerBase_states.call(this);
    array = array.concat(this.passiveStates());
    this.sortPassiveStates(array.filter(Yanfly.Util.onlyUnique));
    return array;
};

Yanfly.APS.Game_BattlerBase_isStateAffected =
    Game_BattlerBase.prototype.isStateAffected;
Game_BattlerBase.prototype.isStateAffected = function(stateId) {
    if (this.isPassiveStateAffected(stateId)) return true;
    return Yanfly.APS.Game_BattlerBase_isStateAffected.call(this, stateId);
};

Game_BattlerBase.prototype.passiveStates = function() {
    var array = [];
    for (var i = 0; i < this.passiveStatesRaw().length; ++i) {
      var state = $dataStates[this.passiveStatesRaw()[i]];
      if (state) array.push(state);
    }
    return array;
};

Game_BattlerBase.prototype.passiveStatesRaw = function() {
    var array = [];
    return array.filter(Yanfly.Util.onlyUnique);
};

Game_BattlerBase.prototype.getPassiveStateData = function(obj) {
    if (!obj) return [];
    if (!obj.passiveStates) return [];
    var array = [];
    for (var i = 0; i < obj.passiveStates.length; ++i) {
      array.push(obj.passiveStates[i]);
    }
    return array;
};

Game_BattlerBase.prototype.sortPassiveStates = function(array) {
    array.sort(function(a, b) {
      var p1 = a.priority;
      var p2 = b.priority;
      if (p1 !== p2) return p2 - p1;
      return a - b;
    });
};

Game_BattlerBase.prototype.isPassiveStateAffected = function(stateId) {
    return this.passiveStatesRaw().contains(stateId);
};

//=============================================================================
// Game_Battler
//=============================================================================

Yanfly.APS.Game_Battler_isStateAddable = Game_Battler.prototype.isStateAddable;
Game_Battler.prototype.isStateAddable = function(stateId) {
		if (this.isPassiveStateAffected(stateId)) return false;
    return Yanfly.APS.Game_Battler_isStateAddable.call(this, stateId);
};

Yanfly.APS.Game_Battler_removeState = Game_Battler.prototype.removeState;
Game_Battler.prototype.removeState = function(stateId) {
		if (this.isPassiveStateAffected(stateId)) return;
    Yanfly.APS.Game_Battler_removeState.call(this, stateId);
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.passiveStatesRaw = function() {
    var array = Game_BattlerBase.prototype.passiveStatesRaw.call(this);
    array = array.concat(this.getPassiveStateData(this.actor()));
    array = array.concat(this.getPassiveStateData(this.currentClass()));
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      array = array.concat(this.getPassiveStateData(equip));
    }
    for (var i = 0; i < this._skills.length; ++i) {
      var skill = $dataSkills[this._skills[i]];
      array = array.concat(this.getPassiveStateData(skill));
    }
    return array;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.passiveStatesRaw = function() {
    var array = Game_BattlerBase.prototype.passiveStatesRaw.call(this);
    array = array.concat(this.getPassiveStateData(this.enemy()));
    for (var i = 0; i < this.skills().length; ++i) {
      var skill = this.skills()[i];
      array = array.concat(this.getPassiveStateData(skill));
    }
    return array;
};

if (!Game_Enemy.prototype.skills) {
		Game_Enemy.prototype.skills = function() {
			var skills = []
			for (var i = 0; i < this.enemy().actions.length; ++i) {
				var skill = $dataSkills[this.enemy().actions[i].skillId]
				if (skill) skills.push(skill);
			}
			return skills;
		}
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.getRange = function(n, m) {
    var result = [];
    for (var i = n; i <= m; ++i) result.push(i);
    return result;
};

Yanfly.Util.onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
};

//=============================================================================
// End of File
//=============================================================================
