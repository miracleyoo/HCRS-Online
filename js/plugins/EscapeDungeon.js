//=============================================================================
// EscapeDungeon.js
//=============================================================================

/*:
 * @plugindesc Escape to the specified position from a dungeon.
 * @author Sasuke KANNAZUKI
 *
 * @param mapIdVal
 * @desc variable id for escape map ID.
 * Escape is disabled when variable number mapIdVal equals 0.
 * @default 21
 * 
 * @param xCoordVal
 * @desc variable id for escape x coordinate.
 * @default 22
 *
 * @param yCoordVal
 * @desc variable id for escape y coordinate.
 * @default 23
 *
 * @help This plugin does not provide plugin commands.
 *
 * - Set the position variables when player enters the dungeon.
 * - Be sure to disable when player exits from the dungeon,
 *  especially when the player moves to other map by an event.
 *   (to disable this, let variables number mapIdVal be 0).
 * - After escape exection, escape is automatically disabled
 *
 * check points:
 * - this plugin only for menu scene, cannot apply at battle scene.
 * - the scope must be 0(none).
 *
 * Item/Skill Note:
 * <ESCAPE> : the item/skill is for escape.
 */
/*:ja
 * @plugindesc ダンジョンから特定の場所にエスケープ
 * @author 神無月サスケ
 *
 * @param mapIdVal
 * @desc 脱出するマップのIDを格納するゲーム変数番号
 * この値が 0 の時は、エスケープは出来ません。
 * @default 21
 * 
 * @param xCoordVal
 * @desc 脱出するマップのX座標用の変数を格納するゲーム変数番号
 * @default 22
 *
 * @param yCoordVal
 * @desc 脱出するマップのY座標用の変数を格納するゲーム変数番号
 * @default 23
 *
 * @help このプラグインにプラグインコマンドはありません。
 *
 * - プレイヤーがダンジョンに入る際に変数を設定してください。
 * - ダンジョンから出る時は、忘れずにエスケープ禁止にしてください。
 *  特にダンジョンからイベントで別の場所に行く場合は忘れずに。
 *   (mapIdVal の変数を 0 にしてください)。
 * - エスケープした後、自動的にエスケープ不可になります。
 *
 * チェックポイント:
 * - このプラグインはメニュー専用です。戦闘時は使用できません。
 * - 「範囲」は「なし」にしてください。
 *
 * アイテムや魔法のメモに以下を書くとエスケープとみなされます：
 * <ESCAPE>
 */

(function() {
  var parameters = PluginManager.parameters('EscapeDungeon');
  var mapIdVal = Number(parameters['mapIdVal'] || 21);
  var xCoordVal = Number(parameters['xCoordVal'] || 22);
  var yCoordVal = Number(parameters['yCoordVal'] || 23);
  var reEscape = /<ESCAPE>/i;

  //
  // use escape item
  //
  var _Scene_ItemBase_useItem = Scene_ItemBase.prototype.useItem;
  Scene_ItemBase.prototype.useItem = function() {
    _Scene_ItemBase_useItem.call(this);
    if(reEscape.exec(this.item().note) != null){
      this.useEscapeItem();
    }
  };

  Scene_ItemBase.prototype.useEscapeItem = function() {
    var mapId = $gameVariables.value(mapIdVal);
    var x = $gameVariables.value(xCoordVal);
    var y = $gameVariables.value(yCoordVal);
    $gamePlayer.reserveTransfer(mapId, x, y, 2, 0);
    SceneManager.goto(Scene_Map);
    $gameVariables.setValue(mapIdVal, 0);  // disable escape
  };

  //
  // check whether one can escape or not
  //
  var _Game_BattlerBase_meetsUsableItemConditions =
   Game_BattlerBase.prototype.meetsUsableItemConditions;
  Game_BattlerBase.prototype.meetsUsableItemConditions = function(item) {
    if (reEscape.exec(item.note) != null &&
     $gameVariables.value(mapIdVal) == 0) {
      return false;
    }
    return _Game_BattlerBase_meetsUsableItemConditions.call(this, item);
  };
})();
