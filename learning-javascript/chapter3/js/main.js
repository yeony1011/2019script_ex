const multiline1 = "line1\
line2";
console.log(multiline1);

const multiline2 = "line1\n\
line2";
console.log(multiline2);

const multiline3 = `line1
line2`;
console.log(multiline3);

const multiline4 = `line1
    line2
    line3`;
console.log(multiline4);

const multiline5 = "line1\n" +
    "line2\n" +
    "line3";
console.log(multiline5);

let currentTemp = 19.5;
const multiline6 = 'Current temperature:\n' +
`\t${currentTemp}\u00b0C\n` +
"Don't worry... the heat is on!";
console.log(multiline6);

const result1 = 3 + '30';   // 3이 문자열로 변경. 결과 : 문자열 '330'
const result2 = 3 * '30';   // 30이 숫자로 변경. 결과 : 숫자 90
console.log("result1 : " + result1, typeof(result1) + " | " + "result2 : " + result2, typeof(result2));