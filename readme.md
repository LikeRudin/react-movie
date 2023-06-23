# basic-notions

Every lecture notes and code are
located in basic-notions folder

from 0 to 4.x

# 5.0 create React-app introduction

code for making boiler-plate

```
npx create-react-app app-name
```

type above code on cmd for location where you want to create app

```
Success! Created react-exercise at C:\Users\MY\Desktop\clone\startreact\react-exercise
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-exercise
  npm start

Happy hacking!
```

### boiler-plate?

development enviorment

with boiler-plate, we can start coding without any settings

# 5.1 Tour of CRA

we can see some tips on terminal

like `you declared Btn component but never used`

```
WARNING in [eslint]
src\App.js
  Line 2:8:  'ReactDOM' is defined but never used  no-unused-vars

src\Btn.js
  Line 2:8:  'ReactDOM' is defined but never used  no-unused-vars

```

by using create-react-app boiler plate,

## rules for building react-app by this

1. seperate js file for unit component

- make one js file for one component

```
const Btn = () => {

}
Btn.propTypes = {}
...

export Default Btn
```

2. export and import every component

3. define css as a ComponentName.module.css

4. import css for needed js file

```
import styles from "./Btn.module.css";

const Btn = () => {
  return (
    <button
      className={styles.tomatoBtn}> </button>
  )
}
```

### Component.module.css

we can give different css styles
on components which have same className

# 6.0 Effects introduction

when state changes, every chlidren component is re-rendered

by useEffect, we can give some options for re-rendering

- when specific states change, not for every state
- don't re-render. once rendered, then don't run the code

Common usage is synchronizing component with outer system

Doc: https://react.dev/reference/react/useEffect

shape

```
useEffect(setup, dependencies?)
```

params

`setup` is function running after change state in `dependencies` (Array of states)
