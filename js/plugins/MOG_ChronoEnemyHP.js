//=============================================================================
// MOG_ChronoEnemyHP.js
//=============================================================================

/*:
 * @plugindesc (v1.2) Apresenta o HP do inimigo ao ataca-lo.
 * @author Moghunter
 *
 * @param Duration
 * @desc Tempo de apresentação do medidor.
 * @default 90
 *
 * @param Font Size
 * @desc Tamanho da fonte.
 * @default 20
 *
 * @param Layout X-Axis
 * @desc Definição X-Axis do layout.
 * @default 0
 *
 * @param Layout Y-Axis
 * @desc Definição Y-Axis do layout.
 * @default 400
 *
 * @param Meter X-Axis
 * @desc Definição X Axis do medidor.
 * @default 27
 *
 * @param Meter Y-Axis
 * @desc Definição Y Axis do medidor.
 * @default 29
 *
 * @param Name X-Axis
 * @desc Definição X Axis do nome.
 * @default 80
 *
 * @param Name Y-Axis
 * @desc Definição Y Axis do nome.
 * @default 0
 *   
 * @help  
 * =============================================================================
 * +++ MOG - Chrono Enemy HP (v1.2) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Apresenta o HP do inimigo ao ataca-lo.
 * Serão necessários os arquivos. (img/chrono/)
 *
 * EnemyHP_A.png
 * EnemyHP_B.png
 * 
 * Para ocultar o HP do inimigo use a seguinte Tag na caixa de notas
 *
 * Hide HP
 *
 * =============================================================================
 * HISTÓRICO
 * =============================================================================
 * (v1.2) - Melhoria na codificação.
 * (v1.1) - Correção dos plugins parameters não funcionarem.
 *
 */

　　var Imported = Imported || {};
　　Imported.MOG_ChronoEnemyHP = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ChronoEnemyHP');
    Moghunter.chrono_enemyHP_layout_x = Number(Moghunter.parameters['Layout X-Axis'] || 0);
    Moghunter.chrono_enemyHP_layout_y= Number(Moghunter.parameters['Layout Y-Axis'] || 400);
    Moghunter.chrono_enemyHP_meter_x = Number(Moghunter.parameters['Meter X-Axis'] || 27);
    Moghunter.chrono_enemyHP_meter_y = Number(Moghunter.parameters['Meter Y-Axis'] || 29);
    Moghunter.chrono_enemyHP_name_x = Number(Moghunter.parameters['Name X-Axis'] || 80);
    Moghunter.chrono_enemyHP_name_y = Number(Moghunter.parameters['Name Y-Axis'] || 0);		
    Moghunter.chrono_enemyHP_duration = Number(Moghunter.parameters['Duration'] || 60);
	Moghunter.chrono_enemyHP_fontSize = Number(Moghunter.parameters['Font Size'] || 20);
	
//=============================================================================
// ** Game Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_chrono_enemyHP_gtemp_initialize = Game_Temp.prototype.initialize
Game_Temp.prototype.initialize = function() {
	_mog_chrono_enemyHP_gtemp_initialize.call(this);
    this._chronoEnemyHP = [false,null,0,0,0];
	this._chronoEnemyData = null;
	this._chronoEnemyHPOld = null;
	this._chronoEnemySprite = {};
	this._chronoEHPForceClear = false;;
};

//=============================================================================
// ** Game Battler
//=============================================================================

//==============================
// * Notetags
//==============================
Game_Battler.prototype.notetags = function() {
	if (this.isEnemy()) {return this.enemy().note.split(/[\r\n]+/)};
	if (this.isActor()) {return this.actor().note.split(/[\r\n]+/)};
};

//=============================================================================
// ** Game_Enemy
//=============================================================================

//==============================
// * initMembers
//==============================
var _mog_chrono_enemyHP_initMembers = Game_Enemy.prototype.initMembers;
Game_Enemy.prototype.initMembers = function() {
	_mog_chrono_enemyHP_initMembers .call(this);
	this._chronoEhp_meter = true;
};

