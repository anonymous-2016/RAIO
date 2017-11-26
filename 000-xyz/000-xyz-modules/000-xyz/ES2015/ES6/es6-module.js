// ES6 module

const ES6_Module = (args = []) => {
    console.log(`this is an ES6 Module!`);
    if (args.length > 0) {
        try {
            args.map(
                (arg,i) => console.log(`arg[${i}] = ${arg}!`)
            );
        } catch (error) {
            console.log(`Sorry, some error occurred!\n`, error);
        }
    }
};

export default ES6_Module;
export {ES6_Module};
export {ES6_Module as ES6M};





