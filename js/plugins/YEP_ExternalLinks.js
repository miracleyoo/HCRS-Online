//=============================================================================
// Yanfly Engine Plugins - External Links
// YEP_ExternalLinks.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_ExternalLinks = true;

var Yanfly = Yanfly || {};
Yanfly.LINK = Yanfly.LINK || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 Link back to your home page through the title screen
 * and also be able to link your players from within the game.
 * @author Yanfly Engine Plugins
 *
 * @param Home Page URL
 * @desc Places a link to your website homepage at the title screen.
 * Leave this blank if you don't wish to enable this feature.
 * @default https://www.google.com/
 *
 * @param Home Page Text
 * @desc This is how 'Home Page' will appear on the title screen.
 * @default Home Page
 *
 * @param Popup Blocker Notice
 * @desc This is a window to notify the player the link was blocked
 * by a pop-up blocker.
 * @default The link was blocked by a pop-up blocker.
 *
 * @help
 * ============================================================================
 * Introduction                                                     .
 * ============================================================================
 * This plugin allows you to place a "link" to your home page at the title
 * screen's command window towards the bottom. To adjust where the link goes,
 * change the Home Page URL in the plugin's parameters.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * If you wish to send players to other links, you can use the following
 * plugin commands.
 *
 * Plugin Command
 *   OpenNewTab http://www.google.com/     Opens link in a new tab.
 *   OpenNewWindow http://www.google.com/  Opens link in a new window.
 *
 * Some web browsers may not differentiate these commands too much.
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_ExternalLinks');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.HomePageUrl = String(Yanfly.Parameters['Home Page URL']);
Yanfly.Param.HomePageText = String(Yanfly.Parameters['Home Page Text']);
Yanfly.Param.PopupMessage = String(Yanfly.Parameters['Popup Blocker Notice']);

//=============================================================================
// SceneManager
//=============================================================================

SceneManager.openPopupBlockerMessage = function() {
	this._scene.openPopupBlockerMessage();
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.LINK.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.LINK.Game_Interpreter_pluginCommand.call(this, command, args)
    if (command === 'OpenNewTab') this.openNewTab(args);
		if (command === 'OpenNewWindow') this.openNewWindow(args);
};

Game_Interpreter.prototype.openNewTab = function(args) {
	TouchInput.clear();
	Input.clear();
	var url = String(args[0]);
	var win = window.open(url, '_blank');
	if (win) {
		win.focus();
	} else {
		SceneManager.openPopupBlockerMessage();
	}
};

Game_Interpreter.prototype.openNewWindow = function(args) {
	TouchInput.clear();
	Input.clear();
	var url = String(args[0]);
	var win = window.open(url);
	if (win) {
		win.focus();
	} else {
		SceneManager.openPopupBlockerMessage();
	}
};

//=============================================================================
// Window_TitleCommand
//=============================================================================

Yanfly.LINK.Window_TitleCommand_makeCommandList =
		Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
    Yanfly.LINK.Window_TitleCommand_makeCommandList.call(this);
		this.addHomePageCommand();
};

Window_TitleCommand.prototype.addHomePageCommand = function() {
    if (Yanfly.Param.HomePageUrl.length <= 0) return;
		this.addCommand(Yanfly.Param.HomePageText, 'homePage');
};

//=============================================================================
// Window_PopupBlocker
//=============================================================================

function Window_PopupBlocker() {
    this.initialize.apply(this, arguments);
}

Window_PopupBlocker.prototype = Object.create(Window_Base.prototype);
Window_PopupBlocker.prototype.constructor = Window_PopupBlocker;

Window_PopupBlocker.prototype.initialize = function() {
    var width = Graphics.boxWidth;
    var height = this.fittingHeight(1);
    Window_Base.prototype.initialize.call(this, 0, 0, width, height);
		this.resizeWindow();
		this.refresh();
		this.openness = 0;
};

Window_PopupBlocker.prototype.resizeWindow = function() {
		this.width = this.windowWidth();
		this.createContents();
		this.x = (Graphics.boxWidth - this.width) / 2;
		this.y = (Graphics.boxHeight - this.height) / 2;
};

Window_PopupBlocker.prototype.windowWidth = function() {
		return this.textWidth(Yanfly.Param.PopupMessage);
};

Window_PopupBlocker.prototype.refresh = function() {
		this.contents.clear();
		this.drawText(Yanfly.Param.PopupMessage, 0, 0, this.contents.width);
};

//=============================================================================
// Scene_Base
//=============================================================================

Yanfly.LINK.Scene_Base_createWindowLayer =
		Scene_Base.prototype.createWindowLayer;
Scene_Base.prototype.createWindowLayer = function() {
		Yanfly.LINK.Scene_Base_createWindowLayer.call(this);
		this.createPopupBlockerMessage();
};

Scene_Base.prototype.createPopupBlockerMessage = function() {
		this._popupBlockerWindow = new Window_PopupBlocker();
		this.addWindow(this._popupBlockerWindow);
		this._popupCounter = 0;
};

Yanfly.LINK.Scene_Base_update = Scene_Base.prototype.update;
Scene_Base.prototype.update = function() {
    Yanfly.LINK.Scene_Base_update.call(this);
		this.updatePopupBlockerMessage();
};

Scene_Base.prototype.updatePopupBlockerMessage = function() {
		if (!this._popupBlockerWindow) return;
		if (this._popupBlockerWindow.isClosed()) return;
		if (--this._popupCounter > 0) return;
		this.closePopupBlockerMessage();
};

Scene_Base.prototype.openPopupBlockerMessage = function() {
		this._popupBlockerWindow.open();
		this._popupBlockerWindow.activate();
		this._popupCounter = 180;
};

Scene_Base.prototype.closePopupBlockerMessage = function() {
		if (!this._popupBlockerWindow) return;
		if (this._popupBlockerWindow.isClosed()) return;
		this._popupBlockerWindow.close();
		this._popupBlockerWindow.deactivate();
};

//=============================================================================
// Scene_Base
//=============================================================================

Yanfly.LINK.Scene_Title_createCommandWindow =
		Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
    Yanfly.LINK.Scene_Title_createCommandWindow.call(this);
		this._commandWindow.setHandler('homePage', this.commandHomePage.bind(this));
};

Scene_Title.prototype.commandHomePage = function() {
	TouchInput.clear();
	Input.clear();
	this._commandWindow.activate();
	var win = window.open(Yanfly.Param.HomePageUrl, '_blank');
	if (win) {
		win.focus();
	} else {
		SceneManager.openPopupBlockerMessage();
	}
};

//=============================================================================
// End of File
//=============================================================================
