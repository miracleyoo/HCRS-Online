//=============================================================================
// Yanfly Engine Plugins - Item Core Extension - Item Upgrade Slots
// YEP_X_ItemUpgradeSlots.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_X_ItemUpgrades = true;

var Yanfly = Yanfly || {};
Yanfly.IUS = Yanfly.IUS || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 (Requires YEP_ItemCore.js) Allows independent items to
 * be upgradeable and gain better stats.
 * @author Yanfly Engine Plugins
 *
 * @param Default Slots
 * @desc The default amount of slots items can be upgraded.
 * @default 3
 *
 * @param Slot Variance
 * @desc The default slot variance for items with slots.
 * @default 1
 *
 * @param Upgrade Command
 * @desc Command text for upgrading the selected item. If you don't
 * wish for this to appear, keep this blank.    %1 - Item Name
 * @default Upgrade %1
 *
 * @param Slots Available
 * @desc Text used for amount of upgrade slots available. To hide
 * this from the info window, leave this blank.
 * @default Slots Available
 *
 * @param Show Slot Upgrades
 * @desc Shows what upgrades applied to slots in info window.
 * NO - false     YES - true
 * @default true
 *
 * @param Slot Upgrade Format
 * @desc This is the text format used before a shown slot upgrade.
 * %1 - Slot Number    %2 - Item Icon and Name
 * @default \}Slot%1: %2\{
 *
 * @param Default Sound
 * @desc This is the default sound played when using an
 * item upgrade.
 * @default Heal2
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin requires YEP_ItemCore.
 * Make sure this plugin is located under YEP_ItemCore in the plugin list.
 *
 * This plugin adds Item Upgraders, where you can select the base item and then
 * apply the appropriate Item Upgraders onto it to boost its parameters.
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following notetags can be used to modify item upgrades.
 *
 * Weapon, and Armor Notetags
 *   <Upgrade Slots: x>
 *   This sets the number of times an item can be upgraded instead of the
 *   default amount defined in the database.
 *
 *   <Slot Variance: x>
 *   This makes it so that there is a random variance for the number of slots
 *   provided through the item. If this notetag isn't used, it will go by the
 *   setting in the parameters.
 *
 *   <Upgrade Sound: filename>
 *   Changes the upgrade sound played to 'filename'. If this notetag isn't
 *   used, the 'Default Sound' parameter sound will be used instead.
 *
 *   <Upgrade Effect>
 *    effect
 *    effect
 *   </Upgrade Effect>
 *   These are the effects applied (in the order they're listed). Refer to the
 *   'Upgrade Effects List' in the next section to have those effects applied
 *   to the upgraded item.
 *
 *   <Upgrade Item Type: All>
 *   <Upgrade Item Type: Regular>
 *   <Upgrade Item Type: Key>
 *   <Upgrade Item Type: Hidden A>
 *   <Upgrade Item Type: Hidden B>
 *   <Upgrade Item Type: Always>
 *   <Upgrade Item Type: Battle>
 *   <Upgrade Item Type: Menu>
 *   <Upgrade Item Type: Never>
 *   <Upgrade Item Type: string>
 *   This makes it so this item can be used to upgrade the item that matches
 *   either the item type or the item occassion. If none of those work for you,
 *   you can use the following notetag and place an instance for 'string'
 *   inside of the item upgrade types.
 *
 *   <Type: string>
 *   Puts this type into the notebox for items (not weapons nor armors) and it
 *   will add 'string' as its type. You can insert multiple copies of this
 *   notetag to enable the item to have more types. Any types in here that
 *   match the types for the previous notetag will enable the item to be
 *   upgradeable by that upgrade item type.
 *
 *   <Upgrade Weapon Type: x>
 *   <Upgrade Weapon Type: x, x, x>
 *   <Upgrade Weapon Type: x through x>
 *   This makes it so that only weapon types x can use this item for upgrade.
 *   If you use weapon type 0, all weapons can be upgraded using this item.
 *
 *   <Upgrade Armor Type: x>
 *   <Upgrade Armor Type: x, x, x>
 *   <Upgrade Armor Type: x through x>
 *   This makes it so that only armor types x can use this item for upgrade.
 *   If you use armor type 0, all armor can be upgraded using this item.
 *
 * ============================================================================
 * Upgrade Effects List
 * ============================================================================
 *
 * The following is a list of effects you can use for the <Upgrade Effects>
 * notetag to have it apply the desired effects to the upgraded item.
 *
 * Effect Text             Upgrade Effect:
 *   Base Name: x          - Changes item's base name to x. *Note2
 *   Boost Count: +x       - Increases Boost Count by x. *Note2
 *   Boost Count: -x       - Decreases Boost Count by x. *Note2
 *   Eval: x               - Runs x as a piece of code. *Note2
 *   Name: x               - Changes item's name to x. *Note2
 *   Icon: x               - Changes item's icon to x. *Note2
 *   Prefix: x             - Changes item's prefix to x. *Note2
 *   Priority Name: x      - Sets priority name to x. *Note2
 *   Random Stat: x        - Increases or decreases 'Stat' by 0 to x. *Note1
 *   Random Stat: +x       - Increases 'Stat' by 0 to x. *Note1
 *   Random Stat: -x       - Decreases 'Stat' by 0 to x. *Note1
 *   Reset Base Name       - Resets the base name to default.
 *   Reset Boost Count     - Resets the Boost Count to 0.
 *   Reset Icon            - Resets the icon back to the default icon.
 *   Reset Prefix          - Resets name prefix to default.
 *   Reset Stat            - Resets 'Stat' back to base stat values. *Note1
 *   Reset Suffix          - Resets name suffix to default.
 *   Reset Full            - Resets every single aspect about item. *Note3
 *   Slots: x              - Changes the slot consumption cost to x. *Note1
 *   Stat: +x              - Increases 'Stat' by x. *Note1
 *   Stat: -x              - Decreases 'Stat' by x. *Note1
 *   Suffix: x             - Changes item's suffix to x. *Note2
 *
 * Note1: 'Stat' is to be replaced by 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT',
 * 'MDF', 'AGI', 'LUK', 'SLOTS', 'ALL' or 'CURRENT'. 'ALL' affects all stats.
 * 'CURRENT' affects only non-zero stats. This effect will also increase the
 * boost count (+x) by 1 and update the item's name.
 *
 * Note2: This does not alter boost count nor update the item's name unless
 * it is altered by the effect.
 *
 * Note3: Because this effect resets absolutely everything about an item, it
 * will send the player away from the upgrade menu to reset the standings of
 * the item.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are some Plugin Commands you can use for your game regarding
 * the upgrade option in the item menu:
 *
 * Plugin Command:
 *   ShowItemUpgrade    - Shows the upgrade option in the item menu.
 *   HideItemUpgrade    - Hides the upgrade option in the item menu.
 *   DisableItemUpgrade - Disables the upgrade option in the item menu.
 *   EnableItemUpgrade  - Enables the upgrade option in the item menu.
 *
 * You can use those Plugin Commands at any time to adjust the upgrade option.
 */
//=============================================================================

if (Imported.YEP_ItemCore) {

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_X_ItemUpgradeSlots');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.IUSDefaultSlots = Number(Yanfly.Parameters['Default Slots']);
Yanfly.Param.IUSSlotVariance = Number(Yanfly.Parameters['Slot Variance']);
Yanfly.Param.IUSUpgradeCmd = String(Yanfly.Parameters['Upgrade Command']);
Yanfly.Param.IUSSlotsText = String(Yanfly.Parameters['Slots Available']);
Yanfly.Param.IUSShowSlots = String(Yanfly.Parameters['Show Slot Upgrades']);
Yanfly.Param.IUSSlotFmt = String(Yanfly.Parameters['Slot Upgrade Format']);
Yanfly.Param.IUSUpgradeSound = String(Yanfly.Parameters['Default Sound']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.IUS.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
    if (!Yanfly.IUS.DataManager_isDatabaseLoaded.call(this)) return false;
    this.processUpgradeNotetags1($dataItems);
    this.processUpgradeNotetags1($dataWeapons);
    this.processUpgradeNotetags1($dataArmors);
    this.processUpgradeNotetags2($dataItems);
		return true;
};

DataManager.processUpgradeNotetags1 = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		ItemManager.initSlotUpgradeNotes(obj);
    this.processUpgradeNotetags(obj);
	}
};

DataManager.processUpgradeNotetags2 = function(group) {
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		this.processUpgradeNotetags(obj);
	}
};

