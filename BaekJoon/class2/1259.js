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
    for(let index=0; index<input.length; index++) {
        const strNumber = input[index][0];
        if(strNumber === '0') {
            continue;
        }

        const reversedStrNumber = strNumber.split('').reverse().join('');
        answer += `${strNumber === reversedStrNumber ? 'yes' : 'no'}\n`;
    }

    return answer;
}
console.log(solution(input(3)));
