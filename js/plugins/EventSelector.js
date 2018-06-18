//=============================================================================
// EventSelector.js
//=============================================================================

/*:
 * @plugindesc Displays a window to select a common event.
 * @author Yoji Ojima
 *
 * @help
 *
 * Plugin Command:
 *   EventSelector open       # Open the event selector window
 *   EventSelector add 3      # Add common event #3 to the selector
 *   EventSelector remove 4   # Remove common event #4 from the selector
 *   EventSelector clear      # Clear the event selector
 */

/*:ja
 * @plugindesc コモンイベントを選択するウィンドウを表示します。
 * @author Yoji Ojima
 *
 * @help
 *
 * プラグインコマンド:
 *   EventSelector open       # イベント選択ウィンドウを開く
 *   EventSelector add 3      # コモンイベント３番をイベント選択に追加
 *   EventSelector remove 4   # コモンイベント４番をイベント選択から削除
 *   EventSelector clear      # イベント選択をクリア
 */

(function() {

    var eventSelectorStatus = '';
    var selectedCommonEvent = null;

    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'EventSelector') {
            switch (args[0]) {
            case 'open':
                eventSelectorStatus = 'open';
                this.setWaitMode('EventSelector');
                break;
            case 'add':
                $gameSystem.addToEventSelector(Number(args[1]));
                break;
            case 'remove':
                $gameSystem.removeFromEventSelector(Number(args[1]));
                break;
            case 'clear':
                $gameSystem.clearEventSelector();
                break;
            }
        }
    };

    var _Game_Interpreter_updateWaitMode =
            Game_Interpreter.prototype.updateWaitMode;
    Game_Interpreter.prototype.updateWaitMode = function() {
        if (this._waitMode === 'EventSelector') {
            if (eventSelectorStatus === 'close') {
                this._waitMode = '';
                if (selectedCommonEvent) {
                    this.setupChild(selectedCommonEvent.list);
                    this._callingSelectedEvent = true;
                }
                eventSelectorStatus = '';
            }
            return true;
        } else {
            return _Game_Interpreter_updateWaitMode.call(this);
        }
    };

    var _Game_Interpreter_updateChild = Game_Interpreter.prototype.updateChild;
    Game_Interpreter.prototype.updateChild = function() {
        var result = _Game_Interpreter_updateChild.call(this);
        if (this._callingSelectedEvent && !result) {
            this._callingSelectedEvent = false;
            eventSelectorStatus = 'open';
            this.setWaitMode('EventSelector');
            return true;
        }
        return result;
    };

    Game_System.prototype.addToEventSelector = function(commonEventId) {
        if (!this._eventSelectorData) {
            this.clearEventSelector();
        }
        if (!this._eventSelectorData.contains(commonEventId)) {
            this._eventSelectorData.push(commonEventId);
        }
    };

    Game_System.prototype.removeFromEventSelector = function(commonEventId) {
        if (this._eventSelectorData) {
            var index = this._eventSelectorData.indexOf(commonEventId);
            if (index >= 0) {
                this._eventSelectorData.splice(index, 1);
            }
        }
    };

    Game_System.prototype.clearEventSelector = function() {
        this._eventSelectorData = [];
    };

    Game_System.prototype.eventSelectorData = function() {
        if (this._eventSelectorData) {
            return this._eventSelectorData.clone();
        } else {
            return [];
        }
    };

    var _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
    Scene_Map.prototype.createAllWindows = function() {
        _Scene_Map_createAllWindows.call(this);
        this._eventSelectorWindow = new Window_EventSelector(0, 0);
        this.addChild(this._eventSelectorWindow);
    };

    function Window_EventSelector() {
        this.initialize.apply(this, arguments);
    }

    Window_EventSelector.prototype = Object.create(Window_Selectable.prototype);
    Window_EventSelector.prototype.constructor = Window_EventSelector;

    Window_EventSelector.lastTopRow = 0;
    Window_EventSelector.lastIndex  = 0;

    Window_EventSelector.prototype.initialize = function(x, y) {
        var width = Graphics.boxWidth;
        var height = this.fittingHeight(4);
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this.openness = 0;
        this.deactivate();
        this.setHandler('ok',     this.onOk.bind(this));
        this.setHandler('cancel', this.onCancel.bind(this));
    };

    Window_EventSelector.prototype.maxCols = function() {
        return 3;
    };

    Window_EventSelector.prototype.maxItems = function() {
        return this._list ? this._list.length : 0;
    };

    Window_EventSelector.prototype.update = function() {
        Window_Selectable.prototype.update.call(this);
        switch (eventSelectorStatus) {
        case 'open':
            this.refresh();
            this.setTopRow(Window_EventSelector.lastTopRow);
            this.select(Window_EventSelector.lastIndex);
            this.open();
            this.activate();
            eventSelectorStatus = 'select';
            break;
        case 'select':
            if (this.isClosed()) {
                eventSelectorStatus = 'close';
            }
            break;
        }
    };

    Window_EventSelector.prototype.refresh = function() {
        var data = $gameSystem.eventSelectorData();
        this._list = [];
        for (var i = 0; i < data.length; i++) {
            var commonEvent = $dataCommonEvents[data[i]];
            if (commonEvent) {
                this._list.push(commonEvent);
            }
        }
        this.createContents();
        this.drawAllItems();
    };

    Window_EventSelector.prototype.drawItem = function(index) {
        var commonEvent = this._list[index];
        var rect = this.itemRectForText(index);
        this.drawText(commonEvent.name, rect.x, rect.y, rect.width);
    };

    Window_EventSelector.prototype.isCurrentItemEnabled = function() {
        var commonEvent = this._list[this.index()];
        return !!commonEvent;
    };

    Window_EventSelector.prototype.isOkTriggered = function() {
        return Input.isTriggered('ok');
    };

    Window_EventSelector.prototype.onOk = function() {
        selectedCommonEvent = this._list[this.index()];
        Window_EventSelector.lastTopRow = this.topRow();
        Window_EventSelector.lastIndex = this.index();
        this.close();
    };

    Window_EventSelector.prototype.onCancel = function() {
        selectedCommonEvent = null;
        Window_EventSelector.lastTopRow = this.topRow();
        Window_EventSelector.lastIndex = this.index();
        this.close();
    };

})();
