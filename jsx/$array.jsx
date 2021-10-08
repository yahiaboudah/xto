/*******************************************************************************
		Name:           $array
		Desc:           Array extensions.
		Path:           /utils/$array.jsx
		Created:        2106 (YYMM)
		Modified:       2110 (YYMM)
*******************************************************************************/

(function ArrayUtils(){
    
    if(!String.prototype.f)
    {
        // format: "my name is {0} and my fname is {1}".f(name, fname)
        String.prototype.f = function(){
            
            var fstr = this,
                args = Array.prototype.slice.call(arguments),
                i    = -1;

            while(++i <args.length)
            {
                fstr = fstr.replace( RegExp("\\{" + i + "\\}", "gi"),
                    args[i]
                );
            }

            return fstr;
        }
    }

    if(!Math.sum)
    {
        Math.sum = function()
        {
            var args = Array.prototype.slice.call(arguments);
            var s = 0;
            
            for(var i=0; i<args.length; i++)
            {
                arg = args[i];
                if(isNaN(parseInt(arg))) continue;
                s += parseInt(arg);
            }

            return s;      
        }
    }
    
    Object.prototype.is = function()
    {
        var _args = Array.prototype.slice.call(arguments), i = -1;
        var what = this.constructor;

        while(++i<_args.length) if(what == _args[i]) return true;
    
        return false;
    }
    
    Function.prototype.body = function(repConfig)
	{
		if(!String.prototype._replace)
		{
			String.prototype._replace = function(repCfg){
		
				var str = this;
				for(x in repCfg) if(repCfg.hasOwnProperty(x))
				{
					str = str.split(x).join(repCfg[x])
				}
				return str;
			}
		}
		
		return this.toString()
			   .replace(/^[^{]*\{[\s]*/,"    ")
			   .replace(/\s*\}[^}]*$/,"")._replace(repConfig || {});
	}

})();

