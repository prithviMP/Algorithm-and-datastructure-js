var moveZeroes = function(nums) {
    let p=0;
    for(let i=0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[p++]= nums[i]  
        }
    }
     while (p < nums.length){
        nums[p++]=0
        }
};