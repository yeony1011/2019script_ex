# CHAPTER3 리터럴과 변수, 상수, 데이터 타입

## 데이터타입

### 변수

이름에 붙는 값

```text
let targetTempC;        // 초기값 할당하지 않은 변수 선언으로 undefined 할당됨
let currentTempC = 22;  // 변수 선언 + 초기값 할당
currentTempC = 22.5;    // 변수값 변경
```

### 상수

값을 할당받을 수 있지만, 한 번 할당한 값을 바꿀 수 없음

```text
const = ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;
```

* 기존 : var  

  ᄂ 재선언, 재할당, 초기값 할당 안해도 가능

* ES6 : let, const  

  ᄂ let : 재선언 불가, 재할당 가능, 초기값 할당 안해도 가능  

  ᄂ const : 재선언, 재할당 불가, 초기값 할당 해야 됨

* 엄격한 순서 : var &lt; let &lt; const  

  ᄂ 어길시에 SyntaxError 발생

## 식별자 이름

식별자 : 변수, 상수, 함수 이름

#### 식별자 규칙

* 글자나 달러 기호\($\), 밑줄\(\_\)로 시작
* 글자와 숫자, 달러 기호, 밑줄만 사용 가능
* 유니코드 문자 쓸 수 있음
* 예약어는 식별자로 쓸 수 없음  

  ᄂ 예약어 : 이미 의미와 용법이 지정되어 사용되는 단어

* 다른 언어에서는 달러 기호\($\)를 특수문자로 사용하지만 자바스크립트는 예외  

  ᄂ 제이쿼리 같은 라이브러리는 이 점을 활용해 달러 기호\($\)를 식별자로 사용

#### 식별자 방침

* 대문자로 시작해서는 안됨  

  ᄂ 예외 : 클래스

* 밑줄 한 개 or 두 개로 시작하는 식별자는 아주 특별한 상황. 또는 '내부 변수'에서만 사용
* 제이쿼리를 사용할 경우, 달러 기호\($\)로 시작하는 식별자는 보통 제이쿼리 객체라는 의미  

  ᄂ 객체 : 자신의 정보를 가지고 있는 독립적인 주체  

  ᄂ 객체의 구성요서 : 프로퍼티, 메소드

## 리터널

리터널 단어 : 값을 프로그램 안에서 직접 지정한다는 의미 리너털 뜻 : 값을 만드는 방법\(표기방식\)

```text
let room1 = "conferrence_room_a";   // "conferrence_room_a"(따옴표 안)은 리터널
let currentRoom = room1;            // currentRoom의 값은 room1(conferrence_room_a)의 값과 동일
currentRoom = conferrence_room_a;   // 에러, conferrence_room_a란 식별자 존재하지 않음
```

## 원시 타입과 객체

자바스크립트의 값은 원시 값과 객체

#### 원시 타입

* 숫자
* 문자열
* 불리언
* null
* undefined
* 심볼

#### 내장된 객체 타입

* Array
* Date
* RegExp
* Map과 WeakMap
* Set과 WeakSet
* 원시타입의 숫자, 문자열, 불리언에 각각 대응하는 Number, String, Boolean

## 숫자

* 자바스크립트 숫자형 리터널 : 10진수, 2진수, 8진수, 16진수
* NaN : Not a Number  

  컴퓨터 연산 중, 잘못된 입력을 받았음을 나타내는 기호

* Number 객체에는 숫자형 값에 해당하는 유용한 프로퍼티 있음

## 문자열

* 자바스크립트 문자열은 유니코드 텍스트
* 자바스크립트 문자열 리터널 : 작은따옴표, 큰따옴표, \`\(백틱\)  

  ᄂ 백틱 : ES6의 템플릿 문자열

## 문자열 템플릿

문자열 템플릿에는 큰따옴표, 작은따옴표 사용X, \`\(백틱\) 사용

```text
let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}\u00b0C`;
```

## 숫자와 문자열

* 숫자를 따옴표 안에 넣으면 숫자가 아닌 문자열로 표현
* 자바스크립트는 필요하다면 숫자가 들어 있는 문자열을 자동으로 숫자로 변경

  ```text
  const result1 = 3 + '30';   // 3이 문자열로 변경. 결과 : 문자열 '330'
  const result2 = 3 * '30';   // 30이 숫자로 변경. 결과 : 숫자 90
  ```

## 불리언

* true, false
* 0은 false, 다른 숫자 true

## 심볼

