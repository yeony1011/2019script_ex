# CHAPTER7 스코프

## 정적 스코프와 동적 스코프

```text
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

```text
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

```text
let name = "Irena";
let age = 25;
function greet(){
    console.log('Hello, ${name}!');
}
function getBirthYear(){
    return new Date().getFullYear() - age;
}
```

```text
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

```text
console.log('before block')
{
    console.log('inside block');
    const x = 3;
    console.log(x);
};
console.log('outside block; x={$x}');   // ReferenceError
```

## 변수 숨기기

```text
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

```text
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

```text
    // 외부블록
    let x = {color:'blue'};
    let y = x;
    let z = 3;
    {
        // 내부블록
        let x = 5;
        console.log(x);     // 5
        console.log(y.color);    // blue
        y.color = "red";
        console.log(z); // 3
    }
    console.log(x.color);   // blue
    console.log(y.color);   // red
    console.log(z);   // 3
```

## 함수, 클로저, 정적 스코프

* 클로저 : 함수가 특정 스코프에 접근할 수 있도록 의도적으로 그 스코프에서 정의하는 경우, 스코프를 함수 주변으로 좁히는 것

  ```text
  let globalFunc;     // 정의되지 않은 전역 함수
  {
    let blockVar = 'a';    // 블록 스코프에 있는 변수
    globalFunc = function(){
        console.log(blockVar);
    }
  }
  globalFunc();
  ```

* 스코프 안에서 함수를 정의하면 해당 스코프는 더 오래 유지
* 접근할 수 없는 것에 접근할 수 있는 효과

  ```text
  let f;      // 정의되지 않은 함수
  {
    let o = {note : 'safe'};
    f = function(){
        return o;
    }
  }
  let oRef = f();
  oRef.note = "Not so safe afterr all!";
  ```

## 즉시 호출하는 함수 표현식

* IIFE : 함수를 선언학고 즉시 실행
* 내부에 있는 것들이 모두 자신만의 스코프를 가지지만, IIFE자체는 함수이므로 그 스코프 밖으로 무언가를 내보낼 수 있음
* ES6에서 블록 스코프 변수를 도입하면서 IIFE 사용이 줄었지만, 클로저를 만들고 클로저에서 무언가 반환할때 아직 유용하게 쓰임

  ```text
  (function(){
    // IIFE
  })();
  ```

  ```text
  const message = (function(){
    const secret = "I'm a secret!";
    return `The secret is ${secret.length} charracters long`;
  })();
  console.log(message);
  ```

## 함수 스코프와 호이스팅

