//=============================================================================
// FixedBattleMembers.js
//=============================================================================

/*:
 * @plugindesc Forbids formation change to the specified party members.
 * @author Yoji Ojima
 *
 * @help
 *
 * Plugin Command:
 *   FixedBattleMembers 1       # Fixed battle members = the actor #1
 *   FixedBattleMembers 2 3     # Fixed battle members = the actor #2 and #3
 *   FixedBattleMembers         # Clears the fixed battle members
 */

/*:ja
 * @plugindesc 指定したパーティメンバーの並び替えを禁止します。
 * @author Yoji Ojima
 *
 * @help
 *
 * プラグインコマンド:
 *   FixedBattleMembers 1       # アクター１番を固定メンバーにする
 *   FixedBattleMembers 2 3     # アクター２番と３番を固定メンバーにする
 *   FixedBattleMembers         # 固定メンバーの指定を解除する
 */

(function() {

    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'FixedBattleMembers') {
            var members = $gameParty.allMembers();
            $gameParty.fixedBattleMembers = [];
            for (var i = 0; i < members.length; i++) {
                $gameParty.removeActor(members[i].actorId());
            }
            for (i = 0; i < args.length; i++) {
                var actorId = Number(args[i]);
                if ($dataActors[actorId]) {
                    $gameParty.fixedBattleMembers.push(actorId);
                    $gameParty.addActor(actorId);
                }
            }
            for (i = 0; i < members.length; i++) {
                $gameParty.addActor(members[i].actorId());
            }
        }
    };

    var _Game_Actor_isFormationChangeOk =
            Game_Actor.prototype.isFormationChangeOk;
    Game_Actor.prototype.isFormationChangeOk = function() {
        var array = $gameParty.fixedBattleMembers;
        if (array && array.contains(this.actorId())) {
            return false;
        } else {
            return _Game_Actor_isFormationChangeOk.call(this);
        }
    };

})();
