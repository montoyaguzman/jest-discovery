import * as trueFunctions from '../true'
import { exportAllDeclaration } from '@babel/types';

describe('Test null values', () => {
    test('validate isNull', () => {
        expect(trueFunctions.isNull()).toBeNull()
    })
})

describe('Test true values', () => {
    test('validate isTrue', () => {
        expect(trueFunctions.isTrue()).toBeTruthy()
    })
})

describe('Test false values', () => {
    test('validate isFalse', () => {
        expect(trueFunctions.isFalse()).toBeFalsy()
    })
})

describe('Test undefined values', () => {
    test('validate isUndefined', () => {
        expect(trueFunctions.isUndefined()).toBeUndefined()
    })
})