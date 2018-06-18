//=============================================================================
// Yanfly Engine Plugins - Element Absorb
// YEP_ElementAbsorb.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_ElementAbsorb = true;

var Yanfly = Yanfly || {};
Yanfly.EleAbs = Yanfly.EleAbs || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 Adds the ability to absorb elemental damage!
 * @author Yanfly Engine Plugins
 *
 * @param Multiple Priority
 * @desc If there are multiple elements involved, absorbing the
 * element will take priority. NO - false     YES - true
 * @default true
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin reenables the ability for actors, classes, enemies, weapons,
 * armors, and states to gain elemental absorbing as a gameplay mechanic.
 *
 * Note: This plugin will be updated more extensively later.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Actor, Class, Enemy, Weapon, Armor, and State Notetags:
 *   <Element Absorb: x>
 *   <Element Absorb: x, x, x>
 *   Causes element x to be absorbed and heals the battler.
 *
 *   <Element Absorb: x to y>
 *   Causes elements x through y to be absorbed and heal the battler.
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_ElementAbsorb');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.EleAbsMultiPri = String(Yanfly.Parameters['Multiple Priority']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.EleAbs.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!Yanfly.EleAbs.DataManager_isDatabaseLoaded.call(this)) return false;
		DataManager.processEleAbsNotetags1($dataActors);
    DataManager.processEleAbsNotetags1($dataClasses);
    DataManager.processEleAbsNotetags1($dataEnemies);
    DataManager.processEleAbsNotetags1($dataWeapons);
    DataManager.processEleAbsNotetags1($dataArmors);
    DataManager.processEleAbsNotetags1($dataStates);
		return true;
};

DataManager.processEleAbsNotetags1 = function(group) {
	var note1 = /<(?:ELEMENT ABSORB):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
  var note2 = /<(?:ELEMENT ABSORB):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.elementAbsorb = [];

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.elementAbsorb = obj.elementAbsorb.concat(array);
      } else if (line.match(note2)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
					parseInt(RegExp.$2));
        obj.elementAbsorb = obj.elementAbsorb.concat(range);
      }
		}
	}
};

//=============================================================================
// Main Code
//=============================================================================

Yanfly.EleAbs.Game_BtlrBase_elementRate =
    Game_BattlerBase.prototype.elementRate;
Game_BattlerBase.prototype.elementRate = function(elementId) {
    var result = Yanfly.EleAbs.Game_BtlrBase_elementRate.call(this, elementId);
    if (this.isAbsorbElement(elementId)) {
      result = Math.min(result - 2.0, -0.01);
    }
    return result;
};

Game_BattlerBase.prototype.isAbsorbElement = function(elementId) {
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (state && state.elementAbsorb.contains(elementId)) return true;
    }
    return false;
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.isAbsorbElement = function(elementId) {
    if (this.actor().elementAbsorb.contains(elementId)) return true;
    if (this.currentClass().elementAbsorb.contains(elementId)) return true;
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (equip && equip.elementAbsorb.contains(elementId)) return true;
    }
    return Game_BattlerBase.prototype.isAbsorbElement.call(this, elementId);
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.isAbsorbElement = function(elementId) {
    if (this.enemy().elementAbsorb.contains(elementId)) return true;
    return Game_BattlerBase.prototype.isAbsorbElement.call(this, elementId);
};

//=============================================================================
// Game_Action
//=============================================================================

Yanfly.EleAbs.Game_Action_elementsMaxRate =
    Game_Action.prototype.elementsMaxRate;
Game_Action.prototype.elementsMaxRate = function(target, elements) {
    var rate =
      Yanfly.EleAbs.Game_Action_elementsMaxRate.call(this, target, elements);
    if (eval(Yanfly.Param.EleAbsMultiPri)) {
      for (var i = 0; i < elements.length; ++i) {
        var elementId = elements[i];
        if (target.isAbsorbElement(elementId)) {
          rate = Math.min(target.elementRate(elementId), rate);
        }
      }
    }
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
