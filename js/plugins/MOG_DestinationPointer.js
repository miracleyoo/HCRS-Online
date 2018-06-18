//=============================================================================
// MOG_DestinationPointer.js
//=============================================================================

/*:
 * @plugindesc (v1.0) Permite customizar a imagem do cursor do destino.
 * @author Moghunter
 *
 * @param X-Axis Offset
 * @desc Posição X-Axis do cursor.
 * @default 0
 *
 * @param Y-Axis Offset
 * @desc Posição Y-Axis do cursor.
 * @default 0 
 *
 * @param Smooth Movement
 * @desc Ativar movimento suave.
 * @default true
 *
 * @param Zoom Animation
 * @desc Ativar a animação de zoom.
 * @default false
 *
 * @param Blink Animation
 * @desc Ativar a animação de piscar.
 * @default false
 *
 * @param Float Animation
 * @desc Ativar a animação de levitação.
 * @default true
 *
 * @param Blend Mode
 * @desc Definição do modo de blend. (0..2)
 * @default 0
 *
 * @param Rotation Speed
 * @desc Definição da velocidade de rotação da imagem.
 * @default 0 
 * 
 * @param Number of Frames
 * @desc Definição da quantidade de frames da imagem.
 * A imagem será dividida pela quantidade de frames.
 * @default 1
 *
 * @param Animation Speed
 * @desc Definição da velocidade da animação de frames.
 * @default 4
 *
 * @help  
 * =============================================================================
 * +++ MOG - Destination Pointer (v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Permite customizar a imagem do cursor do destino.
 * - Animação por frames de imagens.
 * - Movimento suave.
 * - Permiter ativar ou desativar os efeitos de zoom ou fade.
 *
 * =============================================================================
 * UTILIZAÇÃO
 * ============================================================================= 
 * Serão necessários as imagens.
 *
 * Destination.png
 * Destination_Shadow.png
 *
 * Grave a imagem na pasta (img/system/) 
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_DestinationCursor = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_DestinationPointer');
    Moghunter.destCursor_X = Number(Moghunter.parameters['X-Axis Offset'] || 0);
    Moghunter.destCursor_Y = Number(Moghunter.parameters['Y-Axis Offset'] || 0);
	Moghunter.destCursor_slide = String(Moghunter.parameters['Smooth Movement'] || 'true');
    Moghunter.destCursor_BlendMode = Number(Moghunter.parameters['Blend Mode'] || 0);
	Moghunter.destCursor_Rotation = Number(Moghunter.parameters['Rotation Speed'] || 0);
    Moghunter.destCursor_Zoom = String(Moghunter.parameters['Zoom Animation'] || 'false');
    Moghunter.destCursor_Fade = String(Moghunter.parameters['Blink Animation'] || 'false');
	Moghunter.destCursor_Float = String(Moghunter.parameters['Float Animation'] || 'true');
    Moghunter.destCursor_Frames = Number(Moghunter.parameters['Number of Frames'] || 1);
	Moghunter.destCursor_FramesSpeed = Number(Moghunter.parameters['Animation Speed'] || 1);
	
//=============================================================================
// ** Spriteset Map 
//=============================================================================

//==============================
// * create Destination
//==============================
// >>>>>>> Overwritten Function >>>>>> 
Spriteset_Map.prototype.createDestination = function() {
    this._destinationSprite = new Sprite_DestinationPointer();
    this._destinationSprite.z = 9;
    this._tilemap.addChild(this._destinationSprite);
};
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//=============================================================================
// **  Sprite_Destination Pointer
//=============================================================================
function Sprite_DestinationPointer() {
    this.initialize.apply(this, arguments);
}

Sprite_DestinationPointer.prototype = Object.create(Sprite.prototype);
Sprite_DestinationPointer.prototype.constructor = Sprite_DestinationPointer;

//==============================
// * Initialize
//==============================
Sprite_DestinationPointer.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
	this.setup();
	this.loadbBitmaps();
	if (this._shadow) {this.createSpritePointer()};
    this.createBitmap();
	this.update();
};

//==============================
// * setup
//==============================
Sprite_DestinationPointer.prototype.setup = function() {
	this._shadow = String(Moghunter.destCursor_Float) == 'true' ? true : false;
	var fy = this._shadow ? -16 : 0;
    this._xf = Number(Moghunter.destCursor_X);
	this._yf = Number(Moghunter.destCursor_Y) + fy;
	this._slideMove = String(Moghunter.destCursor_slide) == 'true' ? true : false;
	this._nextX = 0;
	this._nextY = 0;
	this._zoomAni = String(Moghunter.destCursor_Zoom) == 'true' ? true : false;
	this._fadeAni = String(Moghunter.destCursor_Fade ) == 'true' ? true : false;
	this._floatAni = String(Moghunter.destCursor_Float) == 'true' ? true : false;
	this._floatAniI = 0;
	this._floatAniY = 0;
    this._frames = Math.min(Math.max(Moghunter.destCursor_Frames,1),999);
	this._framesIndex = 0; 
	this._framesSpeed = Math.min(Math.max(Moghunter.destCursor_FramesSpeed,1),999);	
	this._framesAni = 0;
	this._rotationSpeed = Number(Moghunter.destCursor_Rotation);
	this.blendMode = Moghunter.destCursor_BlendMode;
	this._mode = 0;
	this._data = [-1,-1];
	this._data2 = [-1,-1];
	this._frameCount = 0;
	this.opacity = 0;
};

//==============================
// * load Bitmaps
//==============================
Sprite_DestinationPointer.prototype.loadbBitmaps = function() {
	this._bitmapImg1 = ImageManager.loadSystem("Destination");
	if (this._shadow) {
		this._bitmapImg2 = ImageManager.loadSystem("Destination_Shadow");
	} else {
        this._bitmapImg2 = new Bitmap(16,16);
	};
};

//==============================
// * get Data
//==============================
Sprite_DestinationPointer.prototype.getData = function() {
    this._data[0] = this._bitmapImg1.width / this._frames;
	this._data[1] = this._bitmapImg1.height;
	var sprite = this._pointer ? this._pointer : this;
	if (this._frames > 1) {this.refreshFrameAnimation(sprite)};
};

//==============================
// * create Sprite Pointer
//==============================
Sprite_DestinationPointer.prototype.createSpritePointer = function() {
    this._pointer = new Sprite(this._bitmapImg1);
    this._pointer.anchor.x = 0.5;
    this._pointer.anchor.y = 0.5;	
    this.addChild(this._pointer);
};

//==============================
// * create Bitmap
//==============================
Sprite_DestinationPointer.prototype.createBitmap = function() {
	var bt = this._pointer ? this._bitmapImg2 : this._bitmapImg1;
    this.bitmap = bt;
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
};

//==============================
// * refresh Frame Animation
//==============================
Sprite_DestinationPointer.prototype.refreshFrameAnimation = function(sprite) {
     var ws = this._data[0] * this._framesIndex;
     sprite.setFrame(ws,0,this._data[0],this._data[1]);
     this._framesIndex++;
	 if (this._framesIndex >= this._frames) {this._framesIndex = 0};
};

//==============================
// * x Pos
//==============================
Sprite_DestinationPointer.prototype.xPos = function() {
	var x = $gameTemp.destinationX();
	var xo = this._pointer ? 0 : this._xf;
	return xo + ($gameMap.adjustX(x) + 0.5) * $gameMap.tileWidth();
};

//==============================
// * y Pos
//==============================
Sprite_DestinationPointer.prototype.yPos = function() {
	var y = $gameTemp.destinationY();
	var f = this._pointer ? 0 : this._floatAniY;
	var yo = this._pointer ? 0 : this._yf;
	return yo + f + (($gameMap.adjustY(y) + 0.5) * $gameMap.tileHeight());
};

//==============================
// * move to Pos
//==============================
Sprite_DestinationPointer.prototype.movetoPos = function(value,real_value) {
	if (value == real_value) {return value};
	var dnspeed = 5 + (Math.abs(value - real_value) / 10);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * update Position
//==============================
Sprite_DestinationPointer.prototype.updatePosition = function() {
    if (this._slideMove) {	   
	   this.x = this.movetoPos(this.x,this.xPos());
       this.y = this.movetoPos(this.y,this.yPos());
	} else {
       this.x = this.xPos();
       this.y = this.yPos();
	};
	if (this._pointer) {
		this._pointer.x = this._xf;
		this._pointer.y = this._floatAniY + this._yf;
    };
};

//==============================
// * update Zoom Animation
//==============================
Sprite_DestinationPointer.prototype.updateZoomAnimation = function(sprite) {
    sprite.scale.x = 1 + this._frameCount / 20;
    sprite.scale.y = sprite.scale.x;
};

//==============================
// * update Fade Animation
//==============================
Sprite_DestinationPointer.prototype.updateFadeAnimation = function(sprite) {
     sprite.opacity = (20 - this._frameCount) * 25;
};

//==============================
// * update Float Animation
//==============================
Sprite_DestinationPointer.prototype.updateFloatAnimation = function() {
	  this._floatAniI++;
	  if (this._floatAniI < 13) {
		  this._floatAniY--;
	  } else if (this._floatAniI < 26) {
		  this._floatAniY++;
	  } else {
		  this._floatAniI = 0;
		  this._floatAniY = 0;
	  };
};

//==============================
// * update Frame Animation
//==============================
Sprite_DestinationPointer.prototype.updateFrameAnimation = function(sprite) {
	this._framesAni++;
	if (this._framesAni < this._framesSpeed) {return};
	this._framesAni = 0;
    this.refreshFrameAnimation(sprite);
};

//==============================
// * update Rotation Animation
//==============================
Sprite_DestinationPointer.prototype.updateRotationAnimation = function(sprite) {
	sprite.rotation += this._rotationSpeed;
};

//==============================
// * update Animation
//==============================
Sprite_DestinationPointer.prototype.updateAnimation = function() {
    this._frameCount++;
    this._frameCount %= 20;
	var sprite = this._pointer ? this._pointer : this;
	if (this._zoomAni) {this.updateZoomAnimation(sprite)};
	if (this._fadeAni && $gameTemp.isDestinationValid()) {this.updateFadeAnimation(sprite)};
	if (this._rotationSpeed != 0) {this.updateRotationAnimation(sprite)};
	if (this._floatAni) {this.updateFloatAnimation()};
	if (this._frames > 1) {this.updateFrameAnimation(sprite)};
};

//==============================
// * update Sprites
//==============================
Sprite_DestinationPointer.prototype.updateSprites = function() {
    this.updatePosition();
    this.updateAnimation();
    this.visible = true;
};

//==============================
// * update Disabled
//==============================
Sprite_DestinationPointer.prototype.updateDisabled = function() {
	if (this.opacity > 0) {
	    this.opacity -= 15;
	    this.updateAnimation();
    } else { 
        this.updateClear();
	};
};

//==============================
// * update Clear
//==============================
Sprite_DestinationPointer.prototype.updateClear = function() {
	this.x = $gamePlayer.screenX();
	this.y = $gamePlayer.screenY();
	this._frameCount = 0;
	this.visible = false;
	this._floatAniI = 0;
	this._floatAniY = 0;
};

//==============================
// * update Base
//==============================
Sprite_DestinationPointer.prototype.updateBase = function() {
    if ($gameTemp.isDestinationValid()){
		this.opacity = 255;
        this.updateSprites();
    } else {
        this.updateDisabled();
    };
};

//==============================
// * Update
//==============================
Sprite_DestinationPointer.prototype.update = function() {
    Sprite.prototype.update.call(this);
	if (this._data[0] < 0) {
		if (this._bitmapImg1.isReady()) {this.getData()};
	} else {
		this.updateBase();
	};
};