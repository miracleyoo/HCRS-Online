//=============================================================================
// MOG_ATB.js
//=============================================================================

/*:
 * @plugindesc (v0.1 Beta) Sistema de batalha em tempo real.
 * @author Moghunter
 *
 * @param ATB Mode
 * @desc Definição do Modo de ATB. 
 * 0 Wait / 1 SemiActive-I / 2 SemiActive-II / 3 Full Active  
 * @default 2
 *
 * @param ATB Max Value
 * @desc Definição do tempo máximo de ATB  (Velocidade).
 * @default 4000
 *
 * @param Turn Duration
 * @desc Definição da duração do turno.
 * @default 480
 *
 * @param States Duration
 * @desc Definição da duração das condições.
 * @default 180
 *
 * @param Escape Duration
 * @desc Definição do tempo para escapar.
 * @default 180
 *
 * @param Skip Emerge Message
 * @desc Desativar a janela de mensagem de emergir.
 * @default true
 *
 * @param Full SE
 * @desc Definição do som quando o ATB atingir o nível máximo.
 * @default Book1
 *
 * @param Change Actor Left
 * @desc Definição do botão para mudar o personagem.
 * @default pagedown
 *
 * @param Change Actor Right
 * @desc Definição do botão para mudar o personagem.
 * @default pageup
 *
 * @param Escape Button
 * @desc Definição do botão para escapar.
 * @default cancel
 *
 * @param Escape Layout X
 * @desc Definição da posição do layout de fugir X-axis.
 * @default 600
 *
 * @param Escape Layout Y
 * @desc Definição da posição do layout de fugir Y-axis.
 * @default 64
 *
 * @param Escape Gauge X
 * @desc Definição da posição do medidor de fugir X-axis.
 * @default 6
 *
 * @param Escape Gauge Y
 * @desc Definição da posição do medidor de fugir Y-axis.
 * @default 16
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Active Time Battle [ATB] (v0.1 Beta) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Sistema de batalha em tempo real.
 *
 * =============================================================================
 * IMAGES
 * =============================================================================
 * As imagens deverão ser gravadas na pasta. (img/atb/)
 * Imagens necessárias.
 *
 * Escape_A.png
 * Escape_B.png
 *
 * =============================================================================
 * PLUGIN COMMAND
 * =============================================================================
 * Para definir o modo do ATB utilize o comando abaixo.
 * 
 * atb_mode : MODE
 * 
 * 0 - Wait
 *     - Os inimigos não atacam na seleção de comando.
 * 1 - Semi Active I
 *     - Os inimigos não atacam na seleção de items/skills e seleção de alvo.
 * 2 - Semi Active II
 *     - Os inimigos não atacam na seleção de items/skills.
 * 3 - Full Active
 *     - Os inimigos atacam em qualquer situação.
 *
 * =============================================================================
 * CAST TIME
 * =============================================================================
 * Para definir o tempo de ativar uma ação (magias), defina pelo valor da
 * velocidade (Speed) da ação da habilidade ou item.
 *
 * =============================================================================
 * STATE DURATION
 * =============================================================================
 * Para definir o tempo da duração da condição, defina um valor em 
 *
 * Durations in Turns
 *
 * =============================================================================
 * BUTTONS
 * =============================================================================
 * Q - Selecionar o personagem da direita.
 * W - Selecionar o personagem da esquerda.
 * X - Escapar
 *
 */
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ATB = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ATB');
    Moghunter.atb_Mode = Number(Moghunter.parameters['ATB Mode'] || 3);
    Moghunter.atb_MaxValue = Number(Moghunter.parameters['ATB Max Value'] || 4000);
	Moghunter.atb_TurnDuration = Number(Moghunter.parameters['Turn Duration'] || 480);
	Moghunter.atb_StatesDuration = Number(Moghunter.parameters['States Duration'] || 180);
	Moghunter.atb_SkipEmerge = String(Moghunter.parameters['Skip Emerge Message'] || 'true');
	Moghunter.atb_EscapeDuration = Number(Moghunter.parameters['Escape Duration'] || 180);
	
    Moghunter.atb_EscapeGaugeX = Number(Moghunter.parameters['Escape Layout X'] || 600); 
    Moghunter.atb_EscapeGaugeY = Number(Moghunter.parameters['Escape Layout Y'] || 64); 
    Moghunter.atb_EscapeGaugeX2 = Number(Moghunter.parameters['Escape Gauge X'] || 6); 
    Moghunter.atb_EscapeGaugeY2 = Number(Moghunter.parameters['Escape Gauge Y'] || 16); 
    Moghunter.atb_EscapeButton = String(Moghunter.parameters['Escape Button'] || 'cancel');	
    Moghunter.atb_FullSE = String(Moghunter.parameters['Full SE'] || 'Book1'); 
    Moghunter.atb_NextActorLeft = String(Moghunter.parameters['Change Actor Left'] || 'pagedown'); 
    Moghunter.atb_NextActorRight = String(Moghunter.parameters['Change Actor Right'] || 'pageup');
	 
//=============================================================================
// ** Game Temp
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_atb_gtemp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_mog_atb_gtemp_initialize.call(this);
	this._atbForceHideWindows = false;
	this._atbEscape = [0,1,false];
	this._atbWinData = [false,false,false];
	this._atbWaitTemp = [0,0,0];
	this._atbneedRefWind = false;
	this._atbBattleEnd = false;
	this._battleEnd = false;
};

//=============================================================================
// ** Game System
//=============================================================================

//==============================
// * Initialize
//==============================
var _mog_atb_gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_atb_gsys_initialize.call(this);
	this._atbEventPhase = [0,0,0,false,false];
	this._atbEventPhase[1] = Math.max(Moghunter.atb_TurnDuration,120);
	this._atbEspcapeDuration = Math.max(Moghunter.atb_EscapeDuration,60);
    this._atbMode = [Moghunter.atb_Mode,false];
};

//==============================
// * Play Sound MX
//==============================
SoundManager.playSoundMX = function(fileName){
   var se = {};
   se.name = fileName;
   se.pitch = 100;
   se.volume = 100;
   AudioManager.playSe(se);
};  

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _mog_atb_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_mog_atb_pluginCommand.call(this,command, args)
    this.setATBParInt(command, args);
	return true;
};

