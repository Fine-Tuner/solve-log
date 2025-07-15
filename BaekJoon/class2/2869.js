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
    const [up, down, maxHeight] = input;

    /**
     * (정상 전까지 올라가야하는 높이 / 하루에 올라가는 높이 ) + 하루
     * 이런 로직이 나올 수 있는 배경
     * "정상에 올라갔을 때는 미끄러지지 않는다" 따라서 마지막 날을 제외하고
     * 올라가야 하는 높이는 maxHeight - up이다.
     * Math.ceil로 계산하는 이유는 딱 떨어지지 않았을 때 하루 더 소모해서 올라가야 되기 때문
     * ex) 하루 이동 2일, 마지막 전날 올라가야할 높이 7이라고 하면 3.5인데 3.5일은 없고 4일 올라가야함.
     */
    const requiredUpBeforeLastDay = maxHeight - up;
    const upPerDay = up - down;

    const daysBeforeFinal = Math.ceil(requiredUpBeforeLastDay / upPerDay);
    return daysBeforeFinal + 1;



    // 완전 탐색 O(n) -> 시간 초과
    // let remainHeight = maxHeight;
    // let answer = 1;

    // while(remainHeight > 0) {
    //     remainHeight -= up;
    //     if(remainHeight <= 0) return answer;
    //     remainHeight += down;
    //     answer++;
    // }
    // return answer;
}
console.log(solution(input(1)));