* 유일한 토큰을 나타내기 위한 ES6에 도입한 새 데이터 타입
* 항상 유일 \(객체와 유사\)
* Symbal\(\) 생성자
* 심볼을 만들때 new키워드 사용X

```text
const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
RED === ORANGE;             // false : 심볼은 모두 다르고 각각 유일히다
```

## null 과 undefined

```text
let currentTemp;            // 암시적으로 undefined
const targetTemp = null;    // null값
currentTemp = 19.5;         // 19.5 값을 가짐
currentTemp = undefined;    // 초기화되지 않음
```

## 객체

* 원시 타입은 단 하나의 값만 나타낼 수 있고 불변이지만, 이와 달리 객체는 여러 가지 값이나 복잡한 값을 나타낼 수 있으며 변할 수도 있음
* 중괄호{}를 사용하는 리터럴 문법

  ```text
  const obj = {};             // 빈 객체
  ```

* 객체의 콘텐트는 프로퍼티 or 멤버
* 프로퍼티는 이름\(키\)과 값으로 구성
* 프로퍼티 이름은 반드시 문자열 or 심볼
* 프로퍼티 값은 어떤 타입이든 상관X, 다른 객체여도 무방

  ```text
  obj.color = "yellow";
  ```

* 프로퍼티 이름에 유효한 식별자를 써야 멤버 접근 연산자\(.\), 계산된 멤버 접근 연산자\(\[\]\) 사용 가능
* 프로퍼티 이름에 유요한 식별자가 아닌 경우 계산된 멤버 접근 연산자\(\[\]\) 사용 가능

  ```text
  obj["not an idendifier"] = 3;
  obj["not an idendifier"];       // 3
  obj["color"];                   // yellow
  ```

* 심볼 프로퍼티에 접근할 때 대괄호\(\[\]\) 사용, 멤버 접근 연산자\(.\) 사용X

  ```text
  const SIZE = Symbol();
  obj[SIZE] = 8;
  obj[SIZE];                      // 8
  ```

* 객체 리터럴 문법에 의해 객체 생성과 동시에 프로퍼티 만들 수 있음
* 프로퍼티 값도 객체 가능

  ```text
  const sam1 = {                          // 프로퍼티 별로 나열
    name : 'Sam',
    age : 4
  };
  const sam2 = {name : 'Sam', age : 4};   // 한줄로 작성
  const sam3 = {                          // 프로퍼티 값에 객체
    name : 'sam',
    classification : {
        kingdom : 'Anamalia',
        phylum : 'Chordata',
        class : 'Mamalia'
    }
  };
  sam3.classification.kingdom;        // "Anamalia"
  sam3["classification"].kingdom      // "Anamalia"
  sam3.classification["kingdom"]      // "Anamalia"
  sam3["classification"]["kingdom"]   // "Anamalia"
  ```

* 객체에 함수 담기

  ```text
  sam3.speak = function(){ return "Meow!" };
  sam3.speak();       // 함수호출
  ```

* 객체에서 프로퍼티 제거
* delete 연산자 사용

  ```text
  delete sam3.classification;         // classification 트리 전체 삭제
  delete sam3.speak;                  // speak 함수 삭제
  ```

## Number, String, Boolean 객체

* Number.INFINITY 같은 특별한 값 저장
* 함수형태 기능 제공

  ```text
  const s = "hello";
  s.toUpperCase();        // "HELLO" // s는 객체처럼 함수 프로퍼티를 가진 것 처럼 보임
  ```

* 자바스크립트는 일시적인 String 객체를 만듬
* 임시 객체에 함수가 들어있음
* 자바스크립트는 함수를 호출시, 임시 객체 파괴

  ```text
  const s = "hello";
  s.rating = 3;           // 에러없음
  s.rating;               // undefined
  ```

## 배열

* 배열 크기는 고정되지 않음
* 언제든 요소를 추가/제거 가능
* 요소의 데이터 타입을 가리지 않음
* 배열요소는 0으로 시작

  ```text
  const a1 = [1, 2, 3, 4];            // 숫자로 구성된 배열
  const a2 = [1, 'two', 3, null];     // 여러 타입으로 구성된 배열
  const a3 = [                        // 여러 줄로 정의한 배열
    "What the hammer?",
    "In what furance was thy brain?",
    "What the anvil?"
  ];
  const a4 = [                        // 객체로 구성된 배열
    {name: "Ruby", hardness: 9},
    {name: "Diamond", hardness: 10},
    {name: "Topaz", hardness: 8}
  ];
  const a5 = [                        // 배열로 구성된 배열
    [1,3,5],
    [2,4,6]
  ];
  ```