//==============================
// * set ATB ParInt
//==============================
Game_Interpreter.prototype.setATBParInt = function(command, args) {
	if (command === "atb_mode" && args[1])  {
		var mode = Math.min(Math.max(Number(args[1]),0),3);
		$gameSystem._atbMode[0] = mode;	
	};
};

//=============================================================================
// ** Game Battler Base
//=============================================================================

//==============================
// * Init Members
//==============================
var _mog_atb_gbbase_initMembers = Game_BattlerBase.prototype.initMembers;
Game_BattlerBase.prototype.initMembers = function() {
	_mog_atb_gbbase_initMembers.call(this);
	this.initATBSetup();
};

//==============================
// * Init ATB Setup
//==============================
Game_BattlerBase.prototype.initATBSetup = function() {
	this._atb = 0;
	this._max_atb = Math.max(Moghunter.atb_MaxValue,100);
	this._wait_atb = 0;
	this._cast_atb = [null,0,1];
	this._atbItem = null;
	this._inSelection = false;
	this._intTurn = false;	
	this._stateTime = Math.max(Moghunter.atb_StatesDuration,60);
	this._stateDuration = [];
	this._buffTime = Math.max(Moghunter.atb_StatesDuration,60);
	this._buffDuration = [0,0,0,0,0,0,0,0];
};

//==============================
// * ATB
//==============================
Game_BattlerBase.prototype.atb = function() {
    return this._atb;
};

//==============================
// * Max ATB
//==============================
Game_BattlerBase.prototype.maxAtb = function() {
    return this._max_atb;
};

//==============================
// * ATB Speed
//==============================
Game_BattlerBase.prototype.atbSpeed = function() {
	return this.agi;
};

//==============================
// * Die
//==============================
var _mog_atb_gbbase_die = Game_BattlerBase.prototype.die;
Game_BattlerBase.prototype.die = function() {
    _mog_atb_gbbase_die.call(this);
	if ($gameParty.inBattle()) {
		if (this.needForceClearSelection()){
			this.refreshCommandSelectionATB(); 
		};
		$gameTemp._atbneedRefWind = true;
		this.clearATB();
    };
};

//==============================
// * Need Force Clear Selection
//==============================
Game_BattlerBase.prototype.needForceClearSelection = function() {
   if (!BattleManager._atbBattlerInput) {return false};
   if (BattleManager._atbBattlerInput[0] != this) {return false};
   if (this.isRestricted()) {return true};
   if (this.isDead()) {return true}
   return false;
};

//==============================
// * Refresh
//==============================
var _mog_atb_gBat_refresh = Game_Battler.prototype.refresh;
Game_Battler.prototype.refresh = function() {
    _mog_atb_gBat_refresh.call(this);
	if (this.needForceClearSelection()){
	 	this.refreshCommandSelectionATB(); 
 	};
};

//==============================
// * refresh Command Selection ATB
//==============================
Game_BattlerBase.prototype.refreshCommandSelectionATB = function() {
	BattleManager.selectionComAtbClear()
	BattleManager._atbBattlerInput = [null,false];
	$gameTemp._atbForceHideWindows = true;	
};

//==============================
// * clear ATB
//==============================
Game_BattlerBase.prototype.clearATB = function() {
    this._atb = 0;
	this._wait_atb = 0;
	this._intTurn = false
	this._atbItem = null;
	this.clearActions()
	this.clearCast();
};

//==============================
// * clear Cast
//==============================
Game_BattlerBase.prototype.clearCast = function() {
    this._cast_atb = [null,0,1];
};

//==============================
// * is Max ATB
//==============================
Game_BattlerBase.prototype.isMaxAtb = function() {
    return this.atb() >= this.maxAtb();
};

//*******************************
// * is Chanting  *(Overwritten)*
//*******************************
Game_Battler.prototype.isChanting = function() {
    if (this._cast_atb[1] > 0) {return true};
};

//==============================
// * is Casting
//==============================
Game_BattlerBase.prototype.isCasting = function() {
    return this._cast_atb[0];
};

//==============================
// * update Count Atb
//==============================
Game_BattlerBase.prototype.updateCountAtb = function() {
	this._atb += this.atbSpeed();
};

//*******************************
// * Can Input    *(Overwritten)*
//*******************************
Game_BattlerBase.prototype.canInput = function() {
	if (!this.isAppeared()) {return false};
	if (this.isRestricted()) {return false};
	if (this.isAutoBattle()) {return false};
	if (!this.isMaxAtb()) {return false};
	if (this.isCasting()) {return false};
	if (this._intTurn) {return false};
	if (this._atbItem) {return false};
	return true;
};

//==============================
// * Can Move Atb
//==============================
Game_BattlerBase.prototype.canMoveAtb = function() {
	if (!this.isAppeared()) {return false};
	if ($gameSystem._atbEventPhase[3]) {return false};
	return true;
};

//==============================
// * Can Fill ATB
//==============================
Game_BattlerBase.prototype.canFillATB = function() {
	if (this.restriction() >= 4) {return false};
	if (this._wait_atb > 0) {return false};
	return true;
};

//*******************************
// * On End Turn  *(Overwritten)*
//*******************************
Game_Battler.prototype.onTurnEnd = function() {
    this.clearResult();
};

//==============================
// * clear States
//==============================
var _mog_atb_gbatbase_clearStates = Game_BattlerBase.prototype.clearStates;
Game_BattlerBase.prototype.clearStates = function() {
	_mog_atb_gbatbase_clearStates.call(this);
	this._stateDuration = [];
};

//==============================
// * Reset States Counts
//==============================
var _mog_atb_gbatbase_resetStateCounts = Game_BattlerBase.prototype.resetStateCounts;
Game_BattlerBase.prototype.resetStateCounts = function(stateId) {
    _mog_atb_gbatbase_resetStateCounts.call(this,stateId);
	if (!this._stateDuration[stateId]) {
		this._stateDuration[stateId] = this._stateTime
	};
	if (this._stateDuration[stateId] < 60) {
	    this._stateDuration[stateId] = this._stateTime;
	};
};

