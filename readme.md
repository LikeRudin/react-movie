# 2.1

바닐라 js로 interactive 한 앱을 만들기

1. html 태그 생성
2. Script 연결

script 내용

1. querySelector, getElementBy ~등으로DOM 객체 생성
2. eventListener 부착
3. eventHandler 생성 및 리스너의 콜백으로 사용

span으로 클릭 횟수를 세어보자

1. span 태그 생성
2. count 변수 생성
3. eventHandler에 다음과 같은 내용추가
   - 클릭시 count 변수 증가
   - span 태그의 inner TEXT 변경

환기: 이것을 리액트로 만들면 엄청 쉽다

# 2.2

리액트 설치
react와 reactDOM 스크립트를 두개 설치해야한다.
react는 엔진이고, reactDom은 ReactElement를 다루는 여러가지 함수를 제공한다.
