var a = 2;
(function IIFE() {
    var a = 3;
    console.log(a);
})();
console.log(a);

var obj = {
    a: 100
};
(function IIFE(def) {
    def(obj);
})(function def(o) {
    var a = 3;
    console.log(a);
    console.log(o.a);
});
