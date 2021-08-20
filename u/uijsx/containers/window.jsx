//@include "../blocks/container.jsx"

_Window = function _Window(cfg){
    _Container.call(this, cfg, "window");


    var evHandlingFuncs = ["Close", "Activate", "Move", "Moving", "Resize", "Resizing", "ShortcutKey", "Show"];
    var falseProps = ["spacing", "margins","resizeable", "minimizeButton", "maximizeButton", "independent", "borderless"];

    // Window properties:
    this.wintype = this.assign(this.wintype, "palette", ["string"],
                    function(t){
                        if(t != "window"
                        && t != "palette"
                        && t != "dialog"){
                            return true;
                        }
                    });

    this.win = new Window(this.wintype);
    
    // size:
    this.win.preferredSize.width = 
                this.assign(this.width,200, undefined,
                function(x){return x<=10;});
    
    this.win.preferredSize.height = 
                this.assign(this.height,200, undefined,
                function(x){return x<=10});

    // false props:
    for(i=-1; ++i<falseProps.length;)
    {
        p = falseProps[i];
        this.win[p] = this.assign(this[p], 0);
    }
    // props:
    this.win.text = this.assign(this.title, "untitled", ["string"]);
    this.win.orientation = this.assign(this.orientation, "column");
    this.win.alignChildren = this.assign(this.alignChildren, ["left", "center"], ["array", "string"]);
    this.win.closeButton = this.assign(this.closeButton, true);

    // Event handling:
    for(i=-1; ++i<evHandlingFuncs.length;)
    {
        f = "on" + (f = evHandlingFuncs[i]);
        this.win[f] = this.assign(this[f], undefined, ["function"]);
    }

}; Object.extends(_Window, _Container);

_Window.alert = function(cfg)
{
    Window.alert(cfg.msg, cfg.title, cfg.errIcon);
}

_Window.confirm = function(cfg)
{
    Window.confirm(cfg.msg, cfg.defNo, cfg.title);
}

_Window.find = function(cfg)
{
    Window.find(cfg.type, cfg.title);
}

_Window.prompt = function(cfg)
{
    Window.prompt(cfg.msg, cfg.defValue, cfg.title);
}

_Window.prototype.show = function(){
    this.win.show();
}

_Window.prototype.close = function(){
    this.win.close();
}

_Window.prototype.center = function(){
    this.win.center();
}