//=============================================================================
// Extra maps
// Zeriab_ExtraMaps.js
// Last Updated: 2015.08.23
//=============================================================================

/*:
 * @plugindesc Allows using more than 999 maps
 * @author Zeriab
 *
 * @help
 *
 * Plugin Command:
 *   ExtraMaps set church   # Use maps from the specific "church" subfolder (data/church/Map003.json)
 *   ExtraMaps reset        # Use maps from the default folder (data/Map003.json)
 *
 *   Next transfer will use maps from the new folder
 */

(function() {
    var _Game_Interpreter_pluginCommand =
            Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        var actualCommand = command.toLowerCase();
        if (actualCommand === 'extramaps') {
			var action = args[0].toLowerCase();
            switch (action) {
            case 'set':
				// Retain casing of the map folder
                $gameSystem.setMapsFolder(args[1]);
                break;
            case 'clear':
                $gameSystem.clearMapsFolder();
                break;
            }
        }
    };

    Game_System.prototype.setMapsFolder = function(subfolder) {
		if (this._MapSubFolder !== subfolder)
		{
			this._MapSubFolder = subfolder;
			this._MapFolderChange = true;
		}
    };

    Game_System.prototype.clearMapsFolder = function() {
        this.setMapsFolder('');
    };

    // Overriding: DataManager.loadMapData
	DataManager.loadMapData = function(mapId) {
		subfolder = $gameSystem._MapSubFolder || '';
		if (mapId > 0) {
			var filename = DataManager.makeMapName(mapId);
			this.loadDataFile('$dataMap', filename);
		} else {
			this.makeEmptyMap();
		}
		// Extra check needed since we need to reload the map transferring
		// to a different folder with unchanged mapId.
		DataManager.checkMapFolderReload();
	};
	
	DataManager.makeMapName = function(mapId) {
		var filename = 'Map%1.json'.format(mapId.padZero(3));
		if (subfolder && subfolder.length >= 1)
		{
			filename = '%1/%2'.format(subfolder, filename);
		}
		return filename;
	};
	
	DataManager.checkMapFolderReload = function() {
		reloadNeeded = $gameSystem._MapFolderChange || false;
		if (reloadNeeded)
		{
			$gamePlayer.requestMapReload();	
		}
	};
})();