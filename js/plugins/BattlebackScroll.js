//=============================================================================
// BattlebackScroll.js
//=============================================================================

/*:
 * @plugindesc Automatically scrolls a 'battlebacks1' image.
 * @author Yoji Ojima
 *
 * @param Scroll X Variable ID
 * @desc The ID of the variable for the horizontal scroll speed.
 * @default 0
 *
 * @param Scroll Y Variable ID
 * @desc The ID of the variable for the vertical scroll speed.
 * @default 0
 *
 * @help This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc 戦闘背景（battlebacks1）を自動的にスクロールします。
 * @author Yoji Ojima
 *
 * @param Scroll X Variable ID
 * @desc 横スクロール速度を指定するための変数のIDです。
 * @default 0
 *
 * @param Scroll Y Variable ID
 * @desc 縦スクロール速度を指定するための変数のIDです。
 * @default 0
 *
 * @help このプラグインには、プラグインコマンドはありません。
 */

(function() {

    var parameters = PluginManager.parameters('BattlebackScroll');
    var scrollXVariableId = Number(parameters['Scroll X Variable ID'] || 0);
    var scrollYVariableId = Number(parameters['Scroll Y Variable ID'] || 0);

    var _Spriteset_Battle_updateBattleback =
            Spriteset_Battle.prototype.updateBattleback;
    Spriteset_Battle.prototype.updateBattleback = function() {
        _Spriteset_Battle_updateBattleback.call(this);
        var scrollX = $gameVariables.value(scrollXVariableId);
        var scrollY = $gameVariables.value(scrollYVariableId);
        if (scrollX) {
            this._back1Sprite.origin.x += scrollX / 8;
        }
        if (scrollY) {
            this._back1Sprite.origin.y += scrollY / 8;
        }
    };

})();
