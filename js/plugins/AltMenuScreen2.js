//=============================================================================
// AltMenuScreen2.js
//=============================================================================

/*:
 * @plugindesc Alternative menu screen layout.
 * @author Yoji Ojima, Sasuke KANNAZUKI
 * 
 * @param backGroundBitmap
 * @desc background bitmap file at img/pictures.
 * @default 
 * 
 * @param maxColsMenu
 * @desc max column at menu window
 * @default 4
 * 
 * @param commandRows
 * @desc number of visible rows at command window
 * @default 2
 *
 * @param isDisplayStatus
 * @desc whether display status or not. (1 = yes, 0 = no)
 * @default 0
 * 
 * @help This plugin does not provide plugin commands.
 *  The differences with AltMenuscreen are follows:
 *   - windows are transparent
 *   - it can set the menu's background bitmap.
 *   - picture is actors' original
 *
 * Actor' note:
 * <stand_picture:filename> set actor's standing picture at menu.
 *   put file at img/pictures.
 *
 * preferred size of actor's picture:
 * width: 174px(maxColsMenu=4), 240px(maxColsMenu=3)
 * height: 408px(commandRows=2), 444px(commandRows=1)
 */

/*:ja
 * @plugindesc レイアウトの異なるメニュー画面
 * @author Yoji Ojima, 神無月サスケ
 * 
 * @param backGroundBitmap
 * @desc 背景にするビットマップファイルです。
 * img/pictures に置いてください。
 * @default 
 * 
 * @param maxColsMenu
 * @desc アクターを表示するウィンドウの1画面の登録最大数です。
 * @default 4
 * 
 * @param commandRows
 * @desc コマンドウィンドウの行数です。
 * @default 2
 *
 * @param isDisplayStatus
 * @desc ステータスを表示するかしないかを選びます。(1 = yes, 0 = no)
 * @default 0
 * 
 * @help このプラグインには、プラグインコマンドはありません。
 *
 *  AltMenuscreen との違いは以下です:
 *  - ウィンドウが透明です
 *  - 背景ビットマップを付けることが出来ます。
 *  - アクターに立ち絵を利用します。
 *
 * アクターのメモに以下のように書いてください:
 * <stand_picture:ファイル名> ファイル名が、そのアクターの立ち絵になります。
 *   ファイルは img/pictures に置いてください。
 *
 * 望ましいアクター立ち絵のサイズ：
 * 幅：3列:240px, 4列：174px
 * 高さ： コマンドウィンドウ 1行:444px 2行:408px
 *
 */

(function() {

    // set parameters
    var parameters = PluginManager.parameters('AltMenuScreen2');
    var backGroundBitmap = parameters['backGroundBitmap'] || '';
    var maxColsMenuWnd = Number(parameters['maxColsMenu'] || 4);
    var rowsCommandWnd = Number(parameters['commandRows'] || 2);
    var isDisplayStatus = !!Number(parameters['isDisplayStatus']);

    var _Scene_Menu_create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function() {
        _Scene_Menu_create.call(this);
        this._statusWindow.x = 0;
        this._statusWindow.y = this._commandWindow.height;
        this._goldWindow.x = Graphics.boxWidth - this._goldWindow.width;
        // make transparent for all windows at menu scene.
        this._statusWindow.opacity = 0;
        this._goldWindow.opacity = 0;
        this._commandWindow.opacity = 0;
    };

    // load bitmap that set in plugin parameter
    var _Scene_Menu_createBackground = Scene_Menu.prototype.createBackground;
    Scene_Menu.prototype.createBackground = function(){
        if(backGroundBitmap){
            this._backgroundSprite = new Sprite();
            this._backgroundSprite.bitmap =
             ImageManager.loadPicture(backGroundBitmap);
            this.addChild(this._backgroundSprite);
            return;
        }
        // if background file is invalid, it does original process.
        _Scene_Menu_createBackground.call(this);
    };

    Window_MenuCommand.prototype.windowWidth = function() {
        return Graphics.boxWidth;
    };

    Window_MenuCommand.prototype.maxCols = function() {
        return 4;
    };

    Window_MenuCommand.prototype.numVisibleRows = function() {
        return rowsCommandWnd;
    };

    Window_MenuStatus.prototype.windowWidth = function() {
        return Graphics.boxWidth;
    };

    Window_MenuStatus.prototype.windowHeight = function() {
        var h1 = this.fittingHeight(1);
        var h2 = this.fittingHeight(rowsCommandWnd);
        return Graphics.boxHeight - h1 - h2;
    };

    Window_MenuStatus.prototype.maxCols = function() {
        return maxColsMenuWnd;
    };

    Window_MenuStatus.prototype.numVisibleRows = function() {
        return 1;
    };

    Window_MenuStatus.prototype.drawItemImage = function(index) {
        var actor = $gameParty.members()[index];
        var rect = this.itemRectForText(index);
        // load stand_picture
        var bitmapName = $dataActors[actor.actorId()].meta.stand_picture;
        var bitmap = bitmapName ? ImageManager.loadPicture(bitmapName) : null;
        var w = Math.min(rect.width, (bitmapName ? bitmap.width : 144));
        var h = Math.min(rect.height, (bitmapName ? bitmap.height : 144));
        var lineHeight = this.lineHeight();
        this.changePaintOpacity(actor.isBattleMember());
        if(bitmap){
            var sx = (bitmap.width > w) ? (bitmap.width - w) / 2 : 0;
            var sy = (bitmap.height > h) ? (bitmap.height - h) / 2 : 0;
            var dx = (bitmap.width > rect.width) ? rect.x :
                rect.x + (rect.width - bitmap.width) / 2;
            var dy = (bitmap.height > rect.height) ? rect.y :
                rect.y + (rect.height - bitmap.height) / 2;
            this.contents.blt(bitmap, sx, sy, w, h, dx, dy);
        } else { // when bitmap is not set, do the original process.
            this.drawActorFace(actor, rect.x, rect.y + lineHeight * 2.5, w, h);
        }
        this.changePaintOpacity(true);
    };

    Window_MenuStatus.prototype.drawItemStatus = function(index) {
        if(!isDisplayStatus){
            return;
        }
        var actor = $gameParty.members()[index];
        var rect = this.itemRectForText(index);
        var x = rect.x;
        var y = rect.y;
        var width = rect.width;
        var bottom = y + rect.height;
        var lineHeight = this.lineHeight();
        this.drawActorName(actor, x, y + lineHeight * 0, width);
        this.drawActorLevel(actor, x, y + lineHeight * 1, width);
        this.drawActorClass(actor, x, bottom - lineHeight * 4, width);
        this.drawActorHp(actor, x, bottom - lineHeight * 3, width);
        this.drawActorMp(actor, x, bottom - lineHeight * 2, width);
        this.drawActorIcons(actor, x, bottom - lineHeight * 1, width);
    };

    var _Window_MenuActor_initialize = Window_MenuActor.prototype.initialize;
    Window_MenuActor.prototype.initialize = function() {
        _Window_MenuActor_initialize.call(this);
        this.y = this.fittingHeight(2);
    };

})();
