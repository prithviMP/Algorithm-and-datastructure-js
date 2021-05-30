//Here we will traverse the array from both side
// if the sum is less then target we will move the start pointer inwards
//else if the sum is greater we will move the end pointer inwards
//if we find the sum we will return the indices of the two numbers else will return null
function twoSum(array, target){
    let start=0;
    let end = array.length-1;
    let result = null;
    while(start<end){
    let sum = array[start]+ array[end];

        if(sum < target){
            start++;
         
        }else if(sum>target){
            end--;
        }else{
            result = [start,end]
            console.log(result)
            return result
        }
        
    }
    return result;
}

twoSum([1,2,4,5,6],8);