DataManager.processUpgradeNotetags = function(item) {
    var note1 = /<(?:TYPE|TYPES):[ ](.*)>/i;
    var notedata = item.note.split(/[\r\n]+/);

    item.types = item.types || ['ALL'];

    if (item.itypeId === 1) item.types.push('REGULAR');
    if (item.itypeId === 2) item.types.push('KEY');
    if (item.itypeId === 3) item.types.push('HIDDEN A');
    if (item.itypeId === 4) item.types.push('HIDDEN B');
    if (item.occasion === 0) item.types.push('ALWAYS');
    if (item.occasion === 1) item.types.push('BATTLE');
    if (item.occasion === 2) item.types.push('MENU');
    if (item.occasion === 3) item.types.push('NEVER');

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(note1)) {
        var str = String(RegExp.$1).toUpperCase();
        if (!item.types.contain(str)) item.types.push(str);
      }
    }
};

//=============================================================================
// ItemManager
//=============================================================================

ItemManager.initSlotUpgradeNotes = function(item) {
    var note1 = /<(?:UPGRADE SLOTS|upgrade slot):[ ](\d+)>/i;
    var note2 = /<(?:UPGRADE EFFECT)>/i;
    var note3 = /<\/(?:UPGRADE EFFECT)>/i;
    var note4 = /(?:SLOTS|slot):[ ](\d+)/i;
    var note5 = /(?:BOOST COUNT|boost count):[ ]([\+\-]\d+)/i;
    var note6 = /<(?:UPGRADE SOUND):[ ](.*)>/i;
    var note7 = /<(?:UPGRADE ITEM TYPE):[ ](.*)>/i;
    var note8 = /<(?:UPGRADE WEAPON TYPE):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note9 = /<(?:UPGRADE ARMOR TYPE):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
    var note10 = /<(?:UPGRADE WEAPON TYPE):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
    var note11 = /<(?:UPGRADE ARMOR TYPE):[ ](\d+)[ ](?:THROUGH|to)[ ](\d+)>/i;
    var note12 = /<(?:SLOTS VARIANCE|slot variance):[ ](\d+)>/i;
    var baseItem = DataManager.getBaseItem(item);
    var notedata = baseItem.note.split(/[\r\n]+/);

    item.upgradeSlots = Yanfly.Param.IUSDefaultSlots;
    item.upgradeSlotsVariance = Yanfly.Param.IUSSlotVariance;
    item.upgradeSound = Yanfly.Param.IUSUpgradeSound;
    item.slotsApplied = [];
    var upgradeEffect = false;
    item.upgradeEffect = [];
    item.boostCountValue = 1;
    item.upgradeSlotCost = 1;
    item.upgradeItemType = [];
    item.upgradeWeaponType = [];
    item.upgradeArmorType = [];

    for (var i = 0; i < notedata.length; i++) {
      var line = notedata[i];
      if (line.match(note1)) {
        item.upgradeSlots = parseInt(RegExp.$1);
      } else if (line.match(note2)) {
        upgradeEffect = true;
        item.upgradeEffect = [];
      } else if (line.match(note3)) {
        upgradeEffect = false;
      } else if (upgradeEffect && line.match(note4)) {
        item.upgradeSlotCost = parseInt(RegExp.$1);
      } else if (upgradeEffect && line.match(note5)) {
        item.boostCountValue = parseInt(RegExp.$1);
      } else if (upgradeEffect) {
        item.upgradeEffect.push(line);
      } else if (line.match(note6)) {
        item.upgradeSound = String(RegExp.$1);
      } else if (line.match(note7)) {
        item.upgradeItemType.push(String(RegExp.$1).toUpperCase());
      } else if (line.match(note8)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        item.upgradeWeaponType = item.upgradeWeaponType.concat(array);
      } else if (line.match(note9)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        item.upgradeArmorType = item.upgradeArmorType.concat(array);
      } else if (line.match(note10)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
					parseInt(RegExp.$2));
        item.upgradeWeaponType = item.upgradeWeaponType.concat(range);
      } else if (line.match(note11)) {
        var range = Yanfly.Util.getRange(parseInt(RegExp.$1),
					parseInt(RegExp.$2));
        item.upgradeArmorType = item.upgradeArmorType.concat(range);
      } else if (line.match(note12)) {
        item.upgradeSlotsVariance = parseInt(RegExp.$1);
      }
    }
    if (!DataManager.isIndependent(item)) item.upgradeSlots = 0;
    if (item.upgradeItemType.length === 0 &&
    item.upgradeWeaponType.length === 0 &&
    item.upgradeArmorType.length === 0) {
      item.upgradeWeaponType = [0];
      item.upgradeArmorType = [0];
    }
};

