// No matter the no of boxes we just print the first box in an array so the complexity is constant O(1)

const boxes = new Array(1000).fill("box");

function compressFirstBox(boxes){
    console.log(boxes[0]);// O(1)
}

// Below function is O(1+1) => O(2) but this we can round it to O(1)

function logFirstTwoBoxes(boxes){
    console.log(boxes[0]); //O(1)
    console.log(boxes[1]); //O(1)
}