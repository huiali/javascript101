function foo(str, a) {
    eval(str);
    console.log(a, b);
}
var b = 2;
foo("var b = 3;", 1); //1,3

/////////////////////////////////////////////////////////

function foo(str) {
    "use strict";
    eval(str);
    console.log(a); // ReferenceError: a is not defined
}
foo("var a = 2");


//Not recommended for use 