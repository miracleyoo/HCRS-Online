//=============================================================================
// MOG_VisualTimer.js
//=============================================================================

/*:
 * @plugindesc (v1.1) Apresenta o contador de tempo através de imagens.
 * @author Moghunter
 *
 * @param Number Visible
 * @desc Apresentar o número de tempo.
 * @default true
 *
 * @param Gauge Visible
 * @desc Apresentar o medidor de tempo.
 * @default true
 *
 * @param X-Axis
 * @desc Definição X-axis do contador de tempo.
 * @default 310
 *
 * @param Y-Axis
 * @desc Definição Y-axis do contador de tempo.
 * @default 64
 *
 * @param Seconds X-Axis
 * @desc Definição X-axis do número dos segundos.
 * @default 132
 *
 * @param Seconds Y-Axis
 * @desc Definição Y-axis do número dos segundos.
 * @default 0
 *
 * @param Minutes X-Axis
 * @desc Definição X-axis do número dos minutos.
 * @default 82
 *
 * @param Minutes Y-Axis
 * @desc Definição Y-axis do número dos minutos.
 * @default 0
 *
 * @param Gauge X-Axis
 * @desc Definição X-axis do medidor de tempo.
 * @default 11
 *
 * @param Gauge Y-Axis
 * @desc Definição Y-axis do medidor de tempo.
 * @default 34
 *
 * @param Auto Fade
 * @desc Ativar AutoFade.
 * @default true
 *
 * @param Fade Max
 * @desc Definição da transparência maxima do Auto Fade.
 * @default 120
 *
 * @param Gauge Angle
 * @desc Definição do ângulo do medidor de tempo.
 * @default 0
 *
 * @param Number Angle
 * @desc Definição do ângulo do número do contador de tempo.
 * @default 0
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Visual Timer (1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Apresenta o contador de tempo através de imagens.
 *
 * =============================================================================
 * IMAGENS
 * ============================================================================= 
 * Serão necessários as imagens
 *
 * Timer_Layout.png
 * Timer_Number.png
 * Timer_Gauge.ong
 *
 * Grave as imagens na pasta (img/system/)
 *
 * =============================================================================
 * PLUGIN COMMAND 
 * =============================================================================
 * Para definir a posição do contador de tempo durante o jogo use o comando 
 * abaixo.
 *
 * visual_timer : X : Y
 * =============================================================================
 * ** Histórico **
 * =============================================================================
 * v1.1 - Melhoria na codificação e na compatibilidade de plugins.
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_VisualTimer = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_VisualTimer');
	
	Moghunter.timerGauge_Number = String(Moghunter.parameters['Number Visible'] || 'true');
	Moghunter.timerGauge_Gauge = String(Moghunter.parameters['Gauge Visible'] || 'true');	
    Moghunter.timerGauge_X = Number(Moghunter.parameters['X-Axis'] || 310);
	Moghunter.timerGauge_Y = Number(Moghunter.parameters['Y-Axis'] || 64); 	
    Moghunter.timerGauge_secX = Number(Moghunter.parameters['Seconds X-Axis'] || 132);
	Moghunter.timerGauge_secY = Number(Moghunter.parameters['Seconds Y-Axis'] || 0);
	Moghunter.timerGauge_minX = Number(Moghunter.parameters['Minutes X-Axis'] || 82);
	Moghunter.timerGauge_minY = Number(Moghunter.parameters['Minutes Y-Axis'] || 0);
	Moghunter.timerGauge_gaugeX = Number(Moghunter.parameters['Gauge X-Axis'] || 11);
	Moghunter.timerGauge_gaugeY = Number(Moghunter.parameters['Gauge Y-Axis'] || 34);
    Moghunter.timerGauge_AutoFade = String(Moghunter.parameters['Auto Fade'] || 'true');
    Moghunter.timerGauge_FadeMax = Number(Moghunter.parameters['Fade Max'] || 90);
	Moghunter.timerGauge_GaugeAngle = Number(Moghunter.parameters['Gauge Angle'] || 0);
	Moghunter.timerGauge_NumberAngle = Number(Moghunter.parameters['Number Angle'] || 0);	
		
//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _mog_timerGauge_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _mog_timerGauge_pluginCommand.call(this,command, args);
    this.timerGaugePluginCommand(command, args);
	return true;
};
	
//==============================
// * Timer Gauge Plugin Command
//==============================
Game_Interpreter.prototype.timerGaugePluginCommand = function(command, args) {
    if (command === "visual_timer")  {
		var x =  args[1] ? Number(args[1]) : 0;
		var y =  args[3] ? Number(args[3]) : 0;
		$gameSystem._timerGauge.x = x;
		$gameSystem._timerGauge.y = y;
	};
};	

//=============================================================================
// ** Game System
//=============================================================================	

//==============================
// * initialize
//==============================
var _mog_timerGauge_gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_timerGauge_gsys_initialize.call(this);
	this._timerGauge = {};
	this._timerGauge.enabled = true;
	this._timerGauge.x = Moghunter.timerGauge_X;
	this._timerGauge.y = Moghunter.timerGauge_Y
	this._timerGauge.numberVisible = String(Moghunter.timerGauge_Number) === 'true' ? true : false;
	this._timerGauge.gaugeVisible = String(Moghunter.timerGauge_Gauge) === 'true' ? true : false;
	this._timerGauge.autoFade = String(Moghunter.timerGauge_AutoFade) === 'true' ? true : false;
	this._timerGauge.fadeMax = Moghunter.timerGauge_FadeMax;
};

//=============================================================================
// ** Game Timer
//=============================================================================	

//==============================
// * initialize
//==============================
var _mog_timerGauge_gtimer_initialize = Game_Timer.prototype.initialize;
Game_Timer.prototype.initialize = function() {
    _mog_timerGauge_gtimer_initialize.call(this);
	this._framesMax = 0;
	this._needRefresh = false;
	this._refreshTime = 0;
};

//==============================
// * Start
//==============================
var _mog_timerGauge_gtimer_start = Game_Timer.prototype.start;
Game_Timer.prototype.start = function(count) {
	_mog_timerGauge_gtimer_start.call(this,count)
    this._framesMax = this._frames;
	this._needRefresh = true;
	this._refreshTime = 0;
};

//=============================================================================
// ** Game Character Base 
//=============================================================================

//==============================
// * Screen RealX
//==============================
Game_CharacterBase.prototype.screen_realX = function() {
    return this.scrolledX() * $gameMap.tileWidth()
};

//==============================
// * Screen RealY
//==============================
Game_CharacterBase.prototype.screen_realY = function() {
    return this.scrolledY() * $gameMap.tileHeight()
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

//==============================
// * create Timer Gauge
//==============================
Scene_Base.prototype.createTimerGauge = function() {
    this._timerGauge = new TimerGauge();
	this._timerGauge.mz = 130;
	this.addChild(this._timerGauge);
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_visualTimer_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_visualTimer_sbattle_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
    this.createTimerGauge();
	this.sortMz();	
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_visualTimer_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_visualTimer_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
    this.createTimerGauge();
	this.sortMz();	
};

//=============================================================================
// ** Spriteset Base
//=============================================================================

//==============================
// * create Timer
//==============================
var _mog_timerGauge_sprtBase_createTimer = Spriteset_Base.prototype.createTimer;
Spriteset_Base.prototype.createTimer = function() {return
    if ($gameSystem._timerGauge.enabled) {return};
    _mog_timerGauge_sprtBase_createTimer.call(this);
};

//=============================================================================
// ** Timer Gauge
//=============================================================================

function TimerGauge() {
    this.initialize.apply(this, arguments);
}

TimerGauge.prototype = Object.create(Sprite.prototype);
TimerGauge.prototype.constructor = TimerGauge;

//==============================
// * Initialize
//==============================
TimerGauge.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
	this._testMode = DataManager.isBattleTest();
	this.visible = false;
	this._needRefresh = false;
    this._seconds = 0;	
	this._dataImg1 = [null,null,-1,-1];
	this._dataImg2 = [-1,-1];
	this._dataImg3 = [-1,-1];
	this.loadBitmap();
    this.createSprites();
    this.update();
	if (this.data().autoFade && !this.isHudVisible()) {this.opacity = this.data().fadeMax};
};

//==============================
// * Data
//==============================
TimerGauge.prototype.data = function() {
     return $gameSystem._timerGauge;
};

//==============================
// * load Bitmap
//==============================
TimerGauge.prototype.loadBitmap = function() {
    this._layoutImg = ImageManager.loadSystem("Timer_Layout");
	this._numberImg = this.data().numberVisible ? ImageManager.loadSystem("Timer_Number") : new Bitmap(16,16);
	this._gaugeImg = this.data().gaugeVisible ? ImageManager.loadSystem("Timer_Gauge") : new Bitmap(16,16);
};

//==============================
// * get Data
//==============================
TimerGauge.prototype.getData = function() {
    this._dataImg1[0] = ($gameMap.tileWidth() / 2);
	this._dataImg1[1] = $gameMap.tileHeight();
    this._dataImg1[2] = this._layoutImg.width - $gameMap.tileWidth() + 5;
	this._dataImg1[3] = this._layoutImg.height;	
    this._dataImg2[0] = this._numberImg.width / 10;
	this._dataImg2[1] = this._numberImg.height;
    this._dataImg3[0] = this._gaugeImg.width;
	this._dataImg3[1] = this._gaugeImg.height;
	this.refreshTimer();
	this.update();
};

//==============================
// * create Sprites
//==============================
TimerGauge.prototype.createSprites = function() {
    this.createLayout();
	if (this.data().numberVisible) {this.createNumber()};
	if (this.data().gaugeVisible) {this.createGauge()};
};


//==============================
// * create Layout
//==============================
TimerGauge.prototype.createLayout = function() {
     this._layout = new Sprite(this._layoutImg);
	 this.addChild(this._layout);
};

//==============================
// * create Number
//==============================
TimerGauge.prototype.createNumber = function() {
	 this._fieldNumber = new Sprite();
	 this._fieldNumber.rotation = Moghunter.timerGauge_NumberAngle * Math.PI / 180;
	 this.addChild(this._fieldNumber);
	 this._numbers = [];
	 for (var i = 0; i < 4; i++) {
	      this._numbers[i] = new Sprite(this._numberImg);
		  this._fieldNumber.addChild(this._numbers[i]);
	 };
};

//==============================
// * Seconds
//==============================
TimerGauge.prototype.seconds = function() {
	var v = Math.floor(this._seconds % 60);
    if (Math.floor($gameTimer._frames) > 0) {v += 1}
	return v;
};

//==============================
// * minutes
//==============================
TimerGauge.prototype.minutes = function() {
	return Math.floor(this._seconds / 60);
};	

//==============================
// * refresh  Timer
//==============================
TimerGauge.prototype.refreshTimer = function() {
	 var oldSec = this._seconds;
     this._seconds = $gameTimer.seconds();
	 if (this._numbers) {
	     for (var i = 0; i < this._numbers.length; i++) {
	          this.refreshNumber(this._numbers[i],i);
	     };
	 };
};

//==============================
// * refresh Number
//==============================
TimerGauge.prototype.refreshNumber = function(sprite,index) {
	var cw = this._dataImg2[0];
	var ch = this._dataImg2[1];
	if (index > 1) {
		var x = (cw * (index - 2)) + Moghunter.timerGauge_minX;
		var y = Moghunter.timerGauge_minY;
		var n = Math.abs(this.minutes()).toString().split("");
		var value = n < 10 ? (index === 2 ? n[1] : n[0]) : (index === 2 ? n[0] : n[1]);
	} else {
		var x = (cw * index) + Moghunter.timerGauge_secX;;
		var y = Moghunter.timerGauge_secY;
		var n = Math.abs(this.seconds()).toString().split("");
		var value = n < 10 ? (index === 0 ? n[1] : n[0]) : (index === 0 ? n[0] : n[1]);
	};
	var valueReal = value ? value : 0;	
	var v = valueReal * cw;
    sprite.setFrame(v,0,cw,ch);
	sprite.x = x;
	sprite.y = y;
};

//==============================
// * create Gauge
//==============================
TimerGauge.prototype.createGauge = function() {
	this._fieldGauge = new Sprite();
	this._fieldGauge.rotation = Moghunter.timerGauge_GaugeAngle * Math.PI / 180;
	this.addChild(this._fieldGauge);	
    this._gauge = new Sprite(this._gaugeImg);
	this._gauge.x = Moghunter.timerGauge_gaugeX;
	this._gauge.y = Moghunter.timerGauge_gaugeY;
	this._fieldGauge.addChild(this._gauge);
};

//==============================
// * update Gauge
//==============================
TimerGauge.prototype.updateGauge = function() {
	var cw = this._dataImg3[0];
	var ch = this._dataImg3[1];
    var meter_rate = Math.floor(cw * $gameTimer._frames / $gameTimer._framesMax);
	this._gauge.setFrame(0,0, meter_rate, ch);
};

//==============================
// * Update Position
//==============================
TimerGauge.prototype.updatePosition = function() {
    this.visible = $gameTimer.isWorking();
	this.x = this.data().x;
	this.y = this.data().y;
};

//==============================
// * Is Hud Visible
//==============================
TimerGauge.prototype.isHudVisible = function() {
	if (this._testMode) {return true};
	if ($gamePlayer.screen_realX() < this.x - this._dataImg1[0]) {return true};
	if ($gamePlayer.screen_realX() > this.x + this._dataImg1[2]) {return true};
	if ($gamePlayer.screen_realY() < this.y - this._dataImg1[1]) {return true};
	if ($gamePlayer.screen_realY() > this.y + this._dataImg1[3]) {return true};
	if (this.opacity < this.data().fadeMax) {return true};
	return false;
};
   
//==============================
// * Update Auto Fade
//==============================
TimerGauge.prototype.updateAutoFade = function() {
	if (this.isHudVisible()) {
		this.opacity += 10}	 
	else {
		if (this.opacity > this.data().fadeMax) {	
			this.opacity -= 10;
			if (this.opacity < this.data().fadeMax) {this.opacity = this.data().fadeMax};
		};
	};
};

//==============================
// * Update Visible
//==============================
TimerGauge.prototype.updateVisible = function() {
    this.visible = $gameTimer.isWorking();
	if (this.data().autoFade) {this.updateAutoFade()};
};

//==============================
// * Update Sprites
//==============================
TimerGauge.prototype.updateSprites = function() {
	if (this._seconds != $gameTimer.seconds() ) {this.refreshTimer()};
	if ($gameTimer._frames === 0 && $gameTimer._needRefresh) {
		$gameTimer._needRefresh = false;
		this.refreshTimer()
	}
	if ($gameTimer._refreshTime > 0) {
		$gameTimer._refreshTime--;
		if ($gameTimer._refreshTime === 0) {this.refreshTimer()};
	};
	if (this._gauge) {this.updateGauge()};
    this.updatePosition();
	this.updateVisible();
};

//==============================
// * update
//==============================
TimerGauge.prototype.update = function() {
    Sprite.prototype.update.call(this);
	if (this._dataImg1[0] != null) {
		this.updateSprites()
	} else {
	    if (this._numberImg.isReady() && this._layoutImg.isReady()) {this.getData()};	
	};
};