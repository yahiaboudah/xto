
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
        File_prototype:
        {
            DEPS: [],
            FUNS: [
                "-isOpen",
                "/open", "/write", "/read", "/close", "clear",
                "/seek", "create",
                "/execute",
                "lines",
                
                "listenForChange", "listenForChar", "listen",
    
                "getDuration", "getName", "getExtension", "getType"
            ]
        },

        Folder_prototype:
        {
            DEPS: [],
            FUNS : [
                "clearFolder", "/remove",
                "getFolders", "/getFiles"
            ]
        },

        Socket_prototype:
        {
            DEPS: [],
            FUNS: []
        }
    },

    AFFX:
    {
        $global:
        {
            DEPS: [],
            FUNS: [
                "MATCH_NAMES",
                "AECMD"
            ]
        },

        app:
        {
            DEPS: [],
            FUNS: [
                "wrapUndo",
                "doUndo",
            ]
        },

        CompItem_prototype:
        {
            DEPS: [],
            FUNS: [
                "setResolution", "getResolution",
                "getLayersWith", "numLayersWithName",
                "snap",
                "sel",
                "setTime",
                "workAreaDomain",

                "getAOV", "getProjectedZ", "getViewMatrix", "getZoom"
            ]
        },

        ItemCollection_prototype:
        {
            DEPS: [],
            FUNS: [
                "toArray", "grab"
            ]
        },

        LayerCollection_prototype:
        {
            DEPS: [],
            FUNS: [
                "toArray", "grab"
            ]
        },

        AVLayer_prototype:
        {
            DEPS: [],
            FUNS: [
                "addProp", "getProp", "removeProp"
            ]
        },

        ShapeLayer_prototype:
        {
            DEPS: [],
            FUNS: [
                "addProp", "getProp", "removeProp",
                "alpha",
                "area", "areas",
                "distances",
                "moveFirstVertex",
                "grabProps",
    
                "stroke", "fill"
            ]
        },

        PropertyGroup_prototype:
        {
            DEPS: [],
            FUNS: [
                "is", "isnt",
                "containingComp",
                "properties",
                "moveFirstVertex", "mFirstIndex",
                "$nearestKeyIndex"
            ]
        },

        TextLayer_prototype:
        {
            DEPS: [],
            FUNS: [
                "style"
            ]
        },
    },

    SCUI:
    {
        Window_prototype:
        {
            DEPS: [],
            FUNS: [
                "addAnimatedSequence"
            ]
        }
    },

    CSTR:
    {
        Table:
        {
            DEPS: [],
            FUNS: [            
                "-fNamePatt", "process", "removeAll",
                "prototype.toString",
                "prototype.getMaxRowSizes", "prototype.maxColumnSizes",
                "prototype.format", "prototype.render",
                "prototype.write", "prototype.show"
            ]
        },

        Path:
        {
            DEPS: [],
            FUNS: [
                "prototype.py",
                "prototype.resolve",
                "prototype.exists", "prototype.mkdir",
                "prototype.toString",
                "prototype[\'/\']"
            ]
        },

        Python:
        {
            DEPS: [],
            FUNS: [
                "installed",

                "-execStr",
                "-execPath",
                "-extensions",
                
                "prototype.execTime",
                "prototype.functions",
                
                "prototype.makeExec",
                "prototype.viewExec",
                "prototype.editExec",
                "prototype.runExec",
                
                "prototype.install",
                "prototype.repair",
                "prototype.uninstall",
                
                "prototype.call",
                "prototype.contact",
                "prototype.build",               
            ]
        },

        FileInterface:
        {
            DEPS: [],
            FUNS: [
                "prototype.validate",
                "prototype.make",
                "prototype.set",
                "prototype.get",
                "prototype.modify",
                "prototype.post",
                "prototype.crop" 
            ]
        },

        Logger:
        {
            DEPS: [],
            FUNS: [
                "prototype.debug",
                "prototype.info",
                "prototype.warning",
                "prototype.error",
                "prototype.critical"
            ]
        }
    },

    WRPR:
    {
        SShape:
        {
            DEPS: [],
            FUNS: []
        },

        TTextLayer:
        {
            DEPS: [],
            FUNS: []
        },

        WWindow:
        {
            DEPS: [],
            FUNS: []
        }
    }
}