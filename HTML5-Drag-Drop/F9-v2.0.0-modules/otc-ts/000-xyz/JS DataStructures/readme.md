# JS DataStructures


## Link List






https://github.com/PacktPublishing/Learning-JavaScript-Data-Structures-and-Algorithms

https://github.com/PacktPublishing


https://github.com/loiane/javascript-datastructures-algorithms


https://github.com/loiane/javascript-datastructures-algorithms/tree/second-edition

https://github.com/loiane/javascript-datastructures-algorithms/tree/third-edition


https://javascript-ds-algorithms-book.firebaseapp.com/


https://github.com/romyilano/Learning-JavaScript-Data-Structures-and-Algorithms




https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management


https://github.com/loiane/javascript-datastructures-algorithms/issues/29
https://github.com/loiane/javascript-datastructures-algorithms/blob/third-edition/src/js/data-structures/set.js


> not too good

```js

    intersection(otherSet) {
        const intersectionSet = new Set(),
            values = this.values(),
            otherValues = otherSet.values();
        let biggerSet = values,
            smallerSet = otherValues;
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if (smallerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }

```

> good

```js

    this.intersection = (otherSet) => {
        let intersectionSet = new Set(),
            values = this.values(),
            otherValues = otherSet.values(),
            smallSize = ((otherValues.length - values.length) > 0 ? values : otherValues);
        // small & reduce iterate times
        smallSize.forEach((value) => {
            if (smallSize.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    };

```

> all for loop & all in one

```js
    // let smallSize = [1,2,3,4,5,6];
    let smallSize = [`a`,`b`,`c`,`d`,`e`,`f`,`g`];
    // forEach
    smallSize.forEach((value, index) => {
        if (smallSize.includes(value)) {
            console.log(`value = `, value, `index = `, index);
        }
    });
    // map
    smallSize.map((value, index) => {
        if (smallSize.includes(value)) {
            console.log(`value = `, value, `index = `, index);
        }
        return {
            value,
            index
        };
    });
    // for
    for(let index = 0; index < smallSize.length; index++){
        let value = smallSize[index];
        if (smallSize.includes(value)) {
            console.log(`value = `, value, `index = `, index);
        }
    }
    // for in
    for (const index in smallSize) {
        let value = smallSize[index];
        if (smallSize.includes(value)) {
            console.log(`value = `, value, `index = `, index);
        }
    }
    // for of
    for (const value of smallSize) {
        let index = smallSize.indexOf(value);
        // let index = value - 1;
        // NaN bug ???
        if (smallSize.includes(value)) {
            console.log(`value = `, value, `index = `, index);
        }
    }
/*

    // for
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        //
    }

    // forEach
    array.forEach(element => {
        //
    });

    // for in
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            //
        }
    }

    // for of
    for (const iterator of object) {
        //
    }


*/

```


