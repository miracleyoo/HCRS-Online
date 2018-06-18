//=============================================================================
// MOG_ATB_Gauge.js
//=============================================================================

/*:
 * @plugindesc (v1.0) Apresenta a Hud de ATB para MOG_ATB.
 * @author Moghunter
 *
 * @param Hud Angle
 * @desc Definição do ângulo da hud.
 * @default 0
 * 
 * @param Hud X-Axis
 * @desc Definição X-Axis da hud.
 * @default 740
 *
 * @param Hud Y-Axis
 * @desc Definição Y-Axis da hud.
 * @default 45
 *
 * @param Enemy X-Axis Offset
 * @desc Definição X-Axis offset do ícone dos inimigos.
 * @default 16
 *
 * @param Actor X-Axis Offset
 * @desc Definição X-Axis offset do ícone dos aliados.
 * @default -16
 *
 * @param Active X-Axis
 * @desc Definição X-Axis quando o battler está em turno.
 * @default -3
 *
 * @param Active Y-Axis
 * @desc Definição Y-Axis quando o battler está em turno.
 * @default 30
 *
 * @param Gauge Size
 * @desc Definição do tamanho do medidor.
 * @default 160
 *
 * @param Skill Visible
 * @desc Apresentar o Ícone de habilidade.
 * @default true
 * 
 * @param Skill Zoom
 * @desc Definição do zoom do ícone de habilidade.
 * @default 0.6
 *
 * @param Skill X-Axis
 * @desc Definição X-Axis do ícone de habilidade.
 * @default 0
 *
 * @param Skill Y-Axis
 * @desc Definição Y-Axis do ícone de habilidade.
 * @default 0
 *
 * @help  
 * =============================================================================
 * +++ MOG - ATB Gauge (v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Apresenta a Hud de ATB para MOG_ATB.
 *
 * =============================================================================
 * IMAGES
 * =============================================================================
 * As imagens deverão ser gravadas na pasta (img/atb/)   
 * Para nomear o ícones dos battlers, nomeie da seguinte forma.
 *
 * Actor_ + ACTOR_ID.png
 * Enemy_ + ACTOR_ID.png
 *
 * Ex
 *
 * Actor_1.png
 * Actor_2.png
 * ...
 * Enemy_1.png
 * Enemy_2.png
 * ...
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ATB_Gauge = true;
　　var Moghunter = Moghunter || {}; 	

	Moghunter.parameters = PluginManager.parameters('MOG_ATB_Gauge');
	Moghunter.atbIconAngle = Number(Moghunter.parameters['Hud Angle'] || 0);
	Moghunter.atbIcon_GaugeX = Number(Moghunter.parameters['Hud X-Axis'] || 740);
	Moghunter.atbIcon_GaugeY = Number(Moghunter.parameters['Hud Y-Axis'] || 45); 
	Moghunter.atbIcon_enemyX = Number(Moghunter.parameters['Enemy X-Axis Offset'] || 16);
	Moghunter.atbIcon_actorX = Number(Moghunter.parameters['Actor X-Axis Offset'] || -16);
	Moghunter.atbIcon_inTurnX = Number(Moghunter.parameters['Active X-Axis'] || -3);
	Moghunter.atbIcon_inTurnY = Number(Moghunter.parameters['Active Y-Axis'] || 30);	
    Moghunter.atbIcon_GaugeSize = Number(Moghunter.parameters['Gauge Size'] || 160);
	Moghunter.atbIcon_SkillVisible = String(Moghunter.parameters['Skill Visible'] || 'true');
    Moghunter.atbIcon_SkillScale = Number(Moghunter.parameters['Skill Zoom'] || 0.6);
	Moghunter.atbIcon_SkillX = Number(Moghunter.parameters['Skill X-Axis'] || 0);
	Moghunter.atbIcon_SkillY = Number(Moghunter.parameters['Skill Y-Axis'] || 0);
	
	
//==============================
// * load ATB Icon
//==============================
ImageManager.loadATBIcon = function(filename) {
	return this.loadBitmap('img/atb/', filename, 0, true);
};	

//=============================================================================
// ** Game Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_atb_gTemp_initialize = Game_Temp.prototype.initialize
Game_Temp.prototype.initialize = function() {
	_mog_atb_gTemp_initialize.call(this);
	this._refreshATBGauge = false;;
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
var _mog_atbGauge_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_atbGauge_sbattle_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
    this.createATBGauge();
	this.sortMz();	
};

//==============================
// ** create ATB Gauge
//==============================
Scene_Battle.prototype.createATBGauge = function() {
	this._atbGauge = new ATB_Gauge()
    this._atbGauge.mz = 125;
	this._hudField.addChild(this._atbGauge);
};

//==============================
// ** remove ATB Gauge
//==============================
Scene_Battle.prototype.removeATBGauge = function() {
	if (!this._atbGauge) {return};
	this._hudField.removeChild(this._atbGauge);
};

//==============================
// ** refresh ATB Gauge
//==============================
Scene_Battle.prototype.refreshATBGauge = function() {
	 $gameTemp._refreshATBGauge = false;
	 this.removeATBGauge();
	 this.createATBGauge();
};

//==============================
// ** Update
//==============================
var _mog_atbGauge_Sbat_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
	_mog_atbGauge_Sbat_update.call(this);
	if ($gameTemp._refreshATBGauge) {this.refreshATBGauge()};
};

//=============================================================================
// ** Spriteset Map
//=============================================================================

//=============================================================================
// ** ATB Icon Gauge
//=============================================================================
function ATB_Gauge() {
    this.initialize.apply(this, arguments);
};

ATB_Gauge.prototype = Object.create(Sprite.prototype);
ATB_Gauge.prototype.constructor = ATB_Gauge;

//==============================
// * Initialize
//==============================
ATB_Gauge.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
	this._angle = Moghunter.atbIconAngle * Math.PI / 180;
	this.rotation = this._angle;	
	this._iconImg = ImageManager.loadSystem("IconSet");
	this._skillIcon = String(Moghunter.atbIcon_SkillVisible) == "true" ? true : false;
	this.refreshBattlers();
	this.createLayout();
	this.createIcons();
};

//==============================
// * refresh Battlers
//==============================
ATB_Gauge.prototype.refreshBattlers = function() {
	this._battlers = [];
	for (var i = 0; i < $gameParty.battleMembers().length; i++) {
		 var battler = $gameParty.battleMembers()[i];
		 this._battlers.push(battler);
	};		
	for (var i = 0; i < $gameTroop.members().length; i++) {
		 var battler = $gameTroop.members()[i];
		 this._battlers.push(battler);
	};
};

//==============================
// * battlers
//==============================
ATB_Gauge.prototype.battlers = function() {
    if (this._battlers) {return this._battlers};
	return [];
};

//==============================
// * At
//==============================
ATB_Gauge.prototype.atb = function(battler) {
	if (Imported.MOG_ATB) {return battler.atb()};
	return -1;	
}

//==============================
// * Maxatb
//==============================
ATB_Gauge.prototype.maxatb = function(battler) {
    if (Imported.MOG_ATB) {return battler.maxAtb()};
    return 1;	
};

//==============================
// * Cast AT
//==============================
ATB_Gauge.prototype.cast_at = function(battler) {
    if (Imported.MOG_ATB) {return battler._cast_atb[1]};
	return 0;	
};

//==============================
// * Cast Max AT
//==============================
ATB_Gauge.prototype.cast_max_at = function(battler) {
    if (Imported.MOG_ATB) {return battler._cast_atb[2]};
    return 1;	
};

//==============================
// * Is Casting
//==============================
ATB_Gauge.prototype.is_casting = function(battler) {
    if (!battler) {return false};
    if (Imported.MOG_ATB) {return battler.isCasting()};
    return false;	
};

//==============================
// * Is Max Atb
//==============================
ATB_Gauge.prototype.inTurn = function(battler) {
	 if (!battler.isMaxAtb()) {return false};
     if (!battler._intTurn) {return false}
	 return true;
};

//==============================
// * Is Max Atb
//==============================
ATB_Gauge.prototype.is_max_at = function(battler) {
	return this.atb(battler) >= this.maxatb(battler);
};

//==============================
// * Is Max Cast
//==============================
ATB_Gauge.prototype.is_max_cast = function(battler) {
	return this.cast_at(battler) >= this.cast_max_at(battler);
};

//==============================
// * Item
//==============================
ATB_Gauge.prototype.item = function(battler) {
	if (!battler) {return null};
	return battler._cast_atb[0];
	return null
};

//==============================
// * Create Layout
//==============================
ATB_Gauge.prototype.createLayout = function() {
	this.x = Moghunter.atbIcon_GaugeX;
	this.y = Moghunter.atbIcon_GaugeY;	
    this._layout = new Sprite(ImageManager.loadATBIcon("ATB_Gauge"));
	this._layout.anchor.x = 0.5;
	this.addChild(this._layout);
};

//==============================
// * Create Icons
//==============================
ATB_Gauge.prototype.createIcons = function() {
	this._iconField = new Sprite();
	this.addChild(this._iconField);
    this._icons = [];
	this._skillIcons = [];
	for (var i = 0; i < this.battlers().length; i++) {
		 var battler = this.battlers()[i];
		 if (battler.isActor()) {
			 var name = "Actor_" + String(battler._actorId);
		 } else {
			 var name = "Enemy_" + String(battler._enemyId);
		 };
		 this._icons[i] = new Sprite(ImageManager.loadATBIcon(name));
		 this._icons[i].battler = battler;
		 this._icons[i].anchor.x = 0.5;
		 this._icons[i].anchor.y = 0.5;
		 this._icons[i].opacity = 0
		 this._icons[i].nx = 0;
		 this._icons[i].ny = 0;
		 this._icons[i].rotation = -this._angle
		 this._iconField.addChild(this._icons[i]);
		 if (this._skillIcon) {this.createSkillIcon(i,this._icons[i])};
	};	
};

//==============================
// * Index
//==============================
ATB_Gauge.prototype.createSkillIcon = function(i,sprite) {
	this._skillIcons[i] = new Sprite();
	this._skillIcons[i].item = null;
	this._skillIcons[i].org = [Moghunter.atbIcon_SkillX,Moghunter.atbIcon_SkillY];
	this._skillIcons[i].scale.x = Moghunter.atbIcon_SkillScale;
	this._skillIcons[i].scale.y = Moghunter.atbIcon_SkillScale;
	this._skillIcons[i].rotation = this._icons[i].rotation;
	sprite.addChild(this._skillIcons[i]);
};

//==============================
// * Height EX
//==============================
ATB_Gauge.prototype.heightEX = function(battler,type) {
	return 1;
};

//==============================
// * update Icon
//==============================
ATB_Gauge.prototype.updateIcon = function(sprite,index) {
     var battler = sprite.battler;	 
	 if (battler.isDead()) {
		 sprite.opacity -= 15;
	 } else {
		 sprite.opacity += 15;
		 if (this.is_casting(battler)) {
			 var h = Moghunter.atbIcon_GaugeSize * this.cast_at(battler) / this.cast_max_at(battler);
			 var h2 = this.heightEX(battler,1);
		 } else {
			 var h = Moghunter.atbIcon_GaugeSize * this.atb(battler) / this.maxatb(battler);
			 var h2 = this.heightEX(battler,0);
		 };
		 if (this.inTurn(battler)) {
			 sprite.nx = Moghunter.atbIcon_inTurnX;
	         sprite.ny = Moghunter.atbIcon_inTurnY;		
		 } else {
			 sprite.nx = battler.isActor() ? Moghunter.atbIcon_actorX : Moghunter.atbIcon_enemyX;
	         sprite.ny = this._layout.height - h + h2;	 
		 };
	 };
	 sprite.x = this.mvto(sprite.x,sprite.nx);
	 sprite.y = this.mvto(sprite.y,sprite.ny);
     if (this._skillIcon) {this.updateSkillIcon(this._skillIcons[index],sprite,battler)};
};

//==============================
// * updateSkillIcon
//==============================
ATB_Gauge.prototype.updateSkillIcon = function(spriteskill,spriteicon,battler) {
	spriteskill.x = spriteskill.org[0];
	spriteskill.y = spriteskill.org[1];
	spriteskill.opacity = spriteicon.opacity;
	spriteskill.visible = spriteicon.visible;
	if (spriteskill.item != this.item(battler)) {this.refreshIconSkill(spriteskill,battler)};
};

//==============================
// * refresh Icon Skill
//==============================
ATB_Gauge.prototype.refreshIconSkill = function(spriteskill,battler) {
	spriteskill.item = this.item(battler);
	if (spriteskill.item) {
		var iconIndex = spriteskill.item.iconIndex;		
		var pw = Window_Base._iconWidth;
		var ph = Window_Base._iconHeight;
		var sx = iconIndex % 16 * pw;
		var sy = Math.floor(iconIndex / 16) * ph;
		spriteskill.bitmap = this._iconImg;
        spriteskill.setFrame(sx, sy, pw, ph);
	} else {
	    spriteskill.bitmap = null;
	};	
	spriteskill.visible = spriteskill.item != null ? true : false;
};

//==============================
// * mv to
//==============================
ATB_Gauge.prototype.mvto = function(value,real_value) {
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
// * need Fade
//==============================
ATB_Gauge.prototype.needFade = function() {
	if ($gameMessage.isBusy()) {return true};
	if ($gameTemp._battleEnd) {return true};
	if ($gameTemp._atbBattleEnd) {return true};
	return false;
};

//==============================
// * Update Visible
//==============================
ATB_Gauge.prototype.updateVisible = function() {
    if (this.needFade()) {
		this.opacity -= 10;
	} else {
		this.opacity += 10;
	};
};


//==============================
// * update Sort Y
//==============================
ATB_Gauge.prototype.updateSortY = function() {
     this._iconField.children.sort(function(b, a){return a.y-b.y})
};

//==============================
// * update
//==============================
ATB_Gauge.prototype.update = function() {
    Sprite.prototype.update.call(this);
	this.updateVisible();
	this.updateSortY();
    for (var i = 0; i < this._icons.length; i++) {
		 this.updateIcon(this._icons[i],i);
	};
};