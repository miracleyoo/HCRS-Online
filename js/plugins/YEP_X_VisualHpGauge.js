//=============================================================================
// Yanfly Engine Plugins - Battle Engine Extension - Visual HP Gauge
// YEP_X_VisualHpGauge.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_VisualHpGauge = true;

var Yanfly = Yanfly || {};
Yanfly.VHG = Yanfly.VHG || {};
Yanfly.VHG.version = 1.07

//=============================================================================
 /*:
 * @plugindesc v1.07 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges
 * when a battler is selected or takes damage in battle.
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Display Actor
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Do you wish to display the HP Gauge for actors?
 * NO - false     YES - true
 * @default true
 *
 * @param Defeat First
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Enemies must be defeated first before showing the HP Gauge.
 * NO - false     YES - true
 * @default false
 *
 * @param Always Visible
 * @parent ---General---
 * @type boolean
 * @on YES
 * @off NO
 * @desc HP Gauge is always visible and doesn't fade away.
 * NO - false     YES - true
 * @default false
 *
 * @param ---Appearance---
 * @default
 *
 * @param Minimum Gauge Width
 * @parent ---Appearance---
 * @type number
 * @min 1
 * @desc This is the minimum width in pixels for HP Gauges.
 * @default 144
 *
 * @param Gauge Height
 * @parent ---Appearance---
 * @type number
 * @min 1
 * @desc This is the height in pixels for HP Gauges.
 * @default 18
 *
 * @param Back Color
 * @parent ---Appearance---
 * @desc This is the text color used for the back of HP Gauges.
 * @default 19
 *
 * @param HP Color 1
 * @parent ---Appearance---
 * @type number
 * @min 0
 * @max 31
 * @desc This is the text color used for the 1st part of HP Gauges.
 * @default 20
 *
 * @param HP Color 2
 * @parent ---Appearance---
 * @type number
 * @min 0
 * @max 31
 * @desc This is the text color used for the 2nd part of HP Gauges.
 * @default 21
 *
 * @param Gauge Duration
 * @parent ---Appearance---
 * @type number
 * @min 0
 * @desc This is the frames the HP gauge will continue to show after
 * it finishes draining or filling.
 * @default 30
 *
 * @param Gauge Position
 * @parent ---Appearance---
 * @type boolean
 * @on Above
 * @off Below
 * @desc Where do you wish to show the HP gauge?
 * BELOW - false     ABOVE - true
 * @default false
 *
 * @param Y Buffer
 * @parent ---Appearance---
 * @type number
 * @desc How much do you wish to shift the gauge Y position?
 * @default -16
 *
 * @param Use Thick Gauges
 * @parent ---Appearance---
 * @type boolean
 * @on Thick
 * @off Normal
 * @desc Use the thick gauges provided by this plugin?
 * Default - false     Thick - true
 * @default true
 *
 * @param ---Text Display---
 * @default
 *
 * @param Show HP
 * @parent ---Text Display---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Show the actual 'HP' text.
 * NO - false     YES - true
 * @default false
 *
 * @param Show Value
 * @parent ---Text Display---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Show the HP value.
 * NO - false     YES - true
 * @default false
 *
 * @param Show Max
 * @parent ---Text Display---
 * @type boolean
 * @on YES
 * @off NO
 * @desc Show the MaxHP value if value is shown?
 * NO - false     YES - true
 * @default false
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_BattleEngineCore.
 * Make sure this plugin is located under YEP_BattleEngineCore in the plugin
 * list.
 *
 * This plugin shows the HP Gauges of enemies as they're selected or while they
 * take damage. You can also opt for actors to show their HP Gauge as well.
 * Adjust the parameters to change the way you want the HP Gauges to appear.
 *
 * By default, enemies would need to be defeated first in order for the gauges
 * to show up. This can be changed within the parameter settings. However,
 * during battle test, the HP gauges are always shown unless the enemy has a
 * hidden HP gauge.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * Class and Enemy Notetags:
 *   <Hide HP Gauge>
 *   This HP gauge will always be hidden if this notetag is present.
 *
 *   <Show HP Gauge>
 *   This HP gauge will always be shown if this notetag is present while the
 *   target is selected or taking damage.
 *
 *   <HP Gauge Width: x>
 *   This will set the battler's HP Gauge width to x pixels. However, if this
 *   width is less than the minimum width, minimum width will take priority.
 *
 *   <HP Gauge Height: x>
 *   This set's the HP Gauge height to x pixels.
 *
 *   <HP Gauge Back Color: x>
 *   This changes the HP Gauge's back color to x text color.
 *
 *   <HP Gauge Color 1: x>
 *   This changes the HP Gauge's color 1 to x text color.
 *
 *   <HP Gauge Color 2: x>
 *   This changes the HP Gauge's color 2 to x text color.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.07:
 * - Updated for RPG Maker MV version 1.5.0.
 *
 * Version 1.06:
 * - Compatibility update with State Categories.
 *
 * Version 1.05:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.04:
 * - Optimization update.
 *
 * Version 1.03:
 * - Fixed a bug when Escape skill-effects are used on battlers.
 *
 * Version 1.02:
 * - Fixed a bug with gauge height not adjusting.
 *
 * Version 1.01b:
 * - Fixed a bug regarding dependancy checks.
 * - Fixed many bugs regarding stacking errors.
 *
 * Version 1.01:
 * - Rewrote the good majority of plugin to accomodate the following features:
 * ---'Always Visible' parameter.
 * ---'Gauge Position' parameter.
 * ---'Y Buffer' parameter.
 * ---'Use Thick Gauges' parameter.
 * ---'Show HP' parameter.
 * ---'Show Value' parameter.
 * ---'Show Max' parameter.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

if (Imported.YEP_BattleEngineCore) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_VisualHpGauge');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.VHGDisplayActor = String(Yanfly.Parameters['Display Actor']);
Yanfly.Param.VHGDefeatFirst = String(Yanfly.Parameters['Defeat First']);
Yanfly.Param.VHGAlwaysShow = eval(String(Yanfly.Parameters['Always Visible']));

Yanfly.Param.VHGMinHpWidth = Number(Yanfly.Parameters['Minimum Gauge Width']);
Yanfly.Param.VHGGaugeHeight = Number(Yanfly.Parameters['Gauge Height']);
Yanfly.Param.VHGBackColor = Number(Yanfly.Parameters['Back Color']);
Yanfly.Param.VHGHpColor1 = Number(Yanfly.Parameters['HP Color 1']);
Yanfly.Param.VHGHpColor2 = Number(Yanfly.Parameters['HP Color 2']);
Yanfly.Param.VHGGaugeDuration = Number(Yanfly.Parameters['Gauge Duration']);
Yanfly.Param.VHGGaugePos = eval(String(Yanfly.Parameters['Gauge Position']));
Yanfly.Param.VHGBufferY = Number(Yanfly.Parameters['Y Buffer']);
Yanfly.Param.VHGThick = eval(String(Yanfly.Parameters['Use Thick Gauges']));

Yanfly.Param.VHGShowHP = eval(String(Yanfly.Parameters['Show HP']));
Yanfly.Param.VHGShowValue = eval(String(Yanfly.Parameters['Show Value']));
Yanfly.Param.VHGShowMax = eval(String(Yanfly.Parameters['Show Max']));

//=============================================================================
// DataManager
//=============================================================================

Yanfly.VHG.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.VHG.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_X_VisualHpGauge) {
  	this.processVHGNotetags($dataClasses);
  	this.processVHGNotetags($dataEnemies);
    Yanfly._loaded_YEP_X_VisualHpGauge = true;
  }
	return true;
};

DataManager.processVHGNotetags = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.hideHpGauge = false;
		obj.showHpGauge = false;
		obj.hpGaugeWidth = 0;
		obj.hpGaugeHeight = Yanfly.Param.VHGGaugeHeight;
		obj.hpGaugeBackColor = Yanfly.Param.VHGBackColor;
		obj.hpGaugeColor1 = Yanfly.Param.VHGHpColor1;
		obj.hpGaugeColor2 = Yanfly.Param.VHGHpColor2;

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(/<(?:HIDE HP GAUGE)>/i)) {
				obj.hideHpGauge = true;
			} else if (line.match(/<(?:SHOW HP GAUGE)>/i)) {
				obj.showHpGauge = true;
			} else if (line.match(/<(?:HP GAUGE WIDTH):[ ](\d+)>/i)) {
				obj.hpGaugeWidth = parseInt(RegExp.$1);
			} else if (line.match(/<(?:HP GAUGE HEIGHT):[ ](\d+)>/i)) {
				obj.hpGaugeHeight = parseInt(RegExp.$1);
			} else if (line.match(/<(?:HP GAUGE BACK COLOR):[ ](\d+)>/i)) {
				obj.hpGaugeBackColor = parseInt(RegExp.$1);
			} else if (line.match(/<(?:HP GAUGE COLOR 1):[ ](\d+)>/i)) {
				obj.hpGaugeColor1 = parseInt(RegExp.$1);
			} else if (line.match(/<(?:HP GAUGE COLOR 2):[ ](\d+)>/i)) {
				obj.hpGaugeColor2 = parseInt(RegExp.$1);
			}
		}
	}
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.VHG.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.VHG.Game_System_initialize.call(this);
		this.initShownHpGauge();
};

Game_System.prototype.initShownHpGauge = function() {
    this._shownHpGauge = [];
};

Game_System.prototype.showHpGaugeEnemy = function(id) {
    if (this._shownHpGauge === undefined) this.initShownHpGauge();
		if (!eval(Yanfly.Param.VHGDefeatFirst)) return true;
		return this._shownHpGauge.contains(id);
};

Game_System.prototype.addHpGaugeEnemy = function(id) {
    if (this._shownHpGauge === undefined) this.initShownHpGauge();
		if (this._shownHpGauge.contains(id)) return;
		this._shownHpGauge.push(id);
};

//=============================================================================
// Game_BattlerBase
//=============================================================================

Yanfly.VHG.Game_BattlerBase_die = Game_BattlerBase.prototype.die;
Game_BattlerBase.prototype.die = function() {
  Yanfly.VHG.Game_BattlerBase_die.call(this);
  if (!this.isEnemy()) return;
  if (eval(Yanfly.Param.VHGDefeatFirst)) {
    if (!$gameSystem.showHpGaugeEnemy(this._enemyId)) this._noHpGauge = true;
  }
  $gameSystem.addHpGaugeEnemy(this._enemyId);
};

//=============================================================================
// Game_Battler
//=============================================================================

Game_Battler.prototype.hpGaugeVisible = function() {
		if (this._noHpGauge) return false;
    if (this.isHidden()) return false;
		return true;
};

Game_Battler.prototype.hpGaugeWidth = function() {
		var width = Math.max(this.spriteWidth(),	Yanfly.Param.VHGMinHpWidth);
		return (width & 1) ? width + 1 : width;
};

Game_Battler.prototype.hpGaugeHeight = function() {
		return Yanfly.Param.VHGGaugeHeight;
};

Game_Battler.prototype.hpGaugeBackColor = function() {
		return Yanfly.Param.VHGBackColor;
};

Game_Battler.prototype.hpGaugeColor1 = function() {
		return Yanfly.Param.VHGHpColor1;
};

Game_Battler.prototype.hpGaugeColor2 = function() {
		return Yanfly.Param.VHGHpColor2;
};

//=============================================================================
// Game_Actor
//=============================================================================

Game_Actor.prototype.hpGaugeVisible = function() {
    if (this.isHidden()) return false;
		if (this.currentClass().showHpGauge) return true;
		if (!eval(Yanfly.Param.VHGDisplayActor)) return false;
		if (this.currentClass().hideHpGauge) return false;
		return Game_Battler.prototype.hpGaugeVisible.call(this);
};

Game_Actor.prototype.hpGaugeWidth = function() {
		if (this.currentClass().hpGaugeWidth > 0) {
			var width = this.currentClass().hpGaugeWidth;
		} else {
			var width = this.spriteWidth();
		}
		width = Math.max(width,	Yanfly.Param.VHGMinHpWidth);
		return (width & 1) ? width + 1 : width;
};

Game_Actor.prototype.hpGaugeHeight = function() {
		return this.currentClass().hpGaugeHeight;
};

Game_Actor.prototype.hpGaugeBackColor = function() {
		return this.currentClass().hpGaugeBackColor;
};

Game_Actor.prototype.hpGaugeColor1 = function() {
		return this.currentClass().hpGaugeColor1;
};

Game_Actor.prototype.hpGaugeColor2 = function() {
		return this.currentClass().hpGaugeColor2;
};

//=============================================================================
// Game_Enemy
//=============================================================================

Game_Enemy.prototype.hpGaugeVisible = function() {
    if (this.isHidden()) return false;
		if (this.enemy().hideHpGauge) return false;
    if (BattleManager.isBattleTest()) return true;
		if (this.enemy().showHpGauge) return true;
		if (!$gameSystem.showHpGaugeEnemy(this._enemyId)) return false;
		return Game_Battler.prototype.hpGaugeVisible.call(this);
};

Yanfly.VHG.Game_Enemy_revive = Game_Enemy.prototype.revive;
Game_Enemy.prototype.revive = function() {
    if (this._hp === 0) this._noHpGauge = false;
		Yanfly.VHG.Game_Enemy_revive.call(this);
};

Game_Enemy.prototype.hpGaugeWidth = function() {
		if (this.enemy().hpGaugeWidth > 0) {
			var width = this.enemy().hpGaugeWidth;
		} else {
			var width = this.spriteWidth();
		}
		width = Math.max(width,	Yanfly.Param.VHGMinHpWidth);
		return (width & 1) ? width + 1 : width;
};

Game_Enemy.prototype.hpGaugeHeight = function() {
		return this.enemy().hpGaugeHeight;
};

Game_Enemy.prototype.hpGaugeBackColor = function() {
		return this.enemy().hpGaugeBackColor;
};

Game_Enemy.prototype.hpGaugeColor1 = function() {
		return this.enemy().hpGaugeColor1;
};

Game_Enemy.prototype.hpGaugeColor2 = function() {
		return this.enemy().hpGaugeColor2;
};

//=============================================================================
// Sprite_Battler
//=============================================================================

Yanfly.VHG.Sprite_Battler_update = Sprite_Battler.prototype.update;
Sprite_Battler.prototype.update = function() {
    Yanfly.VHG.Sprite_Battler_update.call(this);
    this.createVisualHpGaugeWindow();
};

Sprite_Battler.prototype.createVisualHpGaugeWindow = function() {
		if (this._createdVisualHpGaugeWindow) return;
		if (!this._battler) return;
		if (this.checkVisualATBGauge()) {
			if (!this._visualATBWindow) return;
			if (!this.parent.parent.children.contains(this._visualATBWindow)) return;
		}
		this._createdVisualHpGaugeWindow = true;
    this._visualHpGauge = new Window_VisualHPGauge();
    this._visualHpGauge.setBattler(this._battler);
    this.parent.parent.addChild(this._visualHpGauge);
};

Sprite_Battler.prototype.checkVisualATBGauge = function() {
    if (!Imported.YEP_X_BattleSysATB) return false;
    if (!BattleManager.isATB()) return false;
    if (!Imported.YEP_X_VisualATBGauge) return false;
    return this._battler.isEnemy();
};

Yanfly.VHG.Sprite_Battler_setBattler = Sprite_Battler.prototype.setBattler;
Sprite_Battler.prototype.setBattler = function(battler) {
    Yanfly.VHG.Sprite_Battler_setBattler.call(this, battler);
    if (this._visualHpGauge) this._visualHpGauge.setBattler(battler);
};

//=============================================================================
// Window_VisualHPGauge
//=============================================================================

function Window_VisualHPGauge() {
    this.initialize.apply(this, arguments);
}

Window_VisualHPGauge.prototype = Object.create(Window_Base.prototype);
Window_VisualHPGauge.prototype.constructor = Window_VisualHPGauge;

Window_VisualHPGauge.prototype.initialize = function() {
    this._opacitySpeed = 255 / Yanfly.Param.VHGGaugeDuration;
    this._dropSpeed = 0;
    this._visibleCounter = 0;
    Window_Base.prototype.initialize.call(this, 0, 0, 1, 1);
    this._battler = null;
    this._requestRefresh = false;
    this._currentHpValue = 0;
    this._displayedValue = 0;
    this.contentsOpacity = 0;
    this.opacity = 0;
};

Window_VisualHPGauge.prototype.setBattler = function(battler) {
    if (this._battler === battler) return;
    this._battler = battler;
    this._currentHpValue = this._battler ? this._battler.hp : 0;
    this._displayedValue = this._battler ? this._battler.hp : 0;
};

Window_VisualHPGauge.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (!this._battler) return;
    this.updateWindowAspects();
};

Window_VisualHPGauge.prototype.updateWindowAspects = function() {
    this.updateWindowSize();
    this.updateWindowPosition();
    this.updateOpacity();
    this.updateHpPosition();
    this.updateRefresh();
};

Window_VisualHPGauge.prototype.updateWindowSize = function() {
    var spriteWidth = this._battler.hpGaugeWidth();
    var width = spriteWidth + this.standardPadding() * 2;
    width = Math.min(width, Graphics.boxWidth + this.standardPadding() * 2);
    var height = Math.max(this.lineHeight(), this.gaugeHeight() + 4);
    height += this.standardPadding() * 2;
    if (width === this.width && height === this.height) return;
    this.width = width;
    this.height = height;
    this.createContents();
    this._requestRefresh = true;
    this.makeWindowBoundaries();
};

Window_VisualHPGauge.prototype.makeWindowBoundaries = function() {
    if (!this._requestRefresh) return;
    this._minX = -1 * this.standardPadding();
    this._maxX = Graphics.boxWidth - this.width + this.standardPadding();
    this._minY = -1 * this.standardPadding();
    this._maxY = Graphics.boxHeight - this.height + this.standardPadding();
    this._maxY -= SceneManager._scene._statusWindow.height;
};

Window_VisualHPGauge.prototype.updateWindowPosition = function() {
    if (!this._battler) return;
    var battler = this._battler;
    this.x = battler.spritePosX();
    this.x -= Math.ceil(this.width / 2); 
    this.x = this.x.clamp(this._minX, this._maxX);
    this.y = battler.spritePosY();
    if (Yanfly.Param.VHGGaugePos) {
      this.y -= battler.spriteHeight();
    } else {
      this.y -= this.standardPadding();
    }
    this.y = this.y.clamp(this._minY, this._maxY);
    this.y += Yanfly.Param.VHGBufferY;
};

Window_VisualHPGauge.prototype.updateOpacity = function() {
    if (this.isShowWindow()) {
      this.contentsOpacity += 32;
    } else {
      this.contentsOpacity -= 32;
    }
};

Window_VisualHPGauge.prototype.isShowWindow = function() {
    if (!this._battler.isAppeared()) return false;
    if (!this._battler.hpGaugeVisible()) return false;
    if (Yanfly.Param.VHGAlwaysShow && !this._battler.isDead()) return true;
    if (this._currentHpValue !== this._displayedValue) return true;
    if (this._battler.isSelected()) return true;
    --this._visibleCounter;
    return this._visibleCounter > 0;
};

Window_VisualHPGauge.prototype.updateHpPosition = function() {
    if (!this._battler) return;
    if (this._currentHpValue !== this._battler.hp) {
      this._visibleCounter = Yanfly.Param.VHGGaugeDuration;
      this._currentHpValue = this._battler.hp;
      var difference = Math.abs(this._displayedValue - this._battler.hp);
      this._dropSpeed = Math.ceil(difference / Yanfly.Param.VHGGaugeDuration);
    }
    this.updateDisplayCounter();
};

Window_VisualHPGauge.prototype.updateDisplayCounter = function() {
    if (this._battler._barrierAltered) {
      this._battler._barrierAltered = false;
    } else if (this._currentHpValue === this._displayedValue) {
      return;
    }
    var d = this._dropSpeed;
    var c = this._currentHpValue;
    if (this._displayedValue > this._currentHpValue) {
      this._displayedValue = Math.max(this._displayedValue - d, c);
    } else if (this._displayedValue < this._currentHpValue) {
      this._displayedValue = Math.min(this._displayedValue + d, c);
    }
    this._requestRefresh = true;
};

Window_VisualHPGauge.prototype.updateRefresh = function() {
    if (this._requestRefresh) this.refresh();
};

Window_VisualHPGauge.prototype.refresh = function() {
    this.contents.clear();
    if (!this._battler) return;
    this._requestRefresh = false;
    var wy = this.contents.height - this.lineHeight();
    var ww = this.contents.width;
    this.drawActorHp(this._battler, 0, wy, ww);
};

Window_VisualHPGauge.prototype.gaugeBackColor = function() {
    return this.textColor(this._battler.hpGaugeBackColor());
};

Window_VisualHPGauge.prototype.hpGaugeColor1 = function() {
    return this.textColor(this._battler.hpGaugeColor1());
};

Window_VisualHPGauge.prototype.hpGaugeColor2 = function() {
    return this.textColor(this._battler.hpGaugeColor2());
};

Window_VisualHPGauge.prototype.drawActorHp = function(actor, x, y, width) {
    width = width || 186;
    var color1 = this.hpGaugeColor1();
    var color2 = this.hpGaugeColor2();
    var rate = this._displayedValue / actor.mhp;
    if (Imported.YEP_AbsorptionBarrier && actor.barrierPoints() > 0) {
      ww = this.drawBarrierGauge(actor, x, y, width);
    } else {
      this.drawGauge(x, y, width, rate, color1, color2);
    }
    if (Yanfly.Param.VHGShowHP) {
      this.changeTextColor(this.systemColor());
      this.drawText(TextManager.hpA, x, y, 44);
    }
    if (Yanfly.Param.VHGShowValue) {
      var val = this._displayedValue
      var max = actor.mhp;
      var w = width;
      var color = this.hpColor(actor);
      this.drawCurrentAndMax(val, max, x, y, w, color, this.normalColor());
    }
};

Window_VisualHPGauge.prototype.drawCurrentAndMax = function(current, max, x, y,
                                                   width, color1, color2) {
    if (Yanfly.Param.VHGShowMax) {
      Window_Base.prototype.drawCurrentAndMax.call(this, current, max,
        x, y, width, color1, color2);
    } else {
      var align = Yanfly.Param.VHGShowHP ? 'right' : 'center';
      var text = Yanfly.Util.toGroup(current);
      this.changeTextColor(color1);
      this.drawText(text, x, y, width, align);
    }
};

Window_VisualHPGauge.prototype.gaugeHeight = function() {
    if (!this._battler) return Window_Base.prototype.gaugeHeight.call(this);
    return this._battler.hpGaugeHeight();
};

if (Imported.YEP_CoreEngine && Yanfly.Param.VHGThick) {

Window_VisualHPGauge.prototype.drawGauge =
function(dx, dy, dw, rate, color1, color2) {
    var color3 = this.gaugeBackColor();
    var fillW = Math.floor(dw * rate).clamp(0, dw);
    var gaugeH = this.gaugeHeight();
    var gaugeY = dy + this.lineHeight() - gaugeH - 2;
    if (eval(Yanfly.Param.GaugeOutline)) {
      color3.paintOpacity = this.translucentOpacity();
      this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
      dx += 2;
      gaugeY += 2;
      fillW = Math.max(0, fillW - 4);
      gaugeH -= 4;
    } else {
      var fillW = Math.floor(dw * rate);
      var gaugeY = dy + this.lineHeight() - gaugeH - 2;
      this.contents.fillRect(dx, gaugeY, dw, gaugeH, color3);
    }
    this.contents.gradientFillRect(dx, gaugeY, fillW, gaugeH, color1, color2);
};

} // Imported.YEP_CoreEngine

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
};
