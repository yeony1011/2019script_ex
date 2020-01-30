# 디자인된 셀렉트박스 기능

## 자바스크립트
- [결과화면 보기](https://yeony1011.github.io/2019script_ex/select/select.html)
- [해당 소스 보기](https://github.com/yeony1011/2019script_ex/blob/master/select/common.js)

## 기능
- [x] 마크업 주석을 참고하여 '지역선택'버튼 클릭시 옵션 펼침. 선택된 옵션에 클래스 opt_open 추가. 
- [x] 옵션선택시, '지역선택' 영역에 선택한 지역으로 텍스트 변경.
- [x] 옵션선택시, 선택한 영역읙 텍스트만 색상변경, 나머지 텍스트는 기본색상.
- [x] 선택한 값을 alert으로 띄우기.(추후, 선택한 값을 백엔드 api data에 보내기 위한 연습)

## 결과참조
https://material-ui.com/components/selects/

## 배열과 유사배열
- 배열과 유사배열의 차이점 : 유사배열에서는 배열의 메서드 사용X   
    - 배열의 메서드를 사용하기 위해 call, apply 사용   
    - 최신 자바스크립트에서는 Array.from으로 사용

- 배열 판별 방법 : Array.isArray()

- ex) querySelectorAll : 유사배열