//1) Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
// Examples:
// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]
// function pushToFront(arr, num){
//     // console.log("arr start",arr);
//     // console.log("num",num);
//     for(let i=arr.length;i>(-1);i--){
//         // position will be the index before the position shifting values right
//         arr[i] = arr[i-1];
//         // console.log("arr",arr);
//         // console.log("idx",i);
//     }
//     arr[0]=num;
//     console.log("end arr",arr);
//     return arr;
// }
// pushToFront([5,7,2,3], 8);
// pushToFront([99], 7);

// 2) Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
// Examples:
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

//this currently prints arrays in reverse order because of the reverse increment loop

// function removeFront(arr){
//     console.log("start",arr);
//     let newArr = [];
//     let start = arr[0];
//     let end = arr[arr.length-1];
//     for(let i=arr.length-1;i>0;i--){
//         newArr.push(arr[i]);
//         // console.log("inside of 4loop",newArr);
//         // return newArr;
//     }
//     console.log("end",newArr);
//     console.log(arr[0]);
//     return arr[0];
// }
// removeFront([0,5,10,15]);
// removeFront([4,5,7,9]);

// Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!
// Examples:
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

// function insertAt(arr,idx,val){
//     // console.log("start",arr);
//     // console.log("idx", idx);
//     // console.log("val", val);
//     let place = arr[idx];
//     let end = arr[arr.length-1];
//     for(let i = 0; i<idx; i++){
//         arr[idx]=val;
//     }
//     // console.log("place",place);
//     arr[idx+1]=place;
//     if(arr[arr.length-1]!=end){
//         arr[arr.length]=end
//     }
//     console.log("end value", end)
//     console.log("end",arr);
// }
// insertAt([100,200,5], 2, 311);
// insertAt([9,33,7], 1, 42);
// insertAt([100,24,5,5,3], 4, 88);
// insertAt([4,33,4,5,7,8,9,44], 6, 88);

// BONUS: Remove At
// Given an array and an index in the array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).
// Examples:
// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function
// function removeAt(arr,idx){
//         console.log("start",arr);
//         let newArr = [];
//         let start = arr[0];
//         let end = arr[arr.length-1];
//         // arr.pop(arr[idx]);
//         for(let i=0;i<arr.length;i++){
//             // iterate through and adds to new array
//             newArr.push(arr[i]);
//         }
//         console.log("end",newArr);
//         console.log("value of idx in arr",arr[idx]);
//         return arr[idx];
// }
// removeAt([1000,3,204,77], 1);
function removeAt(arr, idx){
        console.log("arr start",arr);
        console.log("idx",idx);
        console.log("idx in arr", arr[idx]);
        let start = arr[0];
        let end = arr[arr.length-1];
        for(let i=arr.length;i>0;i--){
            // position will be the index before the position shifting values right
            arr[i] = arr[i-1];
            console.log("arr",arr);
            console.log("idx",i);
        }
        console.log("end arr",arr);
        return arr;
    }
removeAt([8,20,55,44,98], 3);

// BONUS: Swap Pairs

// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

// Examples:

// insertAt([1,2,3,4]) => [2,1,4,3]
// insertAt(["Brendan",true,42]) => [true,"Brendan",42]

// BONUS: Remove Duplicates

// Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

// Examples:

// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]