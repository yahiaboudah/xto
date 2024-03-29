
    EXTO =
    {
        MATH:
        {
            MATH:
            {
                PRFX: "$.global.Math.",
                DEPS:[],
                FUNS:[
                    "degreesToRadians",
                    "radiansToDegrees",
                    "mult"
                ]
            },

            COMPLEX:
            {
                PRFX: "$.global.",
                DEPS: [],
                FUNS:[
                    "Complex"
                ]
            },

            MATRIX:
            {
                PRFX: "$.global.",
                DEPS:[],
                FUNS:[
                    "Matrix"
                ]
            },

            BEZIER:
            {
                PRFX:"$.global.", 
                DEPS:[],
                FUNS:[
                    "Bezier"
                ]
            }
        },

        $$$$:
        {
            DATA:
            {
                PRFX: "$.",
                DEPS: [],
                FUNS: 
                [
                    "log",
                    "ser",
                    "deser",
                    "http"
                ]
            },

            DBUG:
            {
                PRFX: "$.",
                DEPS: [],
                FUNS: [
                    "inside",
                    "scan",
                    "inspect",
                ]
            },

            MISC:
            {
                PRFX: "$.",
                DEPS: [],
                FUNS: [
                    "$colorPicker",
                    "$sleep",
                    "getClipbaord", "setClipboard", "clearClipboard",
                    "cmd", "wget"
                ]
            }
        },

        PRIM:
        {
            String:
            {
                PRFX: "String.prototype.",
                DEPS: [],
                FUNS: [
                    "inspectFF", "checkFF",
                    "startsWith", "padding",
                    "replaceSeq", "fstr", "_replace",
                    "title", "trim", "pushAt",
                    "*"
                ]
            },

            Array:
            {
                PRFX: "Array.prototype.",
                DEPS: [],
                FUNS: 
                [
                    "range",
                    "oneDimIndexFunc", "twoDimIndexFunc",
                    
                    "forEach", "forEvery",
                    "indexOf", "remove", "includes", 
                    "rotate", 
                    "reduce", "map", 
                    "fliter", "select",
        
                    "max", "min", "sortedIndices", "math2D", "sum",
        
                    "upIndex", "bottomIndex", "leftIndex", "rightIndex",
                    "upperLeftIndex", "upperRightIndex", "bottomRightIndex", "bottomLeftIndex",
        
                    "+", "-", "*", "/", "^"
                ]
            },

            Function:
            {
                PRFX: "Function.prototype.",
                DEPS: [],
                FUNS: 
                [
                    "bind",
                    "body",
                    "time",
                    "getArgs",
                    "params",
                    "check"
                ]
            },

            Number:
            {
                PRFX: "Number.prototype.",
                DEPS: [],
                FUNS: [
                    "isOdd", "isEven",
                    "floor", "ceiling"
                ]
            },

            Object:
            {
                PRFX: "Object.",
                DEPS: [],
                FUNS: [
                    "keys", "newKeys", "extend", "size",
                    "getValue", "getPrototypeOf", "has", "inspect", "type", //inspect
                    "print", "write", //show

                    "dcKeys", "validate", "validateKeys", // validate
                    
                    "modify", //modify
                    
                    "create","newObject", "fromEntries", // create
                ]
            }
        },

        DATA:
        {
            File:
            {
                PRFX: "File.prototype.",
                DEPS: [],
                FUNS: [
                    //basic operations:
                    "isOpen", "$open", "$write", "$read", "$close", "clear",
                    "$seek", "create", "$execute",
                    
                    //listeners
                    "listenForChange", "listenForChar", "listen",
        
                    //getters:
                    "getLines",
                    "getDuration", "getName", "getExtension", "getType"
                ]
            },

            Folder:
            {
                PRFX: "Folder.prototype.",
                DEPS: [],
                FUNS : 
                [
                    //clear
                    "clearFolder", "$remove",
                    //getters
                    "getFolders", "$getFiles"
                ]
            },

            Socket_prototype:
            {
                DEPS: [],
                FUNS: [
                    //wow such empty!
                ]
            }
        },

        AFFX:
        {
            $global:
            {
                PRFX: "$.global.",
                DEPS: [],
                FUNS: [
                    "MATCH_NAMES",
                    "AECMD"
                ]
            },

            app:
            {
                PRFX: "$.global.",
                DEPS: [],
                FUNS: [
                    "getSpecifier",
                    "makeAnimMarkers",
                    "wrapUndo",
                    "doUndo",
                ]
            },

            CompItem:
            {
                PRFX: "CompItem.prototype.",
                DEPS: [],
                FUNS: 
                [   //droppers
                    "drop", "importAndDrop",

                    //setters:
                    "setTime", "setResolution",

                    //getters
                    "snap", "sel", "getLayersWith", "getResolution", "workAreaDomain",
                    "getAOV", "getProjectedZ", "getViewMatrix", "getZoom",
                    "getActiveAOV", "getActiveProjectedZ", "getActiveViewMatrix",
                ]
            },

            Camera:
            {
                PRFX: "Camera.prototype.",
                DEPS: [],
                FUNS: [
                    "getAOV", "getWorldMatrix", "getLocalMatrix",
                    "getProjectedZ", "getViewMatrix"
                ]
            },

            ItemCollection:
            {
                PRFX: "ItemCollection.prototype.",
                DEPS: [],
                FUNS: [
                    "toArray", "grab"
                ]
            },

            LayerCollection:
            {
                PRFX: "LayerCollection.prototype.",
                DEPS: [],
                FUNS: 
                [
                    "toArray", "grab",

                    "$add", 
                    "axis", "dynamicLine", "point", "code", "plot" 
                ]
            },

            AVLayer:
            {
                PRFX: "AVLayer.prototype.",
                DEPS: [],
                FUNS: [
                    "clone", "transformIt", "getType", 
                    "getMatrixOf", "getLocalMatrix", "getWorldMatrix", "getLookAt", "getModalMatrix", "getModalViewProjection", 
                    "toComp", "toWorld",
                    "addProp", "getProp", "removeProp"
                ]
            },

            ShapeLayer:
            {
                PRFX: "ShapeLayer.prototype.",
                DEPS: [],
                FUNS: 
                [
                    //BASIC: 
                    "clone", "transformIt", "getType", 
                    "getMatrixOf", "getLocalMatrix", "getWorldMatrix", "getLookAt", "getModalMatrix", "getModalViewProjection", 
                    "toComp", "toWorld",

                    "addProp", "getProp", "removeProp",
                    "alpha",
                    "area", "areas",
                    "distances",
                    "moveFirstVertex",
                    "grabProps",
        
                    "stroke", "fill"
                ]
            },

            PropertyGroup:
            {
                PRFX: "PropertyGroup.prototype.",
                DEPS: [],
                FUNS: [
                    "is", "isnt",
                    "containingComp",
                    "properties",
                    "moveFirstVertex", "mFirstIndex",
                    "$nearestKeyIndex",

                    //TextPropertyGroup:
                    "addTextFill", "addExpressionSelector",

                    "getParent", "copyPropertiesTo"
                ]
            },

            TextLayer:
            {
                PRFX: "TextLayer.prototype.",
                DEPS: [],
                FUNS: 
                [
                    "cofig",
                    "animator",
                    "fromJSONAndMarkersOf"
                ]
            },
        },

        SCUI:
        {
            Window:
            {
                PRFX: "Window.prototype.",
                DEPS: [],
                FUNS: 
                [
                    "addAnimatedSequence",
                    "playAudio"
                ]
            },

            DropDownList: 
            {
                PRFX: "DropDownList.prototype.",
                DEPS: [],
                FUNS: [
                    "makeGroupVisible"
                ]
            },

            XYLayout:
            {
                PRFX: "$.global.",
                DEPS: [],
                FUNS: [
                    "CustomLayout",
                    "XYLayout"
                ]
            }
        },

        CSTR:
        {
            Table:
            {
                PRFX: "$.global.",
                DEPS: [],
                FUNS: [
                    "Table"
                ],
                INFO: {
                    FUNS:
                    [           
                        "Table.fNamePatt", "Table.process", "Table.removeAll",
                        "toString",
                        "getMaxRowSizes", "maxColumnSizes",
                        "format", "render",
                        "write", "show"
                    ] 
                }
            },

            Path:
            {
                PRFX: "$.global.",
                DEPS: [],
                FUNS: [
                    "Path"
                ]
            },

            Python:
            {
                PRFX: "$.global.",
                DEPS: [],
                FUNS: [
                    "Python"               
                ],
                INFO: {
                    FUNS: [
                    
                    "Python.installed",

                    "Python.execStr",
                    "Python.execPath",
                    "Python.extensions",
                    
                    "Python.prototype.execTime",
                    "Python.prototype.functions",
                    
                    "Python.prototype.makeExec",
                    "Python.prototype.viewExec",
                    "Python.prototype.editExec",
                    "Python.prototype.runExec",
                    
                    "Python.prototype.install",
                    "Python.prototype.repair",
                    "Python.prototype.uninstall",
                    
                    "Python.prototype.call",
                    "Python.prototype.contact",
                    "Python.prototype.build",
                    ]
                }
            },

            FileInterface:
            {
                PRFX: "FileInterface.prototype.",
                DEPS: [],
                FUNS: 
                [
                    "validate",
                    "make", "set", "get", "modify",
                    "post", "crop" 
                ]
            },

            Logger:
            {
                PRFX: "$.global.",
                DEPS: [],
                FUNS: 
                [
                    "Logger"
                ]
            },

            Xester:
            {
                PRFX: "$.global.",
                DEPS: [],
                FUNS: [
                    "Xester"
                ]
            }
        },

        WRPR:
        {
            SShape:
            {
                PRFX: "$.global.",
                DEPS: [],
                FUNS: [
                    "SShape"
                ]
            },

            WWindow:
            {
                PRFX: "$.global.",
                DEPS: [],
                FUNS: [
                    "WWindow"
                ]
            }
        }
    }
