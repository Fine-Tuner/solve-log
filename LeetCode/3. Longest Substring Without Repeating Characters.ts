/**
 * Given a string s, find the length of the longest substring without repeating characters.

    Example 1:

    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    Example 2:

    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.
    Example 3:

    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.
    Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

    Constraints:
    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

    Topics:
    Hash Map, String, Sliding Window
 */

function lengthOfLongestSubstring(s: string): number {
    let startIndex = 0;
    const charIndexMap: {[key: string]: number} = {};
    let maxLength = 0;

    for(let endIndex = 0; endIndex<s.length; endIndex++) {
        const curChar = s[endIndex];

        // 현재 window 내부에 중복된 char가 있는지 찾는다.
        if(curChar in charIndexMap && charIndexMap[curChar] >= startIndex) {
            // 중복된 char가 있다면 마지막에 출현한 같은 char의 index에 1을 더해서 startIndex를 설정해줘서
            // 윈도우 범위를 업데이트 한다.
            startIndex = charIndexMap[curChar] + 1;
        }

        // 현재 char의 Index값을 Map에 설정한다.
        charIndexMap[curChar] = endIndex;

        // 최대 길이를 구하기 위해 인덱스 차이에 1을 더해서 현재 윈도우 길이를 구한다.
        maxLength = Math.max(maxLength, endIndex - startIndex + 1);
    }

    return maxLength;
};