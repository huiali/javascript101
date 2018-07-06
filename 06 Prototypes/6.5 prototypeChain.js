// [[Prototype]] 机制就是存在于对象中的一个内部链接，它会引用其他
// 对象。
// 通常来说，这个链接的作用是：如果在对象上没有找到需要的属性或者方法引用，引擎就
// 会继续在 [[Prototype]] 关联的对象上进行查找。同理，如果在后者中也没有找到需要的
// 引用就会继续查找它的 [[Prototype]] ，以此类推。这一系列对象的链接被称为“原型链”