Yanfly.IUS.ItemManager_randomizeInitialItem =
    ItemManager.randomizeInitialItem;
ItemManager.randomizeInitialItem = function(baseItem, newItem) {
    Yanfly.IUS.ItemManager_randomizeInitialItem.call(this, baseItem, newItem);
    if ($gameTemp.varianceStock()) return;
    this.randomizeSlots(baseItem, newItem);
};

ItemManager.randomizeSlots = function(baseItem, newItem) {
    if (baseItem.upgradeSlots <= 0) return;
    if (baseItem.upgradeSlotsVariance <= 0) return;
    var randomValue = (baseItem.upgradeSlotsVariance + 1) * 2;
    var offset = baseItem.upgradeSlotsVariance;
    newItem.upgradeSlots += Math.floor(Math.random() * randomValue - offset);
    newItem.upgradeSlots = Math.max(newItem.upgradeSlots, 0);
    newItem.originalUpgradeSlots = newItem.upgradeSlots;
};

ItemManager.applyIUSEffects = function(mainItem, effectItem) {
    if (!DataManager.isIndependent(mainItem)) return;
    this.payIUSEffects(mainItem, effectItem);
    this.checkIUSEffects(mainItem, effectItem);
};

ItemManager.payIUSEffects = function(mainItem, effectItem) {
    $gameParty.loseItem(effectItem, 1);
    mainItem.upgradeSlots -= effectItem.upgradeSlotCost;
    this.addIUSLine(mainItem, effectItem);
    for (var i = 1; i < effectItem.upgradeSlotCost; ++i) {
      mainItem.slotsApplied.push('---');
    }
    this.increaseItemBoostCount(mainItem, effectItem.boostCountValue);
};

