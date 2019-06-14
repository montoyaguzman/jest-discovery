import  { sumNums, subsNums, mutiplyNums, divideNums }  from '../maths'

describe('Math Operations', () => {
    test('Test for sumNums', () => {
        expect(sumNums(1,0)).toBe(1)
    })
    test('Test for subsNums', () => {
        expect(subsNums(4,2)).toBe(2)
    })
    test('Test for mutiplyNums', () => {
        expect(mutiplyNums(1,3)).toBe(3)
    })
    test('Test for divideNums', () => {
        expect(divideNums(8,2)).toBe(4)
    }) 
})