//==============================
// * erase State
//==============================
var _mog_atb_gbatbase_eraseState = Game_BattlerBase.prototype.eraseState;
Game_BattlerBase.prototype.eraseState = function(stateId) {
	_mog_atb_gbatbase_eraseState.call(this,stateId);
	delete this._stateDuration[stateId];
};

//==============================
// * update State Turns ATB
//==============================
Game_BattlerBase.prototype.updateStateTurns_ATB = function() {
    this._states.forEach(function(stateId) {
		 if (this._stateDuration[stateId] == null) {
			  this._stateDuration[stateId] = 0
		 }
		 this._stateDuration[stateId]--;
		 if (this._stateDuration[stateId] <= 0) {
			 this._stateDuration[stateId] = this._stateTime;
		 	 if (this._stateTurns[stateId] > 0) {
				 this._stateTurns[stateId]--;
			 };
			 this.executeStatesEffect_ATB(stateId);		 
		 };
	}, this);	
};

//==============================
// * executeStatesEffect_ATB
//==============================
Game_BattlerBase.prototype.executeStatesEffect_ATB = function(stateId) {
	this.regenerateAll();
	this.startDamagePopup();
	if (this._stateTurns[stateId] === 0) {this.eraseState(stateId)};
};

//==============================
// * remove Guard State
//==============================
Game_BattlerBase.prototype.removeGuardState = function(stateId) {
    this.states().forEach(function(state) {
		    for (var i = 0; i < state.traits.length; i++) {
				 var effect = state.traits[i]
				 if (effect.dataId === 1) {
					 this.eraseState(state.id)
				 };
			};
    }, this);
};

//==============================
// * clear Buffs
//==============================
var _mog_atb_gBatbase_clearBuffs = Game_BattlerBase.prototype.clearBuffs;
Game_BattlerBase.prototype.clearBuffs = function() {
	_mog_atb_gBatbase_clearBuffs.call(this);
	this._buffDuration = [0,0,0,0,0,0,0,0];
};

//==============================
// * erase Buff
//==============================
var _mog_atb_gBatbase_eraseBuff = Game_BattlerBase.prototype.eraseBuff;
Game_BattlerBase.prototype.eraseBuff = function(paramId) {
	_mog_atb_gBatbase_eraseBuff.call(this,paramId)
	this._buffDuration[paramId] = 0;
};

//==============================
// * update Buff Turn ATB
//==============================
Game_BattlerBase.prototype.updateBuffTurns_ATB = function() {
    for (var i = 0; i < this._buffTurns.length; i++) {
		if (this._buffDuration[i] == null) {
			 this._buffDuration[i] = 0
		};
		this._buffDuration[i]--;
		if (this._buffDuration[i]  <= 0) {
		    this._buffDuration[i] = this._buffTime;
			if (this._buffTurns[i] > 0) {
				this._buffTurns[i]--;
				this.executeBuffEffect_ATB(i)
			};
		};
    };
};

//==============================
// * executeBuffEffect_ATB
//==============================
Game_BattlerBase.prototype.executeBuffEffect_ATB = function(buffId) {
    if (this._buffTurns[buffId] === 0) {this.removeBuff(buffId)};
};

//=============================================================================
// ** Game Battler
//=============================================================================

//==============================
// * perform Action End
//==============================
var _mog_atb_gBat_performActionEnd = Game_Battler.prototype.performActionEnd;
Game_Battler.prototype.performActionEnd = function() {
	_mog_atb_gBat_performActionEnd.call(this);
	this.setActionState('undecided');
};

//=============================================================================
//=============================================================================
// ** Battle Manager
//=============================================================================
//=============================================================================

//==============================
// * init Members
//==============================
var _mog_atb_btmngr_initMembers = BattleManager.initMembers;
BattleManager.initMembers = function() {
     _mog_atb_btmngr_initMembers.call(this);
	 this.setupATB();
};

//==============================
// * setup ATB
//==============================
BattleManager.setupATB = function() {
   this._atbBattler = null;
   this._atbBattlerInput = [null,false];
   $gameTemp._atbEscape = [0,$gameSystem._atbEspcapeDuration,false];
   $gameTemp._battleEnd = false;
   $gameTemp._atbBattleEnd = false;
   $gameTemp._atbWaitTemp = [0,40,0];
   $gameTemp._atbneedRefWind = false;
   $gameSystem._atbEventPhase[0] = 0;
   $gameSystem._atbEventPhase[3] = false;
};

//==============================
// * clear ATB Base
//==============================
BattleManager.clearATBBase = function() {
   $gameTemp._atbForceHideWindows = true;
   $gameTemp._atbEscape[0] = 0;
   this._atbBattler = null;
   this._atbBattlerInput = [null,false];
   this._actorIndex = -1;
   $gameSystem._atbEventPhase[0] = 0;
   $gameSystem._atbEventPhase[3] = false;   
};

//==============================
// * prepare Initial ATB Value
//==============================
BattleManager.prepareInitialATBValue = function() {
	for (var i = 0; i < $gameParty.members().length; i++) {
		 var battler =  $gameParty.members()[i];
		 battler.clearATB();
		 battler._wait_atb = 5;
		 var per = battler._max_atb * 30 / 100;
		 var value = Math.randomInt(per);
		 if (this._preemptive) {
		     value += (per * 2);
		 };
		 battler._atb = Math.floor(value);
	};
	for (var i = 0; i < $gameTroop.members().length; i++) {
		 var battler =  $gameTroop.members()[i];
         battler.clearATB();
		 battler._wait_atb = 5;	 
		 var per = battler._max_atb * 30 / 100;
		 var value = Math.randomInt(per);
         if (this._surprise) {
		     value += (per * 2);
		 };
		 battler._atb = Math.floor(value);
	};
   this.clearATBBase();
};

//==============================
// * clear ATB Value Party
//==============================
BattleManager.clearATBValueParty = function() {
	for (var i = 0; i < $gameParty.members().length; i++) {
		var battler = $gameParty.members()[i];
	    battler.clearATB();
		battler.setActionState('undecided')
	};
	if ($gameTemp._battleEnd || $gameSystem._atbBattleEnd) {
		for (var i = 0; i < $gameTroop.members().length; i++) {
			var battler = $gameTroop.members()[i];
			battler.clearATB();
		};
	};
    this.clearATBBase();
};

