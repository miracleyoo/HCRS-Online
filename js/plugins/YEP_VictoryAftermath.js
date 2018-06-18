//=============================================================================
// Yanfly Engine Plugins - Victory Aftermath
// YEP_VictoryAftermath.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_VictoryAftermath = true;

var Yanfly = Yanfly || {};
Yanfly.VA = Yanfly.VA || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 Display an informative window after a battle is over
 * instead of message box text stating what the party earned.
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Victory Order
 * @desc This is the order the victory sequence will play out.
 * Separate each part with a space.
 * @default exp custom drops
 *
 * @param ---BGM---
 * @default
 *
 * @param Victory BGM
 * @desc This will be the BGM used when the battle is over.
 * @default Ship3
 *
 * @param BGM Volume
 * @desc This will be the volume of the BGM played.
 * @default 90
 *
 * @param BGM Pitch
 * @desc This will be the pitch of the BGM played.
 * @default 100
 *
 * @param BGM Pan
 * @desc This will be the pan of the BGM played.
 * @default 0
 *
 * @param ---Battle Results---
 * @default
 *
 * @param Cheer Wait
 * @desc This will be how many frames the actors will cheer for
 * before the Victory Aftermath windows appear.
 * @default 90
 *
 * @param Battle Results Text
 * @desc This is the text used for the battle results text.
 * @default Battle Results
 *
 * @param Battle Drops Text
 * @desc This is the text used for the drops gained in battle.
 * @default Battle Spoils
 *
 * @param ---EXP Window---
 * @default
 *
 * @param Level Up Text
 * @desc The text to be used when leveling up.
 * @default LEVEL UP!
 *
 * @param Max Level Text
 * @desc The text to be used when the actor is Max Level.
 * @default MAX LEVEL
 *
 * @param Gained EXP Text
 * @desc The text to label how much EXP was gained in battle.
 * @default Gained EXP
 *
 * @param Gained EXP Format
 * @desc The text to display how much EXP was gained in battle.
 * @default +%1
 *
 * @param EXP Gauge Color 1
 * @desc The skin color used in EXP Gauge Color 1 shown in the
 * Victory Aftermath Window.
 * @default 30
 *
 * @param EXP Gauge Color 2
 * @desc The skin color used in EXP Gauge Color 2 shown in the
 * Victory Aftermath Window.
 * @default 31
 *
 * @param Level Gauge Color 1
 * @desc The skin color used for the EXP Gauge Color 1 if the actor
 * has leveled up.
 * @default 14
 *
 * @param Level Gauge Color 2
 * @desc The skin color used for the EXP Gauge Color 2 if the actor
 * has leveled up.
 * @default 6
 *
 * @param Gauge Ticks
 * @desc This is how many ticks will occur before the gained EXP
 * gauge is full. Each tick is 4 frames.
 * @default 15
 *
 * @param Tick SE
 * @desc This will be the sound used while the EXP gauge fills up.
 * @default Absorb2
 *
 * @param Tick Volume
 * @desc This will be the volume of the BGM played.
 * @default 90
 *
 * @param Tick Pitch
 * @desc This will be the pitch of the BGM played.
 * @default 150
 *
 * @param Tick Pan
 * @desc This will be the pan of the BGM played.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin swaps out the victory messages from the default battle system in
 * favor of more informative windows to display. Adjust the parameters to
 * change the settings to fit your game.
 *
 * ============================================================================
 * Victory Aftermath
 * ============================================================================
 *
 * In the parameters, there's a 'Victory Order' parameter. This parameter lets
 * you choose the order of the steps in the Victory Aftermath.
 *
 * The default order is as follows:
 *           exp         Displays the EXP window.
 *           custom      Displays any custom plugin extensions.
 *           drops       Displays the drops window.
 *
 * If you switch the order of these steps, add steps, or remove steps from the
 * 'Victory Order' plugin, the Victory Aftermath will correspond to any changes
 * you have made.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * If you wish to alter the Victory Aftermath sequence a bit, you can use the
 * following Plugin Commands.
 *
 * Plugin Commands:
 *   DisableVictoryAftermath   - Disables the Victory Aftermath sequence and
 *                               bypasses the Victory Aftermath music, too.
 *   EnableVictoryAftermath    - Enables the Victory Aftermath sequence if
 *                               it has been previously disabled.
 *   DisableVictoryMusic       - Disables the Victory Aftermath music to just
 *                               continue playing whatever was playing.
 *   EnableVictoryMusic        - Enables the Victory Aftermath music if it has
 *                               been previously disabled.
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_VictoryAftermath');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.VAOrder = String(Yanfly.Parameters['Victory Order']);
Yanfly.Param.VACheerWait = Number(Yanfly.Parameters['Cheer Wait']);
Yanfly.Param.VABgmName = String(Yanfly.Parameters['Victory BGM']);
Yanfly.Param.VABgmVol = Number(Yanfly.Parameters['BGM Volume']);
Yanfly.Param.VABgmPitch = Number(Yanfly.Parameters['BGM Pitch']);
Yanfly.Param.VABgmPan = Number(Yanfly.Parameters['BGM Pan']);
Yanfly.Param.VATickName = String(Yanfly.Parameters['Tick SE']);
Yanfly.Param.VATickVol = Number(Yanfly.Parameters['Tick Volume']);
Yanfly.Param.VATickPitch = Number(Yanfly.Parameters['Tick Pitch']);
Yanfly.Param.VATickPan = Number(Yanfly.Parameters['Tick Pan']);
Yanfly.Param.VAGaugeTicks = Number(Yanfly.Parameters['Gauge Ticks']);
Yanfly.Param.ColorExp1 = Number(Yanfly.Parameters['EXP Gauge Color 1']);
Yanfly.Param.ColorExp2 = Number(Yanfly.Parameters['EXP Gauge Color 2']);
Yanfly.Param.ColorLv1 = Number(Yanfly.Parameters['Level Gauge Color 1']);
Yanfly.Param.ColorLv2 = Number(Yanfly.Parameters['Level Gauge Color 2']);
Yanfly.Param.VALevelUp = String(Yanfly.Parameters['Level Up Text']);
Yanfly.Param.VAMaxLv = String(Yanfly.Parameters['Max Level Text']);
Yanfly.Param.VAGainedExp = String(Yanfly.Parameters['Gained EXP Text']);
Yanfly.Param.VABattleResults = String(Yanfly.Parameters['Battle Results Text']);
Yanfly.Param.VAGainedExpfmt = String(Yanfly.Parameters['Gained EXP Format']);
Yanfly.Param.VABattleDrops = String(Yanfly.Parameters['Battle Drops Text']);

