/**
 * 
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
    P   A   H   N
    A P L S I I G
    Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"
    Write the code that will take a string and make this conversion given a number of rows:
    string convert(string s, int numRows);

    Example 1:
    Input: s = "PAYPALISHIRING", numRows = 3
    Output: "PAHNAPLSIIGYIR"

    Example 2:
    Input: s = "PAYPALISHIRING", numRows = 4
    Output: "PINALSIGYAHRPI"
    Explanation:
    P     I    N
    A   L S  I G
    Y A   H R
    P     I

    Example 3:
    Input: s = "A", numRows = 1
    Output: "A"
 */

function convert(s: string, numRows: number): string {
    if (numRows === 1 || numRows >= s.length) {
        return s; // 특별한 경우 처리
    }

    const rows = new Array(Math.min(numRows, s.length)).fill(""); // 각 행을 위한 배열
    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currentRow] += char; // 현재 행에 문자 추가
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown; // 방향 전환
        }
        currentRow += goingDown ? 1 : -1; // 다음 행으로 이동
    }

    return rows.join(""); // 모든 행을 합쳐서 결과 문자열 반환
};