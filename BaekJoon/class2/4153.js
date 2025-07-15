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
    let answer = '';

    for(let i=0; i<input.length; i++) {
        const numbers = input[i].map(str => Number(str));
        if(numbers.includes(0)) continue;
        numbers.sort((x, y) => y-x); // 내림차순
        const [longest, ...others] = numbers;
        const isJiggack = (longest * longest) === others[0] * others[0] + others[1] * others[1]
        answer += isJiggack ? 'right\n' : 'wrong\n'
    }

    return answer;
}
console.log(solution(input(3)));