//==============================
// * need Update ATB Basic
//==============================
BattleManager.needUpdate_ATBBasic = function() {
    if (this._phase === 'action') {return false}; 
    if (this._phase === 'turn') {return false};
	if ($gameTemp._atbBattleEnd) {return false};
	if ($gameMessage.isBusy()) {return false};
	if ($gameTemp._battleEnd) {return false};
	if ($gameSystem._atbEventPhase[3]) {return false};
	if ($gameTemp._atbWaitTemp[0] > 0) {return false}
	if ($gameTemp._atbWaitTemp[1] > 0) {return false}
	if ($gameSystem._atbMode[1]) {return false};
    return true;
};

//==============================
// * need Update ATB
//==============================
BattleManager.needUpdate_ATB = function() {
    if (this._phase === 'action') {return false}; 
    if (this._phase === 'turn') {return false};
	if (BattleManager.isBusy()) {return false};
    return true;
};

//==============================
// * Update ATB
//==============================
BattleManager.update_ATB = function() {
	if (this.actor()) {this.updateCheckActorPar(this.actor())};
	this.allBattleMembers().forEach(function(battler) {
    		if (battler.canMoveAtb() && !battler.isDead()) {this.updateBattlers_ATB(battler)}; 
    }, this);
};

//==============================
// * need Force Clear Command
//==============================
BattleManager.needForceClearCommand = function(battler) {
	if (!battler) {return true};
	if (battler.restriction() > 0) {return true};
	if (battler._intTurn) {return true};
	if (!battler.isMaxAtb()) {return true};
	if (!battler.currentAction()) {return true};
	if (battler.isCasting()) {return true};
	return false;
};

//==============================
// * Update Check Actor Par
//==============================
BattleManager.updateCheckActorPar = function(battler) {
	if (this.needForceClearCommand(battler)) {
		if (battler) {
			battler._intTurn = false
			battler._atbItem = null;
			battler.clearActions()
			battler.clearCast();
		};
	    this.selectionComAtbClear();
	};
};

//==============================
// * Update Battlers ATB
//==============================
BattleManager.updateBattlers_ATB = function(battler) {
	if (battler._wait_atb > 0) {battler._wait_atb--};
	if (battler.canFillATB()) {this.updateFill_ATB(battler)};
    this.updateStateBuffTurn_ATB(battler);
};

//==============================
// * Update State Buff Turn_ATB
//==============================
BattleManager.updateStateBuffTurn_ATB = function(battler) {
    battler.updateStateTurns_ATB();
	battler.updateBuffTurns_ATB();
};

//==============================
// * update par Correction
//==============================
BattleManager.updateParCorretionBattler_ATB = function(battler) {
    battler._intTurn = false;
	battler._atbItem = null;
};

//==============================
// * update Fill ATB
//==============================
BattleManager.updateFill_ATB = function(battler) {
    if (!battler.isMaxAtb()) {
    	battler.updateCountAtb();
		this.updateParCorretionBattler_ATB(battler)
		if (battler.isMaxAtb()) {this.executeATBFullEffect(battler)};
	} else {
        this.updateBattlerFull_ATB(battler);
    };
};

//==============================
// * executeATBFullEffect
//==============================
BattleManager.executeATBFullEffect = function(battler) {
	if (battler._atb > battler._max_atb) {battler._atb = battler._max_atb};
    if (battler.isActor()) {SoundManager.playSoundMX(Moghunter.atb_FullSE)};
	battler.removeGuardState();
};

//==============================
// * update Battler Full ATB
//==============================
BattleManager.updateBattlerFull_ATB = function(battler) {
    if (!this._atbBattler) {
	    if (battler.isCasting(battler)) {
		   this.updateATBCast_ATB(battler);
    	} else {
		   this.prepareNextSubject_ATB(battler);
		};
	};
};

//==============================
// * update Battler Full ATB
//==============================
BattleManager.updateATBCast_ATB = function(battler) {
	 battler._cast_atb[1]++;
	 if (battler._cast_atb[1] >= battler._cast_atb[2]) {this.prepareNextSubjectCast_ATB(battler);};
};
 
//==============================
// * update Escape
//==============================
BattleManager.canEscape_ATB = function(active) {
	if (!active) {return false};
	if (!this._canEscape) {return false};
	if (!Input.isPressed(Moghunter.atb_EscapeButton)) {return false};
	return true;
};
 
//==============================
// * update Escape ATB
//==============================
BattleManager.updateEscape_ATB = function(active) {
	if ($gameTemp._atbEscape[2]) {return};
    if (this.canEscape_ATB(active)) {
		$gameTemp._atbEscape[0]++;
		if ($gameTemp._atbEscape[0] >= $gameTemp._atbEscape[1]) {
			$gameTemp._atbEscape[2] = true;
	     	$gameTemp._atbEscape[0] = $gameTemp._atbEscape[1];
            this.executeEscape_ATB();
	    };
	} else {
	   if ($gameTemp._atbEscape[0] > 0) {
		   $gameTemp._atbEscape[0] -= 2;
		   if ($gameTemp._atbEscape <= 0) {
			   $gameTemp._atbEscape[0] = 0;
		   };
	   };
	};
};

//==============================
// * execute Escape ATB
//==============================
BattleManager.executeEscape_ATB = function() {
	this._escapeRatio = 100;
	this.processEscape();
	$gameTemp._battleEnd = true;
	$gameTemp._atbBattleEnd = true;
	this.selectionComAtbClear();
	this._escaped = true;
	this.clearATBValueParty();
};

//==============================
// * prepare Next Subject Cast
//==============================
BattleManager.prepareNextSubjectCast_ATB = function(battler) {
	var item = battler._cast_atb[0];
    if (battler.canUse(item)) {
        this._atbBattler = battler;
		this._atbBattler._atbItem = item;
	} else {
		battler.clearATB();
	};
};

//==============================
// * prepare Next Subject ATB
//==============================
BattleManager.prepareNextSubject_ATB = function(battler) {
    if (battler.isEnemy()) {
	    this.prepareActionEnemy(battler);
	} else {
		if (battler.isConfused()) {  
		    this.prepareConfusionActionActor(battler);
    	} else if (this.needPrepareSelection(battler)) {	
			this.prepareCommandSelection(battler);
		} else {;
			if (battler._atbItem) {
				this._atbBattler = battler;
				battler._intTurn = true;
			};
		};
	};
};

