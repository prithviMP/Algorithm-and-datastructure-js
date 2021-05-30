/*
    In this problem we will move all zeros present in given array in the begining of the array
    We will try to solve this in O(1) space compmelxity

    The technique we will be using would partitioning the array.


*/

function moveZero(arr){
    let boundary=0;
    for(let i=0; i <= arr.length-1; i++){
        if(arr[i]===0){
            arr[i] = arr[boundary];
            arr[boundary] = 0;
            boundary++
        }
    }
    console.log(arr);
    return arr;
}

moveZero([2,4,0,3,0,1,0])