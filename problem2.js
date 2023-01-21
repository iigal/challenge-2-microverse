'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
// 7 1 3 4 1 7
function minimumDistances(a) {
    // Write your code here
    let smCounter = 0;
    let counter = 0;
    let flag = true;
for (let i = 0; i < a.length; i++) {
    
    counter = 0;
    for (let j = i + 1; j < a.length; j++) {
        counter++;
        
        if (a[i] == a[j]) {
            flag = false;
            if (smCounter != 0) {
                if (smCounter > counter) {
                    smCounter = counter;
                }
            } else {
                smCounter = counter;
            }
            break;
        }
    }
    
}
    if (flag) {
        return -1;
    }else{
    return smCounter;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = minimumDistances(a);

    ws.write(result + '\n');

    ws.end();
}
