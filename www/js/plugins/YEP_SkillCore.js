//=============================================================================
// Yanfly Engine Plugins - Skill Core
// YEP_SkillCore.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_SkillCore = true;

var Yanfly = Yanfly || {};
Yanfly.Skill = Yanfly.Skill || {};

//=============================================================================
/*:
 * @plugindesc v1.00 Skills are now given more functions and the ability to
 * require different types of costs.
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Cost Padding
 * @desc If a skill has multiple costs, this is the amount of pixels
 * used as padding in between the costs.
 * @default 4
 *
 * @param Command Alignment
 * @desc Adjusts the text alignment of the skill type window.
 * left     center     right
 * @default center
 *
 * @param ---HP Costs---
 * @default
 *
 * @param HP Format
 * @desc Adjusts the way HP cost appears in the skill list window.
 * %1 - Cost     %2 - MP
 * @default %1%2
 *
 * @param HP Font Size
 * @desc Adjusts the font size used to display HP.
 * Default: 28
 * @default 20
 *
 * @param HP Text Color
 * @desc Adjusts the text color used from the Window skin for HP.
 * Default: 21
 * @default 18
 *
 * @param HP Icon
 * @desc Choose what icon to use to represent HP costs.
 * Use 0 if you wish to not use an icon.
 * @default 162
 *
 * @param ---MP Costs---
 * @default
 *
 * @param MP Format
 * @desc Adjusts the way MP cost appears in the skill list window.
 * %1 - Cost     %2 - MP
 * @default %1%2
 *
 * @param MP Font Size
 * @desc Adjusts the font size used to display MP.
 * Default: 28
 * @default 20
 *
 * @param MP Text Color
 * @desc Adjusts the text color used from the Window skin for MP.
 * Default: 23
 * @default 23
 *
 * @param MP Icon
 * @desc Choose what icon to use to represent MP costs.
 * Use 0 if you wish to not use an icon.
 * @default 165
 *
 * @param ---TP Costs---
 * @default
 *
 * @param TP Format
 * @desc Adjusts the way TP cost appears in the skill list window.
 * %1 - Cost     %2 - TP
 * @default %1%2
 *
 * @param TP Font Size
 * @desc Adjusts the font size used to display TP.
 * Default: 28
 * @default 20
 *
 * @param TP Text Color
 * @desc Adjusts the text color used from the Window skin for TP.
 * Default: 29
 * @default 29
 *
 * @param TP Icon
 * @desc Choose what icon to use to represent TP costs.
 * Use 0 if you wish to not use an icon.
 * @default 164
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Skills in RPG's consist of three main components: Costs, Damage, and
 * Effects. Although not all components are required for a skill, they
 * certainly make up a good chunk of it. Damage will be handled by another
 * plugin, but this plugin will provide a core handling for skill costs and
 * skill effects.
 *
 * This plugin also includes the ability for battlers to swap their HP, MP,
 * and/or TP gauges for something different if it would fit the character
 * better (for example, some classes don't use MP and/or TP).
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * These notetags can adjust either skill costs or special skill effects.
 *
 * Skill Notetags:
 *   <HP Cost: x>
 *   Changes the skill to have x as its HP cost. RPG Maker MV's editor lacks
 *   HP cost functions so this would allow skills to use HP as their cost.
 *
 *   <HP Cost: x%>
 *   Changes the skill to cost a percentage of the character's MaxHP value.
 *
 *   <MP Cost: x>
 *   Changes the skill to have x as its MP cost.
 *   This helps bypass the database's hard limit of 9999.
 *
 *   <MP Cost: x%>
 *   Changes the skill to cost a percentage of the character's MaxMP value.
 *
 *   <TP Cost: x>
 *   Changes the skill to have x as its TP cost.
 *   This helps bypass the database's hard limit of 99.
 *
 *   <TP Cost: x%>
 *   Changes the skill to cost a percentage of the character's MaxTP value.
 *   Although the default MaxTP is 100, this tag will be useful for any
 *   plugins that will alter a character's MaxTP values.
 *
 * ============================================================================
 * Gauge Swapping
 * ============================================================================
 *
 * This plugin also lets you swap around the HP, MP, and TP Gauges to any order
 * you want assuming that all the plugins you use will keep the same order of
 * HP, MP, and TP and does not override the default gauge drawing process. If
 * you use any plugin extensions, they can be swaped in as well.
 *
 * Note: If you do not have 'Display TP in Battle' checked under the System tab
 * in the database, nothing will be shown for the third slot.
 *
 * Class Notetag:
 *   <Swap Gauge x: y>
 *   This will change gauge x (1, 2, or 3) to y. Replace y with 'HP', 'MP', or
 *   'TP' to have it display that gauge type in that gauge slot. If you wish
 *   for that slot to display nothing, insert 'Nothing' or 'Null' in place of
 *   y in the notetag.
 *
 * Weapon, Armor, and State Notetags:
 *   <Swap Gauge x: y>
 *   Actors with equipment or states  that contain these notetags or enemies
 *   with states that contain these notetags will display those swapped gauges
 *   in place of the default settings or settings defined by the Class or
 *   Enemy notetags.
 *
 *   Priority will go in the following order:
 *     Weapons, Armors, States, Class, Enemy
 *
 * ============================================================================
 * Lunatic Mode - Skill Costs
 * ============================================================================
 *
 * For users who want more control over skill costs and skill effects, there
 * exists notetags that allow you to apply code to the costs and/or effects of
 * a skill. For effects, this will also extend towards item control, as well.
 *
 *   <Custom HP Cost>       Example: <Custom HP Cost>
 *    code                            cost += $gameVariables.value(1);
 *    code                           </Custom HP Cost>
 *   </Custom HP Cost>
 *   This allows the skill to have a custom HP cost based off of code. For the
 *   piece of code, 'cost' is a variable already predefined with the HP Cost
 *   and the HP percentage cost.
 *
 *   <Custom MP Cost>       Example: <Custom MP Cost>
 *    code                            cost += $gameVariables.value(1);
 *    code                           </Custom MP Cost>
 *   </Custom MP Cost>
 *   This allows the skill to have a custom MP cost based off of code. For the
 *   piece of code, 'cost' is a variable already predefined with the MP Cost
 *   and the MP percentage cost.
 *
 *   <Custom TP Cost>       Example: <Custom TP Cost>
 *    code                            cost += $gameVariables.value(1);
 *    code                           </Custom TP Cost>
 *   </Custom TP Cost>
 *   This allows the skill to have a custom TP cost based off of code. For the
 *   piece of code, 'cost' is a variable already predefined with the TP Cost
 *   and the TP percentage cost.
 *
 * ============================================================================
 * Lunatic Mode - The Skill Phases
 * ============================================================================
 *
 * For this skill, multiple effects are applied and at different phases. The
 * various phases are as follows:
 *
 *    Before Effect Phase (influenced by this plugin)
 *    if skill successfully lands:
 *    - Pre-Damage Effect Phase (influenced by this plugin)
 *    - Damage Phase
 *    - Post-Damage Effect Phase (influenced by this plugin)
 *    - Item Trait Effects Phase
 *    After Effect Phase (influenced by this plugin)
 *
 * There's four phases which can be influenced by this plugin. Two of which do
 * not matter if the effect successfully lands or not, two of which do matter
 * if the skill does land.
 *
 * Skill and Item Notetags:
 *   <Before Eval>    <Pre-Damage Eval>    <Post-Damage Eval>    <After Eval>
 *    code             code                 code                  code
 *    code             code                 code                  code
 *   </Before Eval>   </Pre-Damage Eval>   </Post-Damage Eval>   </After Eval>
 *   If you wish to use custom effects for your skill, you can insert the
 *   respective notetags into the skill (or item) noteboxes and it will run the
 *   code that appears in between the tags. However, using any form of comments
 *   in this tag will block out code that follows.
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_SkillCore');
Yanfly.Param = Yanfly.Param || {};
Yanfly.Icon = Yanfly.Icon || {};

Yanfly.Param.SCCCostPadding = Number(Yanfly.Parameters['Cost Padding']);
Yanfly.Param.SCCTextAlign = String(Yanfly.Parameters['Command Alignment']);
Yanfly.Param.SCCTpFormat = String(Yanfly.Parameters['TP Format']);
Yanfly.Param.SCCTpFontSize = Number(Yanfly.Parameters['TP Font Size']);
Yanfly.Param.SCCTpTextColor = Number(Yanfly.Parameters['TP Text Color']);
Yanfly.Icon.Tp = Number(Yanfly.Parameters['TP Icon']);
Yanfly.Param.SCCMpFormat = String(Yanfly.Parameters['MP Format']);
Yanfly.Param.SCCMpFontSize = Number(Yanfly.Parameters['MP Font Size']);
Yanfly.Param.SCCMpTextColor = Number(Yanfly.Parameters['MP Text Color']);
Yanfly.Icon.Mp = Number(Yanfly.Parameters['MP Icon']);
Yanfly.Param.SCCHpFormat = String(Yanfly.Parameters['HP Format']);
Yanfly.Param.SCCHpFontSize = Number(Yanfly.Parameters['HP Font Size']);
Yanfly.Param.SCCHpTextColor = Number(Yanfly.Parameters['HP Text Color']);
Yanfly.Icon.Hp = Number(Yanfly.Parameters['HP Icon']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.Skill.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!Yanfly.Skill.DataManager_isDatabaseLoaded.call(this)) return false;
		this.processSkillNotetags($dataSkills);
    this.processObjectNotetags($dataSkills);
    this.processObjectNotetags($dataItems);
    this.processGSCNotetags1($dataClasses);
	  this.processGSCNotetags1($dataEnemies);
    this.processGSCNotetags2($dataWeapons);
    this.processGSCNotetags2($dataArmors);
    this.processGSCNotetags2($dataStates);
		return true;
};

DataManager.processSkillNotetags = function(group) {
	var note1 = /<(?:MP COST):[ ](\d+)>/i;
  var note2 = /<(?:MP COST):[ ](\d+)([%％])>/i;
  var note3 = /<(?:TP COST):[ ](\d+)>/i;
  var note4 = /<(?:TP COST):[ ](\d+)([%％])>/i;
  var note5 = /<(?:HP COST):[ ](\d+)>/i;
  var note6 = /<(?:HP COST):[ ](\d+)([%％])>/i;
  var noteMpEval1 = /<(?:MP COST EVAL|custom mp cost)>/i;
  var noteMpEval2 = /<\/(?:MP COST EVAL|custom mp cost)>/i;
  var noteTpEval1 = /<(?:TP COST EVAL|custom tp cost)>/i;
  var noteTpEval2 = /<\/(?:TP COST EVAL|custom tp cost)>/i;
  var noteHpEval1 = /<(?:HP COST EVAL|custom hp cost)>/i;
  var noteHpEval2 = /<\/(?:HP COST EVAL|custom hp cost)>/i;
  for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.hpCost = 0;
		obj.hpCostPer = 0.0;
		obj.mpCostPer = 0.0;
		obj.tpCostPer = 0.0;
    var evalMode = 'none';
    obj.hpCostEval = '';
    obj.mpCostEval = '';
    obj.tpCostEval = '';

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
				obj.mpCost = parseInt(RegExp.$1);
			} else if (line.match(note2)) {
				obj.mpCostPer = parseFloat(RegExp.$1 * 0.01);
			} else if (line.match(note3)) {
				obj.tpCost = parseInt(RegExp.$1);
			} else if (line.match(note4)) {
				obj.tpCostPer = parseFloat(RegExp.$1 * 0.01);
			} else if (line.match(note5)) {
				obj.hpCost = parseInt(RegExp.$1);
			} else if (line.match(note6)) {
				obj.hpCostPer = parseFloat(RegExp.$1 * 0.01);
			} else if (line.match(noteMpEval1)) {
        evalMode = 'mp';
      } else if (line.match(noteMpEval2)) {
        evalMode = 'none';
      } else if (line.match(noteTpEval1)) {
        evalMode = 'tp';
      } else if (line.match(noteTpEval2)) {
        evalMode = 'none';
      } else if (line.match(noteHpEval1)) {
        evalMode = 'hp';
      } else if (line.match(noteHpEval2)) {
        evalMode = 'none';
      } else if (evalMode === 'mp') {
        obj.mpCostEval = obj.mpCostEval + line + '\n';
      } else if (evalMode === 'tp') {
        obj.tpCostEval = obj.tpCostEval + line + '\n';
      } else if (evalMode === 'hp') {
        obj.hpCostEval = obj.hpCostEval + line + '\n';
      }
		}
	}
};

DataManager.processObjectNotetags = function(group) {
  var note1 = /<(?:BEFORE EVAL)>/i;
  var note2 = /<\/(?:BEFORE EVAL)>/i;
  var note3 = /<(?:PRE-DAMAGE EVAL)>/i;
  var note4 = /<\/(?:PRE-DAMAGE EVAL)>/i;
  var note5 = /<(?:POST-DAMAGE EVAL)>/i;
  var note6 = /<\/(?:POST-DAMAGE EVAL)>/i;
  var note7 = /<(?:AFTER EVAL)>/i;
  var note8 = /<\/(?:AFTER EVAL)>/i;
  for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    var customMode = 'none';
    obj.customBeforeEval = '';
    obj.customPreDamageEval = '';
    obj.customPostDamageEval = '';
    obj.customAfterEval = '';

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(note1)) {
        customMode = 'before';
			} else if (line.match(note2)) {
        customMode = 'none';
      } else if (line.match(note3)) {
        customMode = 'pre-damage';
			} else if (line.match(note4)) {
        customMode = 'none';
      } else if (line.match(note5)) {
        customMode = 'post-damage';
			} else if (line.match(note6)) {
        customMode = 'none';
      } else if (line.match(note7)) {
        customMode = 'after';
			} else if (line.match(note8)) {
        customMode = 'none';
      } else if (customMode === 'before') {
        obj.customBeforeEval = obj.customBeforeEval + line + '\n';
      } else if (customMode === 'pre-damage') {
        obj.customBeforeEval = obj.customPreDamageEval + line + '\n';
      } else if (customMode === 'post-damage') {
        obj.customBeforeEval = obj.customPostDamageEval + line + '\n';
      } else if (customMode === 'after') {
        obj.customBeforeEval = obj.customAfterEval + line + '\n';
      }
		}
	}
};

DataManager.processGSCNotetags1 = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.gauge1 = 'HP';
    obj.gauge2 = 'MP';
    obj.gauge3 = 'TP';

		obj.gaugeIcon1 = 0;
		obj.gaugeIcon2 = 0;
		obj.gaugeIcon3 = 0;

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<(?:SWAP GAUGE|gauge)[ ](\d+):[ ](.*)>/i)) {
        var gauge = parseInt(RegExp.$1);
        var text = String(RegExp.$2).toUpperCase();
        if (['HP', 'MP', 'TP', 'NOTHING', 'NULL'].contains(text)) {
          if (gauge === 1) obj.gauge1 = text;
          if (gauge === 2) obj.gauge2 = text;
          if (gauge === 3) obj.gauge3 = text;
        }
      }
		}
	}
};

DataManager.processGSCNotetags2 = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.gauge1 = 'UNDEFINED';
    obj.gauge2 = 'UNDEFINED';
    obj.gauge3 = 'UNDEFINED';

		obj.gaugeIcon1 = 'UNDEFINED';
		obj.gaugeIcon2 = 'UNDEFINED';
		obj.gaugeIcon3 = 'UNDEFINED';

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<(?:SWAP GAUGE|gauge)[ ](\d+):[ ](.*)>/i)) {
        var gauge = parseInt(RegExp.$1);
        var text = String(RegExp.$2).toUpperCase();
        if (['HP', 'MP', 'TP', 'NOTHING', 'NULL'].contains(text)) {
          if (gauge === 1) obj.gauge1 = text;
          if (gauge === 2) obj.gauge2 = text;
          if (gauge === 3) obj.gauge3 = text;
        }
      }
		}
	}
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Game_BattlerBase.prototype.skillHpCost = function(skill) {
	var cost = skill.hpCost;
  var item = skill;
  var a = this;
  var user = this;
  var subject = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
	cost += this.mhp * skill.hpCostPer;
  eval(skill.hpCostEval);
	return Math.max(0, Math.floor(cost));
};

Game_BattlerBase.prototype.skillMpCost = function(skill) {
	var cost = skill.mpCost;
  var item = skill;
  var a = this;
  var user = this;
  var subject = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
	cost += this.mmp * skill.mpCostPer;
  eval(skill.mpCostEval);
	return Math.max(0, Math.floor(cost * this.mcr));
};

Game_BattlerBase.prototype.skillTpCost = function(skill) {
	var cost = skill.tpCost;
  var item = skill;
  var a = this;
  var user = this;
  var subject = this;
  var s = $gameSwitches._data;
  var v = $gameVariables._data;
	cost += this.maxTp() * skill.tpCostPer;
  eval(skill.tpCostEval);
  return Math.max(0, Math.floor(cost));
};

Yanfly.Skill.Game_BattlerBase_canPaySkillCost =
		Game_BattlerBase.prototype.canPaySkillCost;
Game_BattlerBase.prototype.canPaySkillCost = function(skill) {
		if (!this.canPaySkillHpCost(skill)) return false;
    return Yanfly.Skill.Game_BattlerBase_canPaySkillCost.call(this, skill);
};

Game_BattlerBase.prototype.canPaySkillHpCost = function(skill) {
		return this._hp > this.skillHpCost(skill);
};

Yanfly.Skill.Game_BattlerBase_paySkillCost =
		Game_BattlerBase.prototype.paySkillCost
Game_BattlerBase.prototype.paySkillCost = function(skill) {
    Yanfly.Skill.Game_BattlerBase_paySkillCost.call(this, skill);
		this.paySkillHpCost(skill);
};

Game_BattlerBase.prototype.paySkillHpCost = function(skill) {
		this._hp -= this.skillHpCost(skill);
};

Game_BattlerBase.prototype.gauge1 = function() {
    return 'HP';
};

Game_BattlerBase.prototype.gauge2 = function() {
    return 'MP';
};

Game_BattlerBase.prototype.gauge3 = function() {
    return 'TP';
};

Game_BattlerBase.prototype.gaugeIcon1 = function() {
    return 0;
};

Game_BattlerBase.prototype.gaugeIcon2 = function() {
    return 0;
};

Game_BattlerBase.prototype.gaugeIcon3 = function() {
    return 0;
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.gauge1 = function() {
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
      if (equip.gauge1 === 'UNDEFINED') continue;
      return equip.gauge1;
    }
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.gauge1 === 'UNDEFINED') continue;
      return state.gauge1;
    }
    return this.currentClass().gauge1;
};

Game_Actor.prototype.gauge2 = function() {
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
      if (equip.gauge2 === 'UNDEFINED') continue;
      return equip.gauge2;
    }
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.gauge2 === 'UNDEFINED') continue;
      return state.gauge2;
    }
    return this.currentClass().gauge2;
};

Game_Actor.prototype.gauge3 = function() {
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
      if (equip.gauge3 === 'UNDEFINED') continue;
      return equip.gauge3;
    }
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.gauge3 === 'UNDEFINED') continue;
      return state.gauge3;
    }
    return this.currentClass().gauge3;
};

Game_Actor.prototype.gaugeIcon1 = function() {
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
      if (equip.gaugeIcon1 === 'UNDEFINED') continue;
      return equip.gaugeIcon1;
    }
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.gaugeIcon1 === 'UNDEFINED') continue;
      return state.gaugeIcon1;
    }
    return this.currentClass().gaugeIcon1;
};

Game_Actor.prototype.gaugeIcon2 = function() {
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
      if (equip.gaugeIcon2 === 'UNDEFINED') continue;
      return equip.gaugeIcon2;
    }
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.gaugeIcon2 === 'UNDEFINED') continue;
      return state.gaugeIcon2;
    }
    return this.currentClass().gaugeIcon2;
};

Game_Actor.prototype.gaugeIcon3 = function() {
    for (var i = 0; i < this.equips().length; ++i) {
      var equip = this.equips()[i];
      if (!equip) continue;
      if (equip.gaugeIcon3 === 'UNDEFINED') continue;
      return equip.gaugeIcon3;
    }
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.gaugeIcon3 === 'UNDEFINED') continue;
      return state.gaugeIcon3;
    }
    return this.currentClass().gaugeIcon3;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.gauge1 = function() {
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.gauge1 === 'UNDEFINED') continue;
      return state.gauge1;
    }
    return this.enemy().gauge1;
};

Game_Enemy.prototype.gauge2 = function() {
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.gauge2 === 'UNDEFINED') continue;
      return state.gauge2;
    }
    return this.enemy().gauge2;
};

Game_Enemy.prototype.gauge3 = function() {
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.gauge1 === 'UNDEFINED') continue;
      return state.gauge1;
    }
    return this.enemy().gauge3;
};

Game_Enemy.prototype.gaugeIcon1 = function() {
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.gaugeIcon1 === 'UNDEFINED') continue;
      return state.gaugeIcon1;
    }
    return this.enemy().gaugeIcon1;
};

Game_Enemy.prototype.gaugeIcon2 = function() {
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.gaugeIcon2 === 'UNDEFINED') continue;
      return state.gaugeIcon2;
    }
    return this.enemy().gaugeIcon2;
};

Game_Enemy.prototype.gaugeIcon3 = function() {
    for (var i = 0; i < this.states().length; ++i) {
      var state = this.states()[i];
      if (!state) continue;
      if (state.gaugeIcon3 === 'UNDEFINED') continue;
      return state.gaugeIcon3;
    }
    return this.enemy().gaugeIcon3;
};

//=============================================================================
// Game_Action
//=============================================================================

Yanfly.Skill.Game_Action_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
    this.applyBeforeEffect(target);
    this.applyBeforeEval(target);
    Yanfly.Skill.Game_Action_apply.call(this, target);
    this.applyAfterEffect(target);
    this.applyAfterEval(target);
};

Game_Action.prototype.applyBeforeEffect = function(target) {
};

Game_Action.prototype.applyBeforeEval = function(target) {
    var item = this.item();
    var a = this.subject();
    var b = target;
    var user = this.subject();
    var subject = this.subject();
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    eval(item.customBeforeEval);
};

Game_Action.prototype.applyAfterEffect = function(target) {
};

Game_Action.prototype.applyAfterEval = function(target) {
    var item = this.item();
    var a = this.subject();
    var b = target;
    var user = this.subject();
    var subject = this.subject();
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    eval(item.customAfterEval);
};

Yanfly.Skill.Game_Action_executeDamage = Game_Action.prototype.executeDamage;
Game_Action.prototype.executeDamage = function(target, value) {
    this.applyPreDamageEffect(target, value);
    this.applyPreDamageEval(target, value);
    Yanfly.Skill.Game_Action_executeDamage.call(this, target, value);
    this.applyPostDamageEffect(target, value);
    this.applyPostDamageEval(target, value);
};

Game_Action.prototype.applyPreDamageEffect = function(target, value) {
};

Game_Action.prototype.applyPreDamageEval = function(target, value) {
    var item = this.item();
    var a = this.subject();
    var b = target;
    var user = this.subject();
    var subject = this.subject();
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    eval(item.customPreDamageEval);
};

Game_Action.prototype.applyPostDamageEffect = function(target, value) {
};

Game_Action.prototype.applyPostDamageEval = function(target, value) {
    var item = this.item();
    var a = this.subject();
    var b = target;
    var user = this.subject();
    var subject = this.subject();
    var s = $gameSwitches._data;
    var v = $gameVariables._data;
    eval(item.customPostDamageEval);
};

//=============================================================================
// Window_Base
//=============================================================================

Yanfly.Skill.Window_Base_drawActorHp = Window_Base.prototype.drawActorHp;
Window_Base.prototype.drawActorHp = function(actor, x, y, width) {
    if (actor.gauge1() === 'HP') {
      Yanfly.Skill.Window_Base_drawActorHp.call(this, actor, x, y, width);
    } else if (actor.gauge1() === 'MP') {
      Yanfly.Skill.Window_Base_drawActorMp.call(this, actor, x, y, width);
    } else if (actor.gauge1() === 'TP') {
      Yanfly.Skill.Window_Base_drawActorTp.call(this, actor, x, y, width);
    }
};

Yanfly.Skill.Window_Base_drawActorMp = Window_Base.prototype.drawActorMp;
Window_Base.prototype.drawActorMp = function(actor, x, y, width) {
    if (actor.gauge2() === 'HP') {
      Yanfly.Skill.Window_Base_drawActorHp.call(this, actor, x, y, width);
    } else if (actor.gauge2() === 'MP') {
      Yanfly.Skill.Window_Base_drawActorMp.call(this, actor, x, y, width);
    } else if (actor.gauge2() === 'TP') {
      Yanfly.Skill.Window_Base_drawActorTp.call(this, actor, x, y, width);
    }
};

Yanfly.Skill.Window_Base_drawActorTp = Window_Base.prototype.drawActorTp;
Window_Base.prototype.drawActorTp = function(actor, x, y, width) {
    if (actor.gauge3() === 'HP') {
      Yanfly.Skill.Window_Base_drawActorHp.call(this, actor, x, y, width);
    } else if (actor.gauge3() === 'MP') {
      Yanfly.Skill.Window_Base_drawActorMp.call(this, actor, x, y, width);
    } else if (actor.gauge3() === 'TP') {
      Yanfly.Skill.Window_Base_drawActorTp.call(this, actor, x, y, width);
    }
};

//=============================================================================
// Window_SkillList
//=============================================================================

Window_SkillType.prototype.itemTextAlign = function() {
    return Yanfly.Param.SCCTextAlign;
};

//=============================================================================
// Window_SkillList
//=============================================================================

Window_SkillList.prototype.drawSkillCost = function(skill, wx, wy, width) {
    var dw = width;
		dw = this.drawTpCost(skill, wx, wy, dw);
		dw = this.drawMpCost(skill, wx, wy, dw);
		dw = this.drawHpCost(skill, wx, wy, dw);
		dw = this.drawOtherCost(skill, wx, wy, dw);
};

Window_SkillList.prototype.drawTpCost = function(skill, wx, wy, dw) {
		if (this._actor.skillTpCost(skill) <= 0) { return dw;	}
		if (Yanfly.Icon.Tp > 0) {
			var iw = wx + dw - Window_Base._iconWidth;
			this.drawIcon(Yanfly.Icon.Tp, iw, wy + 2);
			dw -= Window_Base._iconWidth + 2;
		}
		this.changeTextColor(this.textColor(Yanfly.Param.SCCTpTextColor));
		var fmt = Yanfly.Param.SCCTpFormat;
		var text = fmt.format(Yanfly.Util.toGroup(this._actor.skillTpCost(skill)),
			TextManager.tpA);
		this.contents.fontSize = Yanfly.Param.SCCTpFontSize;
		this.drawText(text, wx, wy, dw, 'right');
		this.resetFontSettings();
		return dw - this.textWidth(text) - Yanfly.Param.SCCCostPadding;
};

Window_SkillList.prototype.drawMpCost = function(skill, wx, wy, dw) {
		if (this._actor.skillMpCost(skill) <= 0) { return dw;	}
		if (Yanfly.Icon.Mp > 0) {
			var iw = wx + dw - Window_Base._iconWidth;
			this.drawIcon(Yanfly.Icon.Mp, iw, wy + 2);
			dw -= Window_Base._iconWidth + 2;
		}
		this.changeTextColor(this.textColor(Yanfly.Param.SCCMpTextColor));
		var fmt = Yanfly.Param.SCCMpFormat;
		var text = fmt.format(Yanfly.Util.toGroup(this._actor.skillMpCost(skill)),
			TextManager.mpA);
		this.contents.fontSize = Yanfly.Param.SCCMpFontSize;
		this.drawText(text, wx, wy, dw, 'right');
		this.resetFontSettings();
		return dw - this.textWidth(text) - Yanfly.Param.SCCCostPadding;
};

Window_SkillList.prototype.drawHpCost = function(skill, wx, wy, dw) {
		if (this._actor.skillHpCost(skill) <= 0) { return dw;	}
		if (Yanfly.Icon.Hp > 0) {
			var iw = wx + dw - Window_Base._iconWidth;
			this.drawIcon(Yanfly.Icon.Hp, iw, wy + 2);
			dw -= Window_Base._iconWidth + 2;
		}
		this.changeTextColor(this.textColor(Yanfly.Param.SCCHpTextColor));
		var fmt = Yanfly.Param.SCCHpFormat;
		var text = fmt.format(Yanfly.Util.toGroup(this._actor.skillHpCost(skill)),
			TextManager.hpA);
		this.contents.fontSize = Yanfly.Param.SCCHpFontSize;
		this.drawText(text, wx, wy, dw, 'right');
		this.resetFontSettings();
		return dw - this.textWidth(text) - Yanfly.Param.SCCCostPadding;
};

Window_SkillList.prototype.drawOtherCost = function(skill, wx, wy, dw) {
		return dw;
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

if (!Yanfly.Util.toGroup) {
		Yanfly.Util.toGroup = function(inVal) {
				return inVal;
		}
};

//=============================================================================
// End of File
//=============================================================================
