//=============================================================================
// MOG_ChronoCT.js
//=============================================================================

/*:
 * @plugindesc (v1.1) Adiciona o sistema de CT.
 * @author Moghunter
 *
 * @param Initial Visible
 * @desc Ativar a Hud de CT no inicio do jogo.
 * @default true
 *
 * @param Dash Cost
 * @desc Ativar o custo de Dash.
 * @default true
 *
 * @param Full SE
 * @desc Definição do SE quando a barra chegar ao máximo.
 * @default 
 *
 * @param Smart Fade
 * @desc Deixar a Hud semitransparente quando o personagem se aproximar da hud.
 * @default true
 *
 * @param Slant Animation
 * @desc Ativar a animação de gradiente no medidor de CT.
 * @default true
 *
 * @param Hud X-Axis
 * @desc Definição X-axis da hud de CT.
 * @default 70
 *
 * @param Hud Y-Axis
 * @desc Definição Y-axis da hud de CT.
 * @default 460
 *
 * @param Number X-Axis
 * @desc Definição X-axis do valor de CT.
 * @default 155
 *
 * @param Number Y-Axis
 * @desc Definição Y-axis do valor de CT.
 * @default 3
 *
 * @help  
 * =============================================================================
 * +++ MOG - Chrono CT System (v1.1) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Adiciona o parâmetro de CT, semelhante ao MP o parâmetro CT é recuperado a
 * cada segundo, esse parâmetro é usado nas ações do personagem como atacar,
 * usar item, correr,etc...
 *
 * =============================================================================
 * PLUGIN COMMANDS
 * =============================================================================
 * 
 * ct_hud_visible : true
 * - Ativa ou desativa a hud de CT.
 *
 * dash_ct_cost : true
 * - Ativa ou desativa o custo de CT para o Dash.
 *
 * action_ct_cost : true
 * - Ativa ou desativa o custo de CT para a ação. 
 *
 * =============================================================================
 * EVENT COMMENTS (TOOL EVENTS)
 * =============================================================================
 * 
 * tool_ct_cost : VALUE
 * - Define um custo de CT para a ação.
 *
 * =============================================================================
 * HISTÓRICO
 * =============================================================================
 * (v1.1) - Correção do plugin parameters não funcionarem.
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_CTSystem = true;
　　var Moghunter = Moghunter || {}; 	

	Moghunter.parameters = PluginManager.parameters('MOG_ChronoCT');
	Moghunter.chronoCT_hudvisible = String(Moghunter.parameters['Initial Visible'] || "true");
	Moghunter.chronoCT_dash = String(Moghunter.parameters['Dash Cost'] || "true");
	Moghunter.chronoCT_fullSE = String(Moghunter.parameters['Full SE'] || '');
	Moghunter.chronoCT_smartFade = String(Moghunter.parameters['Smart Fade'] || "true");
	Moghunter.chronoCT_slant = String(Moghunter.parameters['Slant Animation'] || "true");
	Moghunter.chronoCT_hudX = Number(Moghunter.parameters['Hud X-Axis'] || 70);	
	Moghunter.chronoCT_hudY = Number(Moghunter.parameters['Hud Y-Axis'] || 460);	
	Moghunter.chronoCT_numberX = Number(Moghunter.parameters['Number X-Axis'] || 155);	
	Moghunter.chronoCT_numberY = Number(Moghunter.parameters['Number Y-Axis'] || 3);
	
//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * chrono Initialize
//==============================
var _mog_chronoCT_sys_chronoInitialize = Game_System.prototype.chronoInitialize;
Game_System.prototype.chronoInitialize = function() {
    _mog_chronoCT_sys_chronoInitialize.call(this);
	this._ctHud_visible = String(Moghunter.chronoCT_hudvisible) === "true" ? true : false;
	this._ctHud_smartFade = String(Moghunter.chronoCT_smartFade) === "true" ? true : false;
	this._ctDashEnabled = String(Moghunter.chronoCT_dash) === "true" ? true : false;
	this._ctHud_CTCost = true;
};

//=============================================================================
// ** Game Interpreter
//=============================================================================	

//==============================
// * Set Chrono Interpreter
//==============================
var _mog_chrono_ctSystem_setChronoInterpreter = Game_Interpreter.prototype.setChronoInterpreter;
Game_Interpreter.prototype.setChronoInterpreter = function(command, args) {
	_mog_chrono_ctSystem_setChronoInterpreter.call(this,command, args);
	if (command === "ct_hud_visible")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._ctHud_visible = value;
	} else if (command === "dash_ct_cost")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._ctDashEnabled = value;
	} else if (command === "action_ct_cost")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._ctHud_CTCost = value;
	};	
};

//=============================================================================
// ** Game Battler
//=============================================================================	
	
//==============================
// * tool Sys Init Battler
//==============================
var _mog_ctSys_gBat_toolSysInitBattler = Game_Battler.prototype.toolSysInitBattler;
Game_Battler.prototype.toolSysInitBattler = function() {	
    _mog_ctSys_gBat_toolSysInitBattler.call(this);
	this._chrono.ct = 100;
	this._chrono.maxct = 100;
	this._chrono.ctFd = 0;
	this._chrono.ctSpeed = 1;
	this._chrono.ctDashLimit = 30;
	this._chrono.ctDash = 0;
	this._chrono.ctWait = 0;
	this._chrono.ctWaitDash = 0;
	this._chrono.ctIsDashing = false;
};	
	
//==============================
// * Update Ras Battler
//==============================
var _mog_chronoCT_gcharBase_updateRasBattler = Game_CharacterBase.prototype.updateRasBattler;
Game_CharacterBase.prototype.updateRasBattler = function() {
	_mog_chronoCT_gcharBase_updateRasBattler.call(this);
	this.updateCTBattler();
};
	
//==============================
// * Update CT Battler
//==============================
Game_CharacterBase.prototype.updateCTBattler = function() {
	if (this.battler()._chrono.ctIsDashing != this.isDashing()) {
	    if (!this.battler().canActionCTBase() && !this.isDashing()) {
			this.battler()._chrono.ctWait = 10;
		} else if (!this.battler()._chrono.ctIsDashing && this.isDashing()) {
			this.battler()._chrono.ctWaitDash = 20;
		};
	};
	this.battler()._chrono.ctIsDashing = this.isDashing();
};	
	
//==============================
// * ct 
//==============================
Game_Battler.prototype.ct = function() {
	return this._chrono.ct;
};

//==============================
// * max CT
//==============================
Game_Battler.prototype.maxCt = function() {
	return this._chrono.maxct;
};

//==============================
// * ct Speed
//==============================
Game_Battler.prototype.ctSpeed = function() {
	return this._chrono.ctSpeed;
};

//==============================
// * ct Dash Limit
//==============================
Game_Battler.prototype.ctDashLimit = function() {
	return this._chrono.ctDashLimit ;
};

//==============================
// * is CT Max
//==============================
Game_Battler.prototype.isCTMax = function() {
	return this.ct() >= this.maxCt();
};

//==============================
// * is CT Per
//==============================
Game_Battler.prototype.ctPer = function() {
	return Math.floor((this.ct() / this.maxCt()) * 100);
};


//==============================
// * can Action CT Base
//==============================
Game_Battler.prototype.canActionCTBase = function() {
	return this.ctPer() >= this.ctDashLimit();
};	

//=============================================================================
// ** Tool Event
//=============================================================================

//==============================
// * Can Pay CT Cost
//==============================
ToolEvent.prototype.canPayCTCost = function() {
	if (this._tool.ctCost === 0) {return true};
	if (!$gameSystem._ctHud_CTCost) {return true};
	if (this.user().battler().isEnemy()) {return true};
	if (this.user().battler().ct() < this._tool.ctCost) {return false};
	if (this.user().battler().isChargeMax()) {	return true};
	if (!this.user().battler().canActionCTBase()) {return false};
	return true;
};

//==============================
// * Pay CT Cost
//==============================
ToolEvent.prototype.payCTCost = function() {
   this.user().battler()._chrono.ct -= this._tool.ctCost;
   if (this.user().battler()._chrono.ct < 0) {this.user().battler()._chrono.ct = 0};
   if (!this.user().battler().isChargeMax() && !this.user().battler().canActionCTBase()) {this.user().battler()._chrono.ctWait = 15};
};

//=============================================================================
// ** Game Player
//=============================================================================

//==============================
// ** move by Input
//==============================
var _mog_chronoCT_gplayer_moveByInput = Game_Player.prototype.moveByInput;
Game_Player.prototype.moveByInput = function() {
	_mog_chronoCT_gplayer_moveByInput.call(this);
	if (this.battler()) {this.updateChronoCT()};
};

//==============================
// ** is Dashing
//==============================
Game_Player.prototype.isDashing = function() {
	if (!$gameSystem._ctDashEnabled) {return this._dashing};
	if (!this.battler()) {return this._dashing};
	if (this.battler()._chrono.ctWaitDash > 0 && this._dashing) {return true};
	if (!this.battler().canActionCTBase()) {return false};
	if (this.battler()._chrono.ctWait > 0) {return false};
    return this._dashing;
};


//=============================================================================
// ** Game Character Base
//=============================================================================

//==============================
// ** update Chrono CT
//==============================
Game_CharacterBase.prototype.updateChronoCT = function() {
	this.battler()._chrono.ctFd++;
	if (this.battler()._chrono.ctDash > 0) {this.battler()._chrono.ctDash--};
	if (this.battler()._chrono.ctWaitDash > 0) {this.battler()._chrono.ctWaitDash--};
	if (this.battler()._chrono.ctFd > 1) {this.updateCTUP()};
};

//==============================
// ** need Dash Cost
//==============================
Game_CharacterBase.prototype.needDashCost = function() {	
    if (!$gameSystem._ctDashEnabled) {return false};
    if (!this.isDashing()) {return false};
    if (this.isMoving()) {return true};
	if (this.battler()._chrono.ctDash > 0) {return true};
	return false;
};

//==============================
// ** update CT UP
//==============================
Game_CharacterBase.prototype.updateCTUP = function() {	
    this.battler()._chrono.ctFd = 0;
	if (this.needDashCost()) {
		if (this.isMoving()) {this.battler()._chrono.ctDash = 10};
	    this.battler()._chrono.ct -= 1;
	} else if (this.needUpdateCTUP()) {
		if (!this.battler().isCTMax()) {
	        this.battler()._chrono.ct += this.battler().ctSpeed();
			if (this.battler().isCTMax()) {
			    SoundManager.playSoundMX(Moghunter.chronoCT_fullSE);
			};
		};
	};
	if (this.battler()._chrono.ct > this.battler().maxCt()) {
		this.battler()._chrono.ct = this.battler().maxCt();
	} else if (this.battler()._chrono.ct < 0) {
		this.battler()._chrono.ct = 0;
	};
	if (this.battler()._chrono.ctWait > 0) {this.battler()._chrono.ctWait--};
};

//==============================
// ** need UpdateCT UP
//==============================
Game_CharacterBase.prototype.needUpdateCTUP = function() {
    if (this.battler().isCTMax()) {return false};
	if (this.battler()._chrono.ctWait > 0) {return false};
	if (this.battler().isCastingC()) {return false};
	if (this.battler().isCharging()) {return false};
	if ($gameTemp._autoTarget.enabled) {return false};
	return true;
};
	
//=============================================================================
// ** Scene Base
//=============================================================================

//==============================
// ** create Hud Field
//==============================
Scene_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// ** sort MZ
//==============================
Scene_Base.prototype.sortMz = function() {
   this._hudField.children.sort(function(a, b){return a.mz-b.mz});
};

//=============================================================================
// ** Scene Map
//=============================================================================	

//==============================
// ** create Spriteset
//==============================
var _mog_chronoCT_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_chronoCT_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
    this.createCreateCTHud();
	this.sortMz();	
};

//==============================
// * create CT Hud
//==============================
Scene_Map.prototype.createCreateCTHud = function() {
	this._ctHud = new CTSysHud();
	this._ctHud.mz = 110;
	this._hudField.addChild(this._ctHud);	
};


//=============================================================================
// * Sprite Skill Name
//=============================================================================
function CTSysHud() {
    this.initialize.apply(this, arguments);
};

CTSysHud.prototype = Object.create(Sprite.prototype);
CTSysHud.prototype.constructor = CTSysHud;

//==============================
// * Initialize
//==============================
CTSysHud.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
	this.setup();
    this.loadBitmap();
	this.createSprites();
	this.visible = false;
	this.update();
};

//==============================
// * Setup
//==============================
CTSysHud.prototype.setup = function() {
	this._hud_size = [-1,0,0,0];
	this._gauge_flow = [false,0,0,0];
	this._fadeLimit = $gameSystem._ctHud_smartFade ? 90 : 255;
	this._fadeH = [0,0];
	this._actHudOpa = false;
    this.x = Moghunter.chronoCT_hudX;
	this.y = Moghunter.chronoCT_hudY;
};

//==============================
// * Load Bitmap
//==============================
CTSysHud.prototype.loadBitmap = function() {
	this._layoutImg = ImageManager.loadRas("CT_Layout"); 
	this._gaugeImg = ImageManager.loadRas("CT_Meter"); 
	this._numberImg = ImageManager.loadRas("CT_Number"); 
};

//==============================
// * Battler
//==============================
CTSysHud.prototype.battler = function() {
    return $gameParty.leader();
};

//==============================
// * Value
//==============================
CTSysHud.prototype.value = function() {
	if (this.battler().isCastingC()) {
		return this.battler()._ras.cast.duration;
	} else if (this.battler().isCharging()) {
		return this.battler()._ras.charge.time;
	} else {
        return this.battler().ct();
	};
};
//==============================
// * Value
//==============================
CTSysHud.prototype.maxValue = function() {
	if (this.battler().isCastingC()) {
		return this.battler()._ras.cast.maxDuration;
	} else if (this.battler().isCharging()) {
		return this.battler()._ras.charge.maxtime;		
	} else {	
		return this.battler().maxCt();
	};
};

//==============================
// * get Data
//==============================
CTSysHud.prototype.getData = function() {
    this.visible = true;
    this._hud_size[0] = this.x - ($gameMap.tileWidth() / 2);
    this._hud_size[1] = this.y - $gameMap.tileHeight();
    this._hud_size[2] = this.x + this._layoutImg.width - $gameMap.tileWidth();
    this._hud_size[3] = this.y + this._layoutImg.height;
	this._gauge_flow[0] = String(Moghunter.chronoCT_slant) == "true" ? true : false;
	this._gauge.cw = this._gauge_flow[0] ? this._gaugeImg.width / 3 : this._gaugeImg.width;
	this._gauge.ch = this._gaugeImg.height / 3;
	this._gauge_flow[2] = this._gauge.cw;
	this._gauge_flow[3] = this._gauge_flow[2] * 2;
	this._gauge_flow[1] = Math.floor(Math.random() * this._gauge_flow[2]);	
	this._number.cw = this._numberImg .width / 10;
	this._number.ch = this._numberImg .heigth;
	if (Imported.MOG_ActorHud) {
		var nx = Math.abs(this.x - Moghunter.ahud_pos_x);
		var ny = Math.abs(this.y - Moghunter.ahud_pos_y);
	    if (nx < 200 && ny < 200) {
		    this._actHudOpa = true;
		};
	};
	if (this.battler()) {
	    this.refreshNumber();
		this.updateGauge();	
	};
};

//==============================
// * create Sprites
//==============================
CTSysHud.prototype.createSprites = function() {
   this.createLayout();
   this.createGauge();
   this.createNumber();
};

//==============================
// * create Layout
//==============================
CTSysHud.prototype.createLayout = function() {
   this._layout = new Sprite(this._layoutImg);
   this.addChild(this._layout);
};

//==============================
// * create Gauge
//==============================
CTSysHud.prototype.createGauge = function() {
   this._gauge = new Sprite(this._gaugeImg);
   this._gauge.x = 35;
   this._gauge.y = 25;
   this._gauge.cw = -1;
   this._gauge.ch = -1;
   this.addChild(this._gauge);
};

//==============================
// * set Gauge Color
//==============================
CTSysHud.prototype.setGaugeColor = function(h,rw) {
	if (this.battler().isCastingC()) {return h * 2};
	if (this.battler().isCharging()) {return h * this._fadeH[0]}
	if (!this.battler().canActionCTBase()) {return h};
	return 0;
};

//==============================
// * update Gauge
//==============================
CTSysHud.prototype.updateGauge = function() {
	var h = this._gauge.ch;
	var rw = this._gauge.cw * this.value() / this.maxValue();
	var c = this.setGaugeColor(h,rw);
    if (this._gauge_flow[0]) { 
	   this._gauge.setFrame(this._gauge_flow[1],c,rw,h);	
       this._gauge_flow[1] += 1;
	   if (this._gauge_flow[1] > this._gauge_flow[3]) {this._gauge_flow[1] = 0};			
   } else {
	   this._gauge.setFrame(0,c,rw,h);
   };
};

//==============================
// * create Number
//==============================
CTSysHud.prototype.createNumber = function() {
   this._number = [];
   for (var i = 0; i < 3; i++) {
	   this._number.push(new Sprite(this._numberImg));
	   this._number[i].rx = Moghunter.chronoCT_numberX;
	   this._number[i].ry = Moghunter.chronoCT_numberY;
	   this._number[i].x = this._number[i].rx;
	   this._number[i].y = this._number[i].ry;	   
	   this._number[i].cw = -1;
	   this._number[i].ch = -1;
	   this._number[i].value = 0;
	   this._number[i].maxValue = 0;
	   this.addChild(this._number[i]);
   };
};

//==============================
// * need Refresh Number
//==============================
CTSysHud.prototype.needRefrehNumber = function() {
   if (this._number[0].value != this.value()) {return true};
   if (this._number[0].maxValue != this.maxValue()) {return true};
   return false;
};

//==============================
// * refresh Number
//==============================
CTSysHud.prototype.refreshNumber = function() {
   var w = this._numberImg.width / 10;
   var h = this._numberImg.height;
   var value = Math.floor((this.value() / this.maxValue()) * 100);
   var numbers = Math.abs(value).toString().split("");  
   for (var i = 0; i < this._number.length; i++) {
 	   this._number[i].value = this.value();
   	   this._number[i].maxValue = this.maxValue();
	   this._number[i].visible = i >= numbers.length ? false : true;
	   var n = Number(numbers[i]);
	   this._number[i].setFrame(n * w, 0, w, h);
	   this._number[i].visible = true;	   
	   var nx = -(w * i) + (w * numbers.length);
	   this._number[i].x = this._number[i].rx - nx;	   
   };
};

//==============================
// * Need Hide
//==============================
CTSysHud.prototype.needHide = function() {
    if ($gameMessage.isBusy()) {return true};
	if (!$gameSystem._ctHud_visible) {return true};
	if ($gameSystem.isChronoMode()) {return true};
	if (!this.battler()) {return true};
	return false
};

//==============================
// * Need Fade
//==============================
CTSysHud.prototype.needFade = function() {
    if (this._hud_size[0] === -1) {return false};
	if ($gamePlayer.screen_realX() < this._hud_size[0]) {return false};
	if ($gamePlayer.screen_realX() > this._hud_size[2]) {return false};
	if ($gamePlayer.screen_realY() < this._hud_size[1]) {return false};
	if ($gamePlayer.screen_realY() > this._hud_size[3]) {return false};	
    return true;
};

//==============================
// * Update Visible
//==============================
CTSysHud.prototype.updateVisible = function() {
	 if (this._actHudOpa) {
		 if (!$gameSystem._ctHud_visible) {
		     this.opacity = 0;
			 return;	 
		 };
	     this.opacity = $gameSystem._ahud_opacity;
		 return
	 };
     if (this.needHide()) {
		 this.opacity -= 15;
	 } else {
		 if (this.needFade()) {
			 if (this.opacity > this._fadeLimit) {
				 this.opacity -= 10;
			     if (this.opacity < this._fadeLimit) {this.opacity = this._fadeLimit};
			 };
		 } else {
			 this.opacity += 10;
		 };
	 };
};

//==============================
// * update Fade H
//==============================
CTSysHud.prototype.updateFadeH = function() {
     this._fadeH[1]++;
	 if (this._fadeH[1] < 8) {return};
	 this._fadeH[1] = 0;
	 this._fadeH[0]++;
	 if (this._fadeH[0] >= 3) {this._fadeH[0] = 0};	
};

//==============================
// * update Sprites
//==============================
CTSysHud.prototype.updateSprites = function() {
	this.updateGauge();
	this.updateVisible();
	this.updateFadeH();
	if (this.needRefrehNumber()) {this.refreshNumber()};
};

//==============================
// * Update
//==============================
CTSysHud.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	if (!this.battler()) {return};
    if (this._gauge.cw < 0) {
		if (this._gaugeImg.isReady() && this._numberImg.isReady()) {
			this.getData();
		} else {
	      return;
		};
	};
	this.updateSprites();
};