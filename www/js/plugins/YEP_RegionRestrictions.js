//=============================================================================
// Yanfly Engine Plugins - Region Restrictions
// YEP_RegionRestrictions.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_RegionRestrictions = true;

var Yanfly = Yanfly || {};
Yanfly.RR = Yanfly.RR || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 Use regions to block out Events and/or the player from
 * being able to venture into those spots.
 * @author Yanfly Engine Plugins
 *
 * @param Player Restrict
 * @desc This region ID will restrict the player from entering.
 * Use 0 if you do not wish to make use of this property.
 * @default 0
 *
 * @param Event Restrict
 * @desc This region ID will restrict all events from entering.
 * Use 0 if you do not wish to make use of this property.
 * @default 0
 *
 * @param All Restrict
 * @desc This region ID will restrict players and events.
 * Use 0 if you do not wish to make use of this property.
 * @default 0
 *
 * @param Player Allow
 * @desc This region ID will always allow player passability.
 * Use 0 if you do not wish to make use of this property.
 * @default 0
 *
 * @param Event Allow
 * @desc This region ID will always allow events passability.
 * Use 0 if you do not wish to make use of this property.
 * @default 0
 *
 * @param All Allow
 * @desc This region ID will always allow both passability.
 * Use 0 if you do not wish to make use of this property.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction and Instructions
 * ============================================================================
 *
 * Not everybody wants NPC's to travel all over the place. With this plugin,
 * you can set NPC's to be unable to move pass tiles marked by a specified
 * Region ID. Simply draw out the area you want to enclose NPC's in on and
 * they'll be unable to move past it unless they have Through on. Likewise,
 * there are regions that you can prevent the player from moving onto, too!
 *
 * A new change from the RPG Maker VX Ace version is that now there exist
 * Regions that can allow players and events to always travel through.
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_RegionRestrictions');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.RRAllAllow = Number(Yanfly.Parameters['All Allow']);
Yanfly.Param.RRAllRestrict = Number(Yanfly.Parameters['All Restrict']);
Yanfly.Param.RREventAllow = Number(Yanfly.Parameters['Event Allow']);
Yanfly.Param.RREventRestrict = Number(Yanfly.Parameters['Event Restrict']);
Yanfly.Param.RRPlayerAllow = Number(Yanfly.Parameters['Player Allow']);
Yanfly.Param.RRPlayerRestrict = Number(Yanfly.Parameters['Player Restrict']);

//=============================================================================
// Game_CharacterBase
//=============================================================================

Yanfly.RR.Game_CharacterBase_isMapPassable =
    Game_CharacterBase.prototype.isMapPassable;
Game_CharacterBase.prototype.isMapPassable = function(x, y, d) {
    if (this.isEventRegionForbid(x, y, d)) return false;
    if (this.isPlayerRegionForbid(x, y, d)) return false;
    if (this.isEventRegionAllow(x, y, d)) return true;
    if (this.isPlayerRegionAllow(x, y, d)) return true;
    return Yanfly.RR.Game_CharacterBase_isMapPassable.call(this, x, y, d);
};

Game_CharacterBase.prototype.isEvent = function() {
    return false;
};

Game_CharacterBase.prototype.isPlayer = function() {
    return false;
};

Game_CharacterBase.prototype.isEventRegionForbid = function(x, y, d) {
    if (this.isPlayer()) return false;
    if (this.isThrough()) return false;
    var regionId = this.getRegionId(x, y, d);
    if (regionId === 0) return false;
    if (regionId === Yanfly.Param.RRAllRestrict) return true;
    return regionId === Yanfly.Param.RREventRestrict;
};

Game_CharacterBase.prototype.isPlayerRegionForbid = function(x, y, d) {
    if (this.isEvent()) return false;
    if (this.isThrough()) return false;
    var regionId = this.getRegionId(x, y, d);
    if (regionId === 0) return false;
    if (regionId === Yanfly.Param.RRAllRestrict) return true;
    return regionId === Yanfly.Param.RRPlayerRestrict;
};

Game_CharacterBase.prototype.isEventRegionAllow = function(x, y, d) {
    if (this.isPlayer()) return false;
    var regionId = this.getRegionId(x, y, d);
    if (regionId === 0) return false;
    if (regionId === Yanfly.Param.RRAllAllow) return true;
    return regionId === Yanfly.Param.RREventAllow;
};

Game_CharacterBase.prototype.isPlayerRegionAllow = function(x, y, d) {
    if (this.isEvent()) return false;
    var regionId = this.getRegionId(x, y, d);
    if (regionId === 0) return false;
    if (regionId === Yanfly.Param.RRAllAllow) return true;
    return regionId === Yanfly.Param.RRPlayerAllow;
};

Game_CharacterBase.prototype.getRegionId = function(x, y, d) {
    switch (d) {
    case 1:
      return $gameMap.regionId(x - 1, y + 1);
      break;
    case 2:
      return $gameMap.regionId(x + 0, y + 1);
      break;
    case 3:
      return $gameMap.regionId(x + 1, y + 1);
      break;
    case 4:
      return $gameMap.regionId(x - 1, y + 0);
      break;
    case 5:
      return $gameMap.regionId(x + 0, y + 0);
      break;
    case 6:
      return $gameMap.regionId(x + 1, y + 0);
      break;
    case 7:
      return $gameMap.regionId(x - 1, y - 1);
      break;
    case 8:
      return $gameMap.regionId(x + 0, y - 1);
      break;
    case 9:
      return $gameMap.regionId(x + 1, y - 1);
      break;
    }
    return 0;
};

//=============================================================================
// Game_Event
//=============================================================================

Game_Event.prototype.isEvent = function() {
    return true;
};

//=============================================================================
// Game_Player
//=============================================================================

Game_Player.prototype.isPlayer = function() {
    return true;
};

//=============================================================================
// End of File
//=============================================================================
