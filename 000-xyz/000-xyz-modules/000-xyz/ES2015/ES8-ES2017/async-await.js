async function foo() {
    try {
        let result = await doSomething();
        let newResult = await doSomethingElse(result);
        let finalResult = await doThirdThing(newResult);
        console.log(`Got the final result: ${finalResult}`);
        // promise chain ???
        /* 
            doSomething(
                return result;
            )
            .then(
                doSomethingElse(result);
                return newResult;
            )
            .then(
                doThirdThing(newResult);
                return finalResult;
            );
        */
    } catch(error) {
        failureCallback(error);
    }
}


const AsyncFunctionDemo = async () => {
    return `this is async function demo`;
};

await AsyncFunctionDemo();
// 1. await can only used in Async Function!

// 2. await can only used before any Promise Function!

function abc() {
    console.log(`this is a normal function!`);
}

const ASF = async () => {
    let str = await AsyncFunctionDemo();
    console.log(`str = ${str}!`);
    //let abc = await abc();
    //Uncaught (in promise) ReferenceError: abc is not defined
    let abc = abc();
    console.log(`abc = ${abc}!`);
    return `this is async function demo with await`;
};

function xyz() {
    console.log(`this is a normal function!`);
    let str = await AsyncFunctionDemo();
    // Uncaught SyntaxError: await is only valid in async function
    console.log(`str = ${str}!`);
}


const ASFD = async () => {
    try {
        let str = await AsyncFunctionDemo();
        console.log(`str = ${str}!`);
        return `this is async function demo with await`;
    } catch (error) {
        console.log(`Error = \n${error}!`);
    }    
};