(function ArrayPolyfills()
{
    Array.range = function(l){
        
        var arr = [], i = -1;

        while(++i<l) arr[i] = (i+1);
        return arr;
    }
    Array.prototype.forEach = function(callback, thisArg) {

        if (this == null) throw new TypeError('Array.prototype.forEach called on null or undefined');
        if (typeof callback !== "function") throw new TypeError(callback + ' is not a function');


        var T, k,
            O = Object(this);
            len = O.length >>> 0;
        if (arguments.length > 1) T = thisArg;
        k = 0;
        
        while (k < len) {

                var kValue;
                if (k in O) {
                    kValue = O[k];
                    callback.call(T, kValue, k, O);
                }
                k++;
        }


        return this;
    }
    Array.prototype.indexOf = function(el, fromIdx) {

        "use strict";
        if (this == null) throw new TypeError('"this" is null or not defined');


        var k,
            o = Object(this);
            len = o.length >>> 0,
            n = fromIdx | 0;


        if (len === 0) return -1;
        if (n >= len) return -1;

        k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        for (; k < len; k++) {
                if (k in o && o[k] === el) return k;
        }


        return -1;
    }
    Array.prototype.remove = function(k, all) {

        if(typeof all != "boolean") all = false;


        var i   = -1,
            len = this.length;
        
        while (++i < len) 
        {
            if(this[i] != k) continue;
            
            this.splice(i, 1);
            if(!all) break;    
            len--;
        }
        return this;
    }
    Array.prototype.includes = function(k) {
        return this.indexOf(k) > -1;
    }
    Array.prototype.rotate = function(d, i){
        
        a = this; // eval("["+String(this)+"]");
        
        switch (d) 
        {
            case "l": while(i--)    a.push(a.shift())
            case "r": while(i-->-1) a.unshift(a.pop())
        }

        return arr;
    }
    Array.prototype.reduce = function(cb) {
        
        'use strict';
        if (this == null)             throw TypeError('Reduce called on null or undefined');
        if (typeof cb !== 'function') throw TypeError(cb + ' is not a function');
        var t = Object(this), len = t.length >>> 0, k = 0, value;
        
        if(arguments.length == 2) 
        {
        value = arguments[1];
        } 
        else 
        {
        while (k < len && !(k in t)) k++; 
        if (k >= len) throw TypeError('Reduce of empty array with no initial value');
        value = t[k++];
        }

        for (; k < len; k++) 
        {
        if (k in t) value = cb(value, t[k], k, t);
        }
        
        return value;
    }
    Array.prototype.map = function(cb) {

        if (this == null) throw TypeError('Map array is null or not defined');
    
        var T,
            A,
            k,
            O   = Object(this),
            len = O.length >>> 0;
    
        if (typeof cb !== 'function') throw TypeError(cb + ' is not a function');
        if (arguments.length > 1) T = arguments[1];
        A = new Array(len);
        k = -1;
    
        while (++k < len) {

        var kValue, mappedValue;
    
        if (k in O) 
        {
            kValue = O[k];
            mappedValue = cb.call(T, kValue, k, O);
            A[k] = mappedValue;
        }
        }
        
        return A;
    }
    Array.prototype.forEvery = function(cb)
    {
        var a = this;
        for(var i=0; i<a.length; i++)
        {
            if(cb.call(null, a[i], i) == false) return false;
        }
        return true;
    }
    Array.prototype.filter = Array.prototype.select = function(func, thiss)
    {
        if(this.is(null)) throw new TypeError();

        var obj = Object(this),
            len = obj.length >>> 0;
        
        if(func.isnt(Function)) throw new TypeError();

        var arr = [], i = -1;

        while(++i < len) if(i in obj)
        {
            if(func.call(thiss, t[i], i, obj)) res.push(t[i]); 
        }

        return arr;
    }

    /**
     * 
     * Max & Min & some wrapped Math functions:
     * 
     */

    Array.prototype.max = function(prop)
    {
        if(!prop) return Math.max.apply(null, this);
        
        a = eval(this.toSource());
        k = a.length;
        while(k--) a[k] = a[k][prop];
        
        return Math.max.apply(null, a)
    }
    Array.prototype.min = function(prop)
    {
        if(!prop) return Math.min.apply(null, this);
        
        a = eval(this.toSource());
        k = a.length;
        while(k--) a[k] = a[k][prop];
        
        return Math.min.apply(null, a)
    }
    Array.prototype.sortedIndices = function(){
        var a = this;
        return Array.range(a.length).sort(function(x,y){
            return a[x-1] > a[y-1];
        })
    }
    Array.prototype.math2D = function(type, xory)
    {
        return Math[type].apply(null, this.map(function(x){
            return x[xory]
        }))
    }
    Array.prototype.sum = function()
    {
        return Math.sum.apply(null, this);
    }

    /**
     * 
     * 2D indcies:
     * 
     */
    Array.oneDimIndexFunc = function(maxormin, HorV)
    {
        return function()
        {
            return this.indexOf(this.math2D(mm, hv));
        }.body({
            mm: maxormin,
            hv: HorV
        })
    }
    Array.prototype.upIndex     =  Function(Array.oneDimIndexFunc("max", 1));
    Array.prototype.bottomIndex =  Function(Array.oneDimIndexFunc("min", 1));
    Array.prototype.leftIndex   =  Function(Array.oneDimIndexFunc("min", 0));
    Array.prototype.rightIndex  =  Function(Array.oneDimIndexFunc("max", 0));
    /**
     * 
     */

    
    /**
     *
     *  
     */
    Array.twoDimIndexFunc = function(ytype, xtype){
        
        return (function(){

            var a = this;
            var o = {
                x: a.math2D(xtype, 0),
                y: a.math2D(ytype, 1)
            }
            
            var m = a.map(function(v){
                return Math.sqrt(Math.pow( v[0] - o.x,2) + Math.pow(v[1] - o.y,2));
            }).min();
    
            return a.indexOf(m);    
        }).body({
            xtype: xtype,
            ytype: ytype,
        })
    }

    Array.prototype.upperLeftIndex   = Function(Array.twoDimIndexFunc("min", "min"));
    Array.prototype.upperRightIndex  = Function(Array.twoDimIndexFunc("min", "max"));
    Array.prototype.bottomRightIndex = Function(Array.twoDimIndexFunc("max", "max"));
    Array.prototype.bottomLeftIndex  = Function(Array.twoDimIndexFunc("max", "min"));
    
    /*
    *
    *
    */

    /**
     * Vector operations/ Array operations:
     * 
     * 
     */
    // Addition:
    Array.prototype["+"] = function(v)
    {
        if(!v.is(Array)) return;

        var i = this.length,
            j = v.length,
            r = this.concat(v.slice(i));
        
        if(i > j) i = j;
        while( i-- )
        {
            r[i] += (v[i]);
        }
        
        return r;
    }

    // Subtract
    Array.prototype["-"] = function(v)
    {
        var sign = "-";

        if(!v.is(Array)) return;

        var i = this.length,
            j = v.length,
            r = this.concat(v.slice(i));
        
        if(i > j) i = j;
        while( i-- )
        {
            r[i] -= (v[i]);
        }
        
        return r;
    } 

    // Component-wise multiplication:
    Array.prototype["^"] = function dotMultiply(v) // Hadmard product
    {
        if(!v.is(Array)) return;

        var i = this.length,
            j = v.length,
            r = this.concat(v.slice(i));
        
        if(i > j) i = j;
        while( i-- )
        {
            r[i] *= (v[i]);
        }
        
        return r;
    } 

    // Scalar multiplication:
    Array.prototype['*'] = function(/*operand*/k)
    {
        if(!k.is(Number)) return;
        
        var i = this.length,
            r = this.concat();
        
        while( i-- ) r[i] *= k;
        return r;
    }
    
    // Dividing operation:
    Array.prototype['/'] = function(/*operand*/k, /*reversed*/rev)
    {
        return (k.is(Number) && !rev)?
            this * (1/k):
            undefined; 
    }
    /**
     * 
     * 
     * 
     */

})();