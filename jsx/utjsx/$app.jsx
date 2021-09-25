
//@include "$fstring.jsx"

Object.extend  = function(oo, newstuff){
  for(k in newstuff) if(newstuff.hasOwnProperty(k)) oo[k] = newstuff[k];
}

CompItem.prototype.sel = function(p)
{
  if(typeof p == "undefined") return this.selectedLayers;
  return this.selectedLayers[p];
}

Object.extend(app, {
  
  setTime : function(t,c, all){
  
    all = typeof all == "undefined"?1:all;
    cmp = cmp || app.project.activeItem;
    i = 0, n = c.layers.length + 1;
  
    //==============/
    cmp.duration = t;
    //==============/
    for(;++i<n;)
    {
      lyr      = cmp.layer(i);
      isLocked = lyr.locked;
      l.locked = false; //unlock
  
      //=============================================================/
      lyr.outPoint = t;
      if(all && lyr.source instanceof CompItem) setTime(t, lyr.source);
      //=============================================================/
  
      lyr.locked = isLocked; //relock
    }
  
    //cleanup:
    all = cmp = i = n = lyr = isLocked = null;
  },

    /**
   * {s}: type.
   * {f}: if another type is found in the selLayers, abort.
   * getSelected("text", false) returns all selected text layers.
   */
  getSelected : function(s, f)
  {

    const ERRS = {
      NO_COMP_FOUND: "NO ACTIVE COMPOSITION",
      NO_SEL_LAYERS_FOUND: "NO SELECTED LAYERS FOUND",
      BAD_INSTANCE_FOUND: "BAD LAYER INSTANCE WAS FOUND"
    },
    TYPE = {
      "*": "*",
      "text": "TextLayer",
      "shape": "ShapeLayer",
    }

    var c = app.project.activeItem,
        i = c.selectedLayers.length,
        s = TYPE[s];

    if(!c instanceof CompItem || !c) throw Error(ERRS.NO_COMP_FOUND);
    if(!i)                           throw Error(ERRS.NO_SEL_LAYERS_FOUND);

    
    //========================================
    if(s == "*") return c.selectedLayers;

    l = i;
    nomatch = 0;
    tmp = [];
    while(l--) 
    {
      if(c.sel(l).constructor.name == s){
        tmp.push(c.sel(l))
      }
      else nomatch++
    }
    //========================================

    if(f && nomatch) throw Error(ERRS.BAD_INSTANCE_FOUND);
    return tmp;
  },

  importOptions : function(cfg){
    opts = new ImportOptions();
    opts.file = cfg.file;
    opts.importAs = cfg.importAs;
  },

  import : function(fp){ 
    return app.project.importFile(app.importOptions({
        file: new File(fp),
        importAs: ImportAsType.FOOTAGE
    }));
  },

  drop : function(c, idx)
  {
    c = c || app.project.activeItem;

    c.layers.add(
      app.project.item(idx)
    );
  },

  importAndDrop : function(comp, fp){

    var fName = File(fp).name,
        footg = null;
    
    comp  = comp || app.project.activeItem;
  
    var inst = 0,
        i    = 0,
        len  = app.project.items.length,
        idx  = 0;
      
    for(;++i<len+1;) if(app.project.item(i).name == fName) (idx=0, inst++);
    
    if(idx) footg = app.project.item(idx);
    if(!inst)
    {
      footg = app.import({
          file: filePath,
          importAs: ImportAsType.FOOTAGE
      })
    }
  
    var layer = comp.layers.add(footg),
        len   = app.project.items.length;
  
    app.project.item(len).selected = false;
    return layer;
  },

  mostRecent : function(dp, typ){

    var fs = Folder(fp).getFiles(typ || "*"),
        re = fs[0],
        i  = -1;
    
    if(!re) return;
    for(;++i<fs.length;) if(fs[i].modified>re.modified) re = fs[i];
    
    return re;
  },

  getFileDlg : function(sugg, helptip, type){
    return (new File(sugg)).openDlg(helptip,type);
  },
  
  getExpression : function(ftName, type){
    
    return (function(){

        var m = thisLayer.marker;
        var t = time;
        var i = m.nearestKey(time).index;
    
        if(m.nearestKey(t).time>t){ i--; } //if: |  <>
        i || (i = 1);
    
        var obj = footage($footageName).sourceData;

        obj[i][type];    
    
    }).body()._replace({

      $footageName: ftName,
      $type : type    
    
    });
  },

  numObjName    : function(comp, typ){

    var comp = comp || app.project.activeItem,
        i    = 0,
        n    = 0,
        name,
        
    
    for(;++i<comp.layers.length+1;)
    {
      name = comp.layer(i).name;
      if(RegExp("{0} \d+".f(typ),"gi").test(name)) n++;
    }
  
    return n; 
  },

  numObjComment : function(c, t){ //comp, type

    var c = c || app.project.activeItem,
        i = 0,
        n = 0,
        len = c.layers.length+1;
    
    for(;++i<len;) if(eval(c.layer(i).comment) == t) n++;
  
    return n; 
  },

  makeAnimMarkers : function(animObj){
    
    var anim = "",
        dura = 0,
        coms = [],
        durs = [],
        i = 0;
    
    for(;++i<animObj.length;){
      anim = animObj[i]['Animation'];
      coms.push("Scene {0}: {1}".f(i, anim));
      
      dura += (animObj[i-1]["Duration"]) || 0;
      durs.push(dur);
    }
    return [durs, coms];
  },

  knob: function(name, comp){
    
    comp = comp || app.project.activeItem;
    objN = callee.name;
    name = name || objN + ": " + app.numObj(comp,objN);
    
    path = "D:/icons/img/sova.png";
    dVal = // default values: 
    {
      "Scale": [10, 10]
    }
    // import/drop/ set defaultValues:
    layer = app.importAndDrop(knobPath ,comp);
    for(v in dVal) layer.setProp(v, dVal[v])
    
    
    // Add slider controls, link to layer props:
    layer.addProp("Effects/Slider Control");
    
    layer.setProp("rotation:expr", (function(){
  
      comp("$compName").layer("$layerName").effect("Slider Control")("Slider");
  
    }).body()._replace({
      $compName: comp.name,
      $layerName: layer.name
    }))
    
    return layer;
  },

  findItemByName : function(namo){
  
    var length     = app.project.items.length+1;
    var i          = 0, tmp, idc = [];
    
    for(;++i<length;)
    {
      tmp = app.project.item(i).name;
      if(tmp == namo) idc.push(i);
    }
  
    return idc;
  },

  wrapUndo : function(fn, thisArg){
    app.beginUndoGroup(fn.name);
    fn.call(thisArg);
    app.endUndoGroup();
  },

  colorPicker : function(){ return $.colorPicker()},
  hexPicker   : function(){ return $.colorPicker()},
  rgbaPicker  : function(){
  
    var hx = app.hexPicker();
    return [
      hx >> 16,
      (hx & 0x00ff00) >> 8,
      hx & 0xff,
      255
    ] /= 255;
  
  }
})