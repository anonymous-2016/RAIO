/**
 * @author xgqfrms
 * @date 2017.09.20
 * @Module Dictionary_Map
 */


const Dictionary_Map = () => {
    let items = {};
    // has
    this.has = (key) => {
        return key in items;
    };
    // get
    this.get = (key) => {
        return(
            this.has(key) ? items[key] : undefined
        );
    };
    // set
    this.set = (key, value) => {
        items[key] = value; 
    };
    // delete
    this.remove = (key) => {
        if (this.has(key)) {
            delete items[key]; 
            return true;
        }
        return false;
    };
    // clear
    this.clear = () => {
        items = {};
    };
    // size
    // ECMAScript 5 +
    this.size = () => {
        return(
            Object.keys(items).length
        );
    };
    // ECMAScript 6 +
    this.sizeNew = () => {
        let counter = 0;
        for(let key in items) {
            if(items.hasOwnProperty(key)){
                ++counter;
            }
        }
        return counter;
    };
    // ECMAScript old
    this.sizeLegacy = function(){
        var counter = 0;
        for(var key in items) {
            if(items.hasOwnProperty(key)){
                ++counter;
            }
        }
        return counter;
    };
    // Values
    this.values = () => {
        let values = {};
        for (let key in items) {
            if (this.has(key)) {
                values.push(items[key]);
            }
        }
        return values;
    };
    // Entries
    this.getItems = () => {
        return items;
    };
};


const dictionary_test = new Dictionary_Map();
// (key, value)

dictionary_test.set(`xgqfrms`, `xgqfrms@email.xyz`);
dictionary_test.set(`Abc`, `abc@email.com`);
dictionary_test.set(`Xyz`, `xyz@email.com`);

// not too good ??? bug
dictionary_test.set({xgqfrms: `xgqfrms@email.xyz`});

console.log(dictionary_test.size()); 
console.log(dictionary_test.keys());
console.log(dictionary_test.values());
console.log(dictionary_test.getItems());

console.log(dictionary_test.has(`Abc`));
console.log(dictionary_test.get(`Abc`));
console.log(dictionary_test.has(`Xyz`));
console.log(dictionary_test.get(`Xyz`)); 

dictionary_test.remove(`Xyz`); 

console.log(dictionary_test.size()); 
console.log(dictionary_test.keys());
console.log(dictionary_test.values());
console.log(dictionary_test.getItems());

console.log(dictionary_test.has(`Xyz`));
console.log(dictionary_test.get(`Xyz`)); 















