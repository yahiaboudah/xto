//@include "src/xto.jsx"
xto.load("MATH/MATRIX");

var aa = new M([
    [1,2],
    [4,5]
]);

var bb = new M([
    [2,3,4],
    [2,3,4],
]);


aa.inverse().show()