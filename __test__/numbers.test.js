import { numbers } from '../numbers'

describe('Compare Numbers', () => {
    test('Greater than', () => {
        expect(numbers(2,2)).toBeGreaterThan(3)
    })
    test('Greater than or equal', () => {
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4)
    })
    test('Less than', () => {
        expect(numbers(2,2)).toBeLessThan(5)
    })
    test('Less than or queal', () => {
        expect(numbers(2,2)).toBeLessThanOrEqual(5)
    })
    test('Float Numbers', () => {
        expect(numbers(0.2,0.2)).toBeCloseTo(0.4)
    })
})