//=============================================================================
// Yanfly Engine Plugins - Element Reflect
// YEP_ElementReflect.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_ElementReflect = true;

var Yanfly = Yanfly || {};
Yanfly.EleRef = Yanfly.EleRef || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 Adds rates at which elemental skills/items can be
 * reflected at.
 * @author Yanfly Engine Plugins
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Lets battlers reflect specific types of elemental skills back at the
 * opponent rather than all magic types.
 *
 * Note: This plugin will be updated more extensively later.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Actor, Class, Enemy, Weapon, Armor, and State Notetags
 *   <Element Reflect x: +y%>
 *   <Element Reflect x: -y%>
 *   Increases or decreases the rate to reflect element x by y%.
 */
//=============================================================================

//=============================================================================
// DataManager
//=============================================================================

Yanfly.EleRef.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!Yanfly.EleRef.DataManager_isDatabaseLoaded.call(this)) return false;
		DataManager.processEleRefNotetags1($dataActors);
    DataManager.processEleRefNotetags1($dataClasses);
    DataManager.processEleRefNotetags1($dataEnemies);
    DataManager.processEleRefNotetags1($dataWeapons);
    DataManager.processEleRefNotetags1($dataArmors);
    DataManager.processEleRefNotetags1($dataStates);
		return true;
};

DataManager.processEleRefNotetags1 = function(group) {
	var note1 = /<(?:ELEMENT REFLECT)[ ](\d+):[ ]([\+\-]\d+)([%％])>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.elementReflect = {};

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
        var elementId = parseInt(RegExp.$1);
        var rate = parseFloat(RegExp.$2 * 0.01);
        obj.elementReflect[elementId] = rate;
      }
		}
	}
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.calcElementReflectRate = function(item) {
    if (!item) return 0;
    var elementId = item.damage.elementId;
    if (elementId < 0) return 0;
    var rate = 0;
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (state && state.elementReflect[elementId]) {
        rate += state.elementReflect[elementId];
      }
    }
    return rate;
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.calcElementReflectRate = function(item) {
    if (!item) return 0;
    var elementId = item.damage.elementId;
    if (elementId < 0) return 0;
    var rate =
      Game_BattlerBase.prototype.calcElementReflectRate.call(this, item);
    if (this.actor().elementReflect[elementId]) {
      rate += this.actor().elementReflect[elementId];
    }
    if (this.currentClass().elementReflect[elementId]) {
      rate += this.currentClass().elementReflect[elementId];
    }
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (equip && equip.elementReflect[elementId]) {
        rate += equip.elementReflect[elementId];
      }
    }
    return rate;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.calcElementReflectRate = function(item) {
    if (!item) return 0;
    var elementId = item.damage.elementId;
    if (elementId < 0) return 0;
    var rate =
      Game_BattlerBase.prototype.calcElementReflectRate.call(this, item);
    if (this.enemy().elementReflect[elementId]) {
      rate += this.enemy().elementReflect[elementId];
    }
    return rate;
};

//=============================================================================
// Game_Action
//=============================================================================

Yanfly.EleRef.Game_Action_itemMrf = Game_Action.prototype.itemMrf;
Game_Action.prototype.itemMrf = function(target) {
    var rate = Yanfly.EleRef.Game_Action_itemMrf.call(this, target);
    rate += target.calcElementReflectRate(this.item());
    return rate;
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

//=============================================================================
// End of File
//=============================================================================
