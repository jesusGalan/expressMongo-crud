const simple = require('simple-mock');
const { assert, describe } = require('mocha');

let obj = {
    foo: 'bar',
    num: 0
};

describe('obj is foo bar', (obj) => {
    console.log(obj);
    it('obj is foo bar certainly', (obj) => {
        console.log(obj);
        obj.num++;
        assert(obj.num === 1);
        obj.num++;
        assert(obj.num === 2);
    })
    console.log(obj);
});
