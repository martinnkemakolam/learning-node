// let assert = require('assert')
let {assert} = require('chai')
let testArr
let testStr
// before called before a test startes
before(()=>{
    testArr = ['a', 'b', 'c']
    testStr = 'a,b,c'
})

// describe the test with describe
describe('first test', () => {
    // gets called beforeeach test start
    beforeEach(()=>{
        testStr = Array.isArray(testStr) ? testStr : testStr.split(',')
    })
    // it, what should happen
    it('should return an array', () => {
        //assert, used for the testing
        assert(Array.isArray(testStr))
    })
    it('should return the same array', () => {
        assert.equal(testArr.length, testStr.length, 'arrays have equal length')
        testArr.forEach((ele, id)=>{
            assert(ele, testStr[id], 'values are equal')
        })
    })
})