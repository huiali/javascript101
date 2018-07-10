
    try {
        throw undefined;
    } catch (a) {
        a = 2;
        console.log(a); //2
    }
console.log(a);//a is not defined