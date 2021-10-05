/*******************************************************************************
		Name:           $table
		Desc:           Create a table/ draw a table.
        API :           format, render, write, show, getMaxColSizes, 
                        getMaxRowSizes
		
        Created:        2106 (YYMM)
		Modified:       2110 (YYMM)
*******************************************************************************/
//@include "$array.jsx"
//@include "$string.jsx"
//@include "$file.jsx"
/******************************************************************************/

(function(){
    
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ TABLE ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 

    function Table(table, margin, VD, HD)
    {
        this.VD     = VD || "▓";
        this.HD     = HD || "■";
        
        this.table  = table || [];
        this.ftable = []; // formatted table
        this.margin = margin || 5;
    
        this.maxColSizes = this.maxColumnSizes();
        this.maxRowSizes = this.getMaxRowSizes();
    }

    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //                                                                                 ■■■

    Table.prototype = 
    {
        // -------------------- Max Column Sizes -----------------------------
        //--------------------------------------------------------------------
        maxColumnSizes : function(){
    
            var tb = this.table,
                cs = [];
        
            JL = "\n";
        
            for(var c=0; c< tb[0].length; c++)
            {
                max = 0;
                for(var r=0; r< tb.length; r++)
                {   
                    !tb[r][c]? tb[r][c] = "":0;
                    /**************************/
                    curr = (tb[r][c].split(JL)).max("length");
                    /**************************/
                    if(curr > max) max = curr;
                }
                cs.push(max);
            }
            return cs;
        },

        // -------------------- Max Row Sizes -----------------------------
        //--------------------------------------------------------------------
        getMaxRowSizes : function(){
    
            var tb = this.table,
                rs = [];
        
            JL = "\n";
        
            for(var r=0; r< tb.length; r++)
            {
                max = 0;
                for(var c=0; c< tb[0].length; c++)
                {
                    /**************************/
                    curr = tb[r][c].split(JL).length;
                    /**************************/
                    if(curr > max) max = curr;
                }
                rs.push(max);
            }
            return rs;
        },

        // -------------------- Format --------------------------------------
        //--------------------------------------------------------------------
        format : function(){

            // change the contents of each block:
            // justify = center
        
            var tb = this.table,
                mg = this.margin,
                cs = this.maxColSizes,
                rs = this.maxRowSizes,
                r  = -1,
                c  = -1;
            
            while(++r<tb.length) 
            {
                rSize = rs[r];
        
                while(++c<tb[0].length)
                {
                bKids = tb[r][c].split("\n");
                cSize = cs[c];
        
                for(k=0; k<rSize;k++) // loop through internal row lines:
                {
                    bKid = bKids[k];
                    
                    if(!bKid) {
                        bKids[k] = (strr(" ") * (cSize + 2*mg)) + this.VD;
                        continue;
                    }
        
                    lPad = strr(" ") * Math.floor(((cSize - bKid.length)/2) + mg);
                    rPad = strr(" ") * Math.ceil (((cSize - bKid.length)/2) + mg);
            
                    bKids[k] = lPad + bKid + rPad + this.VD; // block = "   block    |"
                }
        
                tb[r][c] = bKids.join("\n");
                }
                c = -1; // reset column count for new row
                block = bKids = cSize = fblock = null; // cleanup
            }
            this.ftable = tb;
        },

        // -------------------- Render ---------------------------------------
        //--------------------------------------------------------------------
        render : function(offset){

            this.format(); // should be non-optional:
        
            var tb  = this.ftable,
                JL  = "\n",
                rs  = this.maxRowSizes,
                cs  = this.maxColSizes,
                of  = typeof offset == "undefined"?" ":(strr(" ") * offset),
                mg  = this.margin,
                rw  = cs.sum() + (2 * mg * cs.length) + cs.length;
                fs  = of + strr(this.HD) * (rw+1) + JL;
                
            for(var r=0; r< tb.length; r++)
            {
                rr = "";
                for(var k=0; k< rs[r]; k++) // go through each line of each row:
                {
                    rr += of + this.VD + tb[r][0].split(JL)[k];
                    for(var c=1; c< cs.length; c++) // go through each column:
                    {
                        rr += tb[r][c].split(JL)[k]; // running split (csize) times not efficient.
                    }   rr += JL;
                }
                fs += rr + of +(strr(this.HD) * (rw+1)) + "\n";
            }
            return fs;
        },

        // ------------------------- WRITE -------------------------------------
        // ---------------------------------------------------------------------
        write : function(removePrev ,pad, path){
    
            if(removePrev) Tabla.removeAll(path);
            path = path || Folder(File($.fileName).path).fsName;
            pad  = pad || 8;
            patt = Table.fNamePatt;
            txtf = Folder(path).getFiles("*.txt");
            num  = 1;
            
            len  = txtf.length;
            while(len--) if(!!(txtf[len].displayName.match(patt))) num++;
        
            var name = ("table [{0}x{1}]({2})").f(this.maxRowSizes.length, this.maxColSizes.length, num);
        
            return File(
            
                "{0}\\{1}.txt".f(path, name)
            
            ).$write(this.render(pad)).fsName;
        },
        
        // ----------------------------- SHOW ----------------------------
        show : function(){
            $.writeln(this.render())
        }
    }

    //                                                                            ■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
    //                                    CONSTANTS                                    ■■■
    
    Table.fNamePatt = /^(table)\s+\[\d+(x)\d+\]\(\d+\)/g;
    Table.removeAll = function(path)
    {
        fs = Folder(path || File($.fileName).path).getFiles("*.txt");
        i  = fs.length;
        while(i--) if(fs[i].displayName.match(Tabla.fNamePatt)) fs[i].remove();
    }
    Table.process = function(arr, sign)
    {
        fArr = [];
        sign = (sign || ",");
        behN = 35;
        
        for(i=0; i<arr.length; i++)
        {
            tmp = [];
            row = arr[i];
            spt = row.split(sign);
            for(k = 0; k<spt.length; k++)
            {
                tmp.push(spt[k]
                        .replace(/^\s*|\s*$/g, "")
                        .replace(RegExp("(.{"+behN+"})", "g"), "$1\n"));
            }
            fArr.push(tmp);
        }
        return fArr;
    }
    //                                                                            ■■■■■
    //■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
})();