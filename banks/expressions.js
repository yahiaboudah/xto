
var EXPRESSIONS_LIB =
{
    "SampleImage": function(layerArg, valArg){

        return new Expression(function(){
        
            var targetLayer = thisComp.layer("$layerName");
            var compDimens  = [thisComp.width, thisComp.height]; 
            
            255 * targetLayer.sampleImage(

                compDimens/2, //samplePoint
                compDimens,   //sampleRadius
                true, 
                time
            
            )[$RGBValue].toFixed();
        
        },{
            $layerName: layerArg.name,
            $RGBValue: valArg
        })
    }
}