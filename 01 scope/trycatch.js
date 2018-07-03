try {
    undefined();
} catch (err) {
    console.log(err);//undefined is not a function
}
console.log(err); // ReferenceError: err not found


///////////////////////////////////////////////////

try { throw 2; } catch (a) {
    console.log(a); // 2
}
console.log(a); //a is not defined


///////////////////////////////////////////////////

{
    try {
        throw undefined;
    } catch (a) {
        a = 2;
        console.log(a); //2
    }
}
console.log(a);//a is not defined