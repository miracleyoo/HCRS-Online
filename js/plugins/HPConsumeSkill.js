//=============================================================================
// HPConsumeSkill.js
//=============================================================================

/*:
 * @plugindesc make the skill that consumes HP, not only MP and/or TP
 * @author Sasuke KANNAZUKI
 *
 * @help This plugin does not provide plugin commands.
 *
 * write following format at skill's note:
 *  <hp_cost:30>  # the skill consumes 30 HP.
 *
 *  The skill can use even if subject's HP is less than skill's HP Cost.
 *  In that case, let the subject's HP be 1.
 *  (i.e. subject won't die by the skill.)
 */

/*:ja
 * @plugindesc HP消費技
 * @author 神無月サスケ
 *
 * @help このプラグインには、プラグインコマンドはありません。
 *
 * 仕様：
 * スキルのメモ欄に「<hp_cost:30>」といった書式で書いてください。
 * この場合、HPを30消費します。
 *
 * 入力時や術使用時のHPが、消費HPより低い場合でも選択、実行可能で、
 * この場合使用後のHPは1になります。（つまり、この技で戦闘不能にはならない）
 *
 * - HPの消費は、技を使う前になされます。
 * - HPと同時に、MPやTPを消費する技も作成可能ですが、
 *  ウィンドウでは消費HPのみが表示されます。
 */

(function() {

  // --------------------
  // Process Data in item.note
  // *for efficiency, note is processed at first.
  // --------------------

  var _Scene_Boot_start = Scene_Boot.prototype.start;
  Scene_Boot.prototype.start = function() {
    _Scene_Boot_start.call(this);
    DataManager.processHpCost();
  };

  DataManager.processHpCost = function() {
    for (var i = 1; i < $dataSkills.length; i++) {
      var skill = $dataSkills[i];
      var result = skill.meta.hp_cost;
      if (result){
        skill.hpCost = Number(result);
      } else {
        skill.hpCost = 0;
      }
    }
  };

  // --------------------
  // exec consume HP cost
  // --------------------

  Game_BattlerBase.prototype.skillHpCost = function(skill) {
    return skill.hpCost;
  };

  var _Game_BattlerBase_paySkillCost =
    Game_BattlerBase.prototype.paySkillCost;
  Game_BattlerBase.prototype.paySkillCost = function(skill) {
    _Game_BattlerBase_paySkillCost.call(this, skill);
    if (this._hp > this.skillHpCost(skill)) {
      this._hp -= this.skillHpCost(skill);
    } else {
      this._hp = 1;
    }
  };

  // --------------------
  // draw HP cost
  // --------------------

  var _Window_SkillList_drawSkillCost = 
   Window_SkillList.prototype.drawSkillCost;
  Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    if (this._actor.skillHpCost(skill) > 0) {
      this.changeTextColor(this.textColor(17));
      this.drawText(this._actor.skillHpCost(skill), x, y, width, 'right');
      return;
    }
    _Window_SkillList_drawSkillCost.call(this, skill, x, y, width);
  };

})();
