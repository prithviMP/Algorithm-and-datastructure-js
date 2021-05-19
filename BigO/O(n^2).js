//function showing O(n^2) complexity
const boxesArray = [1,2,3,4,5];

function logAllPairsOfArray(boxes){
for(let i=0; i < boxes.length; i++){ //O(n)
    for(let j =0; j< boxes.length;j++){//O(n)
        console.log(boxes[i]+","+boxes[j])//O(n)
    }
  }
}

logAllPairsOfArray(boxesArray);

//BIGO O(n*n) => O(n^2)