/* 
    Here we will move all the zeros to the end of given array but we shall use O(1) space
    complexity 

    Technique used would be partitioning of arrays
*/

function moveZeros(arr){
    boundary = arr.length -1;
    for(let i= arr.length-1; i>=0; i--){
        if(arr[i]==0){
            arr[i] = arr[boundary];
            arr[boundary]=0;
            boundary--;
        }
    }
    console.log(arr);
    return arr;
}

moveZeros([0,4,0,1,2,0,3])