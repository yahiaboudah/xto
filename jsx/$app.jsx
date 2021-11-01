/*******************************************************************************
		Name:           $app
		Desc:           An extension to after effects app object.
		Path:           /$app.jsx
		Require:        fstring, itemcollection.grab, compitem.grab, array.forEvery
		Encoding:       ÛȚF8
		Kind:           Part of the Utils.
		API:            app
		Created:        2109 (YYMM)
		Modified:       2109 (YYMM)
*******************************************************************************/

//@include "$fstring.jsx"
//@include "$itemcollection.jsx"
//@include "$array.jsx"
//@include "$compitem.jsx"
Object.extend  = function(oo, newstuff){ for(k in newstuff) if(newstuff.hasOwnProperty(k)) oo[k] = newstuff[k]; }

//****************************************************************************/

Object.extend(app, {

  // [INFO]
    /**
   * {s}: type.
   * {f}: if another type is found in the selLayers, abort.
   * getSelected("text", false) returns all selected text layers.
   */
  // deprecated:: CompItem: var selText = comp.sel(TextLayer);
  // getSelected : function(type, except)
  // {

  //   const ERRS = {
  //     NO_COMP_FOUND       : "NO ACTIVE COMPOSITION",
  //     NO_SEL_LAYERS_FOUND : "NO SELECTED LAYERS FOUND",
  //     BAD_INSTANCE_FOUND  : "{0} LAYERS DON'T MATCH THE GIVEN TYPE {1}"
  //   },
    
  //   TYPE = {
  //     "*"     : "*",
  //     "text"  : TextLayer,
  //     "shape" : ShapeLayer,
  //   }

  //   var comp = app.project.activeItem,
  //       selc = comp.sel(),
  //       leng = selc.length,
  //       n    = leng,
  //       type = TYPE[s];

  //   if(!app.isComp(comp)) throw Error(ERRS.NO_COMP_FOUND);
  //   if(!leng)             throw Error(ERRS.NO_SEL_LAYERS_FOUND);

    
  //   //========================================
  //   if(type == '*') return selc;

  //   while(n--) if(selc[n].constructor != type) selc.splice(n, 1);
  //   //========================================

  //   // return:
  //   if(except && (leng != selc.length))
  //   {
  //     throw Error(ERRS.BAD_INSTANCE_FOUND.f((leng - selc.length), type))
  //   }
  //   return selc;
  // },

  // [HELPER]
  importOptions : function(cfg){
    return Object.extend(new ImportOptions(), cfg);
  },

  // [SETTER]
  import: function(cfg){
    var validateImportConfig = function()
    {

    }
    if(!validateImportConfig(cfg)) return;
    return app.project.importFile(app.importOptions(cfg))
  },

  // [SETTER]
  $import : function(fp){ 
    return app.project.importFile(app.importOptions({
        file    : new File(fp),
        importAs: ImportAsType.FOOTAGE
    }));
  },

  // [SETTER]: [MATCH MARKER KEY TO JSON TEXT VALUE EXPRESSION]
  matchMarkerToTextExpr : function(ftName, type){
    
    /**Expression to apply to a text layer source:
     * 
     * Example JSON:
     * 
     * [
     * {
     *    "animation": "move ball up"
     * },
     * {
     *    "animation": "move ball down" 
     * }
     * ]
     * 
     * On timeline:
     * 
     * (text = "move ball up")
     * |  <>    <>
     * (text = "move ball up")
     *  <>  |  <>
     * (text = "move ball down")
     * <>   <>   |
     */

    return (function(){

        var m = thisLayer.marker;
        var t = time;
        var i = m.nearestKey(time).index;
    
        if(m.nearestKey(t).time>t){ i--; } //if: |  <>
        i || (i = 1);
    
        var obj = footage($footageName).sourceData;

        obj[i][$type];
        
    }).body({
      $footageName: ftName,
      $type : type    
    });
  },

  // [SETTER]
  makeAnimMarkers : function(animObj)
  /**
   * Convert this: 
   * [
    {
        animation: "move it up",
        duration : 2
    },
    {
        animation : "move it down",
        duration  : 3
    }
    ]
    
    to this:
    {
      "move it up": 2,
      "move it down": 3
    }

   */
  {
    
    var oo = {}, i =0;

    oo[animObj[i]["animation"]] = 0;
    
    for(;++i<animObj.length;)oo[animObj[i]["animation"]] = animObj[i-1]["duration"]; 

    return oo;
  },

  // [SETTER]
  knob: function(name, comp){
    
    comp = comp || app.project.activeItem;
    name = name || "{0} #{1}".f(callee.name, comp.numObjName(callee.name));
    
    path = "D:/icons/img/sova.png";

    // import/drop/ set defaultValues:
    layer = app.importAndDrop(knobPath , comp);
    layer.transform.scale.setValue([10,10]);
    
    
    // Add slider controls, link to layer props:
    layer.addProp("Effects/Slider Control:rotationSlider"); 
    layer.getProp("Transform/Rotation").expression = (function()
    {
      comp("$compName").layer("$layerName").effect("rotationSlider")("Slider");
    
    }).body({
      $compName  : comp.name,
      $layerName : layer.name
    })

    return layer;
  }
})