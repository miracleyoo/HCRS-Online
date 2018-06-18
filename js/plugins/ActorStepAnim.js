//=============================================================================
// Actor Stepping Animation
// by Shaz
// Last Updated: 2015.10.21
//=============================================================================

/*:
 * @plugindesc Allows party leader/followers to have stepping anim on map
 * @author Shaz
 *
 * @help This plugin does not provide plugin commands.
 *
 * Add <stepanim> to the note box of an Actor to turn on stepping animation
 * for the actor's sprite on the map, as the party leader or a follower.
 *
 */

(function() {
  var _Game_Player_update = Game_Player.prototype.update;
  Game_Player.prototype.update = function(sceneActive) {
    _Game_Player_update.call(this, sceneActive);
    this.setStepAnime($gameParty.leader().actor().meta.stepanim || false);
  };

  var _Game_Follower_update = Game_Follower.prototype.update;
  Game_Follower.prototype.update = function() {
    _Game_Follower_update.call(this);
    this.setStepAnime(this.actor().actor().meta.stepanim || false);
  };
})();
