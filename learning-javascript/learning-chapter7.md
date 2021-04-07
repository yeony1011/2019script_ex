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