//=============================================================================
// MOG_ChronoToolHud.js
//=============================================================================

/*:
 * @plugindesc (v1.2) Apresenta as huds das ações no Chrono Engine.
 * @author Moghunter
 *
 * @param Hud Start Visible
 * @desc Apresentar a hud no inicio do jogo.
 * @default true
 *
 * @param Hud Font Size
 * @desc Definição do tamanho da fonte.
 * @default 18
 *
 * @param Hud Item Color
 * @desc Definição da cor do número de item.
 * @default 0
 *
 * @param Hud Mp Color
 * @desc Definição da cor do número de mp.
 * @default 3
 *
 * @param Hud Tp Color
 * @desc Definição da cor do número de tp.
 * @default 5
 *
 * @param Hud Icon X-Axis
 * @desc Definição X-axis do ícone.
 * @default 3
 *
 * @param Hud Icon Y-Axis
 * @desc Definição Y-axis do ícone.
 * @default 19
 *
 * @param Hud Cost Number X-Axis
 * @desc Definição X-axis do custo.
 * @default 0
 *
 * @param Hud Cost Number Y-Axis
 * @desc Definição Y-axis do custo.
 * @default 38
 *
 * @param Item Hud X-Axis
 * @desc Definição X-axis da Hud de item.
 * @default 350
 *
 * @param Item Hud Y-Axis
 * @desc Definição Y-axis da Hud de item.
 * @default 560
 *
 * @param Skill Hud X-Axis
 * @desc Definição X-axis da Hud de habilidade.
 * @default 392
 *
 * @param Skill Hud Y-Axis
 * @desc Definição Y-axis da Hud de habilidade.
 * @default 560
 *
 * @param Weapon Hud X-Axis
 * @desc Definição X-axis da Hud de arma.
 * @default 434
 *
 * @param Weapon Hud Y-Axis
 * @desc Definição Y-axis da Hud de arma.
 * @default 560
 *
 * @param Shield Hud X-Axis
 * @desc Definição X-axis da Hud de arma.
 * @default 480
 *
 * @param Shield Hud Y-Axis
 * @desc Definição Y-axis da Hud de arma.
 * @default 560
 *
 * @help  
 * =============================================================================
 * +++ MOG - Chrono Tool Hud (v1.2) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Apresenta as huds das ações no Chrono Engine.
 *
 * =============================================================================
 * HISTÓRICO 
 * =============================================================================
 * (v1.2) - Melhoria na codificação.
 * (v1.1) - Correção dos plugins parameters não estarem funcionando.
 *  
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ChronoToolHud = true;
　　var Moghunter = Moghunter || {}; 

    Moghunter.parameters = PluginManager.parameters('MOG_ChronoToolHud');
    Moghunter.toolHud_StartVisible = String(Moghunter.parameters['Hud Start Visible'] || 'true');
	Moghunter.toolHud_ItemColor = Number(Moghunter.parameters['Hud Item Color'] || 0);
	Moghunter.toolHud_MpColor = Number(Moghunter.parameters['Hud Mp Color'] || 3);
	Moghunter.toolHud_TpColor = Number(Moghunter.parameters['Hud Tp Color'] || 5);
	Moghunter.toolHud_IconX = Number(Moghunter.parameters['Hud Icon X-Axis'] || 3);
	Moghunter.toolHud_IconY = Number(Moghunter.parameters['Hud Icon Y-Axis'] || 19);
	Moghunter.toolHud_CostX = Number(Moghunter.parameters['Hud Cost Number X-Axis'] || 0);
	Moghunter.toolHud_CostY = Number(Moghunter.parameters['Hud Cost Number Y-Axis'] || 38);	
	Moghunter.toolHud_FontSize = Number(Moghunter.parameters['Hud Font Size'] || 18);		
	Moghunter.toolHud_ItemX = Number(Moghunter.parameters['Item Hud X-Axis'] || 350);
	Moghunter.toolHud_ItemY = Number(Moghunter.parameters['Item Hud Y-Axis'] || 560);	
	Moghunter.toolHud_SkillX = Number(Moghunter.parameters['Skill Hud X-Axis'] || 392);
	Moghunter.toolHud_SkillY = Number(Moghunter.parameters['Skill Hud Y-Axis'] || 560);	
	Moghunter.toolHud_WeaponX = Number(Moghunter.parameters['Weapon Hud X-Axis'] || 434);
	Moghunter.toolHud_WeaponY = Number(Moghunter.parameters['Weapon Hud Y-Axis'] || 560);
	Moghunter.toolHud_ShieldX = Number(Moghunter.parameters['Shield Hud X-Axis'] || 480);
	Moghunter.toolHud_ShieldY = Number(Moghunter.parameters['Shield Hud Y-Axis'] || 560);

//=============================================================================
// ** Game System
//=============================================================================	

//==============================
// * Initialize
//==============================
var _mog_toolHud_gsys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_toolHud_gsys_initialize.call(this);
	var v = String(Moghunter.toolHud_StartVisible) === 'true' ? true : false;
	this._toolHud = [v,false];
	this._toolHudVisible = [];
	for (var i = 0; i < 4; i++) {
	     this._toolHudVisible[i] = v
	};
};

//=============================================================================
// ** Game Interpreter
//=============================================================================	

//==============================
// * Set Chrono Interpreter
//==============================
var _mog_chrono_toolHud_setChronoInterpreter = Game_Interpreter.prototype.setChronoInterpreter;
Game_Interpreter.prototype.setChronoInterpreter = function(command, args) {
	_mog_chrono_toolHud_setChronoInterpreter.call(this,command, args);
	if (command === "tool_item_visible")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._toolHudVisible[0] = value;
	};	
	if (command === "tool_skill_visible")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._toolHudVisible[1] = value;
	};		
	if (command === "tool_weapon_visible")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._toolHudVisible[2] = value;
	};		
	if (command === "tool_shield_visible")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._toolHudVisible[3] = value;
	};	
	if (command === "tool_hud_visible")  {
		var value = String(args[1]) == "true" ? true : false;
		$gameSystem._toolHudVisible[0] = value;
		$gameSystem._toolHudVisible[1] = value;
		$gameSystem._toolHudVisible[2] = value;
		$gameSystem._toolHudVisible[3] = value;
	};
};

//=============================================================================
// ** Game Character Base 
//=============================================================================

//==============================
// * Screen RealX
//==============================
Game_CharacterBase.prototype.screen_realX = function() {
    return this.scrolledX() * $gameMap.tileWidth()
};

//==============================
// * Screen RealY
//==============================
Game_CharacterBase.prototype.screen_realY = function() {
    return this.scrolledY() * $gameMap.tileHeight()
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_chronoEngine_ToolHud_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_chronoEngine_ToolHud_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createToolHud();
	this.sortMz();
};

//==============================
// * create Tool Hud
//==============================
Scene_Map.prototype.createToolHud = function() {
	this._toolHud = [];
	for (var i = 0; i < 4; i++) {
        this._toolHud[i] = new ToolHud(i);
		this._toolHud[i].mz = 120;
		this._hudField.addChild(this._toolHud[i]);
	};
};

//=============================================================================
// ** Tool Hud
//=============================================================================
function ToolHud() {
    this.initialize.apply(this, arguments);
};

ToolHud.prototype = Object.create(Sprite.prototype);
ToolHud.prototype.constructor = ToolHud;

//==============================
// * Initialize
//==============================
ToolHud.prototype.initialize = function(index) {
    Sprite.prototype.initialize.call(this);
	this._index = index;
	this._item = null;
	this._enabled = true;
	this.loadBitmaps();
	if (this._enabled) {this.createSprites()};
};

//==============================
// * Load Bitmaps
//==============================
ToolHud.prototype.loadBitmaps = function() {
	this._windowskin = ImageManager.loadSystem('Window');
    this._iconImg = ImageManager.loadSystem("IconSet");
};
	
//==============================
// * create Sprites 
//==============================
ToolHud.prototype.createSprites = function() {
	this._actor = null;
	this._hud_size = [-1,0,0,0];
	this._item = this.getItems();
	this._itemID = 0;
	this._itemEnabled = true;
    this.createLayout();
	this.createIcon();
	this.createCost();
	if (this.needHide(true)) {this.opacity = 0};
	this.refreshHud();	
	this._actor = null;
	if (!$gameParty.leader()) {this.opacity = 0};
};

//==============================
// * set Item Id
//==============================
ToolHud.prototype.setItemID = function() {
	if (this._index === 0) {
	    var toolID = $gameSystem._toolActorMode ? this._actor._toolItemId : $gameParty.tool_id();
		this._itemID = toolID;
	} else if (this._index === 1) {
	    var toolID = this._actor._toolSkillId;
		this._itemID = toolID;	
	} else if (this._index === 2) {
		var toolID = this._actor.equips()[0] ? this._actor.equips()[0].id : null;
		this._itemID = toolID;
	} else if (this._index === 3) {
		var toolID = this._actor.equips()[1] ? this._actor.equips()[1].id : null;
		this._itemID = toolID;
	};
};

//==============================
// * get Items
//==============================
ToolHud.prototype.getItems = function() {
	if (!this._actor) {return null};
	if (this._index === 0) {
	    var toolID = $gameSystem._toolActorMode ? this._actor._toolItemId : $gameParty.tool_id();
		return $dataItems[toolID];
	};
	if (this._index === 1) {
	    var toolID = this._actor._toolSkillId;
		return $dataSkills[toolID];		
	};
	if (this._index === 2) {
		return this._actor.equips()[0];
	};
	if (this._index === 3) {
		return this._actor.equips()[1];
	};
	return null;
};

//==============================
// * get Tool ID
//==============================
ToolHud.prototype.getToolID = function() {
     var actionID = null; 
     var item_notes = this._item.note.split(/[\r\n]+/);
     item_notes.forEach(function(note) {
		 var note_data = note.split(' : ')
		 if (note_data[0].toLowerCase() == "tool id"){
			 actionID = Number(note_data[1]);
		 };
	 },this);
	 return actionID;
};

//==============================
// * get Tool ID
//==============================
ToolHud.prototype.toolEvent = function() {
	if (!this._item) {return null};
	if (!this._item.toolID) {return null};
    return $gameMap.tool(this._item.toolID);
};


//==============================
// * get Cost Item
//==============================
ToolHud.prototype.getCostItem = function() {
	this._cost.bitmap.textColor = this.textColor(Number(Moghunter.toolHud_ItemColor));
	if (this.toolEvent().itemCost) {
		 this._costItem.item = $dataItems[this.toolEvent().itemCost];
		 if (this._costItem.item ) {
			 this._costItem.enabled = true;
			 this._costItem.itemNumber = $gameParty.numItems(this._costItem.item);			 
		 } else {
			 this._costItem.item = null;
		 };
	} else if (this.toolEvent().mpCost) {
		 this._costItem.enabled = true; 
	     this._costItem.mpCost = this.toolEvent().mpCost;
		 this._costItem.mpNumber = this._actor._mp;
		 this._cost.bitmap.textColor = this.textColor(Number(Moghunter.toolHud_MpColor));
	} else if (this.toolEvent().tpCost) {
		 this._costItem.enabled = true;
	     this._costItem.tpCost = this.toolEvent().tpCost;
		 this._costItem.tpNumber = this._actor._tp;
		 this._cost.bitmap.textColor = this.textColor(Number(Moghunter.toolHud_TpColor));
	};
};

//==============================
// * Text Color
//==============================
ToolHud.prototype.textColor = function(n) {
    var px = 96 + (n % 8) * 12 + 6;
    var py = 144 + Math.floor(n / 8) * 12 + 6;
    return this._windowskin.getPixel(px, py);
};

//==============================
// * refresh Cost ITem
//==============================
ToolHud.prototype.refreshCostItem = function() {
	if (this._costItem.item) {
		this._costItem.itemNumber = $gameParty.numItems(this._costItem.item);
		var number = this._costItem.itemNumber
		if (number === 0) {this._itemEnabled = false};
	} else if (this._costItem.mpNumber) {
	     var number = this._costItem.mpCost
		 this._costItem.mpNumber = this._actor._mp;
		 if (this._actor._mp < number) {this._itemEnabled = false};
	} else if (this._costItem.tpNumber) {
	     var number = this._costItem.tpCos;
		 this._costItem.tpNumber = this._actor._tp;
		 if (this._actor._tp < number) {this._itemEnabled = false};
	};
	this._cost.visible = true;
	this._cost.bitmap.clear();
	this._cost.bitmap.drawText(number,0,0,this._cost.width,this._cost.height,"center");
};

//==============================
// * refresh Cost ITem
//==============================
ToolHud.prototype.needRefreshCost = function() {
	if (!this._costItem) {return false};
	if (!this._costItem.enabled) {return false};
	if (this._costItem.item) {
		 if (this._costItem.itemNumber != $gameParty.numItems(this._costItem.item)) {return true};
	} else if (this._costItem.mpNumber) {
		 if (this._costItem.mpNumber != this._actor._mp) {return true};
	} else if (this._costItem.tpNumber) {
	     if (this._costItem.tpNumber != this._actor._tp) {return true};
	};
    return false;
};

//==============================
// * get Bitmap
//==============================
ToolHud.prototype.getBitmap = function() {
	if (this._index === 0) {return ImageManager.loadRas("Tool_Item")};
	if (this._index === 1) {return ImageManager.loadRas("Tool_Skill")};
	if (this._index === 2) {return ImageManager.loadRas("Tool_Weapon")};
	if (this._index === 3) {return ImageManager.loadRas("Tool_Shield")};
	return null;
};

//==============================
// * get Position
//==============================
ToolHud.prototype.getPosition = function(type) {
	if (this._index === 0) {
		if (type === 0) {
	        return Number(Moghunter.toolHud_ItemX);
		} else {
		    return Number(Moghunter.toolHud_ItemY);
		};
	} else if (this._index === 1) {
		if (type === 0) {
			return Number(Moghunter.toolHud_SkillX);
		} else {
			return Number(Moghunter.toolHud_SkillY);
		};
	} else if (this._index === 2) {
		if (type === 0) {
			return Number(Moghunter.toolHud_WeaponX);
		} else {
			return Number(Moghunter.toolHud_WeaponY);
		};
    } else if (this._index === 3) {
		if (type === 0) {
			return Number(Moghunter.toolHud_ShieldX);
		} else {
			return Number(Moghunter.toolHud_ShieldY);
		};
	};
};
	
//==============================
// * create Layout
//==============================
ToolHud.prototype.createLayout = function() {
    this._layout = new Sprite(this.getBitmap());
	this._layout.x = this.getPosition(0);
	this._layout.y = this.getPosition(1);
	this.addChild(this._layout);
};

//==============================
// * create Icon
//==============================
ToolHud.prototype.createIcon = function() {
    this._icon = new Sprite(this._iconImg);
	this._icon.x = this._layout.x + Number(Moghunter.toolHud_IconX);
	this._icon.y = this._layout.y + Number(Moghunter.toolHud_IconY);
	this._icon.visible = false;
	this.addChild(this._icon);
};

//==============================
// * Refresh Icon
//==============================
ToolHud.prototype.refreshIcon = function() {
	this._icon.visible = true;
	var iconIndex = this._item.iconIndex;
	var sx = iconIndex % 16 * 32;
	var sy = Math.floor(iconIndex / 16) * 32;
	this._icon.setFrame(sx, sy, 32, 32);
};

//==============================
// * create Cost
//==============================
ToolHud.prototype.createCost = function() {
     this._cost = new Sprite(new Bitmap(62,32));
	 this._cost.x = this._layout.x + Number(Moghunter.toolHud_CostX) - 12;
	 this._cost.y = this._layout.y + Number(Moghunter.toolHud_CostY);
	 this._cost.visible = false;
	 this._cost.bitmap.fontSize = Number(Moghunter.toolHud_FontSize);
	 this._costItem = null;
	 this.addChild(this._cost);
};

//==============================
// * Refresh Hud
//==============================
ToolHud.prototype.refreshHud = function() {
	 this._actor = $gameParty.leader();
	 if (!this._actor) {return};
	 this.setItemID();
	 this._itemEnabled = true;
	 this._item = this.getItems();
	 this._icon.visible = false;
	 this._cost.visible = false;
	 this._costItem = {};
	 this._costItem.enabled = false;
	 if (this._item) {
	     this.refreshIcon();
		 this.refreshCost();
		 if (this.needFade()) {this.opacity = 90};
	 };
};

//==============================
// * Refresh Cost
//==============================
ToolHud.prototype.refreshCost = function() {
	 this._cost.visible = false;
	 this._costItem = {};
	 this._costItem.enabled = false;	
	 this._costItem.item = null;
	 this._costItem.itemNumber = null;
	 this._costItem.mpCost = null;
	 this._costItem.mpNumber = null;
	 this._costItem.tpCost = null;
	 this._costItem.tpNumber = null;
	 if (this._item) {
		 this._item.toolID = this.getToolID();
		 if (this.toolEvent()) {this.getCostItem()};
	 };
	 if (this._costItem.enabled) {this.refreshCostItem()};
};

//==============================
// * need Refresh By Id
//==============================
ToolHud.prototype.needRefreshByID = function() {
	if (this._index === 0) {
	    var toolID = $gameSystem._toolActorMode ? this._actor._toolItemId : $gameParty.tool_id();
		if (toolID != this._itemID) {return true};
	} else if (this._index === 1) {
	    var toolID = this._actor._toolSkillId;
		if (toolID != this._itemID) {return true};	
	} else if (this._index === 2) {
		var toolID = this._actor.equips()[0] ? this._actor.equips()[0].id : null;
		if (toolID != this._itemID) {return true};
	} else if (this._index === 3) {
		var toolID = this._actor.equips()[1] ? this._actor.equips()[1].id : null;
		if (toolID != this._itemID) {return true};
	};
	return false;
};

//==============================
// * need Refresh Hud
//==============================
ToolHud.prototype.needRefreshHud = function() {
	 if (!this._actor) {return false};
	 if (this._actor != $gameParty.leader()) {return true};
	 if (this.needRefreshByID()) {return true};
  	 return false
};

//==============================
// * Need Fade
//==============================
ToolHud.prototype.needFade = function() {
    if (this._hud_size[0] === -1) {return false};
	if (!this._itemEnabled) {return true};
	if ($gamePlayer.screen_realX() < this._hud_size[0]) {return false};
	if ($gamePlayer.screen_realX() > this._hud_size[2]) {return false};
	if ($gamePlayer.screen_realY() < this._hud_size[1]) {return false};
	if ($gamePlayer.screen_realY() > this._hud_size[3]) {return false};	
    return true;
};

//==============================
// * get Data
//==============================
ToolHud.prototype.getData = function() {
	  this._hud_size[0] =  this._layout.x - ($gameMap.tileWidth() / 2);
	  this._hud_size[1] =  this._layout.y - ($gameMap.tileHeight() / 2);
	  this._hud_size[2] =  this._layout.x + this._layout.bitmap.width;
	  this._hud_size[3] =  this._layout.y + this._layout.bitmap.height;
	  this.refreshHud();
};

//==============================
// * Need Hide
//==============================
ToolHud.prototype.needHide = function(start) {
	if ($gameSystem.isChronoMode()) {return true};
    if ($gameMessage.isBusy()) {return true};
	if (!$gameSystem._toolHudVisible[this._index]) {return true};
	if (!start && !this._actor) {return true};
	return false
};

//==============================
// * Update Visible
//==============================
ToolHud.prototype.updateVisible = function() {
     if (this.needHide(false)) {
		 this.opacity -= 15;
	 } else {
		 if (this.needFade()) {
			 if (this.opacity > 90) {
				 this.opacity -= 10;
			     if (this.opacity < 90) {this.opacity = 90};
			 };
		 } else {
			 this.opacity += 10;
		 };
	 };
};

//==============================
// * update Sprites
//==============================
ToolHud.prototype.updateSprites = function() {
    if (this.needRefreshHud()) {this.refreshHud()};
	if (this._hud_size[0] === -1 && this._layout.bitmap.isReady()) {this.getData()};
	if (this.needRefreshCost()) {this.refreshCostItem()};
	this.updateVisible();
};

//==============================
// * Update
//==============================
ToolHud.prototype.update = function() {
    Sprite.prototype.update.call(this);
    if (this._enabled && this._iconImg.isReady()) {this.updateSprites()};
};