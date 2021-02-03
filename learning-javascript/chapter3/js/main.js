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

// 참조형과 원시형
let a = 1;
let b = a;
a = 2;
console.log(a, b);
console.log(a === 2);

function change(a){
    a = 5;
    console.log("함수 안의 a = " + a);
}
a = 3;
change(a);
console.log("함수 밖의 a = " + a);

// 참조타입
let o = {a:1};
let p = o;
o.a = 2;
console.log(p); // {a:2}
console.log(p === o);   // true
o = {a:2};
console.log(p); // {a:2}
console.log(p === o);   // false
// 변수와 객체는 일치하지않음. 참조 가리킥고 있을 뿐

function change_o(t){
    t.a = 999;
}
let t = {a:1};
change_o(t);
console.log(t); // 참조하면 함수 안/밖으로 객체 변경가능