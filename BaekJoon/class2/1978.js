const fs = require('fs');
const filePath = process.platform === "linux" ? "dev/stdin" : "BaekJoon/template/input.txt"
const input = (caseNumber) => {
    switch(caseNumber) {
        // 1줄
        case 1:
            return fs.readFileSync(filePath).toString().trim().split(' ').map(str => Number(str));
        // 2줄 이상
        case 2:
            return fs.readFileSync(filePath).toString().trim().split('\n');
        // 2줄 이상, 한 줄에 여러 값 -> return 2차원 배열
        case 3:
            return fs.readFileSync(filePath).toString().trim().split('\n').map(str => str.split(' '));
        default:
            throw new Error('case에 대응되지 않는 숫자');
    }
}

function solution(input) {
    let answer = 0;
    const numbers = input[1];

    const isPrime = (inputNumber) => {
        if(inputNumber < 2) return false;
        for(let startNumber=2; startNumber<=Math.sqrt(inputNumber); startNumber++) {
            if(inputNumber%startNumber === 0) return false;
        }
        return true;
    }

    answer = numbers.reduce((acc, currentNumber) => {
        if(isPrime(currentNumber)) {
            return acc + 1;
        }
        return acc;
    }, 0)

    return answer;
}
console.log(solution(input(3)));
