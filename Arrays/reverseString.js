
//Brute force method
function reverseString(str){
    let str1 = ""
    for(let i= str.length-1; i >= 0 ;i--){
        str1 +=str[i];
    }
    console.log(str1)
}

reverseString("hello my name is raj")

//