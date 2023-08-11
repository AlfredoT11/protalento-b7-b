const a = require('./a');

console.log(a.aVariable);
console.log(a.aFunction);

function bFunction(){
    return 'Esta es una función de b.js';
}

module.exports = {
    bFunction
};
