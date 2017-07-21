# Ant bug & Solution

https://gist.github.com/xgqfrms-GitHub/4cf5cc3a67a9ed094cf008f13457bfac


https://gist.github.com/xgqfrms-gildata/5acc4a357722e9e2636009fbd6846338#gistcomment-2135071

https://github.com/ant-design/ant-design/issues/6532


# React indexkey & e.key

https://gist.github.com/xgqfrms-gildata/d9ee0f00cf4068f4ca631219b5392e1b#gistcomment-2151364




# this.setState((prevState, props) 

https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous

```jsx

// Correct
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));

```

