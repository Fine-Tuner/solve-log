const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt"
const input = fs.readFileSync(filePath).toString().split(' ').map(str => Number(str));

function solution(input) {
    let answer = 0;
    answer = input[0] + input[1];
    
    return answer;
}

console.log(solution(input));