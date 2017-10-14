# recent-important-events




## Element.insertAdjacentHTML()


https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML


```js

// <div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

// At this point, the new structure is:
// <div id="one">one</div><div id="two">two</div>

```




## Element.insertAdjacentElement()

https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement



```js

beforeBtn.addEventListener('click', function() {
    var tempDiv = document.createElement('div');
    tempDiv.style.backgroundColor = randomColor();
    activeElem.insertAdjacentElement('beforebegin',tempDiv);
    setListener(tempDiv);
});

afterBtn.addEventListener('click', function() {
    var tempDiv = document.createElement('div');
    tempDiv.style.backgroundColor = randomColor();
    activeElem.insertAdjacentElement('afterend',tempDiv);
    setListener(tempDiv);
});

```



## classList 

https://developer.mozilla.org/en-US/docs/Web/API/Element/classList


```js

// div is an object reference to a <div> element with class="foo bar"
div.classList.remove("foo");
div.classList.add("anotherclass");

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10 );

alert(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar");
div.classList.remove("foo", "bar");

// add or remove multiple classes using spread syntax
let cls = ["foo", "bar"];
div.classList.add(...cls); 
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");

```



# CSS in JS


> base64 & hash


https://www.w3schools.com/jsref/met_win_btoa.asp

https://www.w3schools.com/jsref/met_win_atob.asp

```js

let str = "Hello World!",
    enc = window.btoa(str),
    dec = window.atob(enc);

console.log(`Base64 Encode = ${enc} \n`, ``);
console.log(`Base64 Dncode = `, dec);

// SGVsbG8gV29ybGQh 
// "SGVsbG8="
// "IFdvcmxkIQ=="

```

# ??? base64 & hash generator ???

https://stackoverflow.com/questions/202605/repeat-string-javascript/41574167#41574167

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

https://www.w3schools.com/jsref/jsref_repeat.asp

http://www.ecma-international.org/ecma-262/6.0/#sec-string.prototype.repeat



```js


const Base64HashGenerator = (str = `Base64HashGenerator`) => {
    if(typeof str){
        // do nothing!
    }else{
        str = `xgqfrms is the author!`;
    }
    let new_str = ``;
    if (str.length === 0) {
        new_str = `Base64HashGenerator`;
    }else if(str.length >= 100){
        new_str = str.substr(0,100);
    }else if(str.length >= 1 && str.length < 10){
        new_str = str.repeat(10);
    }else{
        new_str = str;
    }
    let Float_num = Math.random()*10;// [0, 1)
    let Int_num = Math.ceil(Float_num);// [1, 10]
    // Math.ceil(Math.random()*100);
    // Math.pow(2, 3); === 2**3;
    const hash = window.btoa(new_str.slice(0, ((Int_num > 7) ? Int_num : 7)));
    return hash;
};




/**
 * Base64HashGenerator
 * xgqfrms
 * creadted 2017.10.12
 * @param {* String} str 
 * @param {Boolean} debug 
 */

const Base64HashGenerator = (str = `Base64HashGenerator`, debug = false) => {
    // debug = true;
    if (debug) {
        console.log(`str = `, str);
    }
    if(typeof str === `string`){
        // do nothing!
    }else{
        str = `xgqfrms is the author!`;
        if (debug) {
            console.log(`shaped str = `, str);
        }
    }
    let new_str = ``;
    if (str.length === 0) {
        new_str = `Base64HashGenerator`;
    }else if(str.length >= 100){
        new_str = str.substr(0,100);
    }else if(str.length >= 1 && str.length < 10){
        new_str = str.repeat(10);
    }else{
        new_str = str;
    }
    if (debug) {
        console.log(`new_str = `, new_str);
    }
    let Float_num = Math.random()*10;// [0, 1)
    let Int_num = Math.ceil(Float_num);// [1, 10]
    // Math.ceil(Math.random()*100);
    // Math.pow(2, 3); === 2**3;
    let begin_num = Math.ceil(Math.random()*3);// [1, 4)
    const hash = window.btoa(new_str.slice(begin_num, ((Int_num > 7) ? Int_num : 7)));
    // auto copy
    copy(hash);
    return hash;
};


// test

Base64HashGenerator();
Base64HashGenerator({});
Base64HashGenerator([]);
Base64HashGenerator(`hello world!`);

const str = `
    this is a very very very long string!
`;
Base64HashGenerator(str, true);



```