ItemManager.addIUSLine = function(mainItem, effectItem) {
    if (!mainItem.slotsApplied) this.initSlotUpgradeNotes(mainItem);
    var line = '\\i[' + effectItem.iconIndex + ']' + effectItem.name;
    mainItem.slotsApplied.push(line);
};

ItemManager.checkIUSEffects = function(mainItem, effectItem) {
    for (var i = 0; i < effectItem.upgradeEffect.length; ++i) {
      var line = effectItem.upgradeEffect[i];
      this.processIUSEffect(line, mainItem, effectItem);
      if (this._fullReset) {
        mainItem = this._resetItem;
        this._resetItem = undefined;
      }
    }
};

ItemManager.processIUSEffect = function(line, mainItem, effectItem) {
    // BASE NAME: X
    if (line.match(/BASE NAME:[ ](.*)/i)) {
      var value = String(RegExp.$1);
      return this.effectIUSBaseName(mainItem, value);
    }
    // EVAL X
    if (line.match(/EVAL:[ ](.*)/i)) {
      var code = String(RegExp.$1);
      return this.effectIUSEval(mainItem, effectItem, code);
    }
    // ICON: X
    if (line.match(/ICON:[ ](\d+)/i)) {
      var value = parseInt(RegExp.$1);
      return this.effectIUSIcon(mainItem, value);
    }
    // PREFIX: X
    if (line.match(/PREFIX:[ ](.*)/i)) {
      var value = String(RegExp.$1);
      return this.effectIUSPrefix(mainItem, value);
    }
    // PRIORITY NAME: X
    if (line.match(/PRIORITY NAME:[ ](.*)/i)) {
      var value = String(RegExp.$1);
      return this.effectIUSPriorityName(mainItem, value);
    }
    // NAME: X
    if (line.match(/NAME:[ ](.*)/i)) {
      var value = String(RegExp.$1);
      return this.effectIUSName(mainItem, value);
    }
    // RANDOM STAT: X
    if (line.match(/RANDOM[ ](.*):[ ](\d+)/i)) {
      var stat = String(RegExp.$1).toUpperCase();
      var value = parseInt(RegExp.$2);
      return this.effectIUSRandomChange1(mainItem, stat, value);
    }
    // RANDOM STAT: +/-X
    if (line.match(/RANDOM[ ](.*):[ ]([\+\-]\d+)/i)) {
      var stat = String(RegExp.$1).toUpperCase();
      var value = parseInt(RegExp.$2);
      return this.effectIUSRandomChange2(mainItem, stat, value);
    }
    // RESET STAT
    if (line.match(/RESET[ ](.*)/i)) {
      var stat = String(RegExp.$1).toUpperCase();
      return this.effectIUSResetStat(mainItem, stat);
    }
    // STAT: +/-X
    if (line.match(/(.*):[ ]([\+\-]\d+)/i)) {
      var stat = String(RegExp.$1).toUpperCase();
      var value = parseInt(RegExp.$2);
      return this.effectIUSParamChange(mainItem, stat, value);
    }
    // SUFFIX: X
    if (line.match(/SUFFIX:[ ](.*)/i)) {
      var value = String(RegExp.$1);
      return this.effectIUSSuffix(mainItem, value);
    }
};

ItemManager.effectIUSBaseName = function(item, value) {
    this.setBaseName(item, value);
    this.updateItemName(item);
};

ItemManager.effectIUSEval = function(mainItem, effectItem, code) {
    var item = mainItem;
    var baseItem = DataManager.getBaseItem(item);
    eval(code);
};

ItemManager.effectIUSIcon = function(item, value) {
    item.iconIndex = value;
};

ItemManager.effectIUSPrefix = function(item, value) {
    this.setNamePrefix(item, value);
    this.updateItemName(item);
};

ItemManager.effectIUSPriorityName = function(item, value) {
    this.setPriorityName(item, value);
    this.updateItemName(item);
};

