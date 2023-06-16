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

1. react를 사용하려면 React, ReactDOM을 전부 설치해야한다.

   - 엔진, HTML handle tool

2. ReactDOM의 DOM은 대문자 세개로 이루어져 있다.

3. interactive한 웹페이지를 만드는데 쓰인다.

   - 즉 프론트 엔드 페이지를 만들때 쓰인다

4. js는 frontent와 html이 분리된다.

   - js와 html을 따로 코딩해주어야한다.

5. react는 js 하나만 코딩하면 된다.
   - ReactDOM태그를 생성하는 동시에 여러가지 설정 및 이벤트 핸들러 등록을 할 수 있다.

- 기타 디테일

```
  ReactDOM.createRoot(root).render(생성 컴포넌트);

  React.createElement("태그명", {태그 속성 및 이벤트 핸들러 오브젝트}, innerHTML - 여러개인경우 배열 [] 로 묶는다)

```

# 2.5 JSX

`React.createElement` 를 대체해보자

component 라는것을 사용해서 html 태그를 생성할것이다.

- 컴포넌트의 특징

  - 함수이다.
    - function , 메서드, arrow function 형태 모두 사용가능
  - jsx 를 반환한다

- JSX의 특징
  - HTML 처럼 생겼다.
  - string을 제외한 모든 자바스크립트 코드는{} 내부에 작성한다.

지금까지 사용한 코드

```
 const span = React.createElement("span", {
        id: "sexy-span",
        style: {
            color: "tomato"
        }
    },
        "this is a span");
```

jsx를 반환하는 컴포넌트

```
   const Span = () => {
        return (
            <span
            id="sexy-span"
            style={{ backgroundColor:"tomato" }}
            >
            this is a span
         </span>
         )
        };

   const Btn = () => {
        return (
            <button
                id="btn"
                onClick={ ()=> console.log("i'm clicked")}
            >
                Click me
            </button>
            );
    }
```

style이나 이벤트 리스너에는 오브젝트를 할당한다.

### 주의할점

- 컴포넌트 함수는 반드시 대문자로 시작해야한다.

  - 그냥 소문자로 작성하면, html과 구분하지 못한다.

<br>

- 컴포넌트를 렌더링할때에는 `<Component/>` 형식으로 작성해야한다.

  - HTML Singleton Tags 형태

  - 예시 ReactDom.createroot(root).render(<JsxComponet/>)

  - 그냥 Component를 넣어주면 함수 호출을 하는것

- 컴포넌트의 장점
  - 코드 재사용에 유리하다

### bug fix

브라우저가 리액트를 실행할 수 있도록 스크립트를 추가해주어야 한다.

Error message

```
transformScriptTags.ts:252 You are using the in-browser Babel transformer. Be sure to precompile your scripts for production - https://babeljs.io/docs/setup/
```

```
1. 바벨 실행 스크립트 코드
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

2. 바벨 타겟 설정

<script type="text/babel">

이후 브라우저의 개발자 도구 -element에서 변환된 코드를 볼 수 있다.
```

# 3.0 Understanding State

state: 값이 바뀌는 변수 (혹은 property)

하나의 Component 내부에
자바스크립트 변수와 메서드를 만들어줄 수 있다.

```
    const Container = () => {
        let count = 0;

        const countUp = () => {
            count += 1;
        }

        const renderPage = root.render(<Container />);

        return (
            <div>
                <span
                >
                total clicks : {count}
                </span>

                <button
                id="btn"
                style={{backgroundColor: "tomato"}}
                onClick={renderPage}
                >
                </button>
            </div>
        );
    }

    ReactDOM.createRoot(root).render(<Container />);
```

### bugfix

Error Message

```
You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.
```

다음 코드를 통해 createRoot를 완료후에는 root를 참조하여 render를 사용해야한다.

```
ReactDOM.createRoot(root).render(<Container />);
```

문제코드 수정: Container의 메서드

```
const renderPage = () => ReactDOM.createRoot(root).render(<Container />);


const renderPage = () => root.render(<Container />);

```

이제 다시 TypeError가 발생했다

```
TypeError: root.render is not a function
    at renderPage (<anonymous>:10:17)
```

문서를 읽고 오자 문제점을알았다.

1. ReactDom.createRoot(root) 는 react Node를 반환한다.

   - 해당 ReactNode의 render 메서드를 사용해야한다.

```
ReactDOM.createRoot(root).render(<Container />);

-> const root = ReactDom.createRoot(rootTag);
   root.render(<Container/>);
```

2. let은 함수 내부변수가 아니라 전역변수이다.

https://react.dev/reference/react-dom/client/createRoot#root-render

### 리액트가 좋은점

일반 자바스크립트 브라우저는 DOM 정보가 바뀔때마다 트리를 다시생성한다.

하지만 리액트는 가상돔으로 일부분만 수정해서 던저준다.

render tree 형성을 최적화 하여 빠르게 페이지를 그려주는것이 프론트의 쟁점중 하나.
