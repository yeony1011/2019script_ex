# CHAPTER4 제어문

## 제어문

### 조건문
    - if
    - if...else
    - switch

### 반복문
    - while
    - do...while
    - for

## 제어문 예외
    - break : 루프 중간에 빠져나감
    - continue : 루프에서 다음 단계로 바로 건너감
    - return : 제어문을 무시하고 현재 함수를 즉시 빠져나감
    - throw : 예외 핸들러에서 반드시 처리해야 할 예외를 일으킴. 예외 핸들러는 현재 제어문 바깥에 있어도 상관X

## 메타 문법
다른 문법을 설명하는 문법

- while 문
```
while(condition)
    statement;       // condition이 참 이면 statement 실행
```

- if...else 문
```
if(condition){
    statement1;
}else{
    statement2;
}
```

- do...while 문
```
do
    statement;
while(condition);
```

- for 문
```
for([initialzation]; [condition]; [final-expression]){
    statement;
}
```

## switch 문
```
switch(expression){
    case value1:
        // expression을 평가한 결과가 value1일때 실행
        [break;]
    case value2:
        // expression을 평가한 결과가 value2일때 실행
        [break;]
    ...
    case valueN:
        // expression을 평가한 결과가 valueN일때 실행
        [break;]
    default:
        // expression을 평가한 결과에 맞는 것이 없을때 실행
        [break;]
}
```
- return은 즉시 함수를 빠져나가므로, 함수안에서 break 대신 사용 가능
```
function adjustBet(totalBet, funds){
    switch(totalBet){
        case 7:
            return funds;
        case 13:
            return 0;
        default:
            return totalBet;
    }
}
```

## for...in 문
```
for(variable in object)
    statement
```
```
const player = {name: 'Thomas', rank: 'Midshipman', age: 25};
for(let prop in player){
    if(!player.hasOwnProperty(prop)) continue;
    console.log(prop + ': ' + player[prop]);
}
```

## for..of 문
- ES6 문법
- 배열은 물론 이터러블 객체에 모두 사용가능한 루프
- index를 알아야한다면, 일반적인 for문 사용
```
for(variable of object)
    statement
```
```
const hand = [randFace(), randFace(), randFace()];
for(let face of hand)
    console.log(`You rolled...${face}!`);
```

## 실습코드

* [크라운 앤 앵커 게임 결과화면 보기 - console창](https://yeony1011.github.io/2019script_ex/learning-javascript/chapter4/index.html)
* [해당 소스 보기](https://github.com/yeony1011/2019script_ex/blob/master/learning-javascript/chapter4/js/main.js)
