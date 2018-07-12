//1. 函数是否在 new 中调用（ new 绑定）？如果是的话 this 绑定的是新创建的对象。
var bar = new foo()
//2. 函数是否通过 call 、 apply （显式绑定）或者硬绑定调用？如果是的话， this 绑定的是指定的对象。
var bar = foo.call(obj2)
//3. 函数是否在某个上下文对象中调用（隐式绑定）？如果是的话， this 绑定的是那个上下文对象。
var bar = obj1.foo()
//4. 如果都不是的话，使用默认绑定。如果在严格模式下，就绑定到 undefined ，否则绑定到全局对象。
var bar = foo()



//1. 由 new 调用？绑定到新创建的对象。
//2. 由 call 或者 apply （或者 bind ）调用？绑定到指定的对象。
//3. 由上下文对象调用？绑定到那个上下文对象。
//4. 默认：在严格模式下绑定到 undefined ，否则绑定到全局对象。