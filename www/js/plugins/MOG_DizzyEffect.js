//=============================================================================
// MOG_DizzyEffect.js
//=============================================================================

/*:
 * @plugindesc (v1.0) Adiciona o efeito Dizzy.
 * @author Moghunter
 *
 * @help  
 * =============================================================================
 * +++ MOG - Dizzy Effect (v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Adiciona o efeito Dizzy, esse efeito pode ser utilizado no mapa
 * e na batalha.
 *
 * =============================================================================
 * PLUGIN COMMAND
 * =============================================================================
 * Para ativar o efeito coloque o comando abaixo.
 *
 * dizzy_effect : POWER : DURATION : BLEND_MODE : OPACITY : REALTIME
 *
 * POWER      - Poder do efeito   (1..10)
 * DURATION   - Duração do efeito (30..999)
 * BLEND_MODE - Efeito de brilho (0..2)
 * OPACITY    - Opacidade (30..255);
 * REALTIME   - O efeito será atualizado a cada imagem. 
 *              (*Pode causar Lag se o poder do efeito for muito alto)
 *
 * Exemplo
 *
 * dizzy_effect : 2 : 260 : 0 : 255 : true
 *
 * =============================================================================
 * Para cancelar o efeito use o comando abaixo.
 *
 * clear_dizzy
 *
 * =============================================================================
 * SCRIPT COMMAND
 * =============================================================================
 * Para ativar o efeito Dizzy através do Script command use o código abaixo.
 *
 * $gameSystem.dizzeEffect(power,duration,blendType,opacity,realTime)
 * 
 * Exemplo
 *
 * $gameSystem.dizzeEffect(1,1,0,150,false); 
 * 
 * =============================================================================
 * SKILL NOTETAGS
 * ============================================================================= 
 * Para ativar o efeito Dizzy nas habilidades ou items use o comentário abaixo
 * caixa de notas da Habilidade/Item.
 *
 * Dizzy Animation
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_DizzyEffect = true;
　　var Moghunter = Moghunter || {}; 

//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_DizzyEffect_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_mog_DizzyEffect_temp_initialize.call(this);
    this._dizzyEffectLoadTime = 20;
};	
	
//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_DizzyEffect_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_DizzyEffect_sys_initialize.call(this);
    this.setDizzyEffectSystem();
};

//==============================
// * set Dizzy Effect System
//==============================
Game_System.prototype.setDizzyEffectSystem = function() {
   this._dizzyEffect = {};
   this._dizzyEffect.enabled = false;
   this._dizzyEffect.refresh = false;
   this._dizzyEffect.loop = false;
   this._dizzyEffect.speed = 10;
   this._dizzyEffect.duration = 60;
   this._dizzyEffect.time = 60;
   this._dizzyEffect.reloadTime = 0;
   this._dizzyEffect.frames = 1;
   this._dizzyEffect.mode = 0;
   this._dizzyEffect.opacity = 255;
   this._dizzyEffect.blendMode = 0;
   this._dizzyEffect.realTime = true;
   this._dizzySpritesData = [];
};

//==============================
// * Dizze Effect
//==============================
Game_System.prototype.dizzeEffect = function(power,duration,blendType,opacity,realTime) {
	var power2 = Math.min(Math.max(Number(power), 1),10);
	var duration2 = Math.min(Math.max(Number(duration), 20),9999);
	var blendType2 = Math.min(Math.max(Number(blendType), 0),2);
	var opacity2 = Math.min(Math.max(Number(opacity), 60),255);
	var realTime2 = String(realTime) === "true" ? true : false;
	$gameSystem._dizzyEffect.frames = power2;
	$gameSystem._dizzyEffect.time = duration2;
	$gameSystem._dizzyEffect.blendMode = blendType2;
	$gameSystem._dizzyEffect.opacity = opacity2;
	$gameSystem._dizzyEffect.realTime = realTime2;	
	$gameSystem._dizzyEffect.refresh = true;
};

//=============================================================================
// ** Scene Manager
//=============================================================================

SceneManager._dizzyBitmap = null;

//==============================
// * Snap For Dizzy
//==============================
SceneManager.snapForDizzy = function() {
    this._dizzyBitmap = this.snap();
};

//=============================================================================
// ** Scene Map
//=============================================================================	

//==============================
// * can Call Menu Dizzy
//==============================
Scene_Map.prototype.canCallMenuDizzy = function() {
    if ($gameSystem._dizzyEffect.duration <= 20) {return true};
    if ($gameTemp._dizzyEffectLoadTime > 0) {return false};
    return true
};

//==============================
// * call Menu
//==============================
var _mog_dizzyEffect_sMenu_callMenu = Scene_Map.prototype.callMenu;
Scene_Map.prototype.callMenu = function() {
	if (!this.canCallMenuDizzy()) {return};
	_mog_dizzyEffect_sMenu_callMenu.call(this);	
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _mog_DizzyEffect_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_mog_DizzyEffect_pluginCommand.call(this,command, args)
	this.dizzyEffectPluginCommand(command, args);
	return true;
};

//==============================
// * Dizzy Effect Plugin Command
//==============================
Game_Interpreter.prototype.dizzyEffectPluginCommand = function(command, args) {
	if (command === "dizzy_effect")  {
		var power = args[1] != null ? args[1] : 2;
		var duration = args[3] != null ? args[3] : 0;
		var blendType = args[5] != null ? args[5] : 0;
		var opacity = args[7] != null ? args[7] : 255;
		var realTime = args[9] != null ? args[9] : false;
        $gameSystem.dizzeEffect(power,duration,blendType,opacity,realTime)
	} else if (command === "clear_dizzy")  {
		$gameSystem._dizzyEffect.duration = 0;
	};
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * Execute Damage
//==============================
var _mog_dizzyEffect_gAction_applyItemUserEffect = Game_Action.prototype.applyItemUserEffect;
Game_Action.prototype.applyItemUserEffect = function(target) {
	_mog_dizzyEffect_gAction_applyItemUserEffect.call(this,target);
	if (this.canUseDizzyAnimation(target)) {this.executeDizzyAnimation(target)};
};

//==============================
// * can Use Dizzy Animation
//==============================
Game_Action.prototype.canUseDizzyAnimation = function(target) {
	 var enable = false
     if (!this.item()) {enable = false};
	 var notes = this.item().note.split(/[\r\n]+/);
     notes.forEach(function(note) {
	 if (note.toLowerCase() == "dizzy effect"){
	     enable = true
	 };
	 },this);			 
     return enable
};

//==============================
// ** Execute Dizzy Animation
//==============================
Game_Action.prototype.executeDizzyAnimation = function(target) {
     $gameSystem.dizzeEffect(1,1,0,150,false); 	 	 
};

//=============================================================================
// ** Scene Base
//=============================================================================

//==============================
// * dizzy Sprite
//==============================
Scene_Base.prototype.dizzySprite = function() {
	return this._spriteset._dizzySprite;
};

//==============================
// * dizzy Sprite Data
//==============================
Scene_Base.prototype.dizzySpriteData = function() {
	return $gameSystem._dizzySpritesData;
};

//==============================
// * record Dizzy Data
//==============================
Scene_Base.prototype.recordDizzyData = function() {
	$gameSystem._dizzySpritesData = [];
	for (var i = 0; i < this.dizzySprite()._sprites.length; i++) {
		 var sprite = this.dizzySprite()._sprites[i];
         $gameSystem._dizzySpritesData[i] = {};		 
		 $gameSystem._dizzySpritesData[i].x = sprite.x;
		 $gameSystem._dizzySpritesData[i].y = sprite.y;
		 $gameSystem._dizzySpritesData[i].opacity = sprite.opacity;
		 $gameSystem._dizzySpritesData[i].scaleX = sprite.scale.x;
		 $gameSystem._dizzySpritesData[i].scaleY = sprite.scale.y;
		 $gameSystem._dizzySpritesData[i].rotation = sprite.rotation;
		 $gameSystem._dizzySpritesData[i].blendMode = sprite.scale.blendMode;
		 $gameSystem._dizzySpritesData[i].rt = sprite.rt;
		 $gameSystem._dizzySpritesData[i].sc = sprite.sc;
		 $gameSystem._dizzySpritesData[i].wait = sprite.wait;
	};
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// * Terminate
//==============================
var _mog_dizzyEffect_scMap_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
	if (this._spriteset && this.dizzySprite() && this.dizzySprite()._sprites) {this.recordDizzyData()};
    _mog_dizzyEffect_scMap_terminate.call(this);
};

//=============================================================================
// ** Spriteset Base
//=============================================================================	

//==============================
// * Initialize
//==============================
var _mog_dizzyEffect_sprtBase_initialize = Spriteset_Base.prototype.initialize;
Spriteset_Base.prototype.initialize = function() {
	_mog_dizzyEffect_sprtBase_initialize.call(this);
	this.createDizzySprite();
};

//==============================
// * create Dizzy Sprite
//==============================
Spriteset_Base.prototype.createDizzySprite = function() {
    this._dizzySprite = new DizzySprites();
	this._dizzySprite.z = 500;
	this.addChild(this._dizzySprite);
};

//=============================================================================
// * SpriteWeatherEX
//=============================================================================
function DizzySprites() {
    this.initialize.apply(this, arguments);
};

DizzySprites.prototype = Object.create(Sprite.prototype);
DizzySprites.prototype.constructor = DizzySprites;

//==============================
// * Initialize
//==============================
DizzySprites.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
	this.z = 500;
	this.createField();
};

//==============================
// * Data
//==============================
DizzySprites.prototype.data = function() {
	return $gameSystem._dizzyEffect;
};

//==============================
// * Data Sprites
//==============================
DizzySprites.prototype.dataSprites = function() {
	return $gameSystem._dizzySpritesData;
};

//==============================
// * create Field
//==============================
DizzySprites.prototype.createField = function() {
    this._field = new Sprite();
	this.addChild(this._field);
};

//==============================
// * dizzy Bitmap
//==============================
DizzySprites.prototype.dizzyBitmap = function() {
    return SceneManager._dizzyBitmap;
};

//==============================
// * remove Sprites
//==============================
DizzySprites.prototype.removeSprites = function() {
    for (var i = 0; i < this._sprites.length ; i++) {
		 this._field.removeChild(this._sprites[i]);
	};
	this._sprites = null;
	SceneManager._dizzyBitmap = null;
};

//==============================
// * create Sprites
//==============================
DizzySprites.prototype.createSprites = function() {
    this.data().duration = this.data().time;
	this._sprites  = [];
	SceneManager.snapForDizzy();
    for (var i = 0; i < this.data().frames ; i++) {
		this._sprites[i] = new Sprite(this.dizzyBitmap());
		this.setupSpriteEffect(this._sprites[i],i,this.data().frames);
		this._field.addChild(this._sprites[i]);
	};
};

//==============================
// * clear Base Parameters
//==============================
DizzySprites.prototype.clearBaseParameters = function(sprite) {
	sprite.x = this.centerX();
	sprite.y = this.centerY();	
    sprite.anchor.x = 0.5;
	sprite.anchor.y = 0.5;
	sprite.scale.x = 1.00;
	sprite.scale.y = 1.00
	sprite.rotation = 0;
	sprite.opacity = this.data().opacity;
	sprite.blendMode = this.data().blendMode;
};

//==============================
// * refresh Bitmap
//==============================
DizzySprites.prototype.refreshBitmap = function(sprite) {
	this.visible = false;
	SceneManager.snapForDizzy();
	this.visible = true;
	sprite.bitmap = this.dizzyBitmap();	
};

//==============================
// * prepare Refresh
//==============================
DizzySprites.prototype.prepareRefresh = function(sprite,i) {
	this.clearBaseParameters(sprite)
	if (this.data().realTime) {this.refreshBitmap(sprite)};
	this._field.children.sort(function(a, b){return a.scale.x-b.scale.x});
};

//==============================
// * setup Sprite Effect
//==============================
DizzySprites.prototype.setupSpriteEffect = function(sprite,i,itemMax) {
    this.clearBaseParameters(sprite);
	var frTime = Math.floor(50 / this.data().frames); 
	sprite.wait = -frTime + Math.abs(frTime * (-itemMax + i));
	if (sprite.wait < 0) {sprite.wait = 0}
 	sprite.rt = 0;
	sprite.sc = 0.01;
};

//==============================
// * load Sprites
//==============================
DizzySprites.prototype.loadSprites = function() {
	this._sprites  = [];
	if (!SceneManager._dizzyBitmap) {SceneManager.snapForDizzy()};
    for (var i = 0; i < this.dataSprites().length ; i++) {
		this._sprites[i] = new Sprite(this.dizzyBitmap());
		this.clearBaseParameters(this._sprites[i]);
		this.loadSpriteData(this._sprites[i],this.dataSprites()[i]);
		this._field.addChild(this._sprites[i]);
	};
	$gameSystem._dizzySpritesData = [];
    this._field.children.sort(function(a, b){return a.scale.x-b.scale.x});
};

//==============================
// * load Sprite Data 
//==============================
DizzySprites.prototype.loadSpriteData = function(sprite,data) {
	sprite.x = data.x;
	sprite.y = data.y;
	sprite.scale.x = data.scaleX;
	sprite.scale.y = data.scaleY;
	sprite.opacity = data.opacity;
	sprite.rotation = data.rotation;
	sprite.scale.blendMode = data.blendMode;
	sprite.rt = data.rt;
	sprite.sc = data.sc;
	sprite.wait = data.wait;
};

//==============================
// * refresh Dizzy Sprites
//==============================
DizzySprites.prototype.refreshDizzySprites = function(preLoad) {
    this.data().refresh = false;
	if (this._sprites) {this.removeSprites()};
	if (preLoad) {
		this.loadSprites();
	} else {
	    this.createSprites();
	};
};

//==============================
// * center X
//==============================
DizzySprites.prototype.centerX = function() {
    return Graphics.boxWidth / 2;
};

//==============================
// * center Y
//==============================
DizzySprites.prototype.centerY = function() {
    return Graphics.boxHeight / 2;
};

//==============================
// * update Sprites
//==============================
DizzySprites.prototype.updateSprites = function(sprite,i) {
	sprite.x = this.centerX();
	sprite.y = this.centerY();
	if (sprite.wait > 0) {
		sprite.wait--;
		if (this.data().realTime && sprite.wait <= 0) {this.refreshBitmap(sprite)};
	    return;
	};	
    sprite.opacity -= 5;
	sprite.rotation += sprite.rt;
    sprite.scale.x += sprite.sc;
	sprite.scale.y += sprite.sc;
	if (sprite.opacity === 0 && this.data().duration > 0) {this.prepareRefresh(sprite,i)};
};

//==============================
// * need Remove Sprites
//==============================
DizzySprites.prototype.needRemoveSprites = function(needClear) {
	if (!needClear) {return false};
	if (this.data().loop) {return false};
	if (this.data().duration > 0) {return false};
    return true;
};

//==============================
// * update
//==============================
DizzySprites.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	if ($gameTemp._dizzyEffectLoadTime > 0) {$gameTemp._dizzyEffectLoadTime--};
	if (this.data().refresh) {this.refreshDizzySprites(false)};
	if (!this._sprites && this.dataSprites().length > 0 && $gameTemp._dizzyEffectLoadTime === 0) {this.refreshDizzySprites(true)};
	if (this.data().duration > 0 && !this.data().loop) {this.data().duration--};
	if (this._sprites) {
		var needClear = true;
	  	for (var i = 0; i < this._sprites.length ; i++) {
			 this.updateSprites(this._sprites[i],i);
			 if (this._sprites[i].opacity > 0) {needClear = false}
		};
		if (this.needRemoveSprites(needClear)) {this.removeSprites()};
	};
};