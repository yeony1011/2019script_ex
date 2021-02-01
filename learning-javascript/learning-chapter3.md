# CHAPTER3 리터럴과 변수, 상수, 데이터 타입

## 데이터타입

### 변수
이름에 붙는 값
```
let targetTempC;        // 초기값 할당하지 않은 변수 선언으로 undefined 할당됨
let currentTempC = 22;  // 변수 선언 + 초기값 할당
currentTempC = 22.5;    // 변수값 변경
```

- let : 변수 한 번만 선언 가능 (es6문법)
- var : 변수 여러번 선언 가능

### 상수
값을 할당받을 수 있지만, 한 번 할당한 각ㅂㅅ을 바꿀 수 없음
```
const = ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;
```