# CHAPTER5 표현식과 연산자

## 표현식

* 표현식 == 값으로 평가될 수 있는 문

## 연산자

* 값을 만드는 행동

### 산술연산자

* 자바스크립트의 숫자는 모두 더블형식
* 뺄셈과 단항 부정은 모두 - 기호 사용

  ```text
  const x = 5;
  const y = 3 - -x;   // y는 8, 뺄셈보다 부정연산 먼저
  ```

* 단항 플러스 연산자 : 주로 문자열을 숫자로 강제 변환하는 경우 사용

  ```text
  const s = "5";
  const y = 3 + +5;   // y는 8, 숫자로 변환안한 경우 문자열 병합으로 결과는 35
  ```

### 숫자비교

* NaN : 그 자신을 포함하여 무엇과도 동일하지 않음

  ```text
  NaN === NaN     // false
  NaN == NaN      // false
  ```

* NaN이 숫자인지 확인할때 isNaN\(\) 함수 사용

  ```text
  // x는 NaN
  isNaN(x);       //  true
  ```

### 문자열 병합

* 자바스크립트는 피연산자의 타입으로 덧셈을 할지 문자열 병합을 할지 판단
* 피연산자 중 하나라도 문자열이면 문자열 병합을 수행

  ```text
  3 + 5 + "8"     // 88
  "3" + 5 + 8     // 358
  ```

### 논리연산자

* 거짓 같은 값
  * undefined
  * null
  * false
  * 0
  * NaN
  * ''\(빈 문자열\)
* 참 값은 값
  * 거짓 같은 값 이외의 값
  * 모든 객체, valueOf\(\) 메서드를 호출했을때 false를 반환하는 객체도 참 같은 값
  * 배열, 빈 배열도 참 같은 값
  * 공백만 있는 문자열 \("  " 등\)
  * 문자열 "false"

### 단축평가

* AND연산에서 두 값을 모두 평가하지 않아도 될 경우가 있음
* x가 거짓 같은 값이면, x && y에서 y의 값을 평가할 필요도 없이 false

  ```text
  const doIt = false;
  let x = 0;
  const result = doIt && x++;   // result에 false 저장, x의 증가연산자는 실행되지 않아 x는 0
  ```

* x가 참 같은 값이면, x \|\| y에서 y의 값을 평가할 필요없이 true

  ```text
  const skipIt = true;
  let x = 0;
  const result = skipIt || x++;   // result에 true 저장, x의 증가연산자는 실행되지 않아 x는 0
  ```

* 불리언 피연산자를 사용하면 논리연산자는 항상 불리언을 반환.  

  피연산자가 불리언이 아니라면, 결과를 결정한 값이 반환

  ```text
  const doIt = true;
  let x = 0;
  const result = doIt && x++;   // result에 0 저장, x의 증가연산자 실행
  ```

### typeof 연산자

* typeof 연산자 : 피연산자의 타입을 나타내는 문자열을 반환  

  \(정확히 구별은 어려움\)

### 해체 할당

* ES6의 새 기능
* 객체나 배열을 변수로 '해체'할 수 있음
* `객체해체` : 반드시 변수 이름과 객체 프로퍼티 이름이 일치해야 함

  ```text
  // 객체 선언과 할당을 같은 문에서 실행할 경우
  // 객체 선언
  const obj = {b:2, c:3, d:4};
  // 객체 해체
  const {a,b,c} = obj;
  a;  // undefined        // obj에는 "a"프로퍼티 존재X
  b;  // 2
  c;  // 3
  d;  // ReferenceError   // "d"는 정의되지 않음
  ```

  ```text
  // 객체 선언과 할당을 다른 문에서 실행할 경우
  // 객체 선언
  const obj = {b:2, c:3, d:4};
  let a, b, c;
  // 객체 해체
  {a,b,c} = obj;          // Error
  ({a,b,c} = obj);        // Success
  ```

* `배열해체` : 배열 요소에 대응할 변수 이름을 마음대로 사용가능  

  배열 순서대로 대응

  ```text
  // 배열 선언
  const arr = [1, 2, 3];
  // 배열 해체 할당
  let [x, y] = arr;
  x;  // 1
  y;  // 2
  z;  // ReferenceError   // "z"는 정의되지 않음
  ```

* `배열해체` : 확산 연산자\(...\) 사용시, 남은 요소를 새 배열에 할당

  ```text
  const arr [1, 2, 3, 4, 5];
  let [x,y, ...rest] = arr;
  x;      // 1
  y;      // 2
  rest;   // [3, 4, 5]
  ```

* `배열해체` : 변수의 값을 서로 바꿀 수 있음

  ```text
  let a = 5, b = 10;
  [a, b] = [b, a];
  a;  // 10
  b;  // 5
  ```

### 객체와 배열 연산자

| 연산자 | 설명 |
| :---: | :--- |
| . | 점 연산자 |
| \[\] | 대괄호 연산자 |
| in | 프로퍼티 존재 연산자 |
| new | 객체 인스턴스화 연산자 |
| instanceof | 프로토타입 체인 테스트 연산자 |
| ... | 확산 연산자 |
| delete | 삭제 연산자 |

### 표현식과 흐름 제어 패턴

**if...else 문을 3항 연산자로 바꾸기**

```text
if(isPrime(n)){
    label = 'prime';
}else{
    label = 'non-prime';
}

label = isPrime(n) ? 'prime' : 'non-prime';
```

**if문을 단축 평가하는 OR 표현식으로 바꾸기**

```text
if(!options) options = {};

options = options || {};
```

