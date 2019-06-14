describe('Users Matchers', () => {
    const input = {
        name: 'Jose',
        lastname: 'Montoya'
    }
    const inputExpect = {
        name: 'Jose',
        lastname: 'Montoya'
    }

    test('Compare objects', () => {
        expect(input).toEqual(inputExpect)
    })
    test('Compare objects', () => {
        expect(input).not.toEqual(inputExpect)
    })
})