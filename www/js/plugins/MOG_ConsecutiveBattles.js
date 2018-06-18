//=============================================================================
// MOG_ConsecutiveBattles.js
//=============================================================================

/*:
 * @plugindesc (v1.0) Ativa o sistema de batalhas consecutivas.
 * @author Moghunter 
 * 
 * @param Show Wave Number
 * @desc Apresentar o número de Wave.
 * @default true
 * 
 * @param X-Axis
 * @desc Definição X-axis.
 * @default 630
 * 
 * @param Y-Axis
 * @desc Definição Y-axis.
 * @default 0
 * 
 * @param Number X-Axis
 * @desc Definição X-axis do número.
 * @default 65
 * 
 * @param Number Y-Axis
 * @desc Definição Y-axis do número.
 * @default 3
 * 
 * @param Number FontSize
 * @desc Definição do tamanho da fonte.
 * @default 20
 * 
 * @param Number Font Italic
 * @desc Ativar fonte em itálico.
 * @default false
 * 
 * @param ---------------------
 *
 * @param Show Phase
 * @desc Apresentar a animação das fases.
 * @default true
 * 
 * @param Phase Duration
 * @desc Definição da duração da animação.
 * @default 60
 * 
 * @param Phase X-Axis
 * @desc Definição X-axis.
 * @default 220
 *
 * @param Phase Y-Axis
 * @desc Definição Y-axis.
 * @default 240
 *
 * @param Phase Number X-Axis
 * @desc Definição X-axis do número.
 * @default 10
 *
 * @param Phase Number Y-Axis
 * @desc Definição Y-axis do número.
 * @default 10
 * 
 * @param Phase FontSize
 * @desc Definição do tamanho da fonte.
 * @default 28
 * 
 * @param Phase Font Italic
 * @desc Ativar fonte em itálico.
 * @default true
 *
 * @help  
 * =============================================================================
 * +++ MOG - Consecutive Battles (v1.0) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Ativa o sistema de batalhas consecutivas
 *
 * =============================================================================
 * PLUGIN COMMAND
 * =============================================================================
 * Utilize o comando abaixo para definir as batalhas consecutivas, 
 *
 * consecutive_battles : X,X,X,X,X,X......
 *
 * X - ID  da batalha
 * 
 * =============================================================================
 * Para apresentar ou ocultar o número do Wave utilize os comandos abaixo. 
 *
 * hide_wave_number
 *
 * show_wave_number
 *
 * =============================================================================
 * Para apresentar ou ocultar a animação das fases utilize os comandos abaixo. 
 *
 * hide_phase_animation
 *
 * show_phase_animation
 *
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

  　var Imported = Imported || {};
　　Imported.MOG_ConsecutiveBattles = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ConsecutiveBattles');
    Moghunter.consBat_SpriteWave = String(Moghunter.parameters['Show Wave Number'] || 'true');
	Moghunter.consBat_SpriteWaveX = Number(Moghunter.parameters['X-Axis'] || 630);
	Moghunter.consBat_SpriteWaveY = Number(Moghunter.parameters['Y-Axis'] || 0);
	Moghunter.consBat_SpriteWaveNumberX = Number(Moghunter.parameters['Number X-Axis'] || 65);
	Moghunter.consBat_SpriteWaveNumberY = Number(Moghunter.parameters['Number Y-Axis'] || 3);
	Moghunter.consBat_SpriteWaveNumberFontSize = Number(Moghunter.parameters['Number FontSize'] || 20);
	Moghunter.consBat_SpriteWaveNumberFontItalic = String(Moghunter.parameters['Number Font Italic'] || 'false');
	
	Moghunter.consBat_SpriteTurn = String(Moghunter.parameters['Show Phase2 '] || 'true');
    Moghunter.consBat_SpriteTurnX = Number(Moghunter.parameters['Phase X-Axis'] || 220);
	Moghunter.consBat_SpriteTurnY = Number(Moghunter.parameters['Phase Y-Axis'] || 240);
	Moghunter.consBat_SpriteTurnNumberX = Number(Moghunter.parameters['Phase Number X-Axis'] || 10);
	Moghunter.consBat_SpriteTurnNumberY = Number(Moghunter.parameters['Phase Number Y-Axis'] || 10);
    Moghunter.consBat_SpriteTurnNumberFontSize = Number(Moghunter.parameters['Phase FontSize'] || 34);
	Moghunter.consBat_SpriteTurnNumberFontItalic = String(Moghunter.parameters['Phase Font Italic'] || 'true');
	Moghunter.consBat_SpriteTurnDuration = Number(Moghunter.parameters['Phase Duration'] || 60);
	
//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * initialize
//==============================
var _mog_consBat_gSys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_consBat_gSys_initialize.call(this);
    this._consBat = {};
	this._consBat.enable = true;
	this._consBat.prepareSprite = false;
	this._consBat.index = 0;
	this._consBat.battles = [];
	this._consBat.rewards = [];
	this._consBatime = 0;
	this._consBaPhase = [false,false];
	this._consBaVisible = true;
	this._consBaTurnVisible = String(Moghunter.consBat_SpriteTurn) == "true" ? true : false;
	this._consBatWait = 0;
};

//==============================
// * clear ConsBat
//==============================
Game_System.prototype.clearConsBat = function() {
	this._consBat.enable = false;
	this._consBat.prepareSprite = false;
	this._consBat.index = 0;
	this._consBat.battles = [];
	this._consBat.rewards = [];
	this._consBatime = 0;
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _mog_cosBat_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_mog_cosBat_pluginCommand.call(this,command, args)
    this.setConsBattes(command, args);
	return true;
};

//==============================
// * set ConsBattes
//==============================
Game_Interpreter.prototype.setConsBattes = function(command, args) {
	if (command === "consecutive_battles")  {
		if (args[1]) {
			$gameSystem.clearConsBat();
			$gameSystem._consBat.enable = true;
			var battles = args[1].split(/,/)
			for (var i = 0; i < battles.length; i++) {
				var troopId = Number(battles[i]);
				if ($dataTroops[troopId]) {
					$gameSystem._consBat.battles.push(troopId);
				};
			};
			if ($gameSystem._consBat.battles.length === 0) {
				$gameSystem.clearConsBat();
			};
		};
	} else if (command === "hide_wave_number")  {
		     $gameSystem._consBaVisible = false;
	} else if (command === "show_wave_number")  {	 
		     $gameSystem._consBaVisible = true; 
	} else if (command === "hide_phase_animation")  {
		     $gameSystem._consBaTurnVisible = false;
	} else if (command === "show_phase_animation")  {	 
		     $gameSystem._consBaTurnVisible = true; 			 
    };
};

//=============================================================================
// ** Spriteset Battle
//=============================================================================

//==============================
// * create Enemies
//==============================
var _mog_consBat_sprtBat_createEnemies = Spriteset_Battle.prototype.createEnemies;
Spriteset_Battle.prototype.createEnemies = function() {
	_mog_consBat_sprtBat_createEnemies.call(this);
	this.createConBatField();
};

//==============================
// * create ConBat Field
//==============================
Spriteset_Battle.prototype.createConBatField = function() {
	this._conBatField = new Sprite();
	this._battleField.addChild(this._conBatField);
	if (this._enemySprites && this._enemySprites[0]) {
		this._conBatField.z = this._enemySprites[0].z ? this._enemySprites[0] : 0;
	} else {
		this._conBatField.z = 0
	};
};

//==============================
// * update
//==============================
var _mog_consBat_sprtBat_update = Spriteset_Battle.prototype.update;
Spriteset_Battle.prototype.update = function() {
    _mog_consBat_sprtBat_update.call(this);
	
	if ($gameSystem._consBatWait > 0) {$gameSystem._consBatWait--};
	if ($gameSystem._consBat.prepareSprite && $gameSystem._consBatWait === 0) {
	    this.prepareConBatSprites()
	};
};

//==============================
// * prepare ConBat Sprites
//==============================
Spriteset_Battle.prototype.prepareConBatSprites = function() {
   $gameSystem._consBat.prepareSprite = false;
   this.prepareComBatBefore();
   this.removeEnemiesConBat();
   this.createEnemies();
   this.prepareComBatAfter();
   BattleManager.startBattle();
   if ($gameSystem._consBat.index >= $gameSystem._consBat.battles.length) {
	   $gameSystem._consBat.enable = false;
   }; 
};

//==============================
// * prepare Com Bat Before
//==============================
Spriteset_Battle.prototype.prepareComBatBefore = function() {
   if (Imported.MOG_BattlerMotion) {
       this.removeBMotionShadow();
       this.createBMotionShadow();
   };	
};

//==============================
// * prepare Com Bat After
//==============================
Spriteset_Battle.prototype.prepareComBatAfter = function() {
   if (Imported.MOG_HPGauge) {
       this.removeHPSprites();
       this.createHPSprites();
   };
   if (Imported.MOG_BattlerMotion) {
		for (var i = 0; i < this._enemySprites.length; i++) {
			var sprtEnemy = this._enemySprites[i];
			sprtEnemy.setIndexEm(i);
		};		
		this.addBMotionShadow();
	};
	if (Imported.MOG_BattleCursor) {
	    $gameTemp._needRefreshBattleCursor = true;
	};
	if ($gameSystem._consBaTurnVisible) {
    	$gameSystem._consBaPhase = [true,true];
	}; 
	if ($gameTemp._battleEnd != null) {
		$gameTemp._battleEnd = false;
	};
	if (Imported.MOG_ATB) {
    	$gameSystem._atbEventPhase = [0,0,0,false,false];
    	$gameSystem._atbEventPhase[3] = BattleManager.updateEventMain();
	};
};

//==============================
// * remove Enemies ConBat
//==============================
Spriteset_Battle.prototype.removeEnemiesConBat = function() {
   for (var i = 0; i < this._enemySprites.length; i++) {
	    this._battleField.removeChild(this._enemySprites[i]);
		this._conBatField.removeChild(this._enemySprites[i]);
   };   
};


//==============================
// * create Enemies ConBat
//==============================
Spriteset_Battle.prototype.createEnemiesConBat = function() {
    var enemies = $gameTroop.members();
    var sprites = [];
    for (var i = 0; i < enemies.length; i++) {
        sprites[i] = new Sprite_Enemy(enemies[i]);
    }
    sprites.sort(this.compareEnemySprite.bind(this));
    for (var j = 0; j < sprites.length; j++) {
        this._conBatField.addChild(sprites[j]);
    }
    this._enemySprites = sprites;
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
var _mog_conBat_scBat_start = Scene_Battle.prototype.start;
Scene_Battle.prototype.start = function() {
	_mog_conBat_scBat_start.call(this);
	if ($gameSystem._consBaTurnVisible && $gameSystem._consBat.battles.length > 0) {
	    $gameSystem._consBaPhase = [true,true];
	};
};
//==============================
// * create Spriteset
//==============================
var _mog_conBat_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_conBat_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
};

//==============================
// * create Display Objects
//==============================
var _mog_consBat_sbat_createDisplayObjects = Scene_Battle.prototype.createDisplayObjects;
Scene_Battle.prototype.createDisplayObjects = function() {
	_mog_consBat_sbat_createDisplayObjects.call(this);
	var wsprite = String(Moghunter.consBat_SpriteWave) == "true" ? true : false;
    if (wsprite) {
	    this.createWaveNSprite();
	    this.sortMz();
	};
};

//==============================
// * create Wave NSprite
//==============================
Scene_Battle.prototype.createWaveNSprite = function() {
    this._waveNCursor = new WaveNumber();
	this._waveNCursor.mz = 115;
	this._hudField.addChild(this._waveNCursor);
};

//==============================
// * need skip Battle Process CB
//==============================
Scene_Battle.prototype.needSkipBattleProcessCB = function() {
	if ($gameSystem._consBatime > 0) {return true};
	if ($gameSystem._consBaPhase[0]) {return true};
    return false;
};

//==============================
// * update Battle Process
//==============================
var _mog_consBat_sBat_updateBattleProcess = Scene_Battle.prototype.updateBattleProcess;
Scene_Battle.prototype.updateBattleProcess = function() {
	if (this.needSkipBattleProcessCB()) {
		$gameSystem._consBatime--;
		return;
	};
	_mog_consBat_sBat_updateBattleProcess.call(this);
};

//=============================================================================
// ** Battle Manager
//=============================================================================

//==============================
// * is Cons Battle
//==============================
BattleManager.isConsBattle = function() {
   if (!$gameSystem._consBat.enable) {return false};
   var troopID = $gameSystem._consBat.battles[$gameSystem._consBat.index]
   if (!$dataTroops[troopID]) {return false};
   return true;
};

//==============================
// * conBat
//==============================
BattleManager.prototype.conBat = function(switches) {
	if (!switches || switches.length === 0) {return}
	var swt = Math.randomInt(switches.length);
	var eswt = switches[swt]
    for (var i = 0; i < switches.length; i++) {
	     sch = Number(switches[i]);
		 if (sch === eswt) {
			 $gameSwitches.setValue(sch, true);
		 } else {
			 $gameSwitches.setValue(sch, false);
		 };
	};
};

//==============================
// * process Victory
//==============================
var _mog_conscBat_BatMngr_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	if (this.isConsBattle()) {
	    this.prepareConBat();
		return	
	};
	this.getDataRewardsCB();
	_mog_conscBat_BatMngr_processVictory.call(this);
};

//==============================
// * prepare Con Bat
//==============================
BattleManager.prepareConBat = function() {
    this.getDataRewardsCB();
	this._phase = 'init';
	var troopID = $gameSystem._consBat.battles[$gameSystem._consBat.index]
    this._actorIndex = -1;
    this._actionForcedBattler = null;
    this._actionBattlers = [];
    this._subject = null;
    this._action = null;
    this._targets = [];	
    $gameTroop.setup(troopID);
    $gameScreen.onBattleStart();
    this.makeEscapeRatio();		
	$gameSystem._consBat.prepareSprite = true;
	$gameSystem._consBat.index++;
	$gameSystem._consBatime = 60;
	$gameSystem._consBatWait = 60;
	if ($gameTemp._battleEnd) {$gameTemp._battleEnd = false};   
	if (Imported.MOG_BossHP) {$gameTemp._forceCreateBossHud = true};
	if (Imported.MOG_ATB) {
		$gameTemp._refreshATBGauge = true;
		BattleManager.selectionComAtbClear();
		BattleManager.prepareInitialATBValue();
		$gameSystem._atbEventPhase = [0,0,0,false,false];
	};
};

//==============================
// * get Data Rewards CB
//==============================
BattleManager.getDataRewardsCB = function() {
	var index = $gameSystem._consBat.index
	$gameSystem._consBat.rewards[index] = {};
    $gameSystem._consBat.rewards[index].gold = $gameTroop.goldTotal();
    $gameSystem._consBat.rewards[index].exp = $gameTroop.expTotal();
    $gameSystem._consBat.rewards[index].items = $gameTroop.makeDropItems();
};

//==============================
// * make Rewards CB
//==============================
BattleManager.makeRewardsCB = function() {
    this._rewards = {};
	this._rewards.gold = 0;
	this._rewards.exp = 0;
	this._rewards.items = [];
	for (var i = 0; i < $gameSystem._consBat.rewards.length; i++) {
		var rwd = $gameSystem._consBat.rewards[i];
		this._rewards.gold += rwd.gold;
		this._rewards.exp += rwd.exp;
		for (var e = 0; e < rwd.items.length; e++) {
			 this._rewards.items.push(rwd.items[e]);
		};
	};
	$gameSystem._consBat.battles = [];
};

//==============================
// * make Rewards
//==============================
var _mog_cBat_BatMngr_makeRewards = BattleManager.makeRewards;
BattleManager.makeRewards = function() {
	if ($gameSystem._consBat.rewards.length > 0) {
		this.makeRewardsCB();
		return;
	};
	if ($gameTemp._battleEnd != null) {
		$gameTemp._battleEnd = true;
	};	
	_mog_cBat_BatMngr_makeRewards.call(this);
};

//==============================
// * end Battle
//==============================
var _mog_cBat_BatMngr_endBattle = BattleManager.endBattle;
BattleManager.endBattle = function(result) {
	$gameSystem.clearConsBat();
	_mog_cBat_BatMngr_endBattle.call(this,result);	
};

//==============================
// * display Start Messages
//==============================
var _mog_cBat_BatMngr_displayStartMessages = BattleManager.displayStartMessages;
BattleManager.displayStartMessages = function() {
	if ($gameSystem._consBat.index > 0) {return};
	_mog_cBat_BatMngr_displayStartMessages.call(this);
};

//=============================================================================
// * WaveNumber
//=============================================================================
function WaveNumber() {
    this.initialize.apply(this, arguments);
};

WaveNumber.prototype = Object.create(Sprite.prototype);
WaveNumber.prototype.constructor = WaveNumber;

//==============================
// * Initialize
//==============================
WaveNumber.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
	this.setup();
	this.createSprites();
};

//==============================
// * Setup 
//==============================
WaveNumber.prototype.setup = function() {
	this._waveIndex = this.data().index;
	this._mwaveIndex = this.data().battles.length;	
	this._showTurn = $gameSystem._consBaTurnVisible;
	this.opacity = 0;

};

//==============================
// * create Sprites
//==============================
WaveNumber.prototype.createSprites = function() {
     this.createLayout();
	 this.createNumber();
	 if (this._showTurn) {
		 this.createTurnLayout();
		 this.createTurnNumber();
	 };
};

//==============================
// * create Layout
//==============================
WaveNumber.prototype.createLayout = function() {
     this._layout = new Sprite(ImageManager.loadSystem("Wave_A"));
     this._layout.x = Moghunter.consBat_SpriteWaveX;
	 this._layout.y = Moghunter.consBat_SpriteWaveY;	 
	 this.addChild(this._layout);
};

//==============================
// * Data
//==============================
WaveNumber.prototype.data = function() {
	 return $gameSystem._consBat;
};

//==============================
// * create Number
//==============================
WaveNumber.prototype.createNumber = function() {
     this._number = new Sprite(new Bitmap(160,48));
	 this._number.bitmap.fontSize = Moghunter.consBat_SpriteWaveNumberFontSize;
     this._number.bitmap.fontItalic = String(Moghunter.consBat_SpriteWaveNumberFontItalic) === "true" ? true : false;
	 this._number.x = this._layout.x + Moghunter.consBat_SpriteWaveNumberX;
	 this._number.y = this._layout.y + Moghunter.consBat_SpriteWaveNumberY;
	 this.addChild(this._number)
	 this.refreshWaveNumber();
};

//==============================
// * Refresh Wave Number
//==============================
WaveNumber.prototype.refreshWaveNumber = function() {
	 this._waveIndex = this.data().index;
	 this._mwaveIndex = this.data().battles.length;	
	 if (this._mwaveIndex === 0) {return};
	 this._number.bitmap.clear();	 
	 var wave =  this._waveIndex + 1;
	 var mwave = this._mwaveIndex + 1;
	 var text = String(wave + "/" + mwave)
	 this._number.bitmap.drawText(text,0,0,this._number.width - 5,this._number.height - 5,"center");
};

//==============================
// * need Refresh Wave Number
//==============================
WaveNumber.prototype.needRefreshWaveNumber = function() {
    if (this._waveIndex != this.data().index) {return true};
	if (this._mwaveIndex != this.data().battles.length) {return true};
    return false;
};

//==============================
// * create Turn Layout
//==============================
WaveNumber.prototype.createTurnLayout = function() {
    this._layoutTurn = new Sprite(ImageManager.loadSystem("Wave_B"));
	this._layoutTurn.x = Moghunter.consBat_SpriteTurnX;
	this._layoutTurn.y = Moghunter.consBat_SpriteTurnY;
	this._layoutTurn.org = [-1,-1];
	this._layoutTurn.visible = false;
	this._layoutTurn.anchor.x = 0.5;
	this._layoutTurn.anchor.y = 0.5;
	this._layoutTurnPhase = [0,60];
	this.addChild(this._layoutTurn);   
};

//==============================
// * create Turn Number
//==============================
WaveNumber.prototype.createTurnNumber = function() {
   this._numberTurn = new Sprite(new Bitmap(300,48));
   this._numberTurn.bitmap.fontSize = Moghunter.consBat_SpriteTurnNumberFontSize;
   this._numberTurn.bitmap.fontItalic = String(Moghunter.consBat_SpriteTurnNumberFontItalic) === "true" ? true : false;
   this._numberTurn.x = Moghunter.consBat_SpriteTurnNumberX;
   this._numberTurn.y = Moghunter.consBat_SpriteTurnNumberY;
   this._numberTurn.org = [this._numberTurn.x,this._numberTurn.y];
   this._numberTurn.anchor.x = 0.5;
   this._numberTurn.anchor.y = 0.5;
   this.addChild(this._numberTurn);
   this.refreshNumberTurn();
};

//==============================
// * refresh Number Turn
//==============================
WaveNumber.prototype.refreshNumberTurn = function() {
 	 this._numberTurn.bitmap.clear();	
	 var waveWord = String(Moghunter.consBat_SpriteWaveWord) 
	 var wave =  this._waveIndex + 1;
	 var mwave = this._mwaveIndex + 1;
	 var text = String(wave + "/" + mwave)
	 this._numberTurn.bitmap.drawText(text,0,0,this._numberTurn.width - 5,this._numberTurn.height - 5,"center");

};

//==============================
// * need Fade
//==============================
WaveNumber.prototype.needFade = function() {
	if ($gameMessage.isBusy()) {return true};
	if (this._mwaveIndex === 0) {return true};
	if (!$gameSystem._consBaVisible) {return true};
	return false;
};

//==============================
// * Update Visible
//==============================
WaveNumber.prototype.updateVisible = function() {
	if (this.needFade()) {
	    this.opacity -= 10;
	} else {
    	this.opacity += 10;
	};
};

//==============================
// * get Data
//==============================
WaveNumber.prototype.getData = function() {
	this._layoutTurn.org[0] = this._layoutTurn.x + (this._layoutTurn.width / 2) ;
	this._layoutTurn.org[1] = this._layoutTurn.y + (this._layoutTurn.height / 2);
};

//==============================
// * needRefreshTurnNumber
//==============================
WaveNumber.prototype.needRefreshTurnNumber = function() {
	if (!$gameSystem._consBaPhase[0]) {return false};
	if (!$gameSystem._consBaPhase[1]) {return false};
	return true;
};

//==============================
// * refresh Turn Number
//==============================
WaveNumber.prototype.refreshTurnNumber = function() {
	$gameSystem._consBaPhase[1] = false;
	this.opacity = 255
 	this._layoutTurn.x = this._layoutTurn.org[0] - 60;
	this._layoutTurn.y = this._layoutTurn.org[1];
	this._layoutTurn.opacity = 0;
	this._layoutTurn.visible = true;
	this._layoutTurnPhase = [0,60];
	this.refreshNumberTurn();
};

//==============================
// * update Slide
//==============================
WaveNumber.prototype.updateSlide = function() {
	if (this._layoutTurnPhase[0] === 0) {
		if (this._layoutTurn.x < this._layoutTurn.org[0]) {
			this._layoutTurn.x += 1
			this._layoutTurn.opacity += 5;
			if (this._layoutTurn.x >= this._layoutTurn.org[0]) {
				this._layoutTurn.x = this._layoutTurn.org[0];
				this._layoutTurn.opacity = 255;
				this._layoutTurnPhase = [1,Moghunter.consBat_SpriteTurnDuration];
			};
		};
	} else if (this._layoutTurnPhase[0] === 1) {
		this._layoutTurnPhase[1]--;
		if (this._layoutTurnPhase[1] <= 0) {
			this._layoutTurnPhase[0] = 2
		};
	} else if (this._layoutTurnPhase[0] === 2) {
			this._layoutTurn.x += 1;
			this._layoutTurn.opacity -= 5;
			if (this._layoutTurn.opacity <= 0) {
				this._layoutTurnPhase[0] = 3;
				this._layoutTurn.visible = false;
				$gameSystem._consBaPhase[0] = false;
			};
	};
};

//==============================
// * update Turn Sprites
//==============================
WaveNumber.prototype.updateTurnSprites = function() {
	if (this._layoutTurn.org[0] === -1) {
	    if (this._layoutTurn.bitmap.isReady()) {
			this.getData();
		};
	    return;
	};
	if (this.opacity === 0) {return};
	if (this.needRefreshTurnNumber()) {this.refreshTurnNumber()};
    this.updateSlide();
	this._numberTurn.x = this._layoutTurn.x + this._numberTurn.org[0];
	this._numberTurn.y = this._layoutTurn.y + this._numberTurn.org[1];
	this._numberTurn.opacity = this._layoutTurn.opacity;
	this._numberTurn.visible = this._layoutTurn.visible;
};

//==============================
// * Update
//==============================
WaveNumber.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	this.updateVisible();	
    if (this.needRefreshWaveNumber()) {this.refreshWaveNumber()};
	if (this._layoutTurn) {this.updateTurnSprites()};
};