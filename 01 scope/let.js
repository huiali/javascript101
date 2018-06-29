var a = true;

{
    var b = a * 2;
    console.log(b); //2
}

console.log(b); // 2



var c = true;

{
    let d = c * 2;
    console.log(d); //2
}

console.log(d); // ReferenceError