//==============================
// * prepare Confusion Action
//==============================
BattleManager.prepareConfusionActionActor = function(battler) {
	battler.clearActions()
    battler.makeActions();
	var action = battler.currentAction();
	if (action && action.item() && battler.canUse(action.item())) {
	    battler._atbItem = action.item()
        this._atbBattler = battler;
	} else {
		battler.clearATB();
	};
};

//==============================
// * need Prepare Action Actor
//==============================
BattleManager.needPrepareActionActor = function(action) {
	if (!action) {return false};
	if (!this._atbBattlerInput) {return false};
	if (!this._atbBattlerInput[0]) {return false};
	if (!this._atbBattlerInput[0].currentAction()) {return false};
	if (!this._atbBattlerInput[0].currentAction().item()) {return false};
	return true;
};

//==============================
// * selection Com Atb Cler
//==============================
BattleManager.selectionComAtbClear = function() {
   var action = BattleManager.inputtingAction();
   var actor = this.actor();
   var active = false
   if (this.needPrepareActionActor(action)) {
       this.prepareActionActor(this._atbBattlerInput[0]);
	   active = true;  
   };
   this._atbBattlerInput = [null,false];
   this._actorIndex = -1;
   if (actor) {
	   if (!this._atbBattler && active && !actor.isCasting()) {
		   this.updateBattlerFull_ATB(actor)
	   } else {
	       actor.setActionState('done');
	   };
    };
};

//*******************************
// * start Input  *(Overwritten)*
//*******************************
BattleManager.startInput = function() {
	if (!this._atbBattler) {return};
	this._atbBattler._intTurn = true;
	this.startTurn();
};

//==============================
// * needPrepare Action Actor
//==============================
BattleManager.prepareActionActor = function(battler) {
	var action = battler.currentAction();
	if (action && action.item() && battler.canUse(action.item())) {
		var castTime = Math.abs(action.item().speed);
		if (castTime > 0 && battler.guardSkillId() != action.item().id) {
			battler._cast_atb = [action.item(),0,castTime];
		} else {
			battler._atbItem = action.item();
		};
	} else {
		battler.clearATB();
	};
};

//==============================
// * prepare Action Enemy
//==============================
BattleManager.prepareActionEnemy = function(battler) {
	battler.makeActions();
	var action = battler.currentAction();
	if (action && action.item() && battler.canUse(action.item())) {
	    battler._atbItem = action.item();
		var castTime = Math.abs(action.item().speed)
		if (castTime > 0 && battler.guardSkillId() != action.item().id) {
			battler._cast_atb = [action.item(),0,castTime];
		} else {
			this._atbBattler = battler;
		};
	} else {
		battler.clearATB();
	};
};

//==============================
// * end Action
//==============================
var _mog_atb_bMngr_endAction = BattleManager.endAction;
BattleManager.endAction = function() {
    _mog_atb_bMngr_endAction.call(this);
	if (this._subject) { 
		this._subject.clearATB();
		this._subject._wait_atb = 5;
	};
};

//*******************************
// * updateTurnEnd (Overwritten)*
//*******************************
BattleManager.updateTurnEnd = function() {
    this._atbBattler = null;
	this._phase = 'start'
};

//*******************************
// * get Next Subject *(Overwritten)*
//*******************************
BattleManager.getNextSubject = function() {
    for (;;) {
        var battler = this._actionBattlers.shift();
        if (!battler) {
            return null;
        }
        if (battler.isBattleMember() && battler.isAlive() && battler._intTurn) {
            return battler;
        };
    };
};

//*******************************
// * is Inputting *(Overwritten)*
//*******************************
BattleManager.isInputting = function() {
    return this._atbBattlerInput[0];
};

//==============================
// * gget Available Actors
//==============================
BattleManager.getAvailableActors = function(index,value) {	
    var battler = null 	
	if (value > 0) {
		for (var i = index; i < $gameParty.battleMembers().length; i++) {
			var actor = $gameParty.battleMembers()[i];
			if (actor && actor.canInput() && this.actor() != actor) {
				battler = actor;
				break;
			};
		};
	} else if (value < 0) {
		for (var i = index; i >= 0; i--) {
			var actor = $gameParty.battleMembers()[i];
			if (actor && actor.canInput() && this.actor() != actor) {
				battler = actor;
				break;
			};
		};
	};
	return battler;
};

//==============================
// * change Actor Button
//==============================
BattleManager.changeActorButton_ATB = function(value) {
	var currentActor = this.actor();
	var battler = null;
	var index = this._actorIndex;
	var maxBatMembers = $gameParty.battleMembers().length
	index += value;
	if (index >= maxBatMembers) {
		index = 0;
	} else if (index < 0) {
		index = maxBatMembers - 1;
	};
	if (value > 0) {
	   battler = this.getAvailableActors(index,value);
	   if (!battler) {
		   battler = this.getAvailableActors(0,value); 
	   };
	} else if (value < 0) {	
	   battler = this.getAvailableActors(index,value);
	   if (!battler) {
		   battler = this.getAvailableActors(maxBatMembers - 1,value); 
	   };	
	};	
	if (battler) {
		currentActor.clearActions()
		SoundManager.playCursor();
		this.selectionComAtbClear()
		this.prepareCommandSelection(battler);
		currentActor.setActionState('undecided')
	};
};

//==============================
// * prepare Command Selection
//==============================
BattleManager.setActorIndexATB = function(battler) {
	for (var i = 0; i < $gameParty.members().length; i++) {
		 var actor = $gameParty.members()[i];
         if (battler === actor) {return i};
 	};			
	return -1;
};

//==============================
// * prepare Command Selection
//==============================
BattleManager.prepareCommandSelection = function(battler) {
	battler.clearActions()
	this._atbBattlerInput = [battler,false];
	this._actorIndex = this.setActorIndexATB(battler);
	battler.makeActions();
	battler._atbItem = null;
	battler.setActionState('inputting');
};

