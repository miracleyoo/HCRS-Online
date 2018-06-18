//=============================================================================
// BattleResultsPopup.js
//=============================================================================

/*:
 * @plugindesc Displays a battle results window instead of text messages.
 * @author Yoji Ojima
 *
 * @help This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc 戦闘結果の表示をポップアップ形式に変更します。
 * @author Yoji Ojima
 *
 * @help このプラグインには、プラグインコマンドはありません。
 */

(function() {

    var resultDisplaying = 0;

    var _BattleManager_initMembers = BattleManager.initMembers;
    BattleManager.initMembers = function() {
        _BattleManager_initMembers.call(this);
        resultDisplaying = 0;
    };

    var _BattleManager_update = BattleManager.update;
    BattleManager.update = function() {
        _BattleManager_update.call(this);
        if (resultDisplaying > 0) {
            if (++resultDisplaying >= 60) {
                if (Input.isTriggered('ok') || TouchInput.isTriggered()) {
                    resultDisplaying = 0;
                }
            }
        }
    };

    var _BattleManager_isBusy = BattleManager.isBusy;
    BattleManager.isBusy = function() {
        return _BattleManager_isBusy.call(this) || resultDisplaying > 0;
    };

    BattleManager.displayVictoryMessage = function() {
    };

    BattleManager.displayRewards = function() {
        resultDisplaying = 1;
    };

    Game_Actor.prototype.shouldDisplayLevelUp = function() {
        return false;
    };

    var _Scene_Battle_update = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function() {
        _Scene_Battle_update.call(this);
        if (resultDisplaying > 30 && !this._resultWindow) {
            this._resultWindow = new Window_BattleResults();
            this.addWindow(this._resultWindow);
        }
    };

    var _Scene_Battle_stop = Scene_Battle.prototype.stop;
    Scene_Battle.prototype.stop = function() {
        _Scene_Battle_stop.call(this);
        if (this._resultWindow) {
            this._resultWindow.close();
        }
    };

    function Window_BattleResults() {
        this.initialize.apply(this, arguments);
    }

    Window_BattleResults.prototype = Object.create(Window_Base.prototype);
    Window_BattleResults.prototype.constructor = Window_BattleResults;

    Window_BattleResults.prototype.initialize = function() {
        var rewards = BattleManager._rewards;
        var width = 400;
        var height = this.fittingHeight(Math.min(9, rewards.items.length + 1));
        var statusHeight = this.fittingHeight(4);
        var x = (Graphics.boxWidth - width) / 2;
        var y = (Graphics.boxHeight - statusHeight - height) / 2;
        Window_Base.prototype.initialize.call(this, x, y, width, height);
        this.refresh();
        this.openness = 0;
        this.open();
    };

    Window_BattleResults.prototype.refresh = function() {
        var x = this.textPadding();
        var y = 0;
        var width = this.contents.width;
        var lineHeight = this.lineHeight();
        var rewards = BattleManager._rewards;
        var items = rewards.items;
        this.contents.clear();

        this.resetTextColor();
        this.drawText(rewards.exp, x, y);
        x += this.textWidth(rewards.exp) + 6;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.expA, x, y);
        x += this.textWidth(TextManager.expA + '  ');

        this.resetTextColor();
        this.drawText(rewards.gold, x, y);
        x += this.textWidth(rewards.gold) + 6;
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.currencyUnit, x, y);

        x = 0;
        y += lineHeight;

        items.forEach(function(item) {
            this.drawItemName(item, x, y, width);
            y += lineHeight;
        }, this);
    };

})();
