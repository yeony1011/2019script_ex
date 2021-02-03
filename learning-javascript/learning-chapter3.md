# CHAPTER3 리터럴과 변수, 상수, 데이터 타입

## 데이터타입

### 변수
이름에 붙는 값
```
let targetTempC;        // 초기값 할당하지 않은 변수 선언으로 undefined 할당됨
let currentTempC = 22;  // 변수 선언 + 초기값 할당
currentTempC = 22.5;    // 변수값 변경
```

### 상수
값을 할당받을 수 있지만, 한 번 할당한 값을 바꿀 수 없음
```
const = ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;
```

- 기존 : var  
ᄂ 재선언, 재할당, 초기값 할당 안해도 가능
- ES6 : let, const  
ᄂ let : 재선언 불가, 재할당 가능, 초기값 할당 안해도 가능  
ᄂ const : 재선언, 재할당 불가, 초기값 할당 해야 됨
- 엄격한 순서 : var < let < const  
ᄂ 어길시에 SyntaxError 발생

## 식별자 이름

식별자 : 변수, 상수, 함수 이름

#### 식별자 규칙
- 글자나 달러 기호($), 밑줄(_)로 시작
- 글자와 숫자, 달러 기호, 밑줄만 사용 가능
- 유니코드 문자 쓸 수 있음
- 예약어는 식별자로 쓸 수 없음  
ᄂ 예약어 : 이미 의미와 용법이 지정되어 사용되는 단어
- 다른 언어에서는 달러 기호($)를 특수문자로 사용하지만 자바스크립트는 예외  
ᄂ 제이쿼리 같은 라이브러리는 이 점을 활용해 달러 기호($)를 식별자로 사용

#### 식별자 방침
- 대문자로 시작해서는 안됨  
ᄂ 예외 : 클래스
- 밑줄 한 개 or 두 개로 시작하는 식별자는 아주 특별한 상황. 또는 '내부 변수'에서만 사용
- 제이쿼리를 사용할 경우, 달러 기호($)로 시작하는 식별자는 보통 제이쿼리 객체라는 의미  
ᄂ 객체 : 자신의 정보를 가지고 있는 독립적인 주체  
ᄂ 객체의 구성요서 : 프로퍼티, 메소드

## 리터널

리터널 단어 : 값을 프로그램 안에서 직접 지정한다는 의미
리너털 뜻 : 값을 만드는 방법(표기방식)

```
let room1 = "conferrence_room_a";   // "conferrence_room_a"(따옴표 안)은 리터널
let currentRoom = room1;            // currentRoom의 값은 room1(conferrence_room_a)의 값과 동일
currentRoom = conferrence_room_a;   // 에러, conferrence_room_a란 식별자 존재하지 않음
```

## 원시 타입과 객체
자바스크립트의 값은 원시 값과 객체

#### 원시 타입
- 숫자
- 문자열
- 불리언
- null
- undefined
- 심볼

#### 내장된 객체 타입
- Array
- Date
- RegExp
- Map과 WeakMap
- Set과 WeakSet
- 원시타입의 숫자, 문자열, 불리언에 각각 대응하는 Number, String, Boolean

## 숫자

- 자바스크립트 숫자형 리터널 : 10진수, 2진수, 8진수, 16진수
- NaN : Not a Number  
컴퓨터 연산 중, 잘못된 입력을 받았음을 나타내는 기호
- Number 객체에는 숫자형 값에 해당하는 유용한 프로퍼티 있음

## 문자열

- 자바스크립트 문자열은 유니코드 텍스트
- 자바스크립트 문자열 리터널 : 작은따옴표, 큰따옴표, `(백틱)  
ᄂ 백틱 : ES6의 템플릿 문자열

## 문자열 템플릿

문자열 템플릿에는 큰따옴표, 작은따옴표 사용X, `(백틱) 사용
```
let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}\u00b0C`;
```

## 숫자와 문자열

- 숫자를 따옴표 안에 넣으면 숫자가 아닌 문자열로 표현
- 자바스크립트는 필요하다면 숫자가 들어 있는 문자열을 자동으로 숫자로 변경
```
const result1 = 3 + '30';   // 3이 문자열로 변경. 결과 : 문자열 '330'
const result2 = 3 * '30';   // 30이 숫자로 변경. 결과 : 숫자 90
```

## 불리언
- true, false
- 0은 false, 다른 숫자 true

## 심볼
- 유일한 토큰을 나타내기 위한 ES6에 도입한 새 데이터 타입
- 항상 유일 (객체와 유사)
- Symbal() 생성자
- 심볼을 만들때 new키워드 사용X

```
const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
RED === ORANGE;     // false : 심볼은 모두 다르고 각각 유일히다
```

## 실습코드

* [결과화면 보기 - console창](https://yeony1011.github.io/2019script_ex/learning-javascript/chapter3/index.html)
* [해당 소스 보기](https://github.com/yeony1011/2019script_ex/blob/master/learning-javascript/chapter3/js/main.js)