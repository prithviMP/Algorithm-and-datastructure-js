/* 
    We need to devide array based on pivot into three section
    1st section would be less than pivot
    2nd section is equal to pivot
    3rd and last section values greater than the pivot
*/

function moveBasedOnPivot(arr,p){
    let bs = 0;
    let be = arr.length -1;
    let i=0;

    while(i<=be){
        if(arr[i] < p){
            swap(i,bs);
            bs+=1
            i++;
        }else if(arr[i] > p){
            swap(i,be);
            be-=1;
        }else{
            i++;
        }
        
    }
    console.log(arr)
   
    function swap(a,b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b]= temp;
    }
}




moveBasedOnPivot([8,3,2,4,4,1,4,6,3,7,5],4)