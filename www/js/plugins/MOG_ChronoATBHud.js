//=============================================================================
// MOG_ChronoATBHud.js
//=============================================================================

/*:
 * @plugindesc (v1.2) Apresenta a Hud de ATB para o Chrono Engine.
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
 * +++ MOG - Chrono ATB Hud (v1.2) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Apresenta a Hud de ATB para o Chrono Engine.
 *
 * =============================================================================
 * HISTÓRICO 
 * =============================================================================
 * (v1.2) - Adicionado o Ícone de Habilidade. 
 *        - Possibilidade de mudar o ângulo da hud.
 * (v1.1) - Correção dos plugins parameters não estarem funcionando.
 *   
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ChronoATBHud = true;
　　var Moghunter = Moghunter || {}; 	

	Moghunter.parameters = PluginManager.parameters('MOG_ChronoATBHud');
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
ImageManager.loadATBIconCN = function(filename) {
	return this.loadBitmap('img/chrono/atb/', filename, 0, true);
};	

//=============================================================================
// ** Spriteset Map
//=============================================================================

//==============================
// * Create ATB Sprites
//==============================
Spriteset_Map.prototype.createATBHud = function() {
    this._atbGaugeCR = new ATB_IconGauge();
	this._chronoField.addChild(this._atbGaugeCR);
};

//=============================================================================
// ** ATB Icon Gauge
//=============================================================================
function ATB_IconGauge() {
    this.initialize.apply(this, arguments);
};

ATB_IconGauge.prototype = Object.create(Sprite.prototype);
ATB_IconGauge.prototype.constructor = ATB_IconGauge;

//==============================
// * Initialize
//==============================
ATB_IconGauge.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
	this._angle = Moghunter.atbIconAngle * Math.PI / 180;
	this.rotation = this._angle;	
	this._iconImg = ImageManager.loadSystem("IconSet");
	this._skillIcon = String(Moghunter.atbIcon_SkillVisible) == "true" ? true : false;
	this.createLayout();
	this.createIcons();
};

//==============================
// * battlers
//==============================
ATB_IconGauge.prototype.battlers = function() {
    if ($gameSystem.isChronoMode() && $gameMap._battlersOnScreen) {
		return $gameMap._battlersOnScreen;
	};
	return [];
};

//==============================
// * At
//==============================
ATB_IconGauge.prototype.atb = function(battler) {
 if (Imported.MOG_ATB) {return battler._atb};
 if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {
      return battler._chrono.atb;
 };
 return -1;	
}

//==============================
// * Maxatb
//==============================
ATB_IconGauge.prototype.maxatb = function(battler) {
  if (Imported.MOG_ATB) {return battler._max_atb};
  if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {
      return battler._chrono.maxAtb;
  };  
  return 1;	
};

//==============================
// * Cast AT
//==============================
ATB_IconGauge.prototype.cast_at = function(battler) {
  if (Imported.MOG_ATB) {return battler._cast_atb[1]};
  if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {
      return -battler._ras.cast.duration;
  };
  return 0;	
};

//==============================
// * Cast Max AT
//==============================
ATB_IconGauge.prototype.cast_max_at = function(battler) {
  if (Imported.MOG_ATB) {return battler._cast_atb[2]};
  if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {
      return battler._ras.cast.maxDuration;
  };  
  return 1;	
};

//==============================
// * Is Casting
//==============================
ATB_IconGauge.prototype.is_casting = function(battler) {
  if (!battler) {return false};
  if (Imported.MOG_ATB) {if (battler._cast_atb[0]) {return true;}};
  if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {
      return battler.isCastingC();
  };    
  return false;	
};

//==============================
// * Is Max Atb
//==============================
ATB_IconGauge.prototype.inTurn = function(battler) {
	if (!this.is_max_at(battler)) {return false};
	if (!$gameSystem._chronoMode.inTurn) {return false};
	if (!battler._chrono.inAction) {return false};
	return true;
};

//==============================
// * Is Max Atb
//==============================
ATB_IconGauge.prototype.is_max_at = function(battler) {
	return this.atb(battler) >= this.maxatb(battler);
};

//==============================
// * Is Max Cast
//==============================
ATB_IconGauge.prototype.is_max_cast = function(battler) {
	return this.cast_at(battler) >= this.cast_max_at(battler);
};

//==============================
// * Item
//==============================
ATB_IconGauge.prototype.item = function(battler) {
	if (!battler) {return null};
	if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {
		return battler._ras.cast.item;
	};
	return null
};

//==============================
// * Create Layout
//==============================
ATB_IconGauge.prototype.createLayout = function() {
	this.x = Moghunter.atbIcon_GaugeX;
	this.y = Moghunter.atbIcon_GaugeY;	
    this._layout = new Sprite(ImageManager.loadATBIconCN("ATB_Gauge"));
	this._layout.anchor.x = 0.5;
	this.addChild(this._layout);
};

//==============================
// * Create Icons
//==============================
ATB_IconGauge.prototype.createIcons = function() {
    this._icons = [];
	this._skillIcons = [];
	for (var i = 0; i < this.battlers().length; i++) {
		 var battler = this.battlers()[i].battler();
		 if (battler.isActor()) {
			 var name = "Actor_" + String(battler._actorId);
		 } else {
			 var name = "Enemy_" + String(battler._enemyId);
		 };
		 this._icons[i] = new Sprite(ImageManager.loadATBIconCN(name));
		 this._icons[i].battler = battler;
		 this._icons[i].anchor.x = 0.5;
		 this._icons[i].anchor.y = 0.5;
		 this._icons[i].opacity = 0
		 this._icons[i].nx = 0;
		 this._icons[i].ny = 0;
		 this._icons[i].rotation = -this._angle
		 this.addChild(this._icons[i]);
		 if (this._skillIcon) {this.createSkillIcon(i)};
	};	
};

//==============================
// * Index
//==============================
ATB_IconGauge.prototype.createSkillIcon = function(i) {
	this._skillIcons[i] = new Sprite();
	this._skillIcons[i].item = null;
	this._skillIcons[i].org = [Moghunter.atbIcon_SkillX,Moghunter.atbIcon_SkillY];
	this._skillIcons[i].scale.x = Moghunter.atbIcon_SkillScale;
	this._skillIcons[i].scale.y = Moghunter.atbIcon_SkillScale;
	this._skillIcons[i].rotation = this._icons[i].rotation;
	this.addChild(this._skillIcons[i]);
};

//==============================
// * Height EX
//==============================
ATB_IconGauge.prototype.heightEX = function(battler,type) {
	if (type === 1) {
	   if (Imported.MOG_ChronoEngine && battler.isCastingC()) {
		   return -Moghunter.atbIcon_GaugeSize;
	   };  		
	};
	return 0;
};

//==============================
// * update Icon
//==============================
ATB_IconGauge.prototype.updateIcon = function(sprite,index) {
	 if ($gameSystem._chronoMode.phase > 3) {return}
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
ATB_IconGauge.prototype.updateSkillIcon = function(spriteskill,spriteicon,battler) {
	spriteskill.x = spriteicon.x + spriteskill.org[0];
	spriteskill.y = spriteicon.y + spriteskill.org[1];
	spriteskill.opacity = spriteicon.opacity;
	spriteskill.visible = spriteicon.visible;
	if (spriteskill.item != this.item(battler)) {this.refreshIconSkill(spriteskill,battler)};
};

//==============================
// * refresh Icon Skill
//==============================
ATB_IconGauge.prototype.refreshIconSkill = function(spriteskill,battler) {
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
ATB_IconGauge.prototype.mvto = function(value,real_value) {
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
// * update
//==============================
ATB_IconGauge.prototype.update = function() {
    Sprite.prototype.update.call(this);
    for (var i = 0; i < this._icons.length; i++) {
		 this.updateIcon(this._icons[i],i);
	};
};