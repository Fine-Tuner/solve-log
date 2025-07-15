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
    let answer = "";
    const [firstNumber, secondNumber] = input;

    // 최대공약수
    const getGCD = (bigger, smaller) => {
        while (smaller !== 0) {
            const reminder = bigger % smaller;
            bigger = smaller;
            smaller = reminder;
        }
        return bigger;
    }
    answer = getGCD(firstNumber, secondNumber) + '\n';

    // 최소공배수
    const LCM = firstNumber * secondNumber / getGCD(firstNumber, secondNumber)
    answer += LCM

    return answer;
}
console.log(solution(input(1)));