//==============================
// * need Prepare Selection
//==============================
BattleManager.needPrepareSelection = function(battler) {
	if (this._atbBattlerInput[0]) {return false};
	if (!battler.canInput()) {return false};
	if (battler._atbItem) {return false};
	if (battler._intTurn) {return false};
	return true
};

//==============================
// * end Battle
//==============================
var _mog_atb_btmngr_endBattle = BattleManager.endBattle;
BattleManager.endBattle = function(result) {
	$gameTemp._atbForceHideWindows = true;
	this.clearATBValueParty();
	_mog_atb_btmngr_endBattle.call(this,result); 
};

//==============================
// * can Use Item ATB
//==============================
BattleManager.canUseItemATB = function() {
	if (!this._atbBattler._atbItem) {return false};	
	if (!this._atbBattler.canUse(this._atbBattler._atbItem)) {return false};
	return true;
};

//*******************************
// * start Turn   *(Overwritten)*
//*******************************
BattleManager.startTurn = function() {
   if (!this._atbBattler) {return};	
   if (!this.canUseItemATB()) {
	   this._atbBattler.clearATB();
       this._atbBattler = null;
	   this._phase = 'start'
	   return;
   };
   this._phase = 'turn';
   this._actionBattlers = [this._atbBattler]
   if (this._atbBattler.isActor()) {this._atbBattler.requestMotionRefresh()};
   this._atbBattler.requestMotionRefresh()
   this._logWindow.startTurn();
};

//==============================
// * can Event Turn ATB
//==============================
BattleManager.canUpdateEventTurnATB = function() {
	if ($gameSystem._atbEventPhase[3]) {return false};
    return true;
};

//==============================
// * Update Event Turn ATB
//==============================
BattleManager.updateEventTurnATB = function() {
    $gameSystem._atbEventPhase[0]++;
	if ($gameSystem._atbEventPhase[0] >= $gameSystem._atbEventPhase[1]) {
		$gameSystem._atbEventPhase[0] = 0;
		this.refreshEventPhase_ATB()
	};
};

//==============================
// * can Event Phase
//==============================
BattleManager.canUpdateEventPhase = function() {
	if ($gameTemp._battleEnd) {return false};
    return $gameSystem._atbEventPhase[3];
}; 

//==============================
// * Update Event Phase
//==============================
BattleManager.updateEventPhase = function() {
	var active = $gameSystem._atbEventPhase[3];
    if (this.isActionForced()) {
        this.processForcedAction();
        $gameSystem._atbEventPhase[3] = true;
    } else {
        $gameSystem._atbEventPhase[3] = this.updateEventMain();
    };	
	if (active != $gameSystem._atbEventPhase[3]) {
		$gameTemp._atbWinData[1] = true;
		$gameTemp._atbWaitTemp[0] = 10;
	};
}; 

//==============================
// * refresh Event Phase ATB
//==============================
BattleManager.refreshEventPhase_ATB = function() {
	$gameTroop.increaseTurn();
    $gameSystem._atbEventPhase[3] = this.updateEventMain();
	$gameTemp._atbWinData[0] = $gameSystem._atbEventPhase[3];
};

//==============================
// * display Start Messages
//==============================
var _mog_atb_BatMngr_displayStartMessages = BattleManager.displayStartMessages;
BattleManager.displayStartMessages = function() {
	if (String(Moghunter.atb_SkipEmerge) == 'true') {return};
	_mog_atb_BatMngr_displayStartMessages.call(this);
};

//==============================
// * processVictory
//==============================
var _mog_atbSprt_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	 $gameTemp._battleEnd = true;
    _mog_atbSprt_processVictory.call(this);	 
};

//==============================
// * processAbort
//==============================
var _mog_atbSprt_processAbort = BattleManager.processAbort;
BattleManager.processAbort = function() {
	 $gameTemp._battleEnd = true;
	_mog_atbSprt_processAbort.call(this);	 
};

//==============================
// * processDefeat
//==============================
var _mog_atbSprt_processDefeat = BattleManager.processDefeat;
BattleManager.processDefeat = function() {
	 $gameTemp._battleEnd = true;
	_mog_atbSprt_processDefeat.call(this);	 
};

//=============================================================================
//=============================================================================
// ** Scene Battle
//=============================================================================
//=============================================================================

//==============================
// * Start
//==============================
var _mog_atb_sBat_start = Scene_Battle.prototype.start;
Scene_Battle.prototype.start = function() {
	_mog_atb_sBat_start.call(this);
	BattleManager.prepareInitialATBValue();
	$gameSystem._atbEventPhase[3] = BattleManager.updateEventMain();
};

//*******************************
// * Update Battle Process  *(Overwritten)*
//*******************************
Scene_Battle.prototype.updateBattleProcess = function() {
	if (!BattleManager.isAborting() || BattleManager.isBattleEnd()) {
		if (BattleManager.canUpdateEventPhase()) {BattleManager.updateEventPhase()};
		if (BattleManager.needUpdate_ATBBasic()) {
			if (BattleManager.canUpdateEventTurnATB()) {BattleManager.updateEventTurnATB()};
			BattleManager.update_ATB();
			if ($gameSystem._atbMode[0] > 0) {
			    BattleManager.updateEscape_ATB(this._actorCommandWindow.active);
			};
			this.updateCommandsATB();
		};
		if ($gameSystem._atbMode[0] === 0) {
	    	BattleManager.updateEscape_ATB(this._actorCommandWindow.active);
		};
        BattleManager.update();
        if (this.canStartCommandSelection()) {
			BattleManager._atbBattlerInput[1] = true
			this.changeInputWindow()
		};
    };
	if (Imported.MOG_BalloonActionName) {this.updateBalloonName()};
};

//==============================
// * update
//==============================
var _mog_atb_sBat_update = Scene_Battle.prototype.update;
Scene_Battle.prototype.update = function() {
	_mog_atb_sBat_update.call(this);
	this.updateAtbScBat();
};
	