//=============================================================================
// BattleManager
//=============================================================================

BattleManager.processVictory = function() {
    $gameParty.performVictory();
    if (this.isVictoryPhase()) return;
    $gameParty.removeBattleStates();
    this._victoryPhase = true;
    if ($gameSystem.skipVictoryAftermath()) {
      this.processSkipVictory();
    } else {
      this.processNormalVictory();
    }
};

BattleManager.isVictoryPhase = function() {
    return this._victoryPhase;
};

BattleManager.isFinishedVictoryCheer = function() {
    return ++this._victoryCheerWait >= Yanfly.Param.VACheerWait;
};

BattleManager.processSkipVictory = function() {
    this.makeRewards();
    this.gainRewards();
    this.replayBgmAndBgs();
    this.endBattle(0);
};

BattleManager.processNormalVictory = function() {
    if (!$gameSystem.skipVictoryMusic()) this.playVictoryMe();
    this.makeRewards();
    this.startVictoryPhase();
};

Yanfly.VA.BattleManager_playVictoryMe = BattleManager.playVictoryMe;
BattleManager.playVictoryMe = function() {
    Yanfly.VA.BattleManager_playVictoryMe.call(this);
    this.playVictoryBGM();
};

BattleManager.playVictoryBGM = function() {
    var victoryBgm = {
      name:   Yanfly.Param.VABgmName,
      volume: Yanfly.Param.VABgmVol,
      pitch:  Yanfly.Param.VABgmPitch,
      pan:    Yanfly.Param.VABgmPan
    };
    AudioManager.playBgm(victoryBgm);
};

