'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {

    //we will loop through and keep track of both diagonals at the same time
    let leftDig = 0;
    let rightDig = 0;
    let leftStart = 0; //move left + 1 each new row 
    let rightStart = arr.length - 1; //move right - 1 each new row
    
    arr.forEach(function(ele,index){
        
        ele.forEach(function(ele,index){
            
            if(index == leftStart)leftDig += ele 
            if(index == rightStart) rightDig += ele
            
        })
        
        leftStart++;
        rightStart--;
        
    })
    
   return Math.abs(leftDig - rightDig) 

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

