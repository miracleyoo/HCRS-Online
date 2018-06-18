//=============================================================================
// MOG_ActorTurnIndicator.js
//=============================================================================

/*:
 * @plugindesc (v1.0) Apresenta um indicador de turno no sprite do personagem.
 * @author Moghunter
 *
 * @param X-Axis Offset
 * @desc Posição X-Axis offset da imagem.
 * @default 0
 *
 * @param Y-Axis Offset
 * @desc Posição Y-Axis offset da imagem.
 * @default 0
 *
 * @param Blend Mode
 * @desc Definição do tipo de blend. (0..2)
 * @default 1
 * 
 * @param Rotation Speed
 * @desc Velocidade da rotação.
 * @default 0
 * 
 * @param Number of Frames
 * @desc Definição da quantidade de frames.
 * @default 4
 * 
 * @param Animation Speed
 * @desc Definição da velocidade da animação.
 * @default 5
 *
 * @help  
 * =============================================================================
 * +++ MOG - Actor Turn Indicator (v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Apresenta um indicador de turno no sprite do personagem.
 * Será necessário o arquivo. (img/system/)
 *
 * TurnIndicator.png
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ActorTurnIndicator = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ActorTurnIndicator');
    Moghunter.turnIndicatorX = Number(Moghunter.parameters['X-Axis Offset'] || 0);
    Moghunter.turnIndicatorY = Number(Moghunter.parameters['Y-Axis Offset'] || 0);
	Moghunter.turnIndicatorBlendMode = Number(Moghunter.parameters['Blend Mode'] || 1);
    Moghunter.turnIndicatorR = Number(Moghunter.parameters['Rotation Speed'] || 0.00);
	Moghunter.turnIndicatorFrames = Number(Moghunter.parameters['Number of Frames'] || 4);
    Moghunter.turnIndicatorSpeed = Number(Moghunter.parameters['Animation Speed'] || 5);

//=============================================================================
// ** Game Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_turnIndicator_TempInitialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_mog_turnIndicator_TempInitialize.call(this);
	this._turnIndicatorData = [0,0];
};

//=============================================================================
// * Sprite Actor
//=============================================================================

//==============================
// * Init Members
//==============================
var _mog_turnIndicator_sprActor_initMembers = Sprite_Actor.prototype.initMembers;
Sprite_Actor.prototype.initMembers = function() {
	_mog_turnIndicator_sprActor_initMembers.call(this);
	if ($gameSystem.isSideView()) {this.createTurnIndicator()};
};

//==============================
// * create Turn Indicator
//==============================
Sprite_Actor.prototype.createTurnIndicator = function() {
	this._turnIndicator = new TurnIndicatorBattle(this)
    this.addChild(this._turnIndicator);
};

//==============================
// * set Battler
//==============================
var _mog_turnIndicator_sprActor_setBattler = Sprite_Actor.prototype.setBattler;
Sprite_Actor.prototype.setBattler = function(battler) {
	_mog_turnIndicator_sprActor_setBattler.call(this,battler);
	if (this._turnIndicator) {this._turnIndicator.setActor(battler)};
};

//=============================================================================
// * Turn Indicator Battle
//=============================================================================
function TurnIndicatorBattle() {
    this.initialize.apply(this, arguments);
};

TurnIndicatorBattle.prototype = Object.create(Sprite.prototype);
TurnIndicatorBattle.prototype.constructor = TurnIndicatorBattle;

//==============================
// * Initialize
//==============================
TurnIndicatorBattle.prototype.initialize = function(sprite) {
    Sprite.prototype.initialize.call(this);	
    this.loadBitmap();
	this._sprite = sprite;
    this.setup();
};

//==============================
// * load Bitmap
//==============================
TurnIndicatorBattle.prototype.loadBitmap = function() {
    this._image = ImageManager.loadSystem("TurnIndicator");
};

//==============================
// * Setup
//==============================
TurnIndicatorBattle.prototype.setup = function() {
	this.data = {};
	this.data.actor = null;
	this.data.visible = false;
	this.data.cw = 0;
	this.data.ch = 0;
	this.data.ch2 = 0;
	this.data.x = Moghunter.turnIndicatorX;
	this.data.y = Moghunter.turnIndicatorY;
	this.data.xC = 0;
	this.data.yC = 0;	
	this.data.rotation = Moghunter.turnIndicatorR;
	this.data.frames = [Number(Moghunter.turnIndicatorFrames),0,Number(Moghunter.turnIndicatorSpeed),0];
	this.bitmap = this._image;
	this.visible = false;
	this.blendMode = Number(Moghunter.turnIndicatorBlendMode);
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
};

//==============================
// * refresh Frame Animation
//==============================
TurnIndicatorBattle.prototype.refreshFrameAnimation = function() {
	this.data.frames[3] = 0;
	this.data.frames[1]++;
	if (this.data.frames[1] >= this.data.frames[0]) {this.data.frames[1] = 0};
	var rcw = this.data.cw * this.data.frames[1]
	this.setFrame(rcw,0,this.data.cw,this.data.ch);
};

//==============================
// * update Frame Animation
//==============================
TurnIndicatorBattle.prototype.updateFrameAnimation = function() {
    this.data.frames[3]++;
	if (this.data.frames[3] >= this.data.frames[2]) {this.refreshFrameAnimation()};   
};

//==============================
// * battler
//==============================
TurnIndicatorBattle.prototype.setActor = function(battler) {
	this.data.actor = battler;
};

//==============================
// * get Bitmap Data
//==============================
TurnIndicatorBattle.prototype.getBitmapData = function() {
	this.data.cw = this._image.width / this.data.frames[0];
	this.data.ch = this._image.height;
	this.refreshFrameAnimation();
};

//==============================
// * actor
//==============================
TurnIndicatorBattle.prototype.actor = function() {
     return this.data.actor;
};

//==============================
// * refresh Actor
//==============================
TurnIndicatorBattle.prototype.refresh = function() {
     this.data.visible = this.isVisible();
	 this.scale.x = 2;
	 this.scale.y = this.scale.x;
	 this.opacity = 0;
	 this.data.ch2 = this._sprite._mainSprite ? this._sprite._mainSprite.height / 2 : this._sprite.height / 2;
};

//==============================
// * need Refresh Actor
//==============================
TurnIndicatorBattle.prototype.needRefresh = function() {
     return this.data.visible != this.isVisible();
};

//==============================
// * is Visible
//==============================
TurnIndicatorBattle.prototype.isVisible = function() {
    if (this.data.actor != BattleManager.actor()) {return false};
	return true;
};

//==============================
// * update Visible
//==============================
TurnIndicatorBattle.prototype.updateVisible = function() {
     this.visible = this.isVisible();
};

//==============================
// * x Pos X
//==============================
TurnIndicatorBattle.prototype.posX = function() {
	return this.data.x;
};

//==============================
// * x Pos Y
//==============================
TurnIndicatorBattle.prototype.posY = function() {
	return this.data.y - this.data.ch2;
};

//==============================
// * x Pos Y
//==============================
TurnIndicatorBattle.prototype.updateEXCam = function(x,y) {
	this.data.xC = x;
	this.data.yC = y;
};

//==============================
// * update Position
//==============================
TurnIndicatorBattle.prototype.updatePosition = function() {
    this.x = this.posX();
	this.y = this.posY();
};

//==============================
// * update Zoom
//==============================
TurnIndicatorBattle.prototype.updateZoom = function() {
	if (this.scale.x > 1.00) {this.scale.x -= 0.1};
    this.scale.y = this.scale.x;
};

//==============================
// * update Animation
//==============================
TurnIndicatorBattle.prototype.updateAnimation = function() {
    this.updateOther()
	this.updateZoom();
	if (this.data.frames[0] > 1) {this.updateFrameAnimation()};
};

//==============================
// * update Other
//==============================
TurnIndicatorBattle.prototype.updateOther = function() {
    this.rotation += this.data.rotation;
	this.opacity += 20;
};

//==============================
// * update Indicator
//==============================
TurnIndicatorBattle.prototype.updateIndicator = function() {
	if (this.needRefresh()) {this.refresh()};
    this.updateVisible();
	if (!this.visible) {return};
	this.updatePosition();
	this.updateAnimation();
};

//==============================
// * update
//==============================
TurnIndicatorBattle.prototype.update = function() {
    Sprite.prototype.update.call(this);
	if (this.data.cw === 0) {
		if (this._image.isReady()) {this.getBitmapData()};
	} else {
		this.updateIndicator();
	};
};