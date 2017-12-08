
const old_obj = {
    k1: `111`,
    k2: `222`,
    k3: `333`
};
console.log(`old_obj =\n`, old_obj);
// {k1: "111", k2: "222", k3: "333"}


/**
 * @description ES6 ...spread & Destructuring Assignment
 */

const {k1: kA, k2: kB, k3: kC,} = {...old_obj}
console.log(`kA = ${kA},`, `kB = ${kB},`, `kC = ${kC}\n`);
// kA = 111, kB = 222, kC = 333

const new_obj = Object.assign(
    {},
    {
        kA,
        kB,
        kC
    }
);
console.log(`new_obj =\n`, new_obj);
// {kA: "111", kB: "222", kC: "333"}