//==============================
// * Setup
//==============================
var _mog_chrono_enemyHP_setup = Game_Enemy.prototype.setup;
Game_Enemy.prototype.setup = function(enemyId, x, y) {
	_mog_chrono_enemyHP_setup.call(this,enemyId, x, y);
	for (var i = 0; i < this.notetags().length; i++) {
		if (this.notetags()[i] == "Hide HP") {this._chronoEhp_meter = false};
	};		
};





//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * execute After Hit
//==============================
var _mog_chrono_gaction_afterApplyCN = Game_Action.prototype.afterApplyCN;
Game_Action.prototype.afterApplyCN = function(target,result,oldhp,oldmp) {
	_mog_chrono_gaction_afterApplyCN.call(this,target,result,oldhp,oldmp);
	if (this.chronoEnemyHPNeedData(target)) {
		$gameTemp._chronoEnemyHP[0] = true; 
		$gameTemp._chronoEnemyHP[1] = target.name(); 
		$gameTemp._chronoEnemyHP[2] = target.hp;
		$gameTemp._chronoEnemyHP[3] = target.mhp;
	};
};

//==============================
// * chrono Enemy HP Need Data
//==============================
Game_Action.prototype.chronoEnemyHPNeedData = function(target) {
	if (this.subject().isEnemy()) {return false};
	if (target.isActor()) {return false};
	if (target.isEnemy() && !target._chronoEhp_meter ) {return false};
	return true;
};



//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_chronoEngine_TEnemyHP_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_chronoEngine_TEnemyHP_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createEnemyHPCN();
	this.sortMz();
};

//==============================
// * create Enemy HP CN
//==============================
Scene_Map.prototype.createEnemyHPCN = function() {
    this._enemyHP = new CNHPGauge();
	this._enemyHP.mz = 120;
	this._hudField.addChild(this._enemyHP);
};

//==============================
// * Terminate
//==============================
var _mog_enemyHPCN_smap_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
	if (this._spriteset && this._spriteset._enemyHP) {
	     $gameTemp._chronoEnemyData = this._spriteset._enemyHP._enemyData;
	     $gameTemp._chronoEnemyHPOld = this._spriteset._enemyHP._hpOld;
		 $gameTemp._chronoEnemySprite = {};
		 $gameTemp._chronoEnemySprite.opacity = this._spriteset._enemyHP.opacity;
		 $gameTemp._chronoEnemySprite.x = this._spriteset._enemyHP.x;
		 
	};  	
    _mog_enemyHPCN_smap_terminate.call(this); 
};


//=============================================================================
// ** CNHPGauge
//=============================================================================
function CNHPGauge() {
    this.initialize.apply(this, arguments);
};

CNHPGauge.prototype = Object.create(Sprite.prototype);
CNHPGauge.prototype.constructor = CNHPGauge;

//==============================
// * Initialize
//==============================
CNHPGauge.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
	this.opacity = 0;
    var refr = false;
	if ($gameTemp._chronoEnemyData) {
		this._enemyData = $gameTemp._chronoEnemyData;
		this._hpOld = $gameTemp._chronoEnemyHPOld;
		this.opacity = $gameTemp._chronoEnemySprite.opacity;
		this.x = $gameTemp._chronoEnemySprite.x;
		$gameTemp._chronoEnemyData = null;
		$gameTemp._chronoEnemyHPOld = null;
		refr = true;
	} else { 
	    this._enemyData = [null,0,0,Moghunter.chrono_enemyHP_duration];
	    this._hpOld = [0,0];
	};
	this._layout = new Sprite(ImageManager.loadRas("EnemyHP_A"));
	this._layout.x = Moghunter.chrono_enemyHP_layout_x;
	this._layout.y = Moghunter.chrono_enemyHP_layout_y;  
	this.addChild(this._layout);
	this._hpImage = ImageManager.loadRas("EnemyHP_B");
	this._meter2 = new Sprite(this._hpImage);
	this._meter2.x = this._layout.x + Moghunter.chrono_enemyHP_meter_x;
	this._meter2.y = this._layout.y + Moghunter.chrono_enemyHP_meter_y;
	this.addChild(this._meter2);		
	this._meter = new Sprite(this._hpImage);
	this._meter.x = this._layout.x + Moghunter.chrono_enemyHP_meter_x;
	this._meter.y = this._layout.y + Moghunter.chrono_enemyHP_meter_y; 	
	this.addChild(this._meter);
	this._name = new Sprite(new Bitmap(120,32));
	this._name.x = this._layout.x + Moghunter.chrono_enemyHP_name_x;
	this._name.y = this._layout.y + Moghunter.chrono_enemyHP_name_y;
	this._name.bitmap.fontSize = Moghunter.chrono_enemyHP_fontSize;
	this.addChild(this._name);	
	this.refreshName();
	if (refr) {this.refreshHP(true)}
};