ItemManager.effectIUSName = function(item, value) {
    item.name = value;
};

ItemManager.effectIUSRandomChange1 = function(item, stat, value) {
    var randomValue = (value + 1) * 2;
    var offset = value;
    switch (stat) {
      case 'HP':
      case 'MAXHP':
      case 'MAX HP':
        item.params[0] += Math.floor(Math.random() * randomValue - offset);
        break;
      case 'MP':
      case 'MAXMP':
      case 'MAX MP':
      case 'SP':
      case 'MAXSP':
      case 'MAX SP':
        item.params[1] += Math.floor(Math.random() * randomValue - offset);
        break;
      case 'ATK':
      case 'STR':
        item.params[2] += Math.floor(Math.random() * randomValue - offset);
        break;
      case 'DEF':
        item.params[3] += Math.floor(Math.random() * randomValue - offset);
        break;
      case 'MAT':
      case 'INT':
      case 'SPI':
        item.params[4] += Math.floor(Math.random() * randomValue - offset);
        break;
      case 'MDF':
      case 'RES':
        item.params[5] += Math.floor(Math.random() * randomValue - offset);
        break;
      case 'AGI':
      case 'SPD':
        item.params[6] += Math.floor(Math.random() * randomValue - offset);
        break;
      case 'LUK':
        item.params[7] += Math.floor(Math.random() * randomValue - offset);
        break;
      case 'ALL':
        for (var i = 0; i < 8; ++i) {
          item.params[i] += Math.floor(Math.random() * randomValue - offset);
        }
        break;
      case 'CURRENT':
        for (var i = 0; i < 8; ++i) {
          if (item.params[i] === 0) continue;
          item.params[i] += Math.floor(Math.random() * randomValue - offset);
        }
        break;
      case 'SLOT':
      case 'SLOTS':
        item.upgradeSlots += Math.floor(Math.random() * randomValue - offset);
        break;
    }
};

ItemManager.effectIUSRandomChange2 = function(item, stat, value) {
    if (value >= 0) {
      var randomValue = value + 1;
    } else {
      var randomValue = value - 1;
    }
    switch (stat) {
      case 'HP':
      case 'MAXHP':
      case 'MAX HP':
        item.params[0] += Math.floor(Math.random() * randomValue);
        break;
      case 'MP':
      case 'MAXMP':
      case 'MAX MP':
      case 'SP':
      case 'MAXSP':
      case 'MAX SP':
        item.params[1] += Math.floor(Math.random() * randomValue);
        break;
      case 'ATK':
      case 'STR':
        item.params[2] += Math.floor(Math.random() * randomValue);
        break;
      case 'DEF':
        item.params[3] += Math.floor(Math.random() * randomValue);
        break;
      case 'MAT':
      case 'INT':
      case 'SPI':
        item.params[4] += Math.floor(Math.random() * randomValue);
        break;
      case 'MDF':
      case 'RES':
        item.params[5] += Math.floor(Math.random() * randomValue);
        break;
      case 'AGI':
      case 'SPD':
        item.params[6] += Math.floor(Math.random() * randomValue);
        break;
      case 'LUK':
        item.params[7] += Math.floor(Math.random() * randomValue);
        break;
      case 'ALL':
        for (var i = 0; i < 8; ++i) {
          item.params[i] += Math.floor(Math.random() * randomValue);
        }
        break;
      case 'CURRENT':
        for (var i = 0; i < 8; ++i) {
          if (item.params[i] === 0) continue;
          item.params[i] += Math.floor(Math.random() * randomValue);
        }
        break;
      case 'SLOT':
      case 'SLOTS':
        item.upgradeSlots += Math.floor(Math.random() * randomValue);
        break;
    }
};

