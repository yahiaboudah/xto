//@include "src/xto.jsx"
xto.load("CSTR/Python");

py = new Python();
ff = new FileInterface({path: "C:/Users/bouda/desktop/test.json"})
// ff.modify("active_req/crop", 'new crop from test.jsx')

// cc = py.call("roadtoheaven", "function", ["params1", "params2"])

var ss = 55;
// $.writeln(JSON.stringify(ss, 4, 4))

// try
// {
//     var rs = py.call("C:/Users/bouda/Desktop/pytest.py", "cutedog", [20]);
//     alert("Python result: {0}".re(rs));
// }
// catch(e) {alert(e)}