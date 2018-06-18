//=============================================================================
// TDDP_MouseSystemEx.js
// Version: 1.6.1
//=============================================================================

var Imported = Imported || {};
Imported.TDDP_MouseSystemEx = "1.6.1";

//=============================================================================
/*:
 * @plugindesc 1.6.1 Custom mouse cursors, highlight menu items on hover, custom event mouse interaction and much more! See Help.
 *
 * @author Tor Damian Design / Galenmereth
 *
 * @param ---Custom Cursor---
 * @desc This is a heading, no need to touch it.
 * @default
 *
 * @param Use Custom Cursor?
 * @desc Whether you want to use a custom mouse cursor image.
 * true => ON       false => OFF
 * @default false
 *
 * @param Custom Cursor Image
 * @desc The filename for the custom cursor. It looks for this in your project's Custom Cursor Folder.
 * @default default.png
 *
 * @param Custom Cursors Folder
 * @desc The folder you wish to store the custom cursors in. Must end with a forward slash. Default: img/cursors/
 * @default img/cursors/
 *
 * @param ---Auto Change Cursors---
 * @desc Options for automatically changing the mouse cursor when hovering over events with the given event commands in them.
 * @default
 *
 * @param Show Text Cursor
 * @desc Automatically show this custom cursor image when hovering over events with Show Text commands in them.
 *
 * @param Transfer Cursor
 * @desc Automatically show this custom cursor image when hovering over events with Transfer Player commands in them.
 *
 * @param Change Gold Cursor
 * @desc Automatically show this custom cursor image when hovering over events with Change Gold commands in them.
 *
 * @param Change Items Cursor
 * @desc Automatically show this custom cursor image when hovering over events with Change Items commands in them.
 *
 * @param Change Weapons Cursor
 * @desc Automatically show this custom cursor image when hovering over events with Change Weapons commands in them.
 *
 * @param Change Armors Cursor
 * @desc Automatically show this custom cursor image when hovering over events with Change Armors commands in them.
 *
 * @param ---Auto Change Icons---
 * @desc Options for automatically showing an icon when hovering over events with the given event commands in them.
 * @default
 *
 * @param Show Text Icon
 * @desc Automatically show this icon when hovering over events with Show Text commands in them.
 *
 * @param Transfer Icon
 * @desc Automatically show this icon when hovering over events with Transfer Player commands in them.
 *
 * @param Change Gold Icon
 * @desc Automatically show this icon when hovering over events with Change Gold commands in them.
 *
 * @param Change Items Icon
 * @desc Automatically show this icon when hovering over events with Change Items commands in them.
 *
 * @param Change Weapons Icon
 * @desc Automatically show this icon when hovering over events with Change Weapons commands in them.
 *
 * @param Change Armors Icon
 * @desc Automatically show this icon when hovering over events with Change Armors commands in them.
 *
 * @param ---Hover Select---
 * @desc This is a heading, no need to touch it.
 * @default
 *
 * @param Highlight On Hover
 * @desc Highlight menu items when hovering over them with the mouse.
 * true => ON       false => OFF
 * @default false
 *
 * @param Hover SE Cooldown
 * @desc Audio cooldown (in frames) between playing Cursor SE when Highlight On Hover is set to true. Default 4.
 * @default 4
 *
 * @param ---Customizeable Notetags---
 * @desc These are options for activating events by mouse interaction instead of player character.
 * @default
 *
 * @param No Auto Cursor Notetag
 * @desc The notetag used to disable auto cursor switching on this event or event page.
 * @default no_auto_cursor!
 *
 * @param No Auto Icon Notetag
 * @desc The notetag used to disable auto icon switching on this event or event page.
 * @default no_auto_icon!
 *
 * @param Click Notetag
 * @desc The notetag used to trigger the event when it is clicked on.
 * Default: click_activate!
 * @default click_activate!
 *
 * @param Hover Notetag
 * @desc The notetag used to trigger the event when the mouse is over it.
 * Default: hover_activate!
 * @default hover_activate!
 *
 * @param Leave Notetag
 * @desc The notetag used to trigger the event when the mouse leaves it.
 * Default: leave_activate!
 * @default leave_activate!
 *
 * @param ---Mouse Icons---
 * @desc This is a heading, no need to touch it.
 * @default
 *
 * @param Hide Cursor
 * @desc Hide the default mouse cursor when an icon is shown.
 * true => ON       false => OFF
 * @default false
 *
 * @param Icon Offset X
 * @desc The icon's offset from the mouse horizontally.
 * Default: 9
 * @default 9
 *
 * @param Icon Offset Y
 * @desc The icon's offset from the mouse vertically.
 * Default: 14
 * @default 14
 *
 * @param ---Mouse Icon Tags---
 * @desc This is a heading, no need to touch it.
 * @default
 *
 * @param Icon Tag 1
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default quest: 191
 *
 * @param Icon Tag 2
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default chest: 210
 *
 * @param Icon Tag 3
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default door: 106
 *
 * @param Icon Tag 4
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default world_map: 190
 *
 * @param Icon Tag 5
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default potion: 176
 *
 * @param Icon Tag 6
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default poison: 177
 *
 * @param Icon Tag 7
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default four_leaf_clover: 182
 *
 * @param Icon Tag 8
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default notebook: 187
 *
 * @param Icon Tag 9
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default letter: 192
 *
 * @param Icon Tag 10
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default key: 195
 *
 * @param Icon Tag 11
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default key: 195
 *
 * @param Icon Tag 12
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default key: 195
 *
 * @param Icon Tag 13
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default key: 195
 *
 * @param Icon Tag 14
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default key: 195
 *
 * @param Icon Tag 15
 * @desc Set up an icon tag shortcut to be used with the Mouse Hover Icons notetag. See plugin Help for more information.
 * @default key: 195
 *
 * @help =~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~
 * Information
 * =~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~
 * TDDP - MouseSystem is a collection of methods for modifying mouse-based
 * interaction in your games. You can set custom mouse cursors, show icons beside
 * the mouse when hovering over events, activate events by mouse, and more.
 *
 * For updates and easy to use documentation, please go to the plugin's website:
 * http://mvplugins.tordamian.com/?p=26
 *
 * There you can also download a PDF of the documentation for offline use, and
 * having the documentation in one cleanly presented place means you can always
 * be sure it's the most recent available.
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Terms & Conditions
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * This plugin is free for both non-commercial and commercial use. Please see
 * http://mvplugins.tordamian.com/terms-of-use for the full terms of use.
 *
 * A big thank you to Degica for making this plugin free for commercial use for
 * everyone!
 */
