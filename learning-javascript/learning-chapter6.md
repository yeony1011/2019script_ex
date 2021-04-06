# CHAPTER6 함수

## 함수선언과 함수실행(호출)
```
fuction sayHello(){     // 함수선언
    console.log('hello world!');
}
sayHello();             // 함수실행(호출)
```

## 반환값
- 함수 호출의 값
- return 키워드 : 함수를 즉시 종료하고 값을 반환
- return을 명시적으로 호출하지 않으면 반환값은 undefined
```
function getGreeting(){
    return "hello world!";
}
getGreeting();          // "hello world!"
```

## 호출과 참조
```
getGreeting();          // 호출
getGreeting;            // 참조
```
```
const f = getGreeting;  // 함수를 변수에 저장
f();                    // 할당된 함수를 할당된 변수로 호출 가능
```
```
const o = {};           // 객체 프로퍼티 선언
o.f = getGreeting;      // 객체 프로퍼티에 함수 할당
o.f();                  // 객체 프로퍼티로 함수 호출
```
```
const arr = [1,2,3];    // 배열 선언
arr[1] = getGreeting;   // 첫번째 배열에 함수 할당
arr[1]();               // 첫번째 배열로 함수 호출
```

## 함수와 매개변수
- 매개변수 : 함수를 호출하면서 정보를 전달
- 함수가 호출되기 전에는 존재하지 않음
- 일반적인 변수나 마찬가지
```
function avg(a, b){     // 매개변수 a, b
    return (a+b)/2;
}
avg(5, 10);             // 7.5
```
- 같은 이름의 변수가 함수 바깥에 존재해도 매개변수가 함수 안에서만 존재
```
const a=5, b=10;        // 서로 다른 변수
avg(a, b);
```
```
function f(x){
    console.log(`f 내부: x=${x}`);            // 3
    x=5;
    console.log(`f 내부: x=${x} (할당 후)`);    // 5
}
let x=3;
console.log(`f를 호출하기 전: x=${x}`);         // 3
f(x);
console.log(`f를 호출한 다음: x=${x}`);         // 3
```
- 함수 안에서 객체 자체를 변경하면, 함수 바깥에서도 변경이 반영됨
```
// 함수 안의 o와 함수 밖의 o는 다른 개체지만, 같은 객체를 가리킴
function f(o){
    o.message = `f 안에서 수정함 (이전 값: '${o.message}')`;    // f 안에서 수정함 (이전 값: '초기 값')
}
let o = {
    message = "초기 값"
};
console.log(`f를 호출하기 전: o.message="${o.message}"`);     // 초기 값
f(o);
console.log(`f를 호출한 다음: o.message="${o.message}"`);     // f를 호출한 다음: o.message="f 안에서 수정함 (이전 값: '초기 값')"
```
- 원시값은 불변으로 수정 불가하지만, 원시값을 담은 변수는 수정 가능  
ᄂ **반면 객체는 바뀔 수 있음**
```
function f(o){
    o.message = "f에서 수정함";
    o = {
        message: "새로운 객체!";
    };
    console.log(`f 내부: o.message="${o.message}" (할당 후)`);  // f 내부: o.message="새로운 객체!" (할당 후)
}
let o = {
    message = "초기 값"
};
console.log(`f를 호출하기 전: o.message="${o.message}"`);     // f를 호출하기 전: o.message="초기 값"
f(o);
console.log(`f를 호출한 다음: o.message="${o.message}"`);     // f를 호출한 다음: o.message="f에서 수정함"
```

### 매개변수
- 자바스크립트는 함수에서 정해진 매개변수 숫자와 관계없이 몇 개의 매개변수를 전달 가능(다른언어X)
- 정해진 매개변수에 값을 제공하지 않으면 암시적으로 undefined
```
function f(x){
    return `in f: x=${x}`;
}
f();    // in f: x=undefined
```

### 매개변수 해체
- 해체 할당과 마찬가지로 프로퍼티 이름은 반드시 유효한 식별자여야 하고, 들어오는 객체에 해당 프로퍼티가 없는 변수는 undefined 할당
```
function getSentence({subject, verb, object}){
    return `${subject} ${verb} ${object}`;
}
const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript",
};
getSentence(o);     // I love JavaScript
```
```
function getSentence([subject, verb, object]){
    return `${subject} ${verb} ${object}`;
}
const arr = ["I", "love", "JavaScript"];
getSentence(arr);     // I love JavaScript
```
- 확산연산자(...) 로 남는 매ㅐ변수 이용
- 확산연산자는 반드시 마지막 매개변수여야 함
```
function addPrefix(prefix, ...words){
    const prefixWords = [];
    for(let i=0; i<words.length; i++){
        prefixWords[i] = prefix + words[i];
    }
    return prefixWords;
}
addPrefix("con", "verse", "vex");   // ["converse", "convex"]
```

### 매개변수 기본값
- 일반적으로 매개변수에 값을 제공하지 않으면 undefined
- ES6에서 매개변수 기본값을 지정할 수 있음
```
function f(a, b, = "defualt", c = 3){
    return `${a} - ${b} - ${c}`;
}
f(5, 6, 7);     // 5 - 6 - 7
f(5, 6);        // 5 - 6 - 3
f(5);           // 5 - defualt - 3
f();            // undefined - defualt - 3
```

## 객체의 프로퍼티인 함수
```
const o = {
    name: 'Wallace',                        // 원시값 프로퍼티
    bark: function(){ return 'Woof!';},     // 함수 프로퍼티(메서드)
}
```
```
// ES6에서 간편하게 메서드 추가할 수 있는 문법
const o = {
    name: 'Wallace',                        // 원시값 프로퍼티
    bark(){ return 'Woof!'; },              // 함수 프로퍼티(메서드)
}
```

## this 키워드
```
const o = {
    name: 'Wallace',
    speak() {return `My name is ${this.name}!`;},
}
o.speak();  // My name is Wallace!
```
- this는 어떻게 선언했는지보다 어떻게 호출했는지가 중요
- this가 o에 묶인 이유는 speak가 o의 프로퍼티X, o에서 speak를 호출했기 때문
```
const speak = o.speak;
speak === o.speak;  //true;
speak();            // My name is undefined!
```

- 중첩된 this
```
const o = {
    name : 'Yeony',
    greetBackwards : function(){
        const self = this;
        function getReverseName(){
            let nameBackwards = '';
            for(let i = self.name.length-1; i>=0; i--){
                nameBackwards += self.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym, olleH`;
    },
};
o.greetBackwards();
```