ItemManager.effectIUSResetStat = function(item, stat) {
    var baseItem = DataManager.getBaseItem(item);
    switch (stat) {
      case 'HP':
      case 'MAXHP':
      case 'MAX HP':
        item.params[0] = baseItem.params[0];
        break;
      case 'MP':
      case 'MAXMP':
      case 'MAX MP':
      case 'SP':
      case 'MAXSP':
      case 'MAX SP':
        item.params[1] = baseItem.params[1];
        break;
      case 'ATK':
      case 'STR':
        item.params[2] = baseItem.params[2];
        break;
      case 'DEF':
        item.params[3] = baseItem.params[3];
        break;
      case 'MAT':
      case 'INT':
      case 'SPI':
        item.params[4] = baseItem.params[4];
        break;
      case 'MDF':
      case 'RES':
        item.params[5] = baseItem.params[5];
        break;
      case 'AGI':
      case 'SPD':
        item.params[6] = baseItem.params[6];
        break;
      case 'LUK':
        item.params[7] = baseItem.params[7];
        break;
      case 'ALL':
        for (var i = 0; i < 8; ++i) {
          item.params[i] = baseItem.params[i];
        }
        break;
      case 'CURRENT':
        for (var i = 0; i < 8; ++i) {
          if (item.params[i] === 0) continue;
          item.params[i] = baseItem.params[i];
        }
        break;
      case 'BOOST':
      case 'BOOST COUNT':
        item.boostCount = 0;
        this.updateItemName(item);
        break;
      case 'SLOT':
      case 'SLOTS':
        if (item.originalUpgradeSlots) {
          item.upgradeSlots = baseItem.originalUpgradeSlots;
        } else {
          item.upgradeSlots = baseItem.upgradeSlots;
        }
        item.slotsApplied = [];
        item.boostCount = 0;
        this.updateItemName(item);
        break;
      case 'BASE NAME':
        item.baseItemName = baseItem.name;
        this.updateItemName(item);
        break;
      case 'ICON':
        item.iconIndex = baseItem.iconIndex;
        break;
      case 'PRIORITY NAME':
        item.priorityName = '';
        this.updateItemName(item);
        break;
      case 'PREFIX':
        item.namePrefix = '';
        this.updateItemName(item);
        break;
      case 'SUFFIX':
        item.nameSuffix = '';
        this.updateItemName(item);
        break;
      case 'FULL':
        var id = item.id;
        var item = JsonEx.makeDeepCopy(baseItem);
        item.id = id;
        if (DataManager.isItem(baseItem)) $dataItems[id] = item;
        if (DataManager.isWeapon(baseItem)) $dataWeapons[id] = item;
        if (DataManager.isArmor(baseItem)) $dataArmors[id] = item;
        ItemManager.setNewIndependentItem(baseItem, item);
        this._fullReset = true;
        this._resetItem = item;
        break;
    }
};

ItemManager.effectIUSParamChange = function(item, stat, value) {
    switch (stat) {
      case 'HP':
      case 'MAXHP':
      case 'MAX HP':
        item.params[0] += value;
        break;
      case 'MP':
      case 'MAXMP':
      case 'MAX MP':
      case 'SP':
      case 'MAXSP':
      case 'MAX SP':
        item.params[1] += value;
        break;
      case 'ATK':
      case 'STR':
        item.params[2] += value;
        break;
      case 'DEF':
        item.params[3] += value;
        break;
      case 'MAT':
      case 'INT':
      case 'SPI':
        item.params[4] += value;
        break;
      case 'MDF':
      case 'RES':
        item.params[5] += value;
        break;
      case 'AGI':
      case 'SPD':
        item.params[6] += value;
        break;
      case 'LUK':
        item.params[7] += value;
        break;
      case 'ALL':
        for (var i = 0; i < 8; ++i) { item.params[i] += value; }
        break;
      case 'CURRENT':
        for (var i = 0; i < 8; ++i) {
          if (item.params[i] === 0) continue;
          item.params[i] += value;
        }
        break;
      case 'SLOT':
      case 'SLOTS':
        item.upgradeSlots += value;
        break;
    }
};

ItemManager.effectIUSSuffix = function(item, value) {
    this.setNameSuffix(item, value);
    this.updateItemName(item);
};

//=============================================================================
// Game_System
//=============================================================================

Yanfly.IUS.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.IUS.Game_System_initialize.call(this);
    this.initItemUpgradeSlots();
};

Game_System.prototype.initItemUpgradeSlots = function() {
    this._itemUpgradeShow = true;
    this._itemUpgradeEnabled = true;
};

Game_System.prototype.itemUpgradeShow = function() {
    if (this._itemUpgradeShow === undefined) this.initItemUpgradeSlots();
    return this._itemUpgradeShow;
};

Game_System.prototype.itemUpgradeEnabled = function() {
    if (this._itemUpgradeEnabled === undefined) this.initItemUpgradeSlots();
    return this._itemUpgradeEnabled;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.IUS.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.IUS.Game_Interpreter_pluginCommand.call(this, command, args)
    if (command === 'ShowItemUpgrade') {
      $gameSystem._itemUpgradeShow = true;
    }
    if (command === 'HideItemUpgrade') {
      $gameSystem._itemUpgradeShow = false;
    }
    if (command === 'DisableItemUpgrade') {
      $gameSystem._itemUpgradeEnabled = false;
    }
    if (command === 'EnableItemUpgrade') {
      $gameSystem._itemUpgradeEnabled = true;
    }
};

//=============================================================================
// Window_ItemInfo
//=============================================================================

Yanfly.IUS.Window_ItemInfo_drawItemInfoD =
    Window_ItemInfo.prototype.drawItemInfoD;