BattleManager.startVictoryPhase = function() {
    this._victoryCheerWait = 0;
    this._victoryStep = 0;
    this.prepareVictoryInfo();
};

BattleManager.prepareVictoryInfo = function() {
    $gameParty.battleMembers().forEach(function(actor) {
        ImageManager.loadFace(actor.faceName());
        actor._preVictoryExp = actor.currentExp();
        actor._preVictoryLv = actor._level;
    }, this);
    this.gainRewards();
    $gameParty.battleMembers().forEach(function(actor) {
        actor._expGained = actor.currentExp() - actor._preVictoryExp;
        actor._postVictoryLv = actor._level;
    }, this);
};

BattleManager.processVictoryFinish = function() {
    $gameParty.clearVictoryData();
    this.endBattle(0);
    this.replayBgmAndBgs();
    this._victoryPhase = false;
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.VA.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.VA.Game_System_initialize.call(this);
    this._skipVictoryAftermath = false;
    this._skipVictoryMusic = false;
};

Game_System.prototype.skipVictoryAftermath = function() {
    return this._skipVictoryAftermath;
};

Game_System.prototype.skipVictoryMusic = function() {
    return this._skipVictoryMusic;
};

//=============================================================================
// Game_Actor
//=============================================================================

Yanfly.VA.Game_Actor_shouldDisplayLevelUp =
    Game_Actor.prototype.shouldDisplayLevelUp;
Game_Actor.prototype.shouldDisplayLevelUp = function() {
    if ($gameParty.inBattle()) return false;
    return Yanfly.VA.Game_Actor_shouldDisplayLevelUp.call(this);
};

Game_Actor.prototype.clearVictoryData = function() {
    this._preVictoryExp = undefined;
    this._preVictoryLv = undefined;
    this._expGained = undefined;
    this._postVictoryLv = undefined;
};

//=============================================================================
// Game_Party
//=============================================================================

Game_Party.prototype.clearVictoryData = function() {
    for (var i = 0; i < this.members().length; ++i) {
      var actor = this.members()[i];
      if (!actor) continue;
      actor.clearVictoryData();
    }
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.VA.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.VA.Game_Interpreter_pluginCommand.call(this, command, args)
    if (command === 'DisableVictoryAftermath') {
      $gameSystem._skipVictoryAftermath = true;
    }
    if (command === 'EnableVictoryAftermath') {
      $gameSystem._skipVictoryAftermath = false;
    }
    if (command === 'DisableVictoryMusic') {
      $gameSystem._skipVictoryMusic = true;
    }
    if (command === 'EnableVictoryMusic') {
      $gameSystem._skipVictoryMusic = false;
    }
};

Game_Interpreter.prototype.gotoSceneParty = function() {
    if (!$gameParty.inBattle()) SceneManager.push(Scene_Party);
    return true;
};

Game_Interpreter.prototype.lockActor = function(args, value) {
    for (i = 0; i < args.length; i++) {
      var actorId = Number(args[i]);
      if ($gameActors.actor(actorId)) {
        $gameActors.actor(actorId)._locked = value;
      }
    }
};

Game_Interpreter.prototype.requireActor = function(args, value) {
    for (i = 0; i < args.length; i++) {
      var actorId = Number(args[i]);
      if ($gameActors.actor(actorId)) {
        $gameActors.actor(actorId)._required = value;
      }
    }
};

//=============================================================================
// Window_VictoryTitle
//=============================================================================

function Window_VictoryTitle() {
    this.initialize.apply(this, arguments);
}

Window_VictoryTitle.prototype = Object.create(Window_Base.prototype);
Window_VictoryTitle.prototype.constructor = Window_VictoryTitle;

Window_VictoryTitle.prototype.initialize = function() {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
    this.refresh(Yanfly.Param.VABattleResults);
    this.openness = 0;
};