//==============================
// * refreshName
//==============================
CNHPGauge.prototype.refreshName = function() {
    this._name.bitmap.clear();
	this._name.bitmap.drawText(this.eName(),0,0,120,32,"left");
};

//==============================
// * Ename
//==============================
CNHPGauge.prototype.eName = function() {
  if (!$gameTemp._chronoEnemyHP[1]) {return ""};
  return String($gameTemp._chronoEnemyHP[1]);
};

//==============================
// * Duration
//==============================
CNHPGauge.prototype.duration = function() {
  if (Moghunter.chrono_enemyHP_duration < 20) {return 20};
  return Moghunter.chrono_enemyHP_duration;
};

//==============================
// * need Refresh
//==============================
CNHPGauge.prototype.needRefresh = function() {
    if ($gameTemp._chronoEnemyHP[0]) {return true};
	return false;
};

//==============================
// * refresh HP
//==============================
CNHPGauge.prototype.refreshHP = function(init) {
	$gameTemp._chronoEnemyHP[0] = false;
	if (!init) {
		this._enemyData[3] = this.duration();
		this._hpOld[0] = this.hp2();
		this.opacity = 255;
		this.x = 0;
	};
	this._meter2.visible = true;
    if (this._enemyData[0] != this.eName()) {this.refreshName()};
	this.refreshBlueHP();
};

//==============================
// * hp
//==============================
CNHPGauge.prototype.hp = function() {
	return $gameTemp._chronoEnemyHP[2];
};

//==============================
// * hp2
//==============================
CNHPGauge.prototype.hp2 = function() {
	return $gameTemp._chronoEnemyHP[4];
};

//==============================
// * mhp
//==============================
CNHPGauge.prototype.mhp = function() {
	return $gameTemp._chronoEnemyHP[3];
};

//==============================
// * refresh Blue HP
//==============================
CNHPGauge.prototype.refreshBlueHP= function() {
	var cw = this._hpImage.width;
	var ch = Math.floor(this._hpImage.height / 2);
	var mw = cw * this.hp() / this.mhp();
	this._meter.setFrame(0,0,mw,ch);
};

//==============================
// * update Red Meter
//==============================
CNHPGauge.prototype.updateRedMeter = function() {
	 var dnspeed = 1 + (Math.abs(this._hpOld[0] - this.hp()) / 50);
	 if (this._hpOld[0] > this.hp()) {this._hpOld[0] -= dnspeed;
		  if (this._hpOld[0] < this.hp()) {this._hpOld[0] = this.hp()};}
	 else if (this._hpOld[0] < this.hp()) {this._hpOld[0]  += dnspeed;
		  if (this._hpOld[0]  > this.hp()) {this._hpOld[0]  = this.hp()};			
	 };
	 var cw = this._hpImage.width;
	 var ch = Math.floor(this._hpImage.height / 2);
	 var mw = cw * this._hpOld[0] / this.mhp();	 
	 this._meter2.setFrame(0, ch, mw,ch);	
};

//==============================
// * update
//==============================
CNHPGauge.prototype.update = function() {
    Sprite.prototype.update.call(this);
	if (this.needRefresh()) {this.refreshHP(false)};
	if ($gameTemp._chronoEHPForceClear) {
	    this._enemyData[3] = 0;
	   	$gameTemp._chronoEHPForceClear = false;
	}
	if (this._enemyData[3] > 0) {
		if (!$gameSystem._chronoMode.inTurn) {
		    this._enemyData[3]--;
		};
		} else {
			if (this._hpOld[0]  === this.hp()) {
				this._meter2.visible = false;
				this.opacity -= 5;
				if (this.opacity > 0) {this.x++};
			};
		};
	if (this.opacity > 0) {this.updateRedMeter()};
};