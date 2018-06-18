//=============================================================================
// Yanfly Engine Plugins - Main Menu Core
// YEP_MainMenuManager.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_MainMenuManager = true;

var Yanfly = Yanfly || {};
Yanfly.MMM = Yanfly.MMM || {};

//=============================================================================
 /*:
 * @plugindesc v1.00 This plugin allows you to manage the various aspects
 * of your main menu.
 * @author Yanfly Engine Plugins
 *
 * @param ---Command---
 * @default
 *
 * @param Command Alignment
 * @desc This is the text alignment for the Command Window.
 * left     center     right
 * @default left
 *
 * @param Command Position
 * @desc Determine the command window's position.
 * left     right
 * @default left
 *
 * @param Command Columns
 * @desc Amount of columns to be displayed by the command window.
 * Default: 1
 * @default 1
 *
 * @param Command Rows
 * @desc The number of visible rows for the command window.
 * @default Math.min(10, Math.ceil(this.maxItems() / this.maxCols()))
 *
 * @param Command Width
 * @desc This is the command window width in pixels.
 * Default: 240
 * @default 240
 *
 * @param ---Menu 1---
 * @default
 *
 * @param Menu 1 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 1 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 1 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 1 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 1 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 1 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 1 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 2---
 * @default
 *
 * @param Menu 2 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 2 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 2 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 2 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 2 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 2 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 2 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 3---
 * @default
 *
 * @param Menu 3 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 3 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 3 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 3 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 3 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 3 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 3 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 4---
 * @default
 *
 * @param Menu 4 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 4 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 4 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 4 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 4 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 4 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 4 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 5---
 * @default
 *
 * @param Menu 5 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 5 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 5 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 5 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 5 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 5 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 5 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 6---
 * @default
 *
 * @param Menu 6 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 6 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 6 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 6 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 6 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 6 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 6 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 7---
 * @default
 *
 * @param Menu 7 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 7 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 7 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 7 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 7 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 7 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 7 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 8---
 * @default
 *
 * @param Menu 8 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 8 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 8 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 8 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 8 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 8 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 8 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 9---
 * @default
 *
 * @param Menu 9 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 9 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 9 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 9 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 9 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 9 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 9 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 10---
 * @default
 *
 * @param Menu 10 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.item
 *
 * @param Menu 10 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default item
 *
 * @param Menu 10 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('item')
 *
 * @param Menu 10 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default this.areMainCommandsEnabled()
 *
 * @param Menu 10 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 10 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandItem.bind(this)
 *
 * @param Menu 10 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 11---
 * @default
 *
 * @param Menu 11 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 11 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 11 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 11 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 11 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 11 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 11 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 12---
 * @default
 *
 * @param Menu 12 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 12 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 12 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 12 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 12 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 12 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 12 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 13---
 * @default
 *
 * @param Menu 13 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 13 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 13 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 13 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 13 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 13 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 13 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 14---
 * @default
 *
 * @param Menu 14 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 14 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 14 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 14 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 14 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 14 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 14 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 15---
 * @default
 *
 * @param Menu 15 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.skill
 *
 * @param Menu 15 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default skill
 *
 * @param Menu 15 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('skill')
 *
 * @param Menu 15 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default this.areMainCommandsEnabled()
 *
 * @param Menu 15 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 15 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandPersonal.bind(this)
 *
 * @param Menu 15 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default SceneManager.push(Scene_Skill)
 *
 * @param ---Menu 16---
 * @default
 *
 * @param Menu 16 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 16 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 16 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 16 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 16 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 16 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 16 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 17---
 * @default
 *
 * @param Menu 17 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 17 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 17 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 17 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 17 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 17 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 17 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 18---
 * @default
 *
 * @param Menu 18 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 18 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 18 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 18 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 18 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 18 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 18 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 19---
 * @default
 *
 * @param Menu 19 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 19 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 19 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 19 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 19 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 19 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 19 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 20---
 * @default
 *
 * @param Menu 20 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.equip
 *
 * @param Menu 20 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default equip
 *
 * @param Menu 20 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('equip')
 *
 * @param Menu 20 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default this.areMainCommandsEnabled()
 *
 * @param Menu 20 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 20 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandPersonal.bind(this)
 *
 * @param Menu 20 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default SceneManager.push(Scene_Equip)
 *
 * @param ---Menu 21---
 * @default
 *
 * @param Menu 21 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 21 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 21 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 21 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 21 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 21 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 21 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 22---
 * @default
 *
 * @param Menu 22 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 22 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 22 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 22 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 22 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 22 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 22 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 23---
 * @default
 *
 * @param Menu 23 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 23 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 23 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 23 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 23 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 23 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 23 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 24---
 * @default
 *
 * @param Menu 24 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 24 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 24 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 24 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 24 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 24 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 24 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 25---
 * @default
 *
 * @param Menu 25 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default Yanfly.Param.CCCCmdName
 *
 * @param Menu 25 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default class
 *
 * @param Menu 25 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default Imported.YEP_ClassChangeCore && $gameSystem.isShowClass()
 *
 * @param Menu 25 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default $gameSystem.isEnableClass() && this.areMainCommandsEnabled()
 *
 * @param Menu 25 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 25 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandPersonal.bind(this)
 *
 * @param Menu 25 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default SceneManager.push(Scene_Class)
 *
 * @param ---Menu 26---
 * @default
 *
 * @param Menu 26 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 26 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 26 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 26 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 26 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 26 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 26 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 27---
 * @default
 *
 * @param Menu 27 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 27 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 27 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 27 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 27 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 27 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 27 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 28---
 * @default
 *
 * @param Menu 28 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 28 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 28 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 28 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 28 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 28 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 28 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 29---
 * @default
 *
 * @param Menu 29 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 29 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 29 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 29 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 29 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 29 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 29 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 30---
 * @default
 *
 * @param Menu 30 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 30 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 30 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 30 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 30 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 30 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 30 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 31---
 * @default
 *
 * @param Menu 31 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 31 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 31 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 31 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 31 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 31 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 31 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 32---
 * @default
 *
 * @param Menu 32 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 32 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 32 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 32 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 32 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 32 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 32 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 33---
 * @default
 *
 * @param Menu 33 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 33 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 33 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 33 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 33 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 33 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 33 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 34---
 * @default
 *
 * @param Menu 34 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 34 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 34 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 34 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 34 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 34 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 34 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 35---
 * @default
 *
 * @param Menu 35 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 35 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 35 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 35 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 35 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 35 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 35 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 36---
 * @default
 *
 * @param Menu 36 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 36 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 36 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 36 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 36 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 36 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 36 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 37---
 * @default
 *
 * @param Menu 37 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 37 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 37 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 37 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 37 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 37 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 37 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 38---
 * @default
 *
 * @param Menu 38 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 38 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 38 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 38 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 38 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 38 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 38 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 39---
 * @default
 *
 * @param Menu 39 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 39 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 39 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 39 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 39 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 39 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 39 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 40---
 * @default
 *
 * @param Menu 40 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 40 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 40 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 40 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 40 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 40 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 40 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 41---
 * @default
 *
 * @param Menu 41 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 41 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 41 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 41 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 41 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 41 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 41 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 42---
 * @default
 *
 * @param Menu 42 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 42 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 42 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 42 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 42 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 42 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 42 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 43---
 * @default
 *
 * @param Menu 43 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 43 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 43 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 43 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 43 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 43 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 43 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 44---
 * @default
 *
 * @param Menu 44 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 44 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 44 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 44 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 44 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 44 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 44 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 45---
 * @default
 *
 * @param Menu 45 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 45 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 45 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 45 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 45 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 45 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 45 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 46---
 * @default
 *
 * @param Menu 46 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 46 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 46 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 46 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 46 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 46 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 46 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 47---
 * @default
 *
 * @param Menu 47 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 47 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 47 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 47 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 47 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 47 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 47 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 48---
 * @default
 *
 * @param Menu 48 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 48 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 48 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 48 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 48 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 48 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 48 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 49---
 * @default
 *
 * @param Menu 49 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 49 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 49 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 49 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 49 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 49 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 49 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 50---
 * @default
 *
 * @param Menu 50 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.status
 *
 * @param Menu 50 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default status
 *
 * @param Menu 50 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('status')
 *
 * @param Menu 50 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default this.areMainCommandsEnabled()
 *
 * @param Menu 50 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 50 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandPersonal.bind(this)
 *
 * @param Menu 50 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default SceneManager.push(Scene_Status)
 *
 * @param ---Menu 51---
 * @default
 *
 * @param Menu 51 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 51 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 51 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 51 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 51 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 51 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 51 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 52---
 * @default
 *
 * @param Menu 52 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 52 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 52 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 52 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 52 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 52 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 52 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 53---
 * @default
 *
 * @param Menu 53 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 53 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 53 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 53 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 53 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 53 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 53 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 54---
 * @default
 *
 * @param Menu 54 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 54 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 54 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 54 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 54 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 54 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 54 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 55---
 * @default
 *
 * @param Menu 55 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.formation
 *
 * @param Menu 55 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default formation
 *
 * @param Menu 55 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('formation')
 *
 * @param Menu 55 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default this.isFormationEnabled()
 *
 * @param Menu 55 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 55 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandFormation.bind(this)
 *
 * @param Menu 55 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 56---
 * @default
 *
 * @param Menu 56 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 56 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 56 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 56 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 56 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 56 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 56 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 57---
 * @default
 *
 * @param Menu 57 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 57 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 57 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 57 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 57 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 57 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 57 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 58---
 * @default
 *
 * @param Menu 58 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 58 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 58 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 58 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 58 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 58 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 58 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 59---
 * @default
 *
 * @param Menu 59 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 59 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 59 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 59 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 59 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 59 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 59 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 60---
 * @default
 *
 * @param Menu 60 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 60 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 60 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 60 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 60 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 60 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 60 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 61---
 * @default
 *
 * @param Menu 61 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 61 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 61 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 61 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 61 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 61 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 61 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 62---
 * @default
 *
 * @param Menu 62 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 62 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 62 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 62 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 62 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 62 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 62 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 63---
 * @default
 *
 * @param Menu 63 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 63 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 63 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 63 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 63 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 63 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 63 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 64---
 * @default
 *
 * @param Menu 64 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 64 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 64 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 64 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 64 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 64 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 64 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 65---
 * @default
 *
 * @param Menu 65 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 65 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 65 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 65 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 65 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 65 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 65 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 66---
 * @default
 *
 * @param Menu 66 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 66 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 66 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 66 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 66 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 66 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 66 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 67---
 * @default
 *
 * @param Menu 67 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 67 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 67 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 67 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 67 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 67 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 67 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 68---
 * @default
 *
 * @param Menu 68 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 68 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 68 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 68 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 68 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 68 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 68 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 69---
 * @default
 *
 * @param Menu 69 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 69 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 69 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 69 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 69 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 69 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 69 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 70---
 * @default
 *
 * @param Menu 70 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 70 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 70 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 70 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 70 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 70 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 70 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 71---
 * @default
 *
 * @param Menu 71 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 71 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 71 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 71 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 71 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 71 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 71 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 72---
 * @default
 *
 * @param Menu 72 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 72 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 72 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 72 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 72 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 72 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 72 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 73---
 * @default
 *
 * @param Menu 73 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 73 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 73 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 73 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 73 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 73 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 73 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 74---
 * @default
 *
 * @param Menu 74 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 74 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 74 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 74 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 74 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 74 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 74 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 75---
 * @default
 *
 * @param Menu 75 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 75 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 75 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 75 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 75 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 75 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 75 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 76---
 * @default
 *
 * @param Menu 76 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 76 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 76 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 76 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 76 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 76 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 76 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 77---
 * @default
 *
 * @param Menu 77 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 77 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 77 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 77 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 77 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 77 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 77 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 78---
 * @default
 *
 * @param Menu 78 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 78 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 78 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 78 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 78 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 78 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 78 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 79---
 * @default
 *
 * @param Menu 79 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 79 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 79 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 79 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 79 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 79 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 79 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 80---
 * @default
 *
 * @param Menu 80 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 80 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 80 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 80 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 80 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 80 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 80 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 81---
 * @default
 *
 * @param Menu 81 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default 'Common Event 1'
 *
 * @param Menu 81 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default common event
 *
 * @param Menu 81 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default false
 *
 * @param Menu 81 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default true
 *
 * @param Menu 81 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default 1
 *
 * @param Menu 81 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.callCommonEvent.bind(this)
 *
 * @param Menu 81 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 82---
 * @default
 *
 * @param Menu 82 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default 'Common Event 2'
 *
 * @param Menu 82 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default common event
 *
 * @param Menu 82 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default false
 *
 * @param Menu 82 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default true
 *
 * @param Menu 82 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default 2
 *
 * @param Menu 82 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.callCommonEvent.bind(this)
 *
 * @param Menu 82 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 83---
 * @default
 *
 * @param Menu 83 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default 'Common Event 3'
 *
 * @param Menu 83 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default common event
 *
 * @param Menu 83 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default false
 *
 * @param Menu 83 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default true
 *
 * @param Menu 83 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default 3
 *
 * @param Menu 83 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.callCommonEvent.bind(this)
 *
 * @param Menu 83 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 84---
 * @default
 *
 * @param Menu 84 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 84 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 84 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 84 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 84 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 84 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 84 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 85---
 * @default
 *
 * @param Menu 85 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 85 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 85 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 85 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 85 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 85 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 85 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 86---
 * @default
 *
 * @param Menu 86 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 86 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 86 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 86 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 86 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 86 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 86 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 87---
 * @default
 *
 * @param Menu 87 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 87 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 87 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 87 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 87 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 87 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 87 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 88---
 * @default
 *
 * @param Menu 88 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 88 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 88 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 88 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 88 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 88 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 88 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 89---
 * @default
 *
 * @param Menu 89 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 89 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 89 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 89 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 89 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 89 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 89 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 90---
 * @default
 *
 * @param Menu 90 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.options
 *
 * @param Menu 90 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default options
 *
 * @param Menu 90 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('options')
 *
 * @param Menu 90 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default this.isOptionsEnabled()
 *
 * @param Menu 90 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 90 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandOptions.bind(this)
 *
 * @param Menu 90 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 91---
 * @default
 *
 * @param Menu 91 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 91 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 91 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 91 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 91 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 91 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 91 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 92---
 * @default
 *
 * @param Menu 92 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 92 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 92 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 92 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 92 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 92 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 92 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 93---
 * @default
 *
 * @param Menu 93 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 93 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 93 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 93 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 93 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 93 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 93 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 94---
 * @default
 *
 * @param Menu 94 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 94 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 94 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 94 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 94 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 94 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 94 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 95---
 * @default
 *
 * @param Menu 95 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.save
 *
 * @param Menu 95 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default save
 *
 * @param Menu 95 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default this.needsCommand('save')
 *
 * @param Menu 95 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default this.isSaveEnabled()
 *
 * @param Menu 95 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 95 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandSave.bind(this)
 *
 * @param Menu 95 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 96---
 * @default
 *
 * @param Menu 96 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 96 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 96 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 96 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 96 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 96 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 96 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 97---
 * @default
 *
 * @param Menu 97 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 97 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 97 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 97 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 97 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 97 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 97 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 98---
 * @default
 *
 * @param Menu 98 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default
 *
 * @param Menu 98 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default
 *
 * @param Menu 98 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default
 *
 * @param Menu 98 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default
 *
 * @param Menu 98 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 98 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default
 *
 * @param Menu 98 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 99---
 * @default
 *
 * @param Menu 99 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default 'Debug'
 *
 * @param Menu 99 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default debug
 *
 * @param Menu 99 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default $gameTemp.isPlaytest()
 *
 * @param Menu 99 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default true
 *
 * @param Menu 99 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 99 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandDebug.bind(this)
 *
 * @param Menu 99 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @param ---Menu 100---
 * @default
 *
 * @param Menu 100 Name
 * @desc This is the name for the menu command. This is an eval. To
 * make it a string, use 'quotes' around the name.
 * @default TextManager.gameEnd
 *
 * @param Menu 100 Symbol
 * @desc This is the symbol for the menu command. This needs to be
 * unique per menu command.
 * @default gameEnd
 *
 * @param Menu 100 Show
 * @desc This is the eval condition for this menu command to appear.
 * @default true
 *
 * @param Menu 100 Enabled
 * @desc Is this menu command enabled? This is an eval.
 * @default this.isGameEndEnabled()
 *
 * @param Menu 100 Ext
 * @desc This is the menu command's extension. This is an eval.
 * @default
 *
 * @param Menu 100 Main Bind
 * @desc This is the function activated by this menu command.
 * This is an eval.
 * @default this.commandGameEnd.bind(this)
 *
 * @param Menu 100 Actor Bind
 * @desc If the menu command leads to selecting an actor, this is
 * the function activated after selecting an actor.
 * @default
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * For those who wish to alter the various aspects of the main menu commands
 * without needing to touch the source code can use this plugin to do so.
 * Although this plugin mostly ports the menu creation process to the Plugin
 * Manager parameters, it allows for a cleaner way to handle the menu command
 * management process.
 *
 * ============================================================================
 * How to Use This Plugin
 * ============================================================================
 *
 * Each section in the parameters is divided up into various parts. Each of
 * these parts play a role in how the menu command functions. Here's what each
 * part does:
 *
 * Name
 * - This is how the command will appear visually in the main menu. This is an
 * eval, which means, it's code driven. If you want the command to appear just
 * as it is, use 'quotes' around it.
 *
 * Symbol
 * - This is the identifier for the command. Each command should have a unique
 * symbol, so much as to not cause conflicts with each command. However, shared
 * symbols are perfectly fine as long as you're fine with them performing the
 * same function when selected.
 *
 * Show
 * - This is an eval condition for whether or not the command shows up in the
 * main menu. If you wish for this to always show up, simply use 'true' without
 * the quotes.
 *
 * Enabled
 * - This is an eval condition for whether or not the command is enabled. The
 * difference between showing a command and enabling a command is that a
 * command can show, but it can't be selected because it isn't enabled. If you
 * wish for this command to always be enabled, use 'true' without the quotes.
 *
 * Ext
 * - Stands for extension. This serves as a secondary symbol for the command
 * and it can be used for pretty much anything. It has no direct impact on the
 * command unless the command's objective is related to the extension value.
 * The majority of commands do not need to make use of the Ext value.
 *
 * Main Bind
 * - This is an eval function that is to be ran when this command is selected
 * straight from the main menu. The function that is to be bound to this
 * command needs to be accessible from Scene_Menu is some way or another. For
 * commands that are meant to select an actor first, use
 * 'this.commandItem.bind(this)' without the quotes.
 *
 * Actor Bind
 * - This is an eval function that is to be ran when an actor is selected after
 * choosing this command, usually to push a scene. This function isn't needed
 * for any menu commands that don't require selecting an actor.
 *
 * ============================================================================
 * Examples
 * ============================================================================
 *
 * The following are some examples to help you add/alter/change the way
 * commands appear for your main menu.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *       Name: TextManager.item
 *     Symbol: item
 *       Show: this.needsCommand('item')
 *    Enabled: this.areMainCommandsEnabled()
 *        Ext:
 *  Main Bind: this.commandItem.bind(this)
 * Actor Bind:
 *
 * The item command is made using the above example. 'TextManager.item' is how
 * the command name will appear. It draws the name information from the
 * database Text Manager entry for 'Item' and uses whatever you put into the
 * database in here. The symbol 'item' is used to make the item command's
 * unique identifier. In order for the command to show, it will run a
 * 'needsCommand' function to check if it will appear. This 'needsCommand'
 * function is related to your database on whether or not you want the item to
 * appear there. In order for this command to be enabled, it will check for
 * whether or not the main commands are enabled, which is related to whether or
 * not there are actors in the current party. And finally, the line of code
 * 'this.commandItem.bind(this)' is the command that will run once the item
 * entry is selected.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *       Name: TextManager.skill
 *     Symbol: skill
 *       Show: this.needsCommand('skill')
 *    Enabled: this.areMainCommandsEnabled()
 *        Ext:
 *  Main Bind: this.commandPersonal.bind(this)
 * Actor Bind: SceneManager.push(Scene_Skill)
 *
 * The skill command is made using the above example. 'TextManager.skill' is
 * how the command name will appear. It draws the name information from the
 * database Text Manager entry for 'Skill' and uses whatever you put into the
 * database in here. The symbol 'skill' is used to make the skill command's
 * unique identifier. In order for the command to show, it will run a line code
 * 'needsCommand' function to check if it will appear. This 'needsCommand'
 * function is related to your database on whether or not you want the skill
 * option to appear there. In order for this command to be enabled, it will
 * check for whether or not the main commands are enabled, which is related to
 * whether or not there are actors in the current party. This time, the main
 * bind command is to send the player to the actor selection process using
 * 'this.commandPersonal.bind(this)' instead. Once the player selects an actor,
 * 'SceneManager.push(Scene_Skill)' is then ran to send the player to
 * Scene_Skill to manage the actor's skills.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 *
 *       Name: 'Common Event 1'
 *     Symbol: common event
 *       Show: false
 *    Enabled: true
 *        Ext: 1
 *  Main Bind: this.callCommonEvent.bind(this)
 * Actor Bind:
 *
 * This is a customized command that is included by default with the plugin.
 * This command's name is 'Common Event 1', but it can be changed to whatever
 * you want by simply changing what's in between the 'quotes' in the parameter
 * settings. The symbol is the identifier for all common events. However, by
 * default, this common event item does not show in the main menu. If you want
 * it to appear, set the Show option to 'true' without the quotes and it will
 * appear. Because the Enabled option is 'true', the command can always be
 * selected by the player. The Ext actually has a role with this command. The
 * Ext determines which common event is to be played. In this example, the Ext
 * value is 1, which means common event 1 will be ran when this command is
 * selected. Should the Ext value equal to 25, it will be common event 25 that
 * will run once this command is selected. The reason is because the Main Bind
 * for this command option is 'this.callCommonEvent.bind(this)', which is a
 * function included in this plugin to allow for common events to be ran.
 *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_MainMenuManager');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.MMMCmdAlign = String(Yanfly.Parameters['Command Alignment']);
Yanfly.Param.MMMCmdPosition = String(Yanfly.Parameters['Command Position']);
Yanfly.Param.MMMCmdCols = String(Yanfly.Parameters['Command Columns']);
Yanfly.Param.MMMCmdRows = String(Yanfly.Parameters['Command Rows']);
Yanfly.Param.MMMCmdWidth = String(Yanfly.Parameters['Command Width']);
Yanfly.MMM.Name = {};
Yanfly.MMM.Symbol = {};
Yanfly.MMM.Show = {};
Yanfly.MMM.Enabled = {};
Yanfly.MMM.Ext = {};
Yanfly.MMM.MainBind = {};
Yanfly.MMM.ActorBind = {};
for (Yanfly.i = 1; Yanfly.i <= 100; ++Yanfly.i) {
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Name'])";
  Yanfly.MMM.Name[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Symbol'])";
  Yanfly.MMM.Symbol[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Show'])";
  Yanfly.MMM.Show[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Enabled'])";
  Yanfly.MMM.Enabled[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Ext'])";
  Yanfly.MMM.Ext[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Main Bind'])";
  Yanfly.MMM.MainBind[Yanfly.i] = eval(Yanfly.line);
  Yanfly.line = "String(Yanfly.Parameters['Menu " + Yanfly.i + " Actor Bind'])";
  Yanfly.MMM.ActorBind[Yanfly.i] = eval(Yanfly.line);
};

//=============================================================================
// Window_MenuCommand
//=============================================================================

Window_MenuCommand.prototype.makeCommandList = function() {
    for (var i = 1; i <= 100; ++i) {
      this.createCommand(i);
    }
};

Window_MenuCommand.prototype.addMainCommands = function() {
};

Window_MenuCommand.prototype.addFormationCommand = function() {
};

Window_MenuCommand.prototype.addOriginalCommands = function() {
};

Window_MenuCommand.prototype.addOptionsCommand = function() {
};

Window_MenuCommand.prototype.addSaveCommand = function() {
};

Window_MenuCommand.prototype.addGameEndCommand = function() {
};

Window_MenuCommand.prototype.createCommand = function(i) {
    var show = Yanfly.MMM.Show[i];
    if (show === '') return;
    if (!eval(show)) return;
    var name = Yanfly.MMM.Name[i];
    if (name === '') return;
    name = eval(name);
    var symbol = Yanfly.MMM.Symbol[i];
    if (symbol === '') return;
    var enabled = eval(Yanfly.MMM.Enabled[i]);
    if (enabled === '') enabled = true;
    var ext = eval(Yanfly.MMM.Ext[i]);
    this.addCommand(name, symbol, enabled, ext);
    this.addSymbolBridge(symbol);
};

Window_MenuCommand.prototype.addSymbolBridge = function(symbol) {
    if (symbol === 'item') this.addMainCommands();
    if (symbol === 'formation') this.addFormationCommand();
    if (symbol === 'formation') this.addOriginalCommands();
    if (symbol === 'options') this.addOptionsCommand();
    if (symbol === 'save') this.addSaveCommand();
    if (symbol === 'gameEnd') this.addGameEndCommand();
};

Window_MenuCommand.prototype.itemTextAlign = function() {
    return Yanfly.Param.MMMCmdAlign;
};

Window_MenuCommand.prototype.windowWidth = function() {
    return eval(Yanfly.Param.MMMCmdWidth);
};

Window_MenuCommand.prototype.maxCols = function() {
    return eval(Yanfly.Param.MMMCmdCols);
};

Window_MenuCommand.prototype.numVisibleRows = function() {
    return eval(Yanfly.Param.MMMCmdRows);
};

//=============================================================================
// Window_MenuStatus
//=============================================================================

Yanfly.MMM.Window_MenuStatus_initialize =
    Window_MenuStatus.prototype.initialize;
Window_MenuStatus.prototype.initialize = function(wx, wy) {
    this._initX = wx;
    Yanfly.MMM.Window_MenuStatus_initialize.call(this, wx, wy);
};

Window_MenuStatus.prototype.windowWidth = function() {
    return Graphics.boxWidth - this._initX;
};

//=============================================================================
// Scene_Menu
//=============================================================================

Yanfly.MMM.Scene_Menu_create = Scene_Menu.prototype.create;
Scene_Menu.prototype.create = function() {
    Yanfly.MMM.Scene_Menu_create.call(this);
    this.repositionWindows();
};

Scene_Menu.prototype.createCommandWindow = function() {
    this._commandWindow = new Window_MenuCommand(0, 0);
    this.createCommandWindowBinds();
    this._commandWindow.setHandler('cancel',    this.popScene.bind(this));
    this.addWindow(this._commandWindow);
};

Scene_Menu.prototype.createCommandWindowBinds = function() {
  this._actorBinds = {};
  for (var i = 1; i <= 100; ++i) {
    var symbol = Yanfly.MMM.Symbol[i];
    if (symbol === '') continue;
    var bind = Yanfly.MMM.MainBind[i];
    if (bind === '') continue;
    eval("this._commandWindow.setHandler('" + symbol + "', " + bind + ")");
    var actorBind = Yanfly.MMM.ActorBind[i];
    if (actorBind === '') continue;
    this._actorBinds[symbol] = actorBind;
  }
};

Scene_Menu.prototype.repositionWindows = function() {
    if (Yanfly.Param.MMMCmdPosition === 'right') {
      this._commandWindow.x = Graphics.boxWidth - this._commandWindow.width;
      this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
      this._statusWindow.x = 0;
    } else if (Yanfly.Param.MMMCmdPosition === 'left') {
      this._commandWindow.x = 0;
      this._goldWindow.x = 0;
      this._statusWindow.x = this._commandWindow.width;
    }
};

Scene_Menu.prototype.onPersonalOk = function() {
    var symbol = this._commandWindow.currentSymbol();
    var actorBind = this._actorBinds[symbol];
    if (!actorBind) return;
    eval(actorBind);
};

Scene_Menu.prototype.callCommonEvent = function() {
    var ext = this._commandWindow.currentExt();
    $gameTemp.reserveCommonEvent(parseInt(ext));
    this.popScene();
};

Scene_Menu.prototype.commandDebug = function() {
    SceneManager.push(Scene_Debug);
};

//=============================================================================
// End of File
//=============================================================================