Window_VictoryTitle.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};

Window_VictoryTitle.prototype.windowHeight = function() {
    return this.fittingHeight(1);
};

Window_VictoryTitle.prototype.refresh = function(text) {
    this.contents.clear();
    this.drawText(text, 0, 0, this.contents.width, 'center');
};

//=============================================================================
// Window_VictoryExp
//=============================================================================

function Window_VictoryExp() {
    this.initialize.apply(this, arguments);
}

Window_VictoryExp.prototype = Object.create(Window_Selectable.prototype);
Window_VictoryExp.prototype.constructor = Window_VictoryExp;

Window_VictoryExp.prototype.initialize = function() {
    var wy = this.fittingHeight(1);
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, 0, wy, width, height);
    this.defineTickSound();
    this.refresh();
    AudioManager.playSe(this._tickSound);
    this._tick = 0;
    this.openness = 0;
};

Window_VictoryExp.prototype.windowWidth = function() {
    return Graphics.boxWidth;
};

Window_VictoryExp.prototype.windowHeight = function() {
    return Graphics.boxHeight - this.fittingHeight(1);
};

Window_VictoryExp.prototype.maxItems = function() {
    return $gameParty.maxBattleMembers();
};

Window_VictoryExp.prototype.itemHeight = function() {
    var clientHeight = this.height - this.padding * 2;
    return Math.floor(clientHeight / this.maxItems());
};


Window_VictoryExp.prototype.defineTickSound = function() {
    this._tickSound = {
      name:   Yanfly.Param.VATickName,
      volume: Yanfly.Param.VATickVol,
      pitch:  Yanfly.Param.VATickPitch,
      pan:    Yanfly.Param.VATickPan
    };
};

Window_VictoryExp.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
    if (this.openness >= 255) this.updateTicks();
};

Window_VictoryExp.prototype.updateTicks = function() {
    if (this._tick >= Yanfly.Param.VAGaugeTicks) return;
    if (Graphics.frameCount % 4 !== 0) return;
    if (Input.isPressed('ok') || TouchInput.isPressed()) {
      this._tick = Yanfly.Param.VAGaugeTicks;
    } else {
      this._tick += 1;
    }
    this.drawAllGauges();
};

Window_VictoryExp.prototype.drawAllGauges = function() {
    var topIndex = this.topIndex();
    for (var i = 0; i < this.maxPageItems(); i++) {
      var index = topIndex + i;
      if (index < this.maxItems()) this.drawItemGauge(index);
    }
};

Window_VictoryExp.prototype.drawItem = function(index) {
    var actor = $gameParty.battleMembers()[index];
    if (!actor) return;
    this.drawActorProfile(actor, index);
};

Window_VictoryExp.prototype.drawActorProfile = function(actor, index) {
    var rect = this.itemRect(index);
    var fw = Window_Base._faceWidth;
    this.drawActorFace(actor, rect.x + 1, rect.y + 1, fw, rect.height - 2);
};

Window_VictoryExp.prototype.drawItemGauge = function(index) {
    var actor = $gameParty.battleMembers()[index];
    if (!actor) return;
    this.drawActorGauge(actor, index);
};

Window_VictoryExp.prototype.gaugeRect = function(index) {
    var rect = this.itemRect(index);
    var fw = Window_Base._faceWidth;
    rect.x += fw + this.standardPadding() * 2;
    rect.width -= fw * 2 + this.standardPadding() * 4;
    return rect;
};

Window_VictoryExp.prototype.clearGaugeRect = function(index) {
    var rect = this.gaugeRect(index);
    this.contents.clearRect(rect.x, rect.y, rect.width, rect.height);
};

Window_VictoryExp.prototype.drawActorGauge = function(actor, index) {
    this.clearGaugeRect(index);
    var rect = this.gaugeRect(index);
    this.changeTextColor(this.normalColor());
    this.drawActorName(actor, rect.x + 2, rect.y);
    this.drawLevel(actor, rect);
    this.drawExpGauge(actor, rect);
    this.drawExpValues(actor, rect);
    this.drawExpGained(actor, rect);
};