* 배열에는 요소 숫자를 반환하는 legnth 프로퍼티 있음

  ```text
  const arr = ['a', 'b', 'c'];
  arr.length;                         // 3
  ```

* 배열 요소에 접근할 때, 대괄호 안에 요소의 인덱스 숫자 사용

  ```text
  const arr = ['a', 'b', 'c'];
  arr[0];                             // 첫번째 요소를 가져옴
  arr[arr.length - 1];                // 'c' (3 - 1 = 2 이므로 2번째 배열의 값 가져옴)
  ```

* 배열 요소의 값을 새 값으로 할당

  ```text
  const arr = ['a', 'b', 'c'];
  arr[0] = 3;                         // arr은 [3, 'b', 'c']
  ```

## 날짜

* 현재 날짜와 시간을 나타내는 객체를 만들때 new Date\(\) 사용

  ```text
  const now = new Date();
  now();                                                  // 현재 날짜와 시간을 불러옴  
  const halloween = new Date(2021, 9, 31);                // 월은 0부터 시작이므로 2021-10-31  
  const halloweenParty = new Date(2021, 9, 31, 19, 0);    // 19:00 = 7:00 pm
  halloweenParty.getFullYear();                           // 2021
  halloweenParty.getMonth();                              // 9
  halloweenParty.getDate();                               // 31
  halloweenParty.getDay();                                // 0 (0 일요일, 1 월요일)
  halloweenParty.getHours();                              // 19
  halloweenParty.getMinutes();                            // 0
  halloweenParty.getSeconds();                            // 0
  halloweenParty.getMilliseconds();                       // 0
  ```

## 정규표현식

* 문자열에서 복잡한 검색과 교체 작업을 비교적 단순하게 만듬
* RegExp 객체 사용
* 슬래시 한 쌍\(/.../\) 사이에 심볼을 넣는 리터럴 문법 

  ```text
  const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b;  // 간단한 이메일 정규표현식
  ```

## 맵과 셋

* Map : 객체와 유사. 키와 값을 연결
* Set : 배열과 유사. 중복 허용X
* WeakMap, WeakSet : Map, Set과 동일하게 동작하지만, 특정 상황에서 성능이 더 높아지도록 일부 기능 제거한 버전

## 문자열을 숫자로 바꾸기

1. Number 객체 생성자 사용

   ```text
   const numStr = "33.3";
   const num = Number(numStr);     // 33.3
   console.log(typeof(num));       // number // 숫자가 아닌경우 NaN
   ```

2. 내장된 함수인 parseInt, parseFloat 함수 사용
3. parseInt, parseFloat : 숫자로 판단할 수 있는 부분까지만 변환, 뒤의 문자열은 무시
4. parseInt : 기수를 넘길 수 있음  

   ᄂ 기수 : 변환할 문자열이 몇 진수로 표현인지 지정. 기수의 기본값은 10\(진수\)

5. parseFloat : 기수가 항상 10

   ```text
   const a = parseInt("16 volts", 10);     // " volts"는 무시. 10진수 16
   const b = parseInt("3a", 16);           // 58 (16진수 3a를 10진수로 변경)
   const c = parseFloat("15.5 kph");       // 15.5 (" kph"는 무시)
   ```

   3.Date객체를 숫자로 변경할때 valueOf\(\) 메서드 사용

   ```text
   const d = new Date();
   const ts = d.valueOf();
   ```

   4.불리언 값 바꾸기

   ```text
   const b = true;
   const n = b ? 1 : 0;    // 조건 연산자 사용
   ```

## 숫자를 문자열로 바꾸기

* 문자열 표현을 반환하는 toString\(\) 메서드 사용
* 문자열 병합에서 자동으로 숫자를 문자열로 변환됨

  ```text
  const n = 33.5;         // 숫자
  const s = n.toString(); // 문자
  ```

## 불리언으로 변환

* 부정연산자\(!\) 사용해서 모든 값을 불리언으로 변경 가능

  ```text
  const n = 0;            // 0
  const b1 = !!n;         // false
  const b2 = Boolean(n);  // false
  ```

## 실습코드

* [결과화면 보기 - console창](https://yeony1011.github.io/2019script_ex/learning-javascript/chapter3/index.html)
* [해당 소스 보기](https://github.com/yeony1011/2019script_ex/blob/master/learning-javascript/chapter3/js/main.js)