Window_ItemInfo.prototype.drawItemInfoD = function(dy) {
    dy = Yanfly.IUS.Window_ItemInfo_drawItemInfoD.call(this, dy);
    dy = this.drawSlotsInfo(dy);
    dy = this.drawSlotUpgradesUsed(dy);
    return dy;
};

Window_ItemInfo.prototype.drawSlotsInfo = function(dy) {
    var item = this._item;
    var baseItem = DataManager.getBaseItem(item);
    if (!item.slotsApplied) ItemManager.initSlotUpgradeNotes(item);
    if (!DataManager.isIndependent(item)) return dy;
    if (baseItem.upgradeSlots <= 0) return dy;
    if (Yanfly.Param.IUSSlotsText === '') return dy;
    var dx = this.textPadding();
    var dw = this.contents.width - this.textPadding() * 2;
    this.resetFontSettings();
    this.changeTextColor(this.systemColor());
    var text = Yanfly.Param.IUSSlotsText;
    this.drawText(text, dx, dy, dw);
    if (item.originalUpgradeSlots) {
      text = '/' + Yanfly.Util.toGroup(item.originalUpgradeSlots);
    } else {
      text = '/' + Yanfly.Util.toGroup(baseItem.upgradeSlots);
    }
    this.changeTextColor(this.normalColor());
    this.drawText(text, dx, dy, dw, 'right');
    dw -= this.textWidth(text);
    text = Yanfly.Util.toGroup(item.upgradeSlots);
    if (item.upgradeSlots <= 0) this.changeTextColor(this.powerDownColor());
    this.drawText(text, dx, dy, dw, 'right');
    return dy + this.lineHeight();
};

Window_ItemInfo.prototype.drawSlotUpgradesUsed = function(dy) {
    var item = this._item;
    var baseItem = DataManager.getBaseItem(item);
    if (!item.slotsApplied) ItemManager.initSlotUpgradeNotes(item);
    if (!DataManager.isIndependent(item)) return dy;
    if (baseItem.upgradeSlots <= 0) return dy;
    if (!eval(Yanfly.Param.IUSShowSlots)) return dy;
    if (item.slotsApplied.length <= 0) return dy;
    var dx = this.textPadding();
    var fmt = Yanfly.Param.IUSSlotFmt;
    for (var i = 0; i < item.slotsApplied.length; ++i) {
      var text = fmt.format(i + 1, item.slotsApplied[i]);
      this.drawTextEx(text, dx, dy);
      dy += this.lineHeight();
    }
    this.resetFontSettings();
    return dy;
};

//=============================================================================
// Window_ItemActionCommand
//=============================================================================

Yanfly.IUS.Window_ItemActionCommand_addCustomCommandsD =
    Window_ItemActionCommand.prototype.addCustomCommandsD;
Window_ItemActionCommand.prototype.addCustomCommandsD = function() {
    Yanfly.IUS.Window_ItemActionCommand_addCustomCommandsD.call(this);
    this.addUpgradeCommand();
};

Window_ItemActionCommand.prototype.addUpgradeCommand = function() {
    if (Yanfly.Param.IUSUpgradeCmd === '') return;
    if (!$gameSystem.itemUpgradeShow()) return;
    var enabled = DataManager.isIndependent(this._item);
    if (!$gameSystem.itemUpgradeEnabled()) enabled = false;
    var fmt = Yanfly.Param.IUSUpgradeCmd;
    text = '\\i[' + this._item.iconIndex + ']' + this._item.name;
    text = fmt.format(text);
    this.addCommand(text, 'upgrade', enabled);
};

//=============================================================================
// Window_UpgradeItemList
//=============================================================================

function Window_UpgradeItemList() {
    this.initialize.apply(this, arguments);
}

Window_UpgradeItemList.prototype = Object.create(Window_ItemList.prototype);
Window_UpgradeItemList.prototype.constructor = Window_UpgradeItemList;

Window_UpgradeItemList.prototype.initialize = function(x, y, width, height) {
    Window_ItemList.prototype.initialize.call(this, x, y, width, height);
    this._item = null;
    this.hide();
    this.deactivate();
};

Window_UpgradeItemList.prototype.setItem = function(item) {
    if (this._item === item) return;
    this._item = item;
    this.refresh();
    this.resetScroll();
    this.select(0);
};

Window_UpgradeItemList.prototype.includes = function(item) {
    if (!item) return false;
    if (!this.containsType(item)) return false;
    if (!item.upgradeEffect) ItemManager.initSlotUpgradeNotes(item);
    return item.upgradeEffect.length > 0
};

