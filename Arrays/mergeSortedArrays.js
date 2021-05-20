function mergeArrays(array1, array2){

   
    finalArray=[];
    let p1 = array1.length -1;
    let p2 = array2.length -1;
    length = p1+p2;
    for( let p =array1.length+array2.length -1; p>0; p--){

        if(p2<0){
            break;
        }
        if(p1>=0 && array1[p1] > array2[p2]){
            array1[p]= array1[p1];
            console.log("p1",p1,p2,p)
            p1--;
        }else{
            array1[p]= array2[p2];
            console.log("p2",p2,p1,p)
            p2--;
        }
      
    }
    
    console.log("final array",array1)
    return array1;
   
}

mergeArrays([0,3,4,31],[4,6,30]);