//=============================================================================
// All anonymous/helper functions are registered on this object for the convenience of other plugins.
var TDDP_MouseSystemEx = {};
(function() {
    "use strict";
    /**
    * Return .png if no file extension present in filename
    */
    TDDP_MouseSystemEx._ext = function(filename) {
        if (String(filename).split(".").length > 1) {
            return filename;
        } else {
            // Default filetype extension
            return filename + ".png";
        }
    }
    //=============================================================================
    // Setting up parameters
    //=============================================================================
    var parameters = PluginManager.parameters('TDDP_MouseSystemEx');
    // Auto change cursors
    TDDP_MouseSystemEx.showTextCursor       = String(parameters['Show Text Cursor']) || false;
    TDDP_MouseSystemEx.changeGoldCursor     = String(parameters['Change Gold Cursor']) || false;
    TDDP_MouseSystemEx.changeItemCursor     = String(parameters['Change Items Cursor']) || false;
    TDDP_MouseSystemEx.changeWeaponCursor   = String(parameters['Change Weapons Cursor']) || false;
    TDDP_MouseSystemEx.changeArmorCursor    = String(parameters['Change Armors Cursor']) || false;
    TDDP_MouseSystemEx.transferPlayerCursor = String(parameters['Transfer Cursor']) || false;
    // Auto change icons
    TDDP_MouseSystemEx.showTextIcon         = String(parameters['Show Text Icon']) || false;
    TDDP_MouseSystemEx.changeGoldIcon       = String(parameters['Change Gold Icon']) || false;
    TDDP_MouseSystemEx.changeItemIcon       = String(parameters['Change Items Icon']) || false;
    TDDP_MouseSystemEx.changeWeaponIcon     = String(parameters['Change Weapons Icon']) || false;
    TDDP_MouseSystemEx.changeArmorIcon      = String(parameters['Change Armors Icon']) || false;
    TDDP_MouseSystemEx.transferPlayerIcon   = String(parameters['Transfer Icon']) || false;
    // Settings
    TDDP_MouseSystemEx.highlightOnHover     = Boolean(parameters['Highlight On Hover'] === 'true' || false);
    TDDP_MouseSystemEx.audioCooldownOnHover = Number(parameters['Hover SE Cooldown'] || 4)
    TDDP_MouseSystemEx.hideCursor           = Boolean(parameters['Hide Cursor']        === 'true' || false);
    TDDP_MouseSystemEx.iconOffsetX          = Number(parameters['Icon Offset X']) || 0;
    TDDP_MouseSystemEx.iconOffsetY          = Number(parameters['Icon Offset Y']) || 0;
    TDDP_MouseSystemEx.noAutoCursorNotetag  = String(parameters['No Auto Cursor Notetag']);
    TDDP_MouseSystemEx.noAutoIconNotetag    = String(parameters['No Auto Icon Notetag']);
    TDDP_MouseSystemEx.clickToActivateNote  = String(parameters['Click Notetag']);
    TDDP_MouseSystemEx.hoverToActivateNote  = String(parameters['Hover Notetag']);
    TDDP_MouseSystemEx.leaveToActivateNote  = String(parameters['Leave Notetag']);
    TDDP_MouseSystemEx.useCustomCursor      = Boolean(parameters['Use Custom Cursor?'] === 'true' || false);
    TDDP_MouseSystemEx.cursorImage          = TDDP_MouseSystemEx._ext(String(parameters['Custom Cursor Image']));
    TDDP_MouseSystemEx.defaultCursorImage   = TDDP_MouseSystemEx.cursorImage;
    TDDP_MouseSystemEx.customCursorPath     = String(parameters['Custom Cursors Folder']);

    TDDP_MouseSystemEx.mouseIconTags        = {}
    TDDP_MouseSystemEx._cursorFilenameInUse = null;   // Helper to compare changes
    TDDP_MouseSystemEx._lastUpdateFrame     = 0;      // Last frame cursor got updated
    TDDP_MouseSystemEx._cssClassPrefix      = "TDDP_customCursor_";

    // Add all mouse icon tags
    for(var i = 1; i <= 15; ++i) {
        var tag = parameters['Icon Tag ' + i]
        if (!tag) continue;
        tag = tag.split(":");
        var key = tag[0];
        var val = tag[1].replace(' ', '');
        TDDP_MouseSystemEx.mouseIconTags[key] = val;
    }
    /**
    * Pre-cache all custom cursors when in test mode
    */
    // Check if playtest; if so, store file. If not, read stored
    TDDP_MouseSystemEx._indexFilename = "_index.json";
    if (StorageManager.isLocalMode() && Utils.isOptionValid('test')) {
        var fs = require('fs');
        // Find that relative local path, using MV's own methods
        var path = window.location.pathname.replace(/\/[^\/]*$/, '/' + TDDP_MouseSystemEx.customCursorPath);
        if (path.match(/^\/([A-Z]\:)/)) {
            path = path.slice(1);
        }
        path = decodeURIComponent(path);
        // Check if cursors dir exists, make if not
        if (!fs.existsSync(path)) {
            alert('TDDP MouseSystemEx\nThe chosen cursor folder "' + TDDP_MouseSystemEx.customCursorPath + '" has been created for you. Please put any custom cursor image files in this folder.');
            fs.mkdirSync(path);
        }
        // Read dir
        var files = fs.readdirSync(path).filter(function(v) {
            if(v != TDDP_MouseSystemEx._indexFilename && v[1]) return v;
        });
        // Store in json
        fs.writeFile(path + TDDP_MouseSystemEx._indexFilename, JSON.stringify(files), 'utf8', _loadAndSetupCustomCursorCSS);
    } else {
        // Read stored file
        _loadAndSetupCustomCursorCSS();
    }
    /**
    * Load and setup the custom cursor CSS additions
    */
    function _loadAndSetupCustomCursorCSS() {
        var xhr = new XMLHttpRequest();
        var url = TDDP_MouseSystemEx.customCursorPath + TDDP_MouseSystemEx._indexFilename;
        xhr.open('GET', url);
        xhr.overrideMimeType('application/json');
        xhr.onload = function() {
            if (xhr.status < 400) {
                var dummyContainerElement = document.createElement('div');
                dummyContainerElement.id = "TDD_MS_CursorDummies";
                document.body.appendChild(dummyContainerElement);
                // Next we iterate the cached cursor list
                var classPrefix = TDDP_MouseSystemEx._cssClassPrefix;
                var cachedCursors = JSON.parse(xhr.responseText);
                for (var i=0, max=cachedCursors.length; i<max; i++) {
                    var cursor = cachedCursors[i];
                    var cursorName = cursor.split(".")[0];
                    var cursorPath = TDDP_MouseSystemEx.customCursorPath + cursor;
                    var sheet = window.document.styleSheets[0];
                    sheet.insertRule('.' + classPrefix + cursorName + ' { cursor: url(../' + cursorPath + '), default; }', sheet.cssRules.length);
                    // To ensure all the cursors get prefetched by browsers, we create dummy divs to hold all the styles...
                    var dummyLoaderElement = document.createElement('div');
                    dummyLoaderElement.id = cursorName + "_dummy";
                    dummyContainerElement.appendChild(dummyLoaderElement);
                    dummyLoaderElement.className = classPrefix + cursorName;
                }
            }
        };
        xhr.onerror = function() {
            //
        };
        xhr.send();
    }
    //=============================================================================
    // Game_Interpreter - register plugin commands
    //=============================================================================
    /**
    * Alias and extend pluginCommand
    */
    var Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        Game_Interpreter_pluginCommand.call(this, command, args)
        if (command === 'SetCustomCursor')      TDDP_MouseSystemEx._setCustomCursor(args);
        if (command === 'ResetCustomCursor')    TDDP_MouseSystemEx._resetCustomCursor();
    };
    //=============================================================================
    // Helper functions
    //=============================================================================
    /**
    * Show custom cursor
    */
    TDDP_MouseSystemEx._showCustomCursor = function(filename) {
        var filename = filename || this.cursorImage;
        document.body.className = this._cssClassPrefix + filename.split(".")[0];
    }
    /**
    * Set new default custom cursor
    */
    TDDP_MouseSystemEx._setCustomCursor = function(filename) {
        this.cursorImage = filename;
        this._showCustomCursor(TouchInput.cursorImage);
    }
    /**
    * Reset custom cursor to parameter setting defaults
    */
    TDDP_MouseSystemEx._resetCustomCursor = function() {
        this._setCustomCursor(this.defaultCursorImage);
    }
    /**
    * Show the mouse cursor
    */
    TDDP_MouseSystemEx._showMouseCursor = function() {
        if (this.useCustomCursor) {
            this._showCustomCursor();
        } else {
            document.body.style.cursor = 'inherit';
        }
    }
    /**
    * Hide the mouse cursor
    */
    TDDP_MouseSystemEx._hideMouseCursor = function() {
        document.body.style.cursor = 'none';
    }
    /**
    * Return Comments from event page. Multiline comments require an additional check (408)
    */
    TDDP_MouseSystemEx._filterComments = function(pageListObject) {
        var comments = (pageListObject.code == 108 || pageListObject.code == 408) ? true : false;
        return comments;
    }
    /**
    * Return Show Text messages from event page
    */
    TDDP_MouseSystemEx._filterMessages = function(pageListObject) {
        return pageListObject.code == 401;
    }
    /**
    * Return Transfer Player events from event page
    */
    TDDP_MouseSystemEx._filterTransferPlayer = function(pageListObject) {
        return pageListObject.code == 201;
    }
    /**
    * Return Change Gold events from event page
    */
    TDDP_MouseSystemEx._filterChangeGold = function(pageListObject) {
        return pageListObject.code == 125;
    }
    /**
    * Return Change Items events from event page
    */
    TDDP_MouseSystemEx._filterChangeItems = function(pageListObject) {
        return pageListObject.code == 126;
    }
    /**
    * Return Change Weapons events from event page
    */
    TDDP_MouseSystemEx._filterChangeWeapons = function(pageListObject) {
        return pageListObject.code == 127;
    }
    /**
    * Return Change Armors events from event page
    */
    TDDP_MouseSystemEx._filterChangeArmors = function(pageListObject) {
        return pageListObject.code == 128;
    }
    /**
    * Check if current scene is of the type Scene_Map
    */
    TDDP_MouseSystemEx._isSceneMap = function() {
        return (SceneManager._scene instanceof Scene_Map);
    }
    /**
    * Find a given notetag either in a game_event's Note box or Comment box on current active page
    */
    TDDP_MouseSystemEx._findInEventNotetags = function(game_event, notetag, onMatch) {
        if (!game_event.page()) return false;
        var comments   = game_event.page().list.filter(this._filterComments);
        var result     = null;
        var foundMatch = false;
        var matchInString = function(string) {
            result = string.match(notetag);
            if (result !== null) {
                foundMatch = true;
            }
        }
        // First see if there's a relevant page comment, has higher priority
        if (comments.length > 0) {
            comments.forEach(function(comment) {
                if (foundMatch) return;
                matchInString(comment.parameters[0]);
            })
        }
        // If nothing found in page comment, check Note box
        if (!foundMatch) {
            if (game_event.event().note) {
                matchInString(game_event.event().note);
            }
        }
        if (foundMatch){ onMatch.call(game_event, result); }
    }
    /**
    * Arrays of pairs of cursors/icons and filters to run to check if they should be used
    */
    TDDP_MouseSystemEx.autoCursorFilters = [
        // The order is the priority; the first match stops further lookup
        [TDDP_MouseSystemEx.transferPlayerCursor,    TDDP_MouseSystemEx._filterTransferPlayer],
        [TDDP_MouseSystemEx.changeGoldCursor,        TDDP_MouseSystemEx._filterChangeGold],
        [TDDP_MouseSystemEx.changeItemCursor,        TDDP_MouseSystemEx._filterChangeItems],
        [TDDP_MouseSystemEx.changeWeaponCursor,      TDDP_MouseSystemEx._filterChangeWeapons],
        [TDDP_MouseSystemEx.changeArmorCursor,       TDDP_MouseSystemEx._filterChangeArmors],
        [TDDP_MouseSystemEx.showTextCursor,          TDDP_MouseSystemEx._filterMessages],
    ];
    TDDP_MouseSystemEx.autoIconFilters = [
        // The order is the priority; the first match stops further lookup
        [TDDP_MouseSystemEx.transferPlayerIcon,    TDDP_MouseSystemEx._filterTransferPlayer],
        [TDDP_MouseSystemEx.changeGoldIcon,        TDDP_MouseSystemEx._filterChangeGold],
        [TDDP_MouseSystemEx.changeItemIcon,        TDDP_MouseSystemEx._filterChangeItems],
        [TDDP_MouseSystemEx.changeWeaponIcon,      TDDP_MouseSystemEx._filterChangeWeapons],
        [TDDP_MouseSystemEx.changeArmorIcon,       TDDP_MouseSystemEx._filterChangeArmors],
        [TDDP_MouseSystemEx.showTextIcon,          TDDP_MouseSystemEx._filterMessages],
    ];
    /**
    * Function to check whether conditions are prime to check for events under the mouse
    */
    TDDP_MouseSystemEx.conditionsValidForMouseHoverCheck = function() {
        return (SceneManager.isCurrentSceneStarted() && this._isSceneMap() &&
            $gameMap !== null &&
            $dataMap !== null &&
            !$gameMap._interpreter.isRunning());
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // START - Highlight On Hover option
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (TDDP_MouseSystemEx.highlightOnHover){
        //=========================================================================
        // TouchInput modifications
        //=========================================================================
        /**
        * Removing the check for whether _mousePressed is active to facilitate hover events
        */
        TouchInput._onMouseMove = function(event) {
            var x = Graphics.pageToCanvasX(event.pageX);
            var y = Graphics.pageToCanvasY(event.pageY);
            this._onMove(x, y);
        };
        //=========================================================================
        // Window_Selectable modifications
        //=========================================================================
        /**
        * Aliased update function, adds processMouseMoved() call
        */
        var _Window_Selectable_update = Window_Selectable.prototype.update;
        Window_Selectable.prototype.update = function() {
            this.processMouseMoved();
            _Window_Selectable_update.call(this);
        };
        /**
        * Check if conditions are right for calling onTouch when using mouse movement (for hover activation)
        */
        Window_Selectable.prototype.processMouseMoved = function() {
            if (this.isOpenAndActive() && TouchInput.isMoved() && this.cursorIsWithinWindow()) {
                this.onTouch(false);
            }
        };
        /**
        * Check if cursor is within window
        */
        Window_Selectable.prototype.cursorIsWithinWindow = function() {
            var _x = this.canvasToLocalX(TouchInput.x);
            var _y = this.canvasToLocalY(TouchInput.y);
            if (_x > this.padding && _x <= this.width - this.padding) {
                if (_y > this.padding && _y < this.height - this.padding) {
                    return true;
                }
            }
            return false;
        }

        //=============================================================================
        // SoundManager modifications
        //=============================================================================
        /*
        * Static var to keep track of last played cursor SE frame
        */
        SoundManager._lastPlayCursorFrame = 0;
        /**
        * Aliased function to add check for whether playCursor should play, based on cooldown setting
        */
        var _SoundManager_playCursor = SoundManager.playCursor;
        SoundManager.playCursor = function() {
            var _canPlay = SoundManager._lastPlayCursorFrame > Graphics.frameCount
                || Graphics.frameCount > SoundManager._lastPlayCursorFrame + TDDP_MouseSystemEx.audioCooldownOnHover;

            if (_canPlay) {
                _SoundManager_playCursor.call(this);
                SoundManager._lastPlayCursorFrame = Graphics.frameCount;
            }
        };
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // END - Highlight On Hover option
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //=============================================================================
    // TouchInput modifications
    //=============================================================================
    /**
    * Alias and extend initialize() with _setupCursorIconObject()
    */
    var _TouchInput_initialize = TouchInput.initialize;
    TouchInput.initialize = function() {
        this._setupCursorIconObject();
        _TouchInput_initialize.call(this);
    };
    /**
    * Setup cursorIcon object
    */
    TouchInput._setupCursorIconObject = function() {
        this.cursorIcon           = new Sprite();
        this.cursorIcon.drawIcon  = Window_Base.prototype.drawIcon;
        this.cursorIcon.bitmap    = new Bitmap(Window_Base._iconWidth, Window_Base._iconHeight);
        this.cursorIcon.contents  = this.cursorIcon.bitmap;
        this.cursorIcon.iconIndex = null;
    }
    /**
    * Alias and extend _onMouseMove() to use new function _checkCursorStatus()
    */
    var _TouchInput_onMouseMove = TouchInput._onMouseMove;
    TouchInput._onMouseMove = function(event) {
        _TouchInput_onMouseMove.call(this, event);
        this._checkCursorStatus(event.pageX, event.pageY);
    };
    /**
    * Check cursor's status and whether to alter cursor
    */
    TouchInput._checkCursorStatus = function(pageX, pageY) {
        // Check for events under mouse and perform actions, and get event in result
        var overEvent = this._checkForEventUnderMouse(pageX, pageY);

        // Update cursor icon position
        if (this.cursorIcon.iconIndex) {
            this.cursorIcon.x = Graphics.pageToCanvasX(pageX) +
                (this.cursorIcon.customOffsetX !== null ? this.cursorIcon.customOffsetX : TDDP_MouseSystemEx.iconOffsetX);
            this.cursorIcon.y = Graphics.pageToCanvasY(pageY) +
                (this.cursorIcon.customOffsetY !== null ? this.cursorIcon.customOffsetY : TDDP_MouseSystemEx.iconOffsetY);
            this.cursorIcon.visible = true;
        }

        // Check if leave activate is to be triggered for a previous event
        if (this._activeEvent && this._activeEvent.TDDP_MS.leaveActivate &&
                (!overEvent || overEvent !== this._activeEvent)) {
            this._activeEvent.start();
            this._activeEvent = false;
        }
        // Set active event
        this._activeEvent = overEvent || this._activeEvent;
    }
    /**
    * Alias and extend update() to store last event coords for checking if cursor has left an event
    */
    var _TouchInput_update = TouchInput.update;
    TouchInput.update = function() {
        _TouchInput_update.call(this);
        if (this._lastEventPageX == this._curEventPageX && this._lastEventPageY == this._curEventPageY) {
            this._checkCursorStatus(this._lastEventPageX, this._lastEventPageY);
        }
        this._lastEventPageX = this._curEventPageX;
        this._lastEventPageY = this._curEventPageY;
    }
    /**
    * Perform check for event under mouse and perform functions depending on parsed notetag properties
    */
    TouchInput._checkForEventUnderMouse = function(pageX, pageY) {
        this._curEventPageX = pageX;
        this._curEventPageY = pageY;
        if (TDDP_MouseSystemEx.conditionsValidForMouseHoverCheck()) {
            var x = $gameMap.canvasToMapX(Graphics.pageToCanvasX(pageX));
            var y = $gameMap.canvasToMapY(Graphics.pageToCanvasY(pageY));
            var _events = $gameMap.eventsXy(x, y);
            if (_events.length > 0) {
                var game_event = _events[_events.length - 1]; // Get topmost event
                if (game_event.TDDP_MS.hoverIcon) {
                    TouchInput._updateCursorIcon(game_event.TDDP_MS.hoverIcon);
                    if (TDDP_MouseSystemEx.hideCursor) TDDP_MouseSystemEx._hideMouseCursor();
                } else {
                    TouchInput._hideCursorIcon();
                };
                if (game_event.TDDP_MS.hoverActivate && !$gameMessage.isBusy()) {
                    game_event.start();
                };
                if (game_event.TDDP_MS.hideCursor) {
                    TDDP_MouseSystemEx._hideMouseCursor();
                };
                if (game_event.TDDP_MS.customOffsetX && game_event.TDDP_MS.customOffsetY) {
                    TouchInput.cursorIcon.customOffsetX = game_event.TDDP_MS.customOffsetX;
                    TouchInput.cursorIcon.customOffsetY = game_event.TDDP_MS.customOffsetY;
                };
                if (TDDP_MouseSystemEx.useCustomCursor) {
                    if (game_event.TDDP_MS.customCursor) {
                        TDDP_MouseSystemEx._showCustomCursor(game_event.TDDP_MS.customCursor);
                    } else {
                        TDDP_MouseSystemEx._showCustomCursor();
                    }
                };
                if (game_event.TDDP_MS.hoverSwitch) {
                    var key = [$gameMap._mapId, game_event._eventId, game_event.TDDP_MS.hoverSwitch.key]
                    $gameSelfSwitches.setValue(key, game_event.TDDP_MS.hoverSwitch.val === 'true')
                };
                return game_event;
            }
        }
        TouchInput._hideCursorIcon();
        TDDP_MouseSystemEx._showMouseCursor();
        return false;
    };
    /**
    * Update the cursor icon
    */
    TouchInput._updateCursorIcon = function(iconIndex) {
        if (this.cursorIcon.iconIndex != iconIndex) {
            this.cursorIcon.iconIndex = iconIndex;
            this.cursorIcon.contents.clear();
            this.cursorIcon.drawIcon(iconIndex, 0, 0);
            this.cursorIcon.visible = false;
        }
    };
    /**
    * Hide the cursor icon
    */
    TouchInput._hideCursorIcon = function() {
        this.cursorIcon.iconIndex     = null;
        this.cursorIcon.visible       = false;
        this.cursorIcon.customOffsetX = null;
        this.cursorIcon.customOffsetY = null;
    }
    /**
    * Alias and extend _onTrigger() to only fire if we're not activating on click
    */
    var _TouchInput_onTrigger = TouchInput._onTrigger;
    TouchInput._onTrigger = function(x, y) {
        if (TouchInput._activateClickEvents(x, y)) {
            $gameTemp.clearDestination(); // Invalidate destination
        } else {
            _TouchInput_onTrigger.call(this, x, y);
        }
    };
    /**
    * Activate click events if valid and return true if so
    */
    TouchInput._activateClickEvents = function(x, y) {
        var found_click_event = false;
        if (SceneManager.isCurrentSceneStarted() && $gameMap !== null && $dataMap !== null && !$gameMessage.isBusy()) {
            var x = $gameMap.canvasToMapX(x);
            var y = $gameMap.canvasToMapY(y);
            var _events = $gameMap.eventsXy(x, y);
            if (_events.length > 0) {
                var game_event = _events[_events.length - 1];
                if (game_event.TDDP_MS.clickActivate) {
                    game_event.start();
                    found_click_event = true;
                };
                if (game_event.TDDP_MS.clickSwitch) {
                    var key = [$gameMap._mapId, game_event._eventId, game_event.TDDP_MS.clickSwitch.key]
                    $gameSelfSwitches.setValue(key, game_event.TDDP_MS.clickSwitch.val === 'true');
                    found_click_event = true;
                };
            }
        }
        return found_click_event;
    }
    //=============================================================================
    // Spriteset_Map modifications
    //=============================================================================
    /**
    * Alias and extend createScreenSprites() to also create cursor icon holder sprite
    */
    var _Spriteset_Map_createScreenSprites = Spriteset_Map.prototype.createScreenSprites;
    Spriteset_Map.prototype.createScreenSprites = function() {
        _Spriteset_Map_createScreenSprites.call(this);
        this.createCursorIconSprite();
    };
    /**
    * Create a container sprite for the cursor icon
    */
    Spriteset_Map.prototype.createCursorIconSprite = function() {
        this._cursorIconSprite = new Sprite();
        this._cursorIconSprite.setFrame(0, 0, Graphics.width, Graphics.height);
        this._cursorIconSprite.addChild(TouchInput.cursorIcon);
        this.addChild(this._cursorIconSprite);
    };
    //=============================================================================
    // Game_Event modifications
    //=============================================================================
    /**
    * Alias and extend setupPage() to also setup mouse system properties
    */
    var _Game_Event_setupPage = Game_Event.prototype.setupPage;
    Game_Event.prototype.setupPage = function() {
        _Game_Event_setupPage.call(this);
        this.setupMouseSystemProperties();
    };
    /**
    * Setup mouse system properties on events, for storing notetag parsing on page updates
    */
    Game_Event.prototype.setupMouseSystemProperties = function() {
        this.TDDP_MS                 = {};
        this.TDDP_MS.hoverIcon       = false;
        this.TDDP_MS.allowAutoCursor = true;
        this.TDDP_MS.allowAutoIcon   = true;
        this.TDDP_MS.clickActivate   = false;
        this.TDDP_MS.hoverActivate   = false;
        this.TDDP_MS.leaveActivate   = false;
        this.TDDP_MS.hideCursor      = false;
        this.TDDP_MS.customOffsetX   = false;
        this.TDDP_MS.customOffsetY   = false;
        this.TDDP_MS.customCursor    = false;
        this.TDDP_MS.clickSwitch     = false;
        this.TDDP_MS.hoverSwitch     = false;
        TDDP_MouseSystemEx._findInEventNotetags(this, /hover_icon\s(.*?);/i, function(result) {
            if (!result) return;
            result = result[result.length - 1];
            if (TDDP_MouseSystemEx.mouseIconTags[result]) {
                result = TDDP_MouseSystemEx.mouseIconTags[result];
            }
            this.TDDP_MS.hoverIcon = Number(result);
        });
        TDDP_MouseSystemEx._findInEventNotetags(this, TDDP_MouseSystemEx.noAutoCursorNotetag, function() {
            this.TDDP_MS.allowAutoCursor = false;
        });
        TDDP_MouseSystemEx._findInEventNotetags(this, TDDP_MouseSystemEx.noAutoIconNotetag, function() {
            this.TDDP_MS.allowAutoIcon = false;
        });
        TDDP_MouseSystemEx._findInEventNotetags(this, TDDP_MouseSystemEx.clickToActivateNote, function() {
            this.TDDP_MS.clickActivate = true;
        });
        TDDP_MouseSystemEx._findInEventNotetags(this, TDDP_MouseSystemEx.hoverToActivateNote, function() {
            this.TDDP_MS.hoverActivate = true;
        });
        TDDP_MouseSystemEx._findInEventNotetags(this, TDDP_MouseSystemEx.leaveToActivateNote, function() {
            this.TDDP_MS.leaveActivate = true;
        });
        TDDP_MouseSystemEx._findInEventNotetags(this, 'hide_cursor!', function() {
            this.TDDP_MS.hideCursor = true;
        });
        TDDP_MouseSystemEx._findInEventNotetags(this, /icon_offset\s(.*?)\s(.*?);/i, function(result) {
            this.TDDP_MS.customOffsetX = Number(result[1]);
            this.TDDP_MS.customOffsetY = Number(result[2]);
        });
        TDDP_MouseSystemEx._findInEventNotetags(this, /hover_cursor\s(.*?);/i, function(result) {
            this.TDDP_MS.customCursor = result[result.length - 1];
        });
        TDDP_MouseSystemEx._findInEventNotetags(this, /click_switch\s(.*?)\s(.*?);/i, function(result) {
            this.TDDP_MS.clickSwitch = {};
            this.TDDP_MS.clickSwitch.key = String(result[1]);
            this.TDDP_MS.clickSwitch.val = String(result[2]);

        });
        TDDP_MouseSystemEx._findInEventNotetags(this, /hover_switch\s(.*?)\s(.*?);/i, function(result) {
            this.TDDP_MS.hoverSwitch = {};
            this.TDDP_MS.hoverSwitch.key = String(result[1]);
            this.TDDP_MS.hoverSwitch.val = String(result[2]);
        });
        if (!this.page()) return;
        // Auto cursor checks, only if there's a page and allowed
        if (this.TDDP_MS.allowAutoCursor) {
            for (var i=0, max=TDDP_MouseSystemEx.autoCursorFilters.length; i < max; i++) {
                if (this.TDDP_MS.customCursor) break;
                var entry = TDDP_MouseSystemEx.autoCursorFilters[i];
                var cursor = entry[0];
                var filter = entry[1];
                if (typeof cursor == "string") {
                    var matches = this.page().list.filter(filter);
                    if (matches.length > 0) {
                        this.TDDP_MS.customCursor = cursor;
                    }
                }
            }
        }
        // Auto icon checks
        if (this.TDDP_MS.allowAutoIcon) {
            for (var i=0, max=TDDP_MouseSystemEx.autoIconFilters.length; i < max; i++) {
                if (this.TDDP_MS.hoverIcon) break;
                var entry = TDDP_MouseSystemEx.autoIconFilters[i];
                var icon = entry[0];
                var filter = entry[1];
                if (typeof icon == "string") {
                    var matches = this.page().list.filter(filter);
                    if (matches.length > 0) {
                        if (isNaN(icon)) {
                            // Icon is a string, so let's look in Icon Tags
                            icon = TDDP_MouseSystemEx.mouseIconTags[icon]
                        }
                        this.TDDP_MS.hoverIcon = Number(icon);
                    }
                }
            }
        }
    }
})();
