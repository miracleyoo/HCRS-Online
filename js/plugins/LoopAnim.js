//=============================================================================
// Looping Animations
// by Shaz
// Last Updated: 2015.09.21
//=============================================================================

/*:
 * @plugindesc Allows animations on the map to loop
 * @author Shaz
 *
 * @help
 *
 * Plugin Command:
 *   LoopAnim start event animid   # Start a looping animation on an event
 *   LoopAnim stop event           # Stop animation loop
 *
 *   event = number for specific event
 *   event = 0 for "this" event
 *   event = -1 for player
 *   event = $gameVariables.value(x) to get the event id from variable x
 */

(function() {
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);

    if (command.toUpperCase() === 'LOOPANIM') {
      var character = this.character(eval(args[1]));
      if (character) {
        switch (args[0].toUpperCase()) {
          case 'START':
            character.loopAnimStart(args[2]);
            break;
          case 'STOP':
            character.loopAnimStop();
        }
      }
    }
  }

  var _Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
  Game_CharacterBase.prototype.initMembers = function() {
    _Game_CharacterBase_initMembers.call(this);
    this._loopAnimId = 0;
  };

  Game_CharacterBase.prototype.loopAnimStart = function(animId) {
    this._loopAnimId = animId;
    this.requestAnimation(animId);
  };

  Game_CharacterBase.prototype.loopAnimStop = function() {
    this._loopAnimId = 0;
  };

  Sprite_Character.prototype.isAnimationPlaying = function() {
    if (this._animationSprites.length > 0) {
      result = true;
    } else if (this._character._loopAnimId > 0) {
      this._character.requestAnimation(this._character._loopAnimId);
      this.setupAnimation();
      result = true;
    } else {
      result = false;
    };
    return result;
  };
})();
