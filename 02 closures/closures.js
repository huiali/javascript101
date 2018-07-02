function foo1() {
    var a = 2; 
    function bar() {
        console.log( a );
    } 
    return bar;
} 
var baz = foo1(); 
baz();

/////////////////////////////////////////////////////////

function foo2() {
    var a = 2; 
    function baz() {
        console.log( a );
    } 
    bar( baz ); 
} 
function bar(fn) {
    fn();
}
foo2();

/////////////////////////////////////////////////////////

var fn; 
function foo3() {
    var a = 2;
    function baz() {
        console.log( a );
    } 
    fn = baz;
} 
function bar2() {
    fn();
} 
foo3(); 
bar2();
