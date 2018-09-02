// • add 
// • update 
// • delete 
// • reconfigure 
// • setPrototype 
// • preventExtensions

var obj = { a: 1, b: 2 };

Object.observe(obj, function (changes) { for (var change of changes) { console.log(change); } }, ["add", "update", "delete"]);

obj.c = 3; // { name: "c", object: obj, type: "add" } 

obj.a = 42; // { name: "a", object: obj, type: "update", oldValue: 1 } 

delete obj.b; // { name: "b", object: obj, type: "delete", oldValue: 2 }
