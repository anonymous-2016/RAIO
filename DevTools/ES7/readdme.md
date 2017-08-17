# ES2017 Async + Await 


https://learnnode.com/



```js


const editStore = async (req="default value", res="") => {
    const {id} = req.params;
    const store = await Store.findeById(id);
    await confirmOwner(store, req.user);
    res.render(`editStore`, {store});
};


/*

async await

const

destructuring assignment

arrow function

default value

// ??? generator yeild 


*/

```