Window_VictoryExp.prototype.drawLevel = function(actor, rect) {
    if (this.actorExpRate(actor) >= 1.0) {
      var text = Yanfly.Util.toGroup(actor._postVictoryLv);
    } else {
      var text = Yanfly.Util.toGroup(actor._preVictoryLv);
    }
    this.drawText(text, rect.x + 2, rect.y, rect.width - 4, 'right');
    var ww = rect.width - 4 - this.textWidth('0' +
      Yanfly.Util.toGroup(actor.maxLevel()));
    this.changeTextColor(this.systemColor());
    this.drawText(TextManager.levelA, rect.x + 2, rect.y, ww, 'right');
};

Window_VictoryExp.prototype.actorExpRate = function(actor) {
    var actorLv = actor._preVictoryLv;
    if (actorLv === actor.maxLevel()) return 1.0;
    var bonusExp = 1.0 * actor._expGained * this._tick /
      Yanfly.Param.VAGaugeTicks;
    var nowExp = actor._preVictoryExp - actor.expForLevel(actorLv) + bonusExp;
    var nextExp = actor.expForLevel(actorLv + 1) - actor.expForLevel(actorLv);
    return (1.0 * nowExp / nextExp).clamp(0.0, 1.0);
};

Window_VictoryExp.prototype.drawExpGauge = function(actor, rect) {
    var rate = this.actorExpRate(actor);
    if (rate >= 1.0) {
      var color1 = this.textColor(Yanfly.Param.ColorLv1);
      var color2 = this.textColor(Yanfly.Param.ColorLv2);
    } else {
      var color1 = this.textColor(Yanfly.Param.ColorExp1);
      var color2 = this.textColor(Yanfly.Param.ColorExp2);
    }
    var wy = rect.y + this.lineHeight();
    this.drawGauge(rect.x, wy, rect.width, rate, color1, color2);
};

Window_VictoryExp.prototype.drawExpValues = function(actor, rect) {
    var wy = rect.y + this.lineHeight();
    var actorLv = actor._preVictoryLv;
    var bonusExp = 1.0 * actor._expGained * this._tick /
      Yanfly.Param.VAGaugeTicks;
    var nowExp = actor._preVictoryExp - actor.expForLevel(actorLv) + bonusExp;
    var nextExp = actor.expForLevel(actorLv + 1) - actor.expForLevel(actorLv);
    if (actorLv === actor.maxLevel()) {
      var text = Yanfly.Param.VAMaxLv;
    } else if (nowExp >= nextExp) {
      var text = Yanfly.Param.VALevelUp;
    } else {
      var text = Yanfly.Util.toGroup(parseInt(nextExp - nowExp));
    }
    this.changeTextColor(this.normalColor());
    this.drawText(text, rect.x + 2, wy, rect.width - 4, 'right');
};

Window_VictoryExp.prototype.drawExpGained = function(actor, rect) {
    var wy = rect.y + this.lineHeight() * 2;
    this.changeTextColor(this.systemColor());
    this.drawText(Yanfly.Param.VAGainedExp, rect.x + 2, wy, rect.width - 4,
      'left');
    var bonusExp = 1.0 * actor._expGained * this._tick /
      Yanfly.Param.VAGaugeTicks;
    var expParse = Yanfly.Util.toGroup(parseInt(bonusExp));
    var expText = Yanfly.Param.VAGainedExpfmt.format(expParse);
    this.changeTextColor(this.normalColor());
    this.drawText(expText, rect.x + 2, wy, rect.width - 4, 'right');
};

Window_VictoryExp.prototype.isReady = function() {
    return this._tick >= Yanfly.Param.VAGaugeTicks;
};

//=============================================================================
// Window_VictoryDrop
//=============================================================================

function Window_VictoryDrop() {
    this.initialize.apply(this, arguments);
}

Window_VictoryDrop.prototype = Object.create(Window_ItemList.prototype);
Window_VictoryDrop.prototype.constructor = Window_VictoryDrop;

