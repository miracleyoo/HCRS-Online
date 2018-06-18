//=============================================================================
// MOG_MapNameHud.js
//=============================================================================

/*:
 * @plugindesc (v1.3) Apresenta uma Hud com o nome do mapa.
 * @author Moghunter
 *
 * @param Hud X-Axis
 * @desc Definição da posição X-Axis da Hud.
 * @default 250
 *
 * @param Hud Y-Axis
 * @desc Definição da posição Y-Axis da Hud.
 * @default 60
 *
 * @param Name X-Axis
 * @desc Definição da posição X-Axis do nome.
 * @default 80
 *
 * @param Name Y-Axis
 * @desc Definição da posição Y-Axis do nome.
 * @default 15
 *
 * @param Duration
 * @desc Definição do tempo de apresentação.
 * @default 160
 *
 * @param Font Size
 * @desc Definição do tamanho da fonte.
 * @default 20
 *
 * @param Font Italic
 * @desc Ativar fonte em itálico.
 * @default false
 *
 * @param Slide Animation
 * @desc Ativar animação de deslize.
 * @default true
 *
 * @param Zoom Animation
 * @desc Ativar animação de zoom.
 * @default false
 *
 * @param Zoom Text Animation
 * @desc Ativar animação de zoom apenas para o texto.
 * @default true
 * 
 * @param Particle Animation
 * @desc Ativar animação de partículas.
 * @default true
 *
 * @param Particles Number
 * @desc Numero partículas.
 * @default 15
 *
 * @param Circle Animation
 * @desc Ativar Animação de círculo.
 * @default true
 *
 * @param Circle X-Axis
 * @desc Definição X-axis do círculo.
 * @default -120
 *
 * @param Circle Y-Axis
 * @desc Definição Y-axis do círculo.
 * @default 0
 *
 * @param Circle Z-Index
 * @desc Definição Z-index do círculo.
 * 0 - Abaixo do Layout  /  1 Acima do Layout.
 * @default 0
 *
 * @param Circle Rotation Speed
 * @desc Definição da velocidade de rotação.
 * @default 0.01
 *
 * @help  
 * =============================================================================
 * +++ MOG Map Name Hud(v1.3) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Apresenta uma Hud com o nome do mapa.
 * Serão necessários os arquivos. (img/system/)
 *
 * MapName.png
 * MapName_Circle.png
 * MapName_Particles.png 
 * 
 * =============================================================================
 * HISTÓRICO
 * =============================================================================
 * (v1.3) - Melhoria da codificação e na compatibilidade de plugins.  
 * (v1.2) - Correção do bug de não apagar a hud em mapas sem nomes.
 * (v1.1) - Adicionado novos efeitos de animações.
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_MapNameHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_MapNameHud');   
    Moghunter.mhud_pos_x = Number(Moghunter.parameters['Hud X-Axis'] || 250);
	Moghunter.mhud_pos_y = Number(Moghunter.parameters['Hud Y-Axis'] || 32);
	Moghunter.mhud_text_x = Number(Moghunter.parameters['Name X-Axis'] || 80);
	Moghunter.mhud_text_y = Number(Moghunter.parameters['Name Y-Axis'] || 15);
	Moghunter.mhud_duration = Number(Moghunter.parameters['Duration'] || 160);
	Moghunter.mhud_fontsize = Number(Moghunter.parameters['Font Size'] || 20);	
	Moghunter.mhud_fontItalic = String(Moghunter.parameters['Font Italic'] || 'false');	
    Moghunter.mhud_slide = String(Moghunter.parameters['Slide Animation'] || 'true');
    Moghunter.mhud_zoom = String(Moghunter.parameters['Zoom Animation'] || 'false');
	Moghunter.mhud_textZoom = String(Moghunter.parameters['Zoom Text Animation'] || 'true');
    Moghunter.mhud_paticles = String(Moghunter.parameters['Particle Animation'] || 'true');
    Moghunter.mhud_paticlesNumber = Number(Moghunter.parameters['Particles Number'] || 15);
	Moghunter.mhud_circle = String(Moghunter.parameters['Circle Animation'] || 'true');
	Moghunter.mhud_circleX = Number(Moghunter.parameters['Circle X-Axis'] || -120);
	Moghunter.mhud_circleY = Number(Moghunter.parameters['Circle Y-Axis'] || 0);
	Moghunter.mhud_circleZ = Number(Moghunter.parameters['Circle Z-Index'] || 0);
	Moghunter.mhud_circleR = Number(Moghunter.parameters['Circle Rotation Speed'] || 0.01);
    

//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_mhud_system_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_mhud_system_initialize.call(this);
    this.setMapNameTemp();
};

//==============================
// * set Map Name Temp
//==============================
Game_System.prototype.setMapNameTemp = function() {
	this._mapNameData = {};
	this._mapNameData.refresh = false;
	this._mapNameData.slide = String(Moghunter.mhud_slide) === "true" ? true : false;
	this._mapNameData.zoomMode = String(Moghunter.mhud_zoom) === "true" ? true : false;
	this._mapNameData.particles = String(Moghunter.mhud_paticles) === "true" ? true : false;
	this._mapNameData.nParticles = Number(Moghunter.mhud_paticlesNumber);
	this._mapNameData.circle = String(Moghunter.mhud_circle) === "true" ? true : false;
	this._mapNameData.circleZ = Number(Moghunter.mhud_circleZ);
    this._mapNameData.orgX = Number(Moghunter.mhud_pos_x);
	this._mapNameData.orgY = Number(Moghunter.mhud_pos_y);	
	this._mapNameData.name = "";
	this._mapNameData.xo = 0;
	this._mapNameData.textZoom = String(Moghunter.mhud_textZoom) === "true" ? true : false;
	this._mapNameData.textScale = 0;
	this._mapNameData.x = 0;
	this._mapNameData.y = 0;
	this._mapNameData.cw = 0;
	this._mapNameData.ch = 0;
	this._mapNameData.cw2 = 0;
	this._mapNameData.rotation = 0;
	this._mapNameData.ch2 = 0;	
	this._mapNameData.opacity = 0;
	this._mapNameData.scaleX = 1.00;
	this._mapNameData.scaleY = 1.00;
	this._mapNameData.mode = 0;
	this._mapNameData.mapID = 0;
	this._mapNameData.duration = 0;
	this._mapNameData.startDuration = 0;
	this._mapNameData.endDuration = 0;
};

//==============================
// * clear Map Name Temp
//==============================
Game_System.prototype.clearMapNameTemp = function() {
	this._mapNameData.rotation = 0;
	this._mapNameData.xo = 0;
	this._mapNameData.textScale = 0;
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
var _mog_mapName_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_mapName_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createMapNameHud();
	this.sortMz();
};

//==============================
// ** create Map Name Hud
//==============================
Scene_Map.prototype.createMapNameHud = function() {
	if (this.needRefreshMhud()) {
		$gameSystem._mapNameData.refresh = true;
		$gameSystem._mapNameData.name = $gameMap.displayName();
	};
	if ($gameSystem._mapNameData.mapID != $gameMap._mapId) {
		$gameSystem.clearMapNameTemp();
		
	};
	$gameSystem._mapNameData.mapID = $gameMap._mapId;
	if ($gameMap.displayName()) {
	    this._mapNameHud = new Map_Name_Hud();
		this._mapNameHud.mz = 140;
		this._hudField.addChild(this._mapNameHud);			
	};	
};

//==============================
// * Need Refresh MHud
//==============================
Scene_Map.prototype.needRefreshMhud = function() {
	if (!$gameMap.isNameDisplayEnabled()) {return false};
	if (!$gameMap.displayName()) {return false};
	if ($gameSystem._mapNameData.mapID === $gameMap._mapId) {return false};
	return true;
};

//=============================================================================
// * Map_Name_Hud
//=============================================================================
function Map_Name_Hud() {
    this.initialize.apply(this, arguments);
};

Map_Name_Hud.prototype = Object.create(Sprite.prototype);
Map_Name_Hud.prototype.constructor = Map_Name_Hud;

//==============================
// * Initialize
//==============================
Map_Name_Hud.prototype.initialize = function() {	
    Sprite.prototype.initialize.call(this);	
    this.loadBitmap();
	this.createSprites();
	if (this.data().refresh) {this.refresh()};
	this.updateBase();
};

//==============================
// * Data
//==============================
Map_Name_Hud.prototype.data = function() {	
    return $gameSystem._mapNameData;
};

//==============================
// * Load Img
//==============================
Map_Name_Hud.prototype.loadBitmap = function() {
	this._layoutImg = ImageManager.loadSystem("MapName");
};

//==============================
// * get Data
//==============================
Map_Name_Hud.prototype.getData = function() {
    this.data().cw = this._layoutImg.width;
	this.data().ch = this._layoutImg.height;
    this.data().cw2 = Math.floor(this.data().cw / 2);
	this.data().ch2 = Math.floor(this.data().ch / 2);	
	if (this._particles) {
		for (var i = 0; i < this._particles.length ; i++) {
			 this.refreshParticles(this._particles[i],true);
		};
	};
};

//==============================
// * mode
//==============================
Map_Name_Hud.prototype.mode = function() {
    return this.data().mode;
};

//==============================
// * map Name
//==============================
Map_Name_Hud.prototype.mapName = function() {
    return this.data().name ? String(this.data().name) : "";
};

//==============================
// * create Sprites
//==============================
Map_Name_Hud.prototype.createSprites = function() {
	if (this.data().circle && this.data().circleZ === 0) {this.createCircle()};
    this.createLayout();
	if (this.data().circle && this.data().circleZ != 0) {this.createCircle()};
	if (this.data().particles) {this.createParticles()};
	this.createName();
};

//==============================
// * create Sprites
//==============================
Map_Name_Hud.prototype.createLayout = function() {
	this._layout = new Sprite(this._layoutImg);
	this._layout.anchor.x = 0.5;
	this._layout.anchor.y = 0.5;
	this.addChild(this._layout);
};

//==============================
// * create Name
//==============================
Map_Name_Hud.prototype.createName = function() {
	this._name = new Sprite(new Bitmap(160,32));
	this._name.bitmap.fontSize = Number(Moghunter.mhud_fontsize);
	this._name.bitmap.fontItalic = String(Moghunter.mhud_fontItalic) === "true" ? true : false;
	this._name.anchor.x = 0.5;
	this._name.anchor.y = 0.5;
	this._name.cw = this._name.bitmap.width;
	this._name.ch = this._name.bitmap.height;
	this._name.org = [
	    	Number(Moghunter.mhud_text_x) - this._name.cw / 2,
		    Number(Moghunter.mhud_text_y) - this._name.ch / 2
	];
	this.addChild(this._name);
	this.refreshName();
};

//==============================
// * refresh Name
//==============================
Map_Name_Hud.prototype.refreshName = function() {
	this._name.bitmap.clear()
	this._name.bitmap.drawText(this.mapName(),0,0,this._name.cw,this._name.ch,"center");
	if (this.data().slide && this.data().xo === 0 && !this.data().textZoom) {this.data().xo = -10};
};

//==============================
// * create Circle
//==============================
Map_Name_Hud.prototype.createCircle = function() {
	this._circle = new Sprite(ImageManager.loadSystem("MapName_Circle"));
	this._circle.anchor.x = 0.5;
	this._circle.anchor.y = 0.5;
	this._circle.org = [Moghunter.mhud_circleX,Moghunter.mhud_circleY];
	this._circle.rs = Moghunter.mhud_circleR;
	this._circle.rotation = this.data().rotation;
	this.addChild(this._circle);
};

//==============================
// * update Circle
//==============================
Map_Name_Hud.prototype.updateCircle = function() {
	this.data().rotation += this._circle.rs;
	this._circle.rotation = this.data().rotation;
};

//==============================
// * create Particles
//==============================
Map_Name_Hud.prototype.createParticles = function() {
	this._particlesField = new Sprite();
	this.addChild(this._particlesField); 
	this._particles = [];
	for (var i = 0; i < this.data().nParticles ; i++) {
		 this._particles[i] = new Sprite(ImageManager.loadSystem("MapName_Particles"));
		 this._particles[i].anchor.x = 0.5;
		 this._particles[i].anchor.y = 0.5;
		 this._particles[i].sx = 0;
		 this._particles[i].sy = 0;
		 this._particles[i].so = 0;
		 this._particles[i].sr = 0;	
		 this._particlesField.addChild(this._particles[i]); 
		 if (this.data().cw != 0) {this.refreshParticles(this._particles[i],true)};
	};
};
  
//==============================
// * update Particles
//==============================
Map_Name_Hud.prototype.updateParticles = function() {
    for (var i = 0; i < this._particles.length ; i++) {
		 this.updateParticlesAnimation(this._particles[i]);
	};
};

//==============================
// * refresh Sprites
//==============================
Map_Name_Hud.prototype.refreshParticles = function(sprite,start) {
	if (start) {
        var wrange = -this.data().cw2 + Math.randomInt(this.data().cw);
	} else {
		var wrange = -this.data().cw2 + Math.randomInt(this.data().cw / 5);
	};
	var hrange = -this.data().ch2 + Math.randomInt(this.data().ch);
	sprite.x = wrange;	
	sprite.y = hrange;	
	var srange = Math.randomInt(5) * 0.2 + 0.7;
	sprite.sx = srange;
	sprite.opacity = 0
	var orange = 0.5 + ((Math.randomInt(2) + 0.5) * 1.2);
	sprite.so = orange;	
	sprite.scale.x = 0.75 + (Math.randomInt(50) * 0.01);
	sprite.scale.y = sprite.scale.x;	
	var rrange = 0.002 + (Math.randomInt(10) * 0.002);
	sprite.sr = rrange;
	
};

//==============================
// * update Particles
//==============================
Map_Name_Hud.prototype.updateParticlesAnimation = function(sprite) {
	sprite.x += sprite.sx;
	sprite.y += sprite.sy;
	sprite.rotation += sprite.sr;
	if (sprite.x < this.data().cw2 - 25) {
	    sprite.opacity += sprite.so;
	} else {
	    sprite.opacity -= 10;
    };
    if (this.needRefreshParticles(sprite)) {this.refreshParticles(sprite,false)};	
};

//==============================
// * need Refresh Particles
//==============================
Map_Name_Hud.prototype.needRefreshParticles = function(sprite) {
 	if (sprite.x > this.data().cw2 ) {return true};
	if (sprite.x < -this.data().cw2) {return true};
 	if (sprite.y > this.data().ch2) {return true};
	if (sprite.y < -this.data().ch2) {return true};	
	return false;
};


//==============================
// * refresh
//==============================
Map_Name_Hud.prototype.refresh = function() {
    this.data().refresh = false;
    this.data().x = this.data().orgX;
	this.data().y = this.data().orgY;
	this.data().duration = Number(Moghunter.mhud_duration);
    this.setStartAnimation();
};

//==============================
// * Update Zoom Normal
//==============================
Map_Name_Hud.prototype.updateZoomNormal = function(zoomSpeed) {
	if (this.data().scaleX < 1.00) {
		this.data().scaleX += zoomSpeed;
		if (this.data().scaleX > 1.00) {this.data().scaleX = 1.00};
	} else if (this.data().scaleX > 1.00) {
		this.data().scaleX -= zoomSpeed;
		if (this.data().scaleX < 1.00) {this.data().scaleX = 1.00};		
	};
	if (this.data().scaleY < 1.00) {
		this.data().scaleY += zoomSpeed;
		if (this.data().scaleY > 1.00) {this.data().scaleY = 1.00};
	} else if (this.data().scaleY > 1.00) {
		this.data().scaleY -= zoomSpeed;
		if (this.data().scaleY < 1.00) {this.data().scaleY = 1.00};		
	};	
};

//==============================
// * set Start Animation
//==============================
Map_Name_Hud.prototype.setStartAnimation = function() {
	this.data().opacity = 0;
	this.data().startDuration = 60;
	if (this.data().textZoom) {this.data().textScale = 0.50};
    if (this.data().slide) {this.data().x = this.data().orgX - 50};  
	if (this.data().zoomMode) {
		this.data().scaleX = 0;
		this.data().scaleY = 0;
	};
};

//==============================
// * set End Animation
//==============================
Map_Name_Hud.prototype.setEndAnimation = function() {
	this.data().opacity = 255;
	this.data().endDuration = 60;
};

//==============================
// * Update Start Animation
//==============================
Map_Name_Hud.prototype.updateStartAnimation = function() {
	this.data().startDuration--;
	this.data().opacity += 5;
	if (this.data().x < this.data().orgX) {this.data().x++};
	if (this.data().xo < 0) {this.data().xo += 0.2};
	if (this.data().zoomMode) {this.updateZoomNormal(0.015)};
};

//==============================
// * Update Middle Animation
//==============================
Map_Name_Hud.prototype.updateMiddleAnimation = function() {
	this.data().duration--;
	if (this.data().zoomMode) {this.updateZoomNormal(0.015)};
	if (this.data().duration === 0) {this.setEndAnimation()};
};

//==============================
// * Update End Animation
//==============================
Map_Name_Hud.prototype.updateEndAnimation = function() {
	this.data().endDuration--;
	this.data().opacity -= 5;
	if (this.data().zoomMode) {
		this.data().scaleX -= 0.015;
		this.data().scaleY = this.data().scaleX;
	};
	if (this.data().slide) {
		this.data().x++;
		this.data().xo += 0.2	
	};
};

//==============================
// * Update Animation
//==============================
Map_Name_Hud.prototype.updateAnimation = function() {
	if (this.data().startDuration > 0) {
		this.updateStartAnimation();
	} else if (this.data().duration > 0) {
		this.updateMiddleAnimation();
	} else if (this.data().endDuration > 0) {
		this.updateEndAnimation();
	};
	if (this.data().textScale > 0) {this.data().textScale -= 0.01};
	if (this._circle) {this.updateCircle()};
	if (this._particlesField) {this.updateParticles()};
};

//==============================
// * Update Sprites
//==============================
Map_Name_Hud.prototype.updateSprites = function() {	
    this.updateAnimation();
    this.updateBase(); 
};

//==============================
// * Update Base
//==============================
Map_Name_Hud.prototype.updateBase = function() {	
    this.opacity = this.data().opacity;
    this._layout.x = this.data().x + (this.data().cw / 2);
	this._layout.y = this.data().y + (this.data().ch / 2);
	this._layout.scale.x = this.data().scaleX;
	this._layout.scale.y = this.data().scaleY;	
	this._name.x = this._layout.x + this._name.org[0] + this.data().xo;
	this._name.y = this._layout.y + this._name.org[1];	
	this._name.scale.x = this._layout.scale.x + (this.data().textScale * 2);
	this._name.scale.y = this._layout.scale.y - (this.data().textScale * 2);
	if (this._circle) {
		this._circle.x = this._layout.x + this._circle.org[0];
		this._circle.y = this._layout.y + this._circle.org[1];	
		this._circle.scale.x = this._layout.scale.x;
		this._circle.scale.y = this._layout.scale.y;	
	};
	if (this._particlesField) {
		this._particlesField.x = this._layout.x;
		this._particlesField.y = this._layout.y;
		this._particlesField.scale.x = this._layout.scale.x;
		this._particlesField.scale.y = this._layout.scale.y;		
	};
};

//==============================
// * Update
//==============================
Map_Name_Hud.prototype.update = function() {	
    Sprite.prototype.update.call(this);	
	if (this.data().cw === 0) {
		if (this._layoutImg.isReady()) {this.getData()};
		return
	} else {
		this.updateSprites();
	};
};

//=============================================================================
// * Window MapName
//=============================================================================

//==============================
// * Refresh
//==============================
Window_MapName.prototype.refresh = function() {
	 this.contents.clear(); 
};