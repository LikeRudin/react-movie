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

스크립트 태그는 react.dev (18 버전 리액트 doc)에서 찾을 수없었다.

https://ko.legacy.reactjs.org/docs/cdn-links.html

여기서
다음 두 태그를 가져왔다

```
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

issue: ReactDom이 아니라 ReactDOM 이다.

첫 리액트 - hard part

다음은 root 태그에 span을 생성하여 붙여주는 코드이다.
다시 쓰일일은 없다.

리액트의 역할을 기억하면 된다. - DOM을 동적으로 생성하여 붙여준다
일반 자바스크립트와 다른점은 생성과 세팅을 한큐에 js에서 할수 있다는 것 이다.

1. js에서 태그를 생성한다.
2. 원하는 태그에 붙여준다.

```
<script>
    const root = document.getElementById("root");
    const span = React.createElement("span", {id: "sexy-span"});
    ReactDOM.createRoot(root).render(span);
</script>

```