Window_UpgradeItemList.prototype.containsType = function(item) {
    if (!item.upgradeWeaponType) ItemManager.initSlotUpgradeNotes(item);
    if (DataManager.isItem(this._item)) {
      var array1 = item.upgradeItemType;
      if (array1.contains('ALL')) return true;
      var array2 = this._item.types;
      var array3 = array1.filter(function(n) {
        return array2.indexOf(n) != -1
      });
      if (array3.length && array3.length > 0) return true;
    }
    if (DataManager.isWeapon(this._item)) {
      if (item.upgradeWeaponType.contains(0)) return true;
      if (item.upgradeWeaponType.contains(this._item.wtypeId)) return true;
    }
    if (DataManager.isArmor(this._item)) {
      if (item.upgradeArmorType.contains(0)) return true;
      if (item.upgradeArmorType.contains(this._item.atypeId)) return true;
    }
    return false;
};

Window_UpgradeItemList.prototype.isEnabled = function(item) {
    if (!item) return false;
    return this._item.upgradeSlots >= item.upgradeSlotCost;
};

Window_UpgradeItemList.prototype.selectLast = function() {
};

Window_UpgradeItemList.prototype.playOkSound = function() {
    if (!this.item()) return;
    var sound = {
      name:   this.item().upgradeSound,
      volume: 100,
      pitch:  100,
      pan:    100
    };
    AudioManager.playSe(sound);
};

Window_UpgradeItemList.prototype.makeItemList = function() {
    this._data = $gameParty.allItems().filter(function(item) {
        return this.includes(item);
    }, this);
    if (this.includes(null)) this._data.push(null);
};

//=============================================================================
// Window_ItemActionCommand
//=============================================================================

Yanfly.IUS.Scene_Item_createItemWindow = Scene_Item.prototype.createItemWindow;
Scene_Item.prototype.createItemWindow = function() {
    Yanfly.IUS.Scene_Item_createItemWindow.call(this);
    this.createUpgradeListWindow();
};

Yanfly.IUS.Scene_Item_createActionWindow =
    Scene_Item.prototype.createActionWindow;
Scene_Item.prototype.createActionWindow = function() {
    Yanfly.IUS.Scene_Item_createActionWindow.call(this);
    this._itemActionWindow.setHandler('upgrade',
      this.onActionUpgrade.bind(this));
};

Scene_Item.prototype.createUpgradeListWindow = function() {
    var wy = this._itemWindow.y;
    var ww = this._itemWindow.width;
    var wh = this._itemWindow.height;
    this._upgradeListWindow = new Window_UpgradeItemList(0, wy, ww, wh);
    this._upgradeListWindow.setHelpWindow(this._helpWindow);
    this._upgradeListWindow.setHandler('ok', this.onUpgradeListOk.bind(this));
    this._upgradeListWindow.setHandler('cancel',
      this.onUpgradeListCancel.bind(this));
    this.addWindow(this._upgradeListWindow);
};

Scene_Item.prototype.onActionUpgrade = function() {
    this._itemActionWindow.hide();
    this._itemActionWindow.deactivate();
    this._upgradeListWindow.show();
    this._upgradeListWindow.activate();
    this._upgradeListWindow.setItem(this.item());
};

Scene_Item.prototype.onUpgradeListOk = function() {
    var effectItem = this._upgradeListWindow.item();
    ItemManager.applyIUSEffects(this.item(), effectItem)
    if (ItemManager._fullReset) return this.onUpgradeFullReset();
    this._upgradeListWindow.refresh();
    this._upgradeListWindow.activate();
    this._statusWindow.refresh();
    this._infoWindow.refresh();
    this._itemWindow.refresh();
    this._itemActionWindow.refresh();
    var index = this._upgradeListWindow.index();
    if (this._upgradeListWindow.maxItems() <= index) {
      index = this._upgradeListWindow.maxItems() - 1;
      this._upgradeListWindow.select(index);
    }
};

Scene_Item.prototype.onUpgradeFullReset = function() {
    ItemManager._fullReset = false;
    this.onUpgradeListCancel();
    this.onActionCancel();
    this._upgradeListWindow.refresh();
    this._infoWindow.refresh();
    this._itemWindow.refresh();
    this._itemWindow.updateHelp();
    this._itemActionWindow.refresh();
};

Scene_Item.prototype.onUpgradeListCancel = function() {
    this._upgradeListWindow.hide();
    this._upgradeListWindow.deactivate();
    this._itemActionWindow.show();
    this._itemActionWindow.activate();
    this._helpWindow.setItem(this.item());
};

//=============================================================================
// Utilities
//=============================================================================

Yanfly.Util = Yanfly.Util || {};

Yanfly.Util.getRange = function(n, m) {
    var result = [];
    for (var i = n; i <= m; ++i) result.push(i);
    return result;
};

//=============================================================================
// End of File
//=============================================================================
};
