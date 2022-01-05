// let array1=["tiger","lion","elephant","dog"];
// let array2=[1,2,3,4];

// function reverseArray(arr){
// var newArray=[];
// for(var i = arr.lenth - 1; i >= 0; i--){
    // newArray.push(arr[i]);
// }
// return newArray;
// }
// reverseArray(array1);
// reverseArray(array2);

// var arr = [1,2,3,4,5];{ 
// console.log(arr);
// }
// var new_arr = arr.reverse();{
// console.log(new_arr);
// }

// print array elements in even position
let y = [5,20,11,2,42,19]; 
function questioneven(array){
    let arr = [];
    for(let i=0; i<array,length;i++){
        if(i%2===0){
            arr.push(array[i]);
        }
    }
    return arr;
}