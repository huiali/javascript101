//数组也是对象，所以虽然每个下标都是整数，你仍然可以给数组添加属性：
var myArray = ["foo", 42, "bar"];
myArray.baz = "baz";
myArray.length; // 3
myArray.baz; // "baz"

/////////////////////////////////////
//如果你试图向数组添加一个属性，但是属性名“看起来”像一个数字，那它会变成
//一个数值下标（因此会修改数组的内容而不是添加一个属性）：
var myArray = [ "foo", 42, "bar" ];
myArray["3"] = "baz";
myArray.length; // 4
myArray[3]; // "baz"