# 2.1 Before React

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

# 2.2 Our First React Element

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

# 2.3 Events in React

처음에 1강에서 만들었던것처럼

interactive한 웹페이지를 만들어보자.
이번엔 React.createElement를 이용해서 js 내부에서 만들자.

특정 이벤트 `A`에 대한 이벤트리스너는 on`A` 형식으로 사용할 수있다.

```
const btn = React.createElement(
   "button",
   { onClick: () => console.log("i'm clicked"),
      style: {
         backgroundColor: "tomato",
      }
   },
   "click me"
);
```

리액트의 강력함으로 frontend 코드와 html 코드를 별개로 만들 필요가 없다.

### vanila js vs react js

vanila js

1. html button 태그 생성
2. addEventListener를 부착
3. eventHandler 함수 생성

react js

1. js button 생성, 생성중에 eventListener + eventHanlder 기능의 attr을 삽입

### 여러개의 태그를 묶는 div를 생성

```
const container = React.createElement("div", null, [span, btn])
```

### React.createElement 문서

doc 링크: https://react.dev/reference/react/createElement

React.createElement(type, props, ...children)

children

```
...children: Zero or more child nodes.
They can be any React nodes, including React elements, strings, numbers, portals,
 empty nodes (null, undefined, true, and false), and arrays of React nodes.

```

# 2.4 Recap

1. react를 사용하려면 react 엔진인 React, html을 컨트롤하기위한 ReactDOM을 전부 설치해야한다.

2. ReactDOM의 DOM은 대문자 세개로 이루어져 있다.

3. interactive한 웹페이지- 즉 프론트 엔드 페이지를 만들때 쓰인다

4. js는 frontent와 html이 분리된다. js와 html을 따로 코딩해주어야한다.

5. react는 ReactDOM태그를 생성중에 여러가지 설정 및 이벤트 핸들러 등록을 할 수 있다.

- 기타 디테일

```
  ReactDOM.createRoot(root).render(생성 컴포넌트);

  React.createElement("태그명", {태그 속성 및 이벤트 핸들러 오브젝트}, innerHTML - 여러개인경우 배열 [] 로 묶는다)

```
