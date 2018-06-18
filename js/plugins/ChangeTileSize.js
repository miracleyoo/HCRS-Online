//=============================================================================
// Change Tile Size
// by Shaz
// Last Update: 2015.10.21
//=============================================================================

/*:
 * @plugindesc Allows maps based on a grid size other than 48x48
 * @author Shaz
 *
 * @param Tile Size
 * @desc Size of tiles (pixels)
 * @default 48
 *
 * @param Tileset Image Folder
 * @desc Folder where the in-game tilesets are kept
 * @default img/tilesets/
 *
 * @param Parallax Image Folder
 * @desc Folder where the in-game parallaxes are kept
 * @default img/parallaxes/
 *
 * @help This plugin does not provide plugin commands.
 *
 * To use the map editor with tiles of a size other than 48x48 in your project,
 * have two folders for tileset images.  The folder named in the plugin
 * parameters is for original, high-quality, final-sized tiles.  The
 * original folder, img/tilesets/ can contain a duplicate copy of each
 * tileset, shrunk or enlarged to 48x48 pixels per tile.  Quality in the
 * editor may be poorer, but the original tiles will be used in the game.
 * The img/tilesets folder can be cleared prior to distribution.
 *
 * The same applies to the img/parallaxes folder if using a parallax map
 * with a grid size other than 48x48.
 *
 */

(function() {

  var parameters = PluginManager.parameters('ChangeTileSize');
  var tileSize = parseInt(parameters['Tile Size'] || 48);
  var tilesetsFolder = String(parameters['Tileset Image Folder'] || 'img/tilesets/');
  var parallaxesFolder = String(parameters['Parallax Image Folder'] || 'img/parallaxes/');

  ImageManager.loadTileset = function(filename, hue) {
    return this.loadBitmap(tilesetsFolder, filename, hue, false);
  };

  ImageManager.loadParallax = function(filename, hue) {
      return this.loadBitmap(parallaxesFolder, filename, hue, true);
  };

  Game_Map.prototype.tileWidth = function() {
    return tileSize;
  };

  Game_Map.prototype.tileHeight = function() {
    return tileSize;
  };

  Game_Vehicle.prototype.maxAltitude = function() {
    return tileSize;
  };

})();
