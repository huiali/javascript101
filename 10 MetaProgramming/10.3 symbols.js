// Symbol.iterator
var arr = [4, 5, 6, 7, 8, 9];
for (var v of arr) {
    console.log(v);
}
// 4 5 6 7 8 9
// 定义一个只在奇数索引值产生值的迭代器
arr[Symbol.iterator] = function* () {
    var idx = 1;
    do {
        yield this[idx];
    } while ((idx += 2) < this.length);
};
for (var v of arr) {
    console.log(v);
}
// 5 7 9