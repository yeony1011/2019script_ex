# CHAPTER7 스코프

## 정적 스코프와 동적 스코프
```
function f1(){
    console.log('one');
}
function f2(){
    console.log('two');
}
f2();
f1();
f2();
```
```
const x = 3;
function f(){
    console.log(x);
    console.log(y);
}
{
    //새 스코프
    const y = 5;
    f();
}
```

## 전역 스코프
```
let name = "Irena";
let age = 25;
function greet(){
    console.log('Hello, ${name}!');
}
function getBirthYear(){
    return new Date().getFullYear() - age;
}
```
```
let user = {
    name = "Irena",
    age = 25,
};
function greet(){
    console.log(`Hello, ${user.name}!`);
}
function getBirthYear(){
    return new Date().getFullYear() - user.age;
}
```

## 블록 스코프
```
console.log('before block')
{
    console.log('inside block');
    const x = 3;
    console.log(x);
};
console.log('outside block; x={$x}');   // ReferenceError
```

## 변수 숨기기
```
{
    // block 1
    const x = 'blue';
    console.log(x);     // blue
}
console.log(typeof x);  // undefined
{
    // block 2
    const x = 3;
    console.log(x);     // 3
}
```
```
// 중첩인경우

{
    // 외부블록
    let x = 'blue';
    console.log(x); // blue
    {
        // 내부블록
        let x = 3;
        console.log(x); // 3
    }
    console.log(x); // blue
}
console.log(typeof x); // undefined
```
```
    // 외부블록
    let x = {color:'blue'};
    let y = x;
    let z = 3;
    {
        // 내부블록
        let x = 5;
        console.log(x);     // 5
        console.log(y.colo);    // blue
        y.color = "red";
        console.log(z); // 3
    }
    console.log(x.color);   // blue
    console.log(y.color);   // red
    console.log(z);   // 3
```

## 함수, 클로저, 정적 스코프
- 클로저 : 함수가 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의하는 경우, 스코프를 함수 주변으로 좁히는 것
```
let globalFunc;     // 정의되지 않은 전역 함수
{
    let blockVar = 'a';     // 블록 스코프에 있는 변수
    globalFunc = function(){
        console.log(blockVar);
    }
}
globalFunc();
```
- 스코프 안에서 함수를 정의하면 해당 스코프는 더 오래 유지
- 접근할 수 없는 것에 접끈할 수 있는 효과
```

```