//==============================
// * update Atb Sc Bat
//==============================
Scene_Battle.prototype.updateAtbScBat = function() {
    if ($gameTemp._atbForceHideWindows) {this.forceHideWindows()};	
	if ($gameTemp._atbWinData[0]) {this.forceHideWindowsTemp()};
	if ($gameTemp._atbWinData[1]) {this.loadWindowAtbData()};
	if ($gameTemp._atbneedRefWind) {this.forceRefreshWindowATB()};
	if ($gameTemp._atbWaitTemp[0] > 0) {$gameTemp._atbWaitTemp[0]--};
	if ($gameTemp._atbWaitTemp[1] > 0) {$gameTemp._atbWaitTemp[1]--};
	$gameSystem._atbMode[1] = !this.canUpdateAtbMode();
	if (this._actorCommandWindow.isClosed() && this._actorCommandWindow.active && BattleManager.actor()) {
		this._actorCommandWindow.open();
	};
};

//==============================
// * force Refresh WindowATB
//==============================
Scene_Battle.prototype.forceRefreshWindowATB = function() {
	$gameTemp._atbneedRefWind = false;
    if (this._enemyWindow.active) {
		if (this._enemyWindow.enemy().isDead()) {
			this._enemyWindow.refresh()
			this._enemyWindow.select(0);
			if (!this._enemyWindow.enemy()) {
				this.onEnemyCancel();
			};
		};
	};
};

//==============================
// * can Update Atb Mode
//==============================
Scene_Battle.prototype.canUpdateAtbMode = function() {
	if ($gameSystem._atbMode[0] === 0) {
	    if (this._partyCommandWindow.active) {return false};
		if (this._actorCommandWindow.active) {return false};
	    if (this._actorWindow.active) {return false};
		if (this._enemyWindow.active) {return false};
		if (this._skillWindow.active) {return false};
		if (this._itemWindow.active) {return false};
	} else if ($gameSystem._atbMode[0] === 1) {
	    if (this._actorWindow.active) {return false};
		if (this._enemyWindow.active) {return false};
		if (this._skillWindow.active) {return false};
		if (this._itemWindow.active) {return false};
	} else if ($gameSystem._atbMode[0] === 2) {
		if (this._skillWindow.active) {return false};
		if (this._itemWindow.active) {return false};				
	};
	return true;
};

//==============================
// * forceHideWindowsTemp
//==============================
Scene_Battle.prototype.forceHideWindowsTemp = function() {
	$gameTemp._atbWinData[0] = false;
    this.saveWindowAtbData();
	this.disableAllWindowATB();
};

//==============================
// * create Display Objects
//==============================
var _mog_atb_sBat_createDisplayObjects = Scene_Battle.prototype.createDisplayObjects;
Scene_Battle.prototype.createDisplayObjects = function() {
	_mog_atb_sBat_createDisplayObjects.call(this);
	this.saveWindowAtbData();
};

//==============================
// * load Window Atb Data
//==============================
Scene_Battle.prototype.disableAllWindowATB = function() {
	this._partyCommandWindow.visible = false;
	this._partyCommandWindow.active = false;	
	this._actorCommandWindow.visible = false;
	this._actorCommandWindow.active = false;	
	this._actorWindow.visible = false;
	this._actorWindow.active = false;
	this._enemyWindow.visible = false;
	this._enemyWindow.active = false;
	this._skillWindow.visible = false;
	this._skillWindow.active = false; 
	this._itemWindow.visible = false;
	this._itemWindow.active = false;
};

//==============================
// * save Window Atb Data
//==============================
Scene_Battle.prototype.saveWindowAtbData = function() {
	$gameTemp._atbWinData[0] = false;
    this._partyCommandWindowData = {};
	this._partyCommandWindowData.visible = this._partyCommandWindow.visible;
	this._partyCommandWindowData.active = this._partyCommandWindow.active;
	
    this._actorCommandWindowData = {};
	this._actorCommandWindowData.visible = this._actorCommandWindow.visible;
	this._actorCommandWindowData.active = this._actorCommandWindow.active;	
	
    this._actorWindowData = {};
	this._actorWindowData.visible = this._actorWindow.visible;
	this._actorWindowData.active = this._actorWindow.active;

	this._enemyWindowData = {};
	this._enemyWindowData.visible = this._enemyWindow.visible;
	this._enemyWindowData.active = this._enemyWindow.active;

	this._skillWindowData = {};
	this._skillWindowData.visible = this._skillWindow.visible;
	this._skillWindowData.active = this._skillWindow.active;
   
    this._itemWindowData = {};
	this._itemWindowData.visible = this._itemWindow.visible;
	this._itemWindowData.active = this._itemWindow.active;
};

//==============================
// * load Window Atb Data
//==============================
Scene_Battle.prototype.loadWindowAtbData = function() {
	$gameTemp._atbWinData[1] = false;
	if (!this._actorWindowData) {return};
	this._partyCommandWindow.visible = this._partyCommandWindowData.visible;
	this._partyCommandWindow.active = this._partyCommandWindowData.active;
	
	this._actorCommandWindow.visible = this._actorCommandWindowData.visible;
	this._actorCommandWindow.active = this._actorCommandWindowData.active;	
	if (this._actorCommandWindow.active) {
        this._actorCommandWindow.open();
	};
	this._actorWindow.visible = this._actorWindowData.visible;
	this._actorWindow.active = this._actorWindowData.active;

	this._enemyWindow.visible = this._enemyWindowData.visible;
	this._enemyWindow.active = this._enemyWindowData.active;
	
	this._skillWindow.visible = this._skillWindowData.visible;
	this._skillWindow.active = this._skillWindowData.active;
   
	this._itemWindow.visible = this._itemWindowData.visible;
	this._itemWindow.active = this._itemWindowData.active;
};

//==============================
// * force Hide Windows
//==============================
Scene_Battle.prototype.forceHideWindows = function() {
    $gameTemp._atbForceHideWindows = false;
    this._partyCommandWindow.close();
	this._partyCommandWindow.active = false;
    this._actorCommandWindow.close();
    this._actorCommandWindow.active = false;
	this._actorWindow.hide();
	this._actorWindow.active = false;
	this._enemyWindow.hide();
	this._enemyWindow.active = false;
    this._skillWindow.hide();
	this._skillWindow.active = false;
    this._itemWindow.hide();
	this._itemWindow.active = false;
};

//==============================


