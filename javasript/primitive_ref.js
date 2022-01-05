var a=10;
b=a;
console.log(b)
b=20;
console.log("b value changed",b,a)
arr = [1,2,3,4,5]
arr2 = arr;
console.log(arr2)
arr2.push(6)
console.log("arr value change",arr2)
console.log("arr value change in first",arr)

obj={name:'a',age:30}
obj1 = obj
console.log(obj1)
obj1.name = 'b';
console.log("obj value change",obj1)
console.log("obj value change",obj)