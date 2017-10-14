
/**
 * rot13
 * xgqfrms
 * created 2017/10/13
 * 
 * @param {* String} str 
 * @param {* Boolean} debug 
 */

const rot13 = (str = `xgqfrms`, debug = false) => {
    const Input =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const Output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";
    let result = ``;
    let sl = str.length;
    const regex = /\w/i;
    for (let i = 0; i < sl; i++) {
        // str[i] !== " "
        if(regex.test(str[i]) === true){
            let index = Input.indexOf(str[i]);
            let value = Output[index];
            if (debug) {
                console.log(`str[i] = `, str[i]);
                console.log(`index = `, index);
                console.log(`value  = `, value);
            }
            result += value;
        }else{
            let value = str[i];
            if (debug) {
                console.log(`str[i] = `, str[i]);
                console.log(`value  = `, value);
            }
            result += value;
        }
        if (debug) {
            console.log(`result  = \n`, result);
        }
    }
    copy(result);
    return result;
};


// test
rot13();
rot13("SERR PBQR PNZC");
rot13("SERR PBQR PNZC", true);




rot13("SERR PBQR PNZC");
// should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!");
// should decode to "FREE PIZZA!"
rot13("SERR YBIR?");
// should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
// should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."




const Lookup_table = {
    Input: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    Output: "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm",
    CC_Input: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    CC_Output: ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]
};


const CC_Input = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
];

const CC_Output = [
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m"
];







/* 

// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

https://en.wikipedia.org/wiki/ROT13
https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/ROT13_table_with_example.svg/320px-ROT13_table_with_example.svg.png


https://en.wikipedia.org/wiki/Lookup_table


Input: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
Output: NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm


// String to Array & Array.toString()

https://www.w3schools.com/jsref/jsref_split.asp
https://www.w3schools.com/jsref/jsref_tostring_array.asp

// Tip: If an empty string ("") is used as the separator, the string is split between each character.



"ABCDEF".split();
// ["ABCDEF"]

ABCDEF".split("");
// (6) ["A", "B", "C", "D", "E", "F"]




https://regexper.com/#%2F%5Cw%2Fi

https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=Q&debug=false&circleciRepo=&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-2&targets=&version=6.26.0


*/


















