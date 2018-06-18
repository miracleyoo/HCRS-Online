//=============================================================================
// MOG_ActorPictureCM.js
//=============================================================================

/*:
 * @plugindesc (v2.3) Apresenta a imagem do personagem durante a seleção de comandos.
 * @author Moghunter 
 * 
 * @param Slide Speed
 * @desc Definição da velocidade de deslize.
 * @default 10
 * 
 * @param File Name
 * @desc Definição do nome do arquivo.
 * @default Actor_
 * 
 * @param ----------------
 *
 * @param Bust Visible
 * @desc Ativar a imagem secundaria do personagem.
 * @default true
 *
 * @param Bust X-Axis
 * @desc Definição da posição Y-axis da imagem.
 * @default 0
 *
 * @param Bust Y-Axis
 * @desc Definição da posição Y-axis da imagem.
 * @default 0
 *
 * @param Bust Slide X
 * @desc Definição de deslize X-Axis.
 * @default -150
 *
 * @param Bust Slide Y
 * @desc Definição de deslize Y-Axis.
 * @default 0  
 *
 * @param Breath Effect
 * @desc Ativar respiração de respiração.
 * @default true 
 *
 * @param Blink Effect
 * @desc Ativar o efeito de piscar.
 * @default false
 *
 * @param Blink Speed
 * @desc Velocidade de piscar.
 * @default 7
 *
 * @param Blinking Interval
 * @desc Intervalo de para piscar.
 * @default 190
 * 
 * @param ----------------
 * 
 * @param Face Visible
 * @desc Ativar a imagem primaria do personagem.
 * @default true
 *
 * @param Face X-Axis
 * @desc Definição da posição X-axis da imagem.
 * @default 570
 *
 * @param Face Y-Axis
 * @desc Definição da posição Y-axis da imagem.
 * @default 0 
 *
 * @param Face Slide X
 * @desc Definição de deslize X-Axis.
 * @default 150
 *
 * @param Face Slide Y
 * @desc Definição de deslize Y-Axis.
 * @default 0 
 *  
 * @help  
 * =============================================================================
 * +++ MOG - Actor Picture CM (v2.3) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Apresenta a imagem do personagem durante a seleção de comandos.
 * As imagens dos personagens devem ser gravadas na pasta. /img/actor_picture_cm/
 * A nomeação dos arquivos devem ser feitas da seguinte forma.
 * 
 * Actor_ + ID + _bust.png
 *
 * Exemplo
 *
 * Actor_1_bust.png
 * Actor_2_bust.png
 * Actor_3_bust.png
 *
 * ---------------------------------------------------------------------------------------
 *
 * Para definir a imagem secundária do personagem nomeie o arquivo da seguinte
 * forma.
 *
 * Actor_ ID + _sub.png
 *
 * Exemplo
 *
 * Actor_1_sub.png
 * Actpr_2_sub.png
 * ...
 *
 * ---------------------------------------------------------------------------------------
 * 
 * Para definir a imagem dos olhos nomeie o arquivo da seguinte forma.
 * 
 * Actor_ ID + _eyes.png
 *
 * Exemplo
 *
 * Actor_1_eyes.png
 * Actpr_2_eyes.png
 * ... 
 *
 * =============================================================================
 * PLUGIN COMMAND
 * =============================================================================
 * Se desejar mudar a imagem do arquivo de imagem no meio do jogo utilize o 
 * commando abaixo
 *
 * actorCM_fileName : ACTOR_ID : FILE_NAME
 *
 * EG
 *
 * actorCM_fileName : 1 : ActorAwaked_5
 *
 * =============================================================================
 * Para ativar ou desativar o efeito de respiração utilize o plugin 
 * command abaixo
 *
 * actorCM_breathEffect : ACTOR_ID : ENABLE
 *
 * EG
 *
 * actorCM_breathEffect : 1 : true
 *
 * ============================================================================= 
 * HISTÓRICOS
 * =============================================================================
 * (v2.3) - Adição do efeito de respiração.
 *        - Adição do efeito de piscar.
 *        - Diretório de imagem separado.
 * (v2.2) - Melhoria na codificação e na compatibilidade de plugins.
 * (v2.1) - Adicionado a opção de mudar o nome do arquivo através do 
 *          plugin command.
 * (v2.0) - Plugin reescrito por completo, melhoria na codificação.
 *        - Adicionado novas opções de plugin parameters.
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ActorPictureCM = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ActorPictureCM');
    Moghunter.actor_slideSpeed = Number(Moghunter.parameters['Slide Speed'] || 10);
	Moghunter.actor_fileName = String(Moghunter.parameters['File Name'] || "Actor_");
    Moghunter.actor_cm1_visible = String(Moghunter.parameters['Face Visible'] || "true");
	Moghunter.actor_cm1_slideX = Number(Moghunter.parameters['Face Slide X'] || 150);
	Moghunter.actor_cm1_slideY = Number(Moghunter.parameters['Face Slide Y'] || 0);
	Moghunter.actor_cm1_x = Number(Moghunter.parameters['Face X-Axis'] || 570);
    Moghunter.actor_cm1_y = Number(Moghunter.parameters['Face Y-Axis'] || 0);
	Moghunter.actor_cm2_visible = String(Moghunter.parameters['Bust Visible'] || "true");
	Moghunter.actor_cm2_slideX = Number(Moghunter.parameters['Bust Slide X'] || -150);
	Moghunter.actor_cm2_slideY = Number(Moghunter.parameters['Bust Slide Y'] || 0);	
	Moghunter.actor_cm2_x = Number(Moghunter.parameters['Bust X-Axis'] || 0);
    Moghunter.actor_cm2_y = Number(Moghunter.parameters['Bust Y-Axis'] || 0);
	Moghunter.actor_cm2_breathEffect = String(Moghunter.parameters['Breath Effect'] || "true");

    Moghunter.actor_cm3_visible = String(Moghunter.parameters['Blink Effect'] || "true");
	Moghunter.actor_cm3_blinkS = Number(Moghunter.parameters['Blink Speed'] || 5);	
	Moghunter.actor_cm3_blinkD = Number(Moghunter.parameters['Blinking Interval'] || 180);
	
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Actor Hud
//==============================
ImageManager.loadActorpicCM = function(filename) {
    return this.loadBitmap('img/actor_picture_cm/', filename, 0, true);
};			
	
	
//=============================================================================
// ** Game_Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_actorcm_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_alias_mog_actorcm_temp_initialize.call(this);
    this._actorCmData = [false,false,true];
};	

//=============================================================================
// ** Game Interpreter
//=============================================================================

//==============================
// * PluginCommand
//==============================
var _mog_actorCM_gint_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_mog_actorCM_gint_pluginCommand.call(this,command, args)
	if (command === "actorCM_fileName")  {this.setActorCM(args)};
	if (command === "actorCM_breathEffect")  {this.setActorBreathEffect(args)};
	return true;
};

//==============================
// * Set Actor CM
//==============================
Game_Interpreter.prototype.setActorCM = function(args) {
	var id = Number(args[1]);
	var fileName = String(args[3]);
	for (var i = 0; i < $gameParty.members().length; i++) {
	    var actor = $gameParty.members()[i];
		if (actor._actorId === id) {
			if (actor) {actor.setActorCMNAme(fileName)};
		};
	};
};

//==============================
// * Set Actor Breath Effect
//==============================
Game_Interpreter.prototype.setActorBreathEffect = function(args) {
	var id = Number(args[1]);
	var enable = String(args[3]) == "true" ? true : false;
	for (var i = 0; i < $gameParty.members().length; i++) {
	    var actor = $gameParty.members()[i];
		if (actor._actorId === id) {
			if (actor) {actor.setActorCMbreathEffect(enable)};
		};
	};
};

//=============================================================================
// ** Game_Actor
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_actorcm_gactor_initMembers = Game_Actor.prototype.initMembers;
Game_Actor.prototype.initMembers = function() {
	_mog_actorcm_gactor_initMembers.call(this);
	var breathEffect = String(Moghunter.actor_cm2_breathEffect) == "true" ? true : false;
	this._actorCMData = ["",0,0,breathEffect];
};

//==============================
// * Setup
//==============================
var _mog_actorcm_gactor_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
	_mog_actorcm_gactor_setup.call(this,actorId);
	this._actorCMData[0] = String(Moghunter.actor_fileName) + this._actorId;
};

//==============================
// * set Actor CMNAme
//==============================
Game_Actor.prototype.setActorCMNAme = function(fileName) {
	this._actorCMData[0] = String(fileName);
};
	
//==============================
// * set Actor CM Breath Effect
//==============================
Game_Actor.prototype.setActorCMbreathEffect = function(enable) {
	this._actorCMData[3] = enable;
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
// ** Scene Battle
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_actorPicCM_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_actorPicCM_sbattle_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
    this.createActorCM();
	this.sortMz();	
};

//==============================
// * Create Actor CM
//==============================
Scene_Battle.prototype.createActorCM = function() {
      this.actorPictureCM = new Actor_CMPicture();
      this.actorPictureCM.mz = 105;
      this._hudField.addChild(this.actorPictureCM);
};

//=============================================================================
// * Actor_CMPicture
//=============================================================================
function Actor_CMPicture() {
    this.initialize.apply(this, arguments);
};

Actor_CMPicture.prototype = Object.create(Sprite.prototype);
Actor_CMPicture.prototype.constructor = Actor_CMPicture;

//==============================
// * Initialize
//==============================
Actor_CMPicture.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
	this._actor = null;
	this._CmName = null;
	this._breahEffect = false;
	$gameTemp._actorCmData = [false,false,true];
	this._cm1 = String(Moghunter.actor_cm1_visible) === "true" ? true : false;
	this._cm2 = String(Moghunter.actor_cm2_visible) === "true" ? true : false;
	this._cm3 = String(Moghunter.actor_cm3_visible) === "true" ? true : false;	
	this._sldSpd = Math.min(Math.max(Moghunter.actor_slideSpeed,1),999);
	if (this._cm1) {this.createCM1()};
	if (this._cm2) {this.createCM2()};
	if (this._cm3) {this.createCM3()};
};

//==============================
// * is Visible
//==============================
Actor_CMPicture.prototype.isVisible = function() {
	if (!$gameTemp._actorCmData[2]) {return false};
    return $gameTemp._actorCmData[0];
};

//==============================
// * create CM1
//==============================
Actor_CMPicture.prototype.createCM1 = function() {
    this._supSprite = new Sprite();
	this._supSprite.visible = false;
	this._supSpriteData = null;
	this.addChild(this._supSprite);
};

//==============================
// * create CM2
//==============================
Actor_CMPicture.prototype.createCM2 = function() {
    this._bust = new Sprite();
	this._bust.anchor.x = 0.5;
	this._bust.anchor.y = 1.0;
	this._bust.visible = false;
	this._bustData = null;
	this.addChild(this._bust);
};

//==============================
// * create CM3
//==============================
Actor_CMPicture.prototype.createCM3 = function() {
    this._eyes = new Sprite();
	this._eyes.anchor.x = 0.5;
	this._eyes.anchor.y = 1.0;
	this._eyes.visible = false;
	this.addChild(this._eyes);
};

//==============================
// * Hide Sprites
//==============================
Actor_CMPicture.prototype.hideSprites = function() {
	if (this._supSprite) {this._supSprite.visible = false};
    if (this._bust) {this._bust.visible = false};
};

//==============================
// * move To
//==============================
Actor_CMPicture.prototype.moveto = function(value,real_value) {
	if (value == real_value) {return value};
	var dnspeed = 2 + (Math.abs(value - real_value) / this._sldSpd);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * File Name Real
//==============================
Actor_CMPicture.prototype.fileNameReal = function() {
     if (!this._actor) {return ""};
	 return this._actor._actorCMData[0];
};

//==============================
// * FileName
//==============================
Actor_CMPicture.prototype.fileName = function() {
     return String(this._CmName);
};

//==============================
// * Need Refresh Actor
//==============================
Actor_CMPicture.prototype.refreshActor = function() {
	this._actor = BattleManager.actor();
	if (this._actor) {this.refreshSprites()};
};

//==============================
// * refresh Bitmap CM1
//==============================
Actor_CMPicture.prototype.refreshBitmapCM1 = function() {
	var fileName = this.fileName() + "_sup"
    this._supSprite.bitmap = ImageManager.loadActorpicCM(fileName);	
	this._supSprite.visible = false;
	this._supSpriteData = null;
};

//==============================
// * refresh Bitmap CM2
//==============================
Actor_CMPicture.prototype.refreshBitmapCM2 = function() {
	var fileName = this.fileName() + "_bust";
    this._bust.bitmap = ImageManager.loadActorpicCM(fileName);	
	this._bust.visible = false;
	this._bust.zoom = {}
	this._bust.zoom.speed = 0.0004;
	this._bust.zoom.maxScale = 0.008;
	this._bust.zoom.phase = 0;
	this._bust.zoom.y = 0;
	this._breahEffect = false;
	this._bustData = null;
	if (this._eyes) {this.refreshBitmapCM3()};
};

//==============================
// * refresh Bitmap CM3
//==============================
Actor_CMPicture.prototype.refreshBitmapCM3 = function() {
	var fileName = this.fileName() + "_eyes";
    this._eyes.bitmap = ImageManager.loadActorpicCM(fileName);	
	this._eyes.visible = false;
};

//==============================
// * refresh Sprites
//==============================
Actor_CMPicture.prototype.refreshSprites = function() {
	this._CmName = this._actor ? this._actor._actorCMData[0] : null;
    if (this._supSprite) {this.refreshBitmapCM1()};
	if (this._bust) {this.refreshBitmapCM2()};
};

//==============================
// * Need Refresh Actor
//==============================
Actor_CMPicture.prototype.needRefreshActor = function() {
	 if ($gameTemp._actorCmData[1]) {return true};
	 if (BattleManager.actor() != this._actor) {return true};
	 if (this._actor && this._CmName != this._actor._actorCMData[0])
     return false;
};

//==============================
// * get Data CM1
//==============================
Actor_CMPicture.prototype.getDataCM1 = function() {
    this._supSpriteData = [this._supSprite.bitmap.width,this._supSprite.bitmap.height,
	                   Moghunter.actor_cm1_x,Moghunter.actor_cm1_y,0,0,true,
					   Moghunter.actor_cm1_slideX,Moghunter.actor_cm1_slideY
					  ];
	this._supSprite.visible = true;
	this._supSprite.opacity = 0;
	this._supSprite.x = this._supSpriteData[6] ? this._supSpriteData[2] + this._supSpriteData[7] : this._supSpriteData[2];
	this._supSprite.y = this._supSpriteData[6] ? this._supSpriteData[3] + this._supSpriteData[8] : this._supSpriteData[3];
};

//==============================
// * Update CM1
//==============================
Actor_CMPicture.prototype.updateCM1 = function() {
	 if (!this.isVisible()) {
	     this._supSpriteData[4] = this._supSpriteData[2] + this._supSpriteData[7];
	     this._supSpriteData[5] = this._supSpriteData[3] + this._supSpriteData[8];
		 this._supSprite.opacity -= 15;
	 } else {
	     this._supSpriteData[4] = this._supSpriteData[2];
	     this._supSpriteData[5] = this._supSpriteData[3];
		 this._supSprite.opacity += 15;
	 };	 
	 this._supSprite.x = this.moveto(this._supSprite.x,this._supSpriteData[4]);
 	 this._supSprite.y = this.moveto(this._supSprite.y,this._supSpriteData[5]);
};

//==============================
// * need Get Data 1
//==============================
Actor_CMPicture.prototype.needGetData1 = function() {
	 if (!this._supSprite) {return false};
	 if (this._supSpriteData) {return false};
	 if (!this._supSprite.bitmap) {return false};
	 if (!this._supSprite.bitmap.isReady()) {return false};
	 return true;
};

//==============================
// * get Data CM2
//==============================
Actor_CMPicture.prototype.getDataCM2 = function() {
    this._bustData = [this._bust.bitmap.width,this._bust.bitmap.height,
	                   Moghunter.actor_cm2_x,Moghunter.actor_cm2_y,0,0,true,
					   Moghunter.actor_cm2_slideX,Moghunter.actor_cm2_slideY,
					  0,0,0];
	this._bust.visible = true;
	this._bust.opacity = 0; 
	this._bustData[2] = Moghunter.actor_cm2_x + (Graphics.boxWidth / 2);
	this._bustData[3] = Moghunter.actor_cm2_y + Graphics.boxHeight;
	this._bust.x = this._bustData[6] ? this._bustData[2] + this._bustData[7] : this._bustData[2];
	this._bust.y = this._bustData[6] ? this._bustData[3] + this._bustData[8] : this._bustData[3];
	this._breahEffect = this._actor._actorCMData[3];
	if (this._eyes) {this.getDataCM3()};
};

//==============================
// * get Data CM 3
//==============================
Actor_CMPicture.prototype.getDataCM3 = function() {
    this._eyesData = {};
	this._eyesData.index = 0;
	this._eyesData.speed = 0;
	this._eyesData.motionM = Number(Moghunter.actor_cm3_blinkS);
	this._eyesData.blinkD = Number(Moghunter.actor_cm3_blinkD)
	this._eyesData.duration = Math.randomInt(60) + 60;
	this._eyesData.cw = this._eyes.bitmap.width / 2;
	this._eyesData.ch = this._eyes.bitmap.height;
	this.refreshFrame(this._eyes,-1);
};

//==============================
// * update Blink
//==============================
Actor_CMPicture.prototype.updateBlink = function() {
	if (this._eyesData.duration <= 0) {
		this._eyesData.speed++;
		if (this._eyesData.speed < this._eyesData.motionM) {return}
		this._eyesData.speed = 0;
		this._eyesData.index++;
		if (this._eyesData.index > 1) {
			this._eyesData.index = -1
			this._eyesData.duration = Math.randomInt(160) + this._eyesData.blinkD;
		};
		this.refreshFrame(this._eyes,this._eyesData.index);
     } else {
		this._eyesData.duration--; 
	 }
};

//==============================
// * refresh Frame
//==============================
Actor_CMPicture.prototype.refreshFrame = function(sprite,index) {
    var cw = this._eyesData.cw;
	var ch = this._eyesData.ch;
	var fr = cw * index;
    sprite.setFrame(fr,0,cw,ch)
};

//==============================
// *  update CM3
//==============================
Actor_CMPicture.prototype.updateCM3 = function() {
	this.updateBlink();
	this._eyes.visible = this._bust.visible;
	this._eyes.opacity = this._bust.opacity; 
	this._eyes.x = this._bust.x;
	this._eyes.y = this._bust.y;
	this._eyes.scale.x = this._bust.scale.x;
	this._eyes.scale.y = this._bust.scale.y;
};

//==============================
// * breathSpeed
//==============================
Actor_CMPicture.prototype.breathSpeed = function() {
     return  0.000225;
};

//==============================
// * Update CM2
//==============================
Actor_CMPicture.prototype.updateCM2 = function() {
	 if (!this.isVisible()) {
	     this._bustData[4] = this._bustData[2] + this._bustData[7];
	     this._bustData[5] = this._bustData[3] + this._bustData[8];
		 this._bust.opacity -= 15;
	 } else {
	     this._bustData[4] = this._bustData[2];
	     this._bustData[5] = this._bustData[3];
		 this._bust.opacity += 15;
	 };	 
	 this._bust.x = this.moveto(this._bust.x,this._bustData[4]);
 	 this._bust.y = this.moveto(this._bust.y,this._bustData[5]);
     if (this._breahEffect && this._bust.opacity > 0) {this.updateBreathEffect()};
	 if (this._eyes) {this.updateCM3()};
};

//==============================
// * Update Breath Effect
//==============================
Actor_CMPicture.prototype.updateBreathEffect = function() {	 
	 this._bust.zoom.speed = this.breathSpeed();
	 if (this._bust.zoom.phase === 0) {
		 this._bust.zoom.y += this._bust.zoom.speed
		 if (this._bust.zoom.y >= this._bust.zoom.maxScale) {
		     this._bust.zoom.y = this._bust.zoom.maxScale;
			 this._bust.zoom.phase = 1;
		 };
	 } else {
		 this._bust.zoom.y -= this._bust.zoom.speed
		 if (this._bust.zoom.y <= 0) {
		     this._bust.zoom.y = 0;
			 this._bust.zoom.phase = 0;
		 };		 
	 };
	 this._bust.scale.y = 1.00 + this._bust.zoom.y;
};


//==============================
// * need Get Data 2
//==============================
Actor_CMPicture.prototype.needGetData2 = function() {
	 if (!this._bust) {return false};
	 if (this._bustData) {return false};
	 if (!this._bust.bitmap) {return false};
	 if (!this._bust.bitmap.isReady()) {return false};
	 return true;
};

//==============================
// * Update
//==============================
Actor_CMPicture.prototype.update = function() {
	Sprite.prototype.update.call(this);
	if (this.needRefreshActor()) {this.refreshActor()};
	if (this.needGetData1()) {this.getDataCM1()};
	if (this.needGetData2()) {this.getDataCM2()};
	if (this._supSpriteData ) {this.updateCM1()};
	if (this._bustData) {this.updateCM2()};
};

//=============================================================================
// * Scene Battle
//=============================================================================

//==============================
// * Update
//==============================
var _alias_mog_actorcm_scbat_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
	_alias_mog_actorcm_scbat_update.call(this);
	$gameTemp._actorCmData[0] = this.sprite_actor_cm_visible();
};

//==============================
// * Sprite Actor CM Visible
//==============================
Scene_Battle.prototype.sprite_actor_cm_visible = function() {
	if (!BattleManager.actor()) {return false};
	if (this._actorWindow.active) {return false};
	if (this._enemyWindow.active) {return false};
	if (this._partyCommandWindow.active) {return false};
	if (!BattleManager.isInputting()) {return false};
	return true;
};