//@include "../blocks/widget.jsx"

_DropDownList = function _DropDownList(cfg){
    _Widget.call(this, cfg, "dropdownlist");
}; Object.extends(_DropDownList, _Widget);

_DropDownList.prototype.stdVisibleOnChange = function(g) // g: group var name
{
    const P = "visibility", N = false, Y = true;

    var i = this.selection.index,
        l = this.items,
        n = ts.length;

    while(n--) (l[n][g][P] = N);
    l[i][g][P] = Y; 
}