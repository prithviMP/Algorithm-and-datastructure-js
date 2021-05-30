//Given an array double the even numbers in it
function cloneEvenNumbers(a){
    let end = a.length;
    let i = findLastNumber(a);
    while(i>=0){
        if(a[i]%2 ==0){
            end-=1
            a[end] = a[i];
            end-=1
            a[end] = a[i];
        }else{
            end-=1;
            a[end] = a[i];
        }
        i--;
    }
    console.log(a)
}

function findLastNumber(a){
    let i = a.length -1;
    while(i>0 && a[i] == -1){
        i--;

    }
    return i;
}

cloneEvenNumbers([2,4,1,0,3,-1,-1,-1]);