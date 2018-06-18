//=============================================================================
// MOG_ComboCounter.js
//=============================================================================

/*:
 * @plugindesc (v1.6) Apresenta a quantidade de acertos no alvo.
 * @author Moghunter
 *
 * @param C HIT Layout X-Axis
 * @desc Posição X-Axis do layout do HIT.
 * @default 118
 *
 * @param C HIT Layout Y-Axis
 * @desc Posição Y-Axis do layout do HI.
 * @default 134
 *
 * @param C DMG Layout X-Axis
 * @desc Posição X-Axis do layout do DMG.
 * @default 10
 *
 * @param C DMG Layout Y-Axis
 * @desc Posição Y-Axis do layout do DMG.
 * @default 100
 *
 * @param C HIT Number X-Axis
 * @desc Posição X-Axis do numero do HIT.
 * @default 115
 *
 * @param C HIT Number Y-Axis
 * @desc Posição Y-Axis do numero do HIT.
 * @default 145
 *
 * @param C DMG Number X-Axis
 * @desc Posição X-Axis do numero do DMG.
 * @default 150
 *
 * @param C DMG Number Y-Axis
 * @desc Posição Y-Axis do numero do DMG.
 * @default 103 
 *
 * @help  
 * =============================================================================
 * +++ MOG - Combo Counter (v1.6) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Apresenta a quantidade de Hits ao atacar o inimigo.
 * Serão necessários os arquivos. (img/system/)
 *
 * Combo_A.png
 * Combo_B.png
 * Combo_C.png
 * Combo_D.png 
 *
 * =============================================================================
 * ** Histórico **
 * =============================================================================
 * v1.6 - Melhoria na codificação e na compatibilidade de plugins.
 * v1.5 - Compatibilidade com Chrono Engine.    
 * v1.4 - Correção do plugin parameter da posição Y-Axis do layout.   
 * v1.3 - Melhoria no tempo de apresentação do contador.  
 * v1.2 - Correção do setup do plugin. 
 * v1.1 - Correção do glitch  de piscar o layout no começo da batalha.
 *      
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ComboCounter = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ComboCounter');
    Moghunter.combo_hit_layout_x = Number(Moghunter.parameters['C HIT Layout X-Axis'] || 118);
    Moghunter.combo_hit_layout_y = Number(Moghunter.parameters['C HIT Layout Y-Axis'] || 124);
    Moghunter.combo_dmg_layout_x = Number(Moghunter.parameters['C DMG Layout X-Axis'] || 10);
    Moghunter.combo_dmg_layout_y = Number(Moghunter.parameters['C DMG Layout Y-Axis'] || 90);
    Moghunter.combo_hit_number_x = Number(Moghunter.parameters['C HIT Number X-Axis'] || 115);
    Moghunter.combo_hit_number_y = Number(Moghunter.parameters['C HIT Number Y-Axis'] || 135);	
    Moghunter.combo_dmg_number_x = Number(Moghunter.parameters['C DMG Number X-Axis'] || 150);
    Moghunter.combo_dmg_number_y = Number(Moghunter.parameters['C DMG Number Y-Axis'] || 93);


//=============================================================================
// ** Game Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_hitCounter_TempInitialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_mog_hitCounter_TempInitialize.call(this);
	this.combo_data = [false,0,0,false,false];
};

//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_hitCounter_SysInitialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_hitCounter_SysInitialize.call(this);
    this.clearComboSpriteData();	
};


//==============================
// * clear Combo Sprite Data
//==============================
Game_System.prototype.clearComboSpriteData = function() {
	this._comboSpriteA = {};
	this._comboSpriteB = {};
    this._comboSpriteN1 = [];
	this._comboSpriteN2 = [];	
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * Apply
//==============================
var _alias_mog_combocounter_apply = Game_Action.prototype.apply
Game_Action.prototype.apply = function(target) {
	_alias_mog_combocounter_apply.call(this,target);
	if (this.subject().isActor() && target.isEnemy() && !target.result().isHit()) {
		$gameTemp.combo_data[3] = true;
	};
};

//==============================
// * Game Action
//==============================
var _mog_comboCounterGaction_executeHpDamage = Game_Action.prototype.executeHpDamage;
Game_Action.prototype.executeHpDamage = function(target, value) {
	_mog_comboCounterGaction_executeHpDamage.call(this,target, value);
	if (value > 0) {
		if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {
			$gameTemp.combo_data[0] = true;
			$gameTemp.combo_data[1] += 1;
			$gameTemp.combo_data[2] += value;		
		} else {
			if (this.subject().isActor() && target.isEnemy()) {
			    $gameTemp.combo_data[0] = true;
				$gameTemp.combo_data[1] += 1;
				$gameTemp.combo_data[2] += value;
			}
			else if (this.subject().isEnemy() && target.isActor()) {
				$gameTemp.combo_data[3] = true;	
				$gameTemp.combo_data[4] = false;
			};
		};
	};
};		
	
//=============================================================================
// ** BattleManager
//=============================================================================

//==============================
// * Start Action
//==============================
var _mog_ccount_bmngr_startAction = BattleManager.startAction;
BattleManager.startAction = function() {
    $gameTemp.combo_data[4] = true;
	_mog_ccount_bmngr_startAction.call(this);
};

//==============================
// * End Action
//==============================
var _mog_ccount_bmngr_endAction = BattleManager.endAction;
BattleManager.endAction = function() {
	_mog_ccount_bmngr_endAction.call(this);
	$gameTemp.combo_data[4] = false;
};

//=============================================================================
// ** Scene Battle
//=============================================================================	

//==============================
// * Terminate
//==============================
var _mog_ccount_sbattle_terminate = Scene_Battle.prototype.terminate;
Scene_Battle.prototype.terminate = function() {
    _mog_ccount_sbattle_terminate.call(this);
    $gameTemp.combo_data = [false,0,0,false,false];
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
// ** create Combo Counter
//==============================
Scene_Base.prototype.createComboCounter = function() {
    this._hitCounterSprite = new HitCounterSprites();
	this._hitCounterSprite.mz = 140;
	this._hudField.addChild(this._hitCounterSprite);	
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_comboCounter_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_comboCounter_sbattle_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
    this.createComboCounter();
	this.sortMz();	
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_comboHud_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_comboHud_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	if (Imported.MOG_ChronoEngine) {this.createComboCounter()};
	this.sortMz();
};

//==============================
// * Terminate
//==============================
var _mog_ccount_smap_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
    _mog_ccount_smap_terminate.call(this);
	if (this._hitCounterSprite) {
		this._hitCounterSprite.recordComboSpriteData()
	};
};

//=============================================================================
// * Hit Counter Sprites
//=============================================================================
function HitCounterSprites() {
    this.initialize.apply(this, arguments);
};

HitCounterSprites.prototype = Object.create(Sprite.prototype);
HitCounterSprites.prototype.constructor = HitCounterSprites;

//==============================
// * Initialize
//==============================
HitCounterSprites.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
    this.setup();
	this.loadImages();
    this.createLayout();
	if ($gameSystem._comboSpriteN1.length > 0 && $gameTemp.combo_data[1] > 0) {
		this.loadComboSpriteData()
	};
};

//==============================
// * Setup
//==============================
HitCounterSprites.prototype.setup = function() {
	this.combo_sprite_data = [0,[],[],0,0];
    this.combo_sprite_n1 = [];
	this.combo_sprite_n2 = [];	
};

//==============================
// * Load Images
//==============================
HitCounterSprites.prototype.loadImages = function() {
   this._layImg1 = ImageManager.loadSystem("Combo_A");
   this._layImg2 = ImageManager.loadSystem("Combo_B");
   this._numberImg1 = ImageManager.loadSystem("Combo_C");
   this._numberImg2 = ImageManager.loadSystem("Combo_D");	   
};

//==============================
// * Create Layout
//==============================
HitCounterSprites.prototype.createLayout = function() {
    this.combo_sprite_a = new Sprite(this._layImg1);
    this.combo_sprite_a.opacity = 0;
	this.combo_sprite_b = new Sprite(this._layImg2);
	this.combo_sprite_b.opacity = 0;
	this.addChild(this.combo_sprite_a);
	this.addChild(this.combo_sprite_b);
};

//==============================
// * Update Combo Sprites
//==============================
HitCounterSprites.prototype.update = function() {	
   Sprite.prototype.update.call(this);	
   if ($gameTemp.combo_data[0]) {this.refresh_combo_sprite()};
   this.updateOpacity();
   this.updateLayout();
   this.updateNumber1();
   this.updateNumber2();
   if (this.needUpdateDuration()) {this.updateDuration()};
};

//==============================
// * Update Opacity
//==============================
HitCounterSprites.prototype.updateOpacity = function() {	
   if (this.combo_sprite_data[0] <= 0 && this.combo_sprite_a.opacity > 0) {
      this.combo_sprite_a.opacity -= 10;
	  this.combo_sprite_b.opacity -= 10;
	  this.combo_sprite_data[3] += 1;
   };   
};

//==============================
// * Update Layout
//==============================
HitCounterSprites.prototype.updateLayout = function() {	
   this.combo_sprite_a.x = this.combo_sprite_data[3] + Moghunter.combo_hit_layout_x;
   this.combo_sprite_a.y = Moghunter.combo_hit_layout_y;
   this.combo_sprite_b.x = this.combo_sprite_data[3] + Moghunter.combo_dmg_layout_x;
   this.combo_sprite_b.y = Moghunter.combo_dmg_layout_y;
};

//==============================
// * Update Number 1
//==============================
HitCounterSprites.prototype.updateNumber1 = function() {	
   for (var i = 0; i < this.combo_sprite_n1.length; i++) {
	   this.combo_sprite_n1[i].x = this.combo_sprite_data[3] + this.combo_sprite_data[1][i]  + Moghunter.combo_hit_number_x;
	   this.combo_sprite_n1[i].y = Moghunter.combo_hit_number_y;
	   if (this.combo_sprite_n1[i].scale.x > 1.00) {this.combo_sprite_n1[i].scale.x -= 0.1;
	   this.combo_sprite_n1[i].scale.y = this.combo_sprite_n1[i].scale.x};
	   if (this.combo_sprite_data[0] <= 0) { this.combo_sprite_n1[i].opacity -= 10};
   };
};

//==============================
// * Update Number 2
//==============================
HitCounterSprites.prototype.updateNumber2 = function() {	
   for (var i = 0; i < this.combo_sprite_n2.length; i++) {
	   this.combo_sprite_n2[i].x = this.combo_sprite_data[3] + this.combo_sprite_data[2][i]  + Moghunter.combo_dmg_number_x;
	   this.combo_sprite_n2[i].y = Moghunter.combo_dmg_number_y;
	   if (this.combo_sprite_data[0] <= 0) { this.combo_sprite_n2[i].opacity -= 10};
   };
};

//==============================
// * Need Update Duration
//==============================
HitCounterSprites.prototype.needUpdateDuration = function() {	
   if (this.combo_sprite_data[0] <= 0) {return false};
   if (Imported.MOG_ChronoEngine && $gameSystem._chronoMode.inTurn) {
	   return false
   };   
   return true
};

//==============================
// * Update Duration
//==============================
HitCounterSprites.prototype.updateDuration = function() {	
   if (!$gameTemp.combo_data[4]) {this.combo_sprite_data[0] -= 1};
   if ($gameTemp.combo_data[3]) {this.combo_sprite_data[0] = 0};
   if (this.combo_sprite_data[0] == 0) {
	   $gameTemp.combo_data = [false,0,0,false,false];
	   $gameSystem.clearComboSpriteData();
   };
};


//==============================
// * Load Combo Sprite Data
//==============================
HitCounterSprites.prototype.loadComboSpriteData = function() {	
	this.combo_sprite_a.opacity = $gameSystem._comboSpriteA.opacity;
	this.combo_sprite_a.x = $gameSystem._comboSpriteA.x;
	this.combo_sprite_a.y = $gameSystem._comboSpriteA.y;
	this.combo_sprite_data[0] = $gameSystem._comboSpriteA.time;
	
	this.combo_sprite_b.opacity = $gameSystem._comboSpriteB.opacity;
	this.combo_sprite_b.x = $gameSystem._comboSpriteB.x;
	this.combo_sprite_b.y = $gameSystem._comboSpriteB.y;
	this.refresh_combo_hit();
    this.refresh_combo_damage();
	
	
    for (var i = 0; i < this.combo_sprite_n1.length; i++) {
		 var sprite = this.combo_sprite_n1[i];
		 var data = $gameSystem._comboSpriteN1[i];
		 if (data) {
 		    sprite.x = data.x;
		    sprite.y = data.y = sprite.y;
		    sprite.opacity = data.opacity;
		    sprite.scale.x = data.scale;
			sprite.scale.y = data.scale;
		 }
    };	
	
    for (var i = 0; i < this.combo_sprite_n2.length; i++) {
		 var sprite = this.combo_sprite_n2[i];
		 var data = $gameSystem._comboSpriteN2[i];
		 if (data) {
 		    sprite.x = data.x;
		    sprite.y = data.y = sprite.y;
		    sprite.opacity = data.opacity;
		    sprite.scale.x = data.scale;
			sprite.scale.y = data.scale;
		 }
    };	
	$gameSystem.clearComboSpriteData();
};

//==============================
// * Record Combo Sprite Data
//==============================
HitCounterSprites.prototype.recordComboSpriteData = function() {	
    $gameSystem.clearComboSpriteData();
	
	$gameSystem._comboSpriteA.opacity = this.combo_sprite_a.opacity;
	$gameSystem._comboSpriteA.x = this.combo_sprite_a.x;
	$gameSystem._comboSpriteA.y = this.combo_sprite_a.y;
	$gameSystem._comboSpriteA.time = this.combo_sprite_data[0];
	
	$gameSystem._comboSpriteB.opacity = this.combo_sprite_a.opacity;
	$gameSystem._comboSpriteB.x = this.combo_sprite_a.x;
	$gameSystem._comboSpriteB.y = this.combo_sprite_a.y;
	
    for (var i = 0; i < this.combo_sprite_n1.length; i++) {
		 var sprite = this.combo_sprite_n1[i];
	     $gameSystem._comboSpriteN1[i] = {};
		 $gameSystem._comboSpriteN1[i].x = sprite.x;
		 $gameSystem._comboSpriteN1[i].y = sprite.y;
		 $gameSystem._comboSpriteN1[i].opacity = sprite.opacity;
		 $gameSystem._comboSpriteN1[i].scale = sprite.scale.x;
    };
  
     for (var i = 0; i < this.combo_sprite_n2.length; i++) {
		 var sprite = this.combo_sprite_n2[i];
	     $gameSystem._comboSpriteN2[i] = {};
		 $gameSystem._comboSpriteN2[i].x = sprite.x;
		 $gameSystem._comboSpriteN2[i].y = sprite.y;
		 $gameSystem._comboSpriteN2[i].opacity = sprite.opacity;
		 $gameSystem._comboSpriteN2[i].scale = sprite.scale.x;
    }; 

};

//==============================
// * Refresh Combo Sprite
//==============================
HitCounterSprites.prototype.refresh_combo_sprite = function() {
	if (!this._numberImg1.isReady()) {return};
	$gameTemp.combo_data[0] = false;
	$gameTemp.combo_data[3] = false;
	this.combo_sprite_data[0] = 90;
    this.combo_sprite_a.opacity = 255;
    this.combo_sprite_b.opacity = 255;
	this.combo_sprite_data[3] = 0;	
	this.refresh_combo_hit();
	this.refresh_combo_damage();
	$gameSystem.clearComboSpriteData();
};

//==============================
// * Refresh Combo Hit
//==============================
HitCounterSprites.prototype.refresh_combo_hit = function() {
	var w = this._numberImg1.width / 10;
	var h = this._numberImg1.height;
	var dmg_number =  Math.abs($gameTemp.combo_data[1]).toString().split("");
	for (var i = 0; i <  this.combo_sprite_n1.length; i++) {this.removeChild(this.combo_sprite_n1[i]);};
    for (var i = 0; i <  dmg_number.length; i++) {
		var n = Number(dmg_number[i]);
		     this.combo_sprite_n1[i] = new Sprite(this._numberImg1);
			 this.combo_sprite_n1[i].setFrame(n * w, 0, w, h);
		     this.combo_sprite_data[1][i] = (i * w) - (dmg_number.length *  (w));
			 this.combo_sprite_n1[i].anchor.x = 0.5;
			 this.combo_sprite_n1[i].anchor.y = 0.5;
		     this.combo_sprite_n1[i].scale.x = 2;
			 this.combo_sprite_n1[i].scale.y = 2;			 
		     this.addChild(this.combo_sprite_n1[i]);
	};
};

//==============================
// * Refresh Combo Damage
//==============================
HitCounterSprites.prototype.refresh_combo_damage = function() {
	var w = this._numberImg2.width / 10;
	var h = this._numberImg2.height;
	var dmg_number =  Math.abs($gameTemp.combo_data[2]).toString().split("");
	for (var i = 0; i <  this.combo_sprite_n2.length; i++) {this.removeChild(this.combo_sprite_n2[i]);};
    for (var i = 0; i <  dmg_number.length; i++) {
		var n = Number(dmg_number[i]);
		     this.combo_sprite_n2[i] = new Sprite(this._numberImg2);
			 this.combo_sprite_n2[i].setFrame(n * w, 0, w, h);
			 this.combo_sprite_data[2][i] = i * w;
		     this.addChild(this.combo_sprite_n2[i]);
	};
};
