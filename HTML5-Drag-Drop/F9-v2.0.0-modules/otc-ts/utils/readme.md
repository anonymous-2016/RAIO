# Utils


## error handler

```js

    import {UserException} from "../utils/throw_error";
    import {UserConsoleError as ConsoleError} from "../utils/console_error";


    try {
        let message = `handle json error!`,
            fileName = `transaction-overview.js`,
            lineNumber = 29;
        throw new UserException(message, fileName, lineNumber)
    } catch (error) {
        let url =`file:///E:/otc-ts/modules/transaction-overview.js`;
        ConsoleError(err, url);
        ConsoleError(error, url);
    }

```


## JavaScript `break` and `continue`


1. The break statement "jumps out" of a loop.

2. The continue statement "jumps over" one iteration in the loop.



```js

// break

let text = ``;
for (let i = 0; i < 7; i++) {
    if(i === 3) {
        console.log(`break: will skip the whole loop!`, i);
        break;
    }else{
        text = `The number is ${i}`;
        console.log(`only output text that before break! =`, text);
    }
}

```

```js

// continue

let text = ``;
for (let i = 0; i < 7; i++) {
    if(i === 3) {
        console.log(`continue: only skip the current iteration!`, i);
        continue;
    }else{
        text = `The number is ${i}`;
        console.log(`text =`, text);
    }
}

```