// * can Start Command Selection
//==============================
Scene_Battle.prototype.canStartCommandSelection = function() {
	if (!BattleManager._atbBattlerInput[0]) {return false};
	if (BattleManager._atbBattlerInput[1]) {return false};
	return true;
};

//==============================
// * update Commands ATB
//==============================
Scene_Battle.prototype.updateCommandsATB = function() {
    if (this._actorCommandWindow.active) {
		if (Input.isTriggered(Moghunter.atb_NextActorLeft)) {
			BattleManager.changeActorButton_ATB(1);
		} else if (Input.isTriggered(Moghunter.atb_NextActorRight)) {
			BattleManager.changeActorButton_ATB(-1);
		};
	};
};

//*******************************
// * Select Next Command  *(Overwritten)*
//*******************************
Scene_Battle.prototype.selectNextCommand = function() {
   BattleManager.selectionComAtbClear();
   this.endCommandSelection();
};

//==============================
// * create Actor Command Window
//==============================
var _mog_atb_createActorCommandWindow = Scene_Battle.prototype.createActorCommandWindow;
Scene_Battle.prototype.createActorCommandWindow = function() {
	_mog_atb_createActorCommandWindow.call(this)
    this._actorCommandWindow.setHandler('cancel', null);
};

//=============================================================================
//=============================================================================
// ** SPRITES
//=============================================================================
//=============================================================================


//==============================
// * load ATB Icon
//==============================
ImageManager.loadATBIcon = function(filename) {
	return this.loadBitmap('img/atb/', filename, 0, true);
};	

//=============================================================================
// ** Window Battle Actor
//=============================================================================

//==============================
// * Update
//==============================
var _mog_atb_wBatActor_update = Window_BattleActor.prototype.update;
Window_BattleActor.prototype.update = function() {
	if (!BattleManager.actor()) {return};
	_mog_atb_wBatActor_update.call(this);
};

//=============================================================================
// ** Window Battle Enemy
//=============================================================================

//==============================
// * Update
//==============================
var _mog_atb_wBatEnemy_update = Window_BattleEnemy.prototype.update;
Window_BattleEnemy.prototype.update = function() {
	if (!BattleManager.actor()) {return};
	_mog_atb_wBatEnemy_update.call(this);
};

//=============================================================================
// ** Window Actor Command
//=============================================================================

//==============================
// * Update
//==============================
var _mog_atb_wActCom_processOk = Window_ActorCommand.prototype.processOk;
Window_ActorCommand.prototype.processOk = function() {
	if (!BattleManager.actor()) {return};
	if ($gameTroop.isAllDead()) {return};
	_mog_atb_wActCom_processOk.call(this);
};

//*******************************
// * cursor Page Down  *(Overwritten)*
//*******************************
Window_ActorCommand.prototype.cursorPagedown = function() {
};

//*******************************
// * cursor Page UP  *(Overwritten)*
//*******************************
Window_ActorCommand.prototype.cursorPageup = function() {
};

//=============================================================================
// ** Sprite Actor
//=============================================================================

//==============================
// * is Moving
//==============================
Sprite_Actor.prototype.isMoving = function() {
	if (this._actor && !this._actor._intTurn) {return false};
    return this._movementDuration > 0;
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
// * Create Escape Gauge ATB
//==============================
Scene_Base.prototype.createEscapeGaugeATB = function() {	
    this._escapeGaugeATB = new EscapeGaugeATB();
	this._escapeGaugeATB.mz = 140;
	this._hudField.addChild(this._escapeGaugeATB);
};

//=============================================================================
// ** Scene Battle
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_atbEscapeGauge_sbattle_createSpriteset = Scene_Battle.prototype.createSpriteset;
Scene_Battle.prototype.createSpriteset = function() {
	_mog_atbEscapeGauge_sbattle_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
    this.createEscapeGaugeATB();
	this.sortMz();	
};

//=============================================================================
// ** EscapeGaugeATB
//=============================================================================	
function EscapeGaugeATB() {
    this.initialize.apply(this, arguments);
}

EscapeGaugeATB.prototype = Object.create(Sprite.prototype);
EscapeGaugeATB.prototype.constructor = EscapeGaugeATB;

//==============================
// * Initialize
//==============================
EscapeGaugeATB.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);	
	this.setup();
    this.createSprites();
};

//==============================
// * Setup
//==============================
EscapeGaugeATB.prototype.setup = function() {
   this.opacity = 0;
   this.x = Moghunter.atb_EscapeGaugeX;
   this.y = Moghunter.atb_EscapeGaugeY;
};

//==============================
// * create Sprites
//==============================
EscapeGaugeATB.prototype.createSprites = function() {
    this.createLayout();
	this.createGauge();
};

//==============================
// * create Layout
//==============================
EscapeGaugeATB.prototype.createLayout = function() {
    this._layout = new Sprite(ImageManager.loadATBIcon("Escape_A"));
	this.addChild(this._layout);
};

//==============================
// * create Gauge
//==============================
EscapeGaugeATB.prototype.createGauge = function() {
    this._gauge = new Sprite(ImageManager.loadATBIcon("Escape_B"));
	this._gauge.x = Moghunter.atb_EscapeGaugeX2;
	this._gauge.y = Moghunter.atb_EscapeGaugeY2;
	this.addChild(this._gauge);  
};

//==============================
// * Update Gauge
//==============================
EscapeGaugeATB.prototype.updateGauge = function() {
    var cw = this._gauge.bitmap.width;
	var ch = this._gauge.height;
	var rg = cw * $gameTemp._atbEscape[0] / $gameTemp._atbEscape[1];
	this._gauge.setFrame(0,0,rg,ch);
};

//==============================
// * need Fade
//==============================
EscapeGaugeATB.prototype.needFade = function() {
	if ($gameTemp._atbEscape[0] <= 0) {return true};
	if ($gameMessage.isBusy()) {return true};
	if ($gameTemp._battleEnd) {return true};
	return false;
};

//==============================
// * Update Visible
//==============================
EscapeGaugeATB.prototype.updateVisible = function() {
    if (this.needFade()) {
		this.opacity -= 10;
	} else {
		this.opacity += 10;
	};
};

//==============================
// * Update
//==============================
EscapeGaugeATB.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	this.updateVisible();
    this.updateGauge();
};
