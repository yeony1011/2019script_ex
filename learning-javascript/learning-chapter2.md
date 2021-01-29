# CHAPTER2 자바스크립트 개발 도구

## 자바스크립트 개발 도구

### Git
프로젝트가 커져도 쉽게 관리할 수 있고, 다른 개발자와 협력할 수 있게 돕는 버전 컨트롤 도구
### Node
브라우저 밖에서 자바스크립트를 실행할 수 있게 하는 도구\
노드와 함께 설치되는 npm은 이 리스트의 다른 도구를 설치할 때 필요
### Gulp
반복적인 개발 작업을 자동화하는 빌드 도구 (≒ Grunt)
### Babel
ES6 코드를 ES5 코드로 변환하는 트랜스컴파일러
### ESLint
자주하는 실수를 피하고 더 나은 프로그래머가 되도록 돕는 린트 프로그램

## Evergreen Browser
- 자동적으로 브라우저가 사용자에 대한 별도의 재설치를 요구하지 않고 업데이트가 가능한 브라우저\
- 초기 웹브라우저들은 Evergreen방식을 사용하지 않으나, Web 기술의 발전에 따라 사용자의 편의성과 업데이트를 위해 설계\
- 에버그린 브라우저에서 자바스크립트 최신기술을 사용가능 하지만, 모두 지원하지는 않으므로 트랜스컴파일러 사용\
ex) Chrome, Firefox 등

## 터미널
- 디렉토리 구분 : /(슬래시)
- 홈 디렉토리 : ~

```
$ ls            # 목록보기
$ cd ~          # 다른 디렉토리로 이동
$ pwd           # 현재 디렉토리 경로 출력
$ mkdir test    # 현재 디렉토리에서 서브디렉토리(test) 생성
$ cd test       # 새로만든 디렉토리로(하위 디렉토리) 이동
$ cd ..         # 상위 디렉토리로 이동
```

## Git .gitignore
git 추적 제외 파일
```
# npm 디버그 기록
npm-debug.log*

# 프로젝트 의존성
node_modules

# macOS 폴더 속성
.DS_Store

# 임시 파일
*.tmp
```

## npm 패키지 관리
### 의존성
- 일반의존성
- 개발의존성 : 앱을 실행할 때는 필요없지만, 프로젝트를 개발할 때 필요 or 도움되는 패키지
### 플래그
- --save, --save-dev
```
$ npm init  # package.json 생성 (package.json으로 의존성 관리)

```

## 실습코드

* [package.js](https://github.com/yeony1011/2019script_ex/blob/master/package.js)
* [gulpfile.js](https://github.com/yeony1011/2019script_ex/blob/master/gulpfile.js)