Window_VictoryDrop.prototype.initialize = function(titleWindow) {
    var wy = titleWindow.height;
    var ww = Graphics.boxWidth;
    var wh = Graphics.boxHeight - wy;
    Window_ItemList.prototype.initialize.call(this, 0, wy, ww, wh);
    this.openness = 0;
    this.refresh();
};

Window_VictoryDrop.prototype.makeItemList = function() {
    if (BattleManager._rewards.gold > 0) {
      this._data = ['gold', null];
    } else {
      this._data = [];
    }
    this._dropItems = [];
    this._dropWeapons = [];
    this._dropArmors = [];
    this.extractDrops();
};

Window_VictoryDrop.prototype.extractDrops = function() {
    BattleManager._rewards.items.forEach(function(item) {
      if (!item) return;
      if (DataManager.isItem(item)) this._dropItems.push(item.id);
      if (DataManager.isWeapon(item)) this._dropWeapons.push(item.id);
      if (DataManager.isArmor(item)) this._dropArmors.push(item.id);
    }, this);
    this._dropItems.sort(function(a, b){return a-b});
    this._dropWeapons.sort(function(a, b){return a-b});
    this._dropArmors.sort(function(a, b){return a-b});
    this._dropItems.forEach(function(id) {
      var item = $dataItems[id];
      if (item && !this._data.contains(item)) this._data.push(item);
    }, this);
    this._dropWeapons.forEach(function(id) {
      var item = $dataWeapons[id];
      if (item && !this._data.contains(item)) this._data.push(item);
    }, this);
    this._dropArmors.forEach(function(id) {
      var item = $dataArmors[id];
      if (item && !this._data.contains(item)) this._data.push(item);
    }, this);
};

Window_VictoryDrop.prototype.drawItem = function(index) {
    var item = this._data[index];
    if (!item) return;
    this.drawGold(item, index);
    this.drawDrop(item, index);
};

Window_VictoryDrop.prototype.drawGold = function(item, index) {
    if (item !== 'gold') return;
    var rect = this.itemRect(index);
    rect.width -= this.textPadding();
    var value = BattleManager._rewards.gold;
    var currency = TextManager.currencyUnit;
    this.drawCurrencyValue(value, currency, rect.x, rect.y, rect.width);
};

Window_VictoryDrop.prototype.drawDrop = function(item, index) {
    if (!DataManager.isItem(item) && !DataManager.isWeapon(item) &&
    !DataManager.isArmor(item)) return;
    var rect = this.itemRect(index);
    rect.width -= this.textPadding();
    this.drawItemName(item, rect.x, rect.y, rect.width);
    this.drawItemNumber(item, rect.x, rect.y, rect.width);
};

Window_VictoryDrop.prototype.drawItemNumber = function(item, x, y, width) {
    if (!this.needsNumber()) return;
		var numItems = Yanfly.Util.toGroup(this.numItems(item));
    var size = Yanfly.Param.ItemQuantitySize || 28;
    this.contents.fontSize = size;
    this.drawText('\u00d7' + numItems, x, y, width, 'right');
    this.resetFontSettings();
};

Window_VictoryDrop.prototype.numItems = function(item) {
    if (DataManager.isItem(item)) {
      return Yanfly.Util.getCount(item.id, this._dropItems);
    }
    if (DataManager.isWeapon(item)) {
      return Yanfly.Util.getCount(item.id, this._dropWeapons);
    }
    if (DataManager.isArmor(item)) {
      return Yanfly.Util.getCount(item.id, this._dropArmors);
    }
  return 0;
};

//=============================================================================
// Scene_Battle
//=============================================================================

Yanfly.VA.Scene_Battle_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
    Yanfly.VA.Scene_Battle_update.call(this);
    this.updateVictoryAftermath();
};

Scene_Battle.prototype.processNextVictoryStep = function() {
    var step = this._victorySteps.shift();
    if (step) {
      this.processVictoryStep(step.toUpperCase());
    } else {
      this.processVictoryFinish();
    }
};

Scene_Battle.prototype.processVictoryStep = function(step) {
    this._victoryStep = step;
};

Scene_Battle.prototype.processVictoryFinish = function() {
    this._victoryTitleWindow.close();
    BattleManager.processVictoryFinish();
};

Scene_Battle.prototype.isVictoryStep = function(value) {
    return this._victoryStep && this._victoryStep === value;
};

Scene_Battle.prototype.updateVictoryAftermath = function() {
    if (!BattleManager.isVictoryPhase()) return;
    if (!BattleManager.isFinishedVictoryCheer()) return;
    this.activateVictoryStep();
    this.updateVictorySteps();
};

Scene_Battle.prototype.activateVictoryStep = function() {
    if (this._activateVictoryStep) return;
    this._activateVictoryStep = true;
    this.createVictoryTitle();
    this._victorySteps = this.createVictorySteps();
    this.createVictorySteps();
    this.processNextVictoryStep();
};

Scene_Battle.prototype.createVictorySteps = function() {
    var steps = Yanfly.Param.VAOrder.split(' ');
    var array = [];
    for (var i = 0; i < steps.length; ++i) {
      var step = steps[i];
      if (step.toUpperCase() === 'CUSTOM') {
        array = this.addCustomVictorySteps(array);
      } else {
        array.push(step.toUpperCase());
      }
    }
    return array;
};

Scene_Battle.prototype.addCustomVictorySteps = function(array) {
    return array;
};

Scene_Battle.prototype.updateVictorySteps = function() {
  if (this.isVictoryStep('EXP')) this.updateVictoryExp();
  if (this.isVictoryStep('DROPS')) this.updateVictoryDrops();
};

Scene_Battle.prototype.updateVictoryExp = function() {
    if (!this._victoryExpWindow) {
      this.createVictoryExp();
    } else if (this._victoryExpWindow.isReady()) {
      if (this.victoryTriggerContinue()) this.finishVictoryExp();
    }
};

Scene_Battle.prototype.createVictoryTitle = function() {
    this._statusWindow.hide();
    this._logWindow.hide();
    this._victoryTitleWindow = new Window_VictoryTitle();
    this.addWindow(this._victoryTitleWindow);
    this._victoryTitleWindow.open();
};

Scene_Battle.prototype.createVictoryExp = function() {
    this._victoryTitleWindow.refresh(Yanfly.Param.VABattleResults);
    this._victoryExpWindow = new Window_VictoryExp();
    this.addWindow(this._victoryExpWindow);
    this._victoryExpWindow.open();
};

Scene_Battle.prototype.finishVictoryExp = function() {
  SoundManager.playOk();
  this._victoryExpWindow.close();
  this.processNextVictoryStep();
};

Scene_Battle.prototype.updateVictoryDrops = function() {
    if (!this._victoryDropWindow) {
      this.createVictoryDrop();
    } else if (this._victoryDropWindow.isOpen()) {
      if (this.victoryTriggerContinue()) this.finishVictoryDrop();
    }
};

Scene_Battle.prototype.createVictoryDrop = function() {
  this._victoryTitleWindow.refresh(Yanfly.Param.VABattleDrops);
  this._victoryDropWindow = new Window_VictoryDrop(this._victoryTitleWindow);
  this.addWindow(this._victoryDropWindow);
  this._victoryDropWindow.open();
  this._victoryDropWindow.activate();
  this._victoryDropWindow.select(0);
};

Scene_Battle.prototype.finishVictoryDrop = function() {
    SoundManager.playOk();
    this._victoryDropWindow.close();
    this.processNextVictoryStep();
};

Scene_Battle.prototype.victoryTriggerContinue = function() {
    if (Input.isTriggered('ok') || TouchInput.isTriggered()) return true;
    if (Input.isTriggered('cancel')) return true;
    return false;
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

Yanfly.Util.getCount = function(value, arr){
    var occur = 0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === value) occur++;
    }
    return occur;
};

//=============================================================================
// End of File
//=============================================================================
