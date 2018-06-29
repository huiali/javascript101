// function foo() {
//     function bar(a) {
//         i = 3;
//         console.log(a + i);
//     }
//     for (var i = 0; i < 10; i++) {
//         bar(i * 2);   //Infinite loop
//     }
// }
// foo();

var a = 2;
function foo() {
    var a = 3;
    console.log(a);
}
foo();
console.log(a);

var a = 2;

(function foo() {
    var a = 3;
    console.log(a);  //3
})();

console.log(a);  //2