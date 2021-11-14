describe("Get Input", () => {
    const mockGetInput = jest.fn((promptText) => {
        return new Promise((resolve, reject) => {
            const getInput = 'this is my input';

            if(getInput.length > 0) {
                resolve([promptText, 'this is my input']);
            } else {
                reject(new Error('get input failed'));
            }
        });
    });

    test('it should get input', () => {
        return mockGetInput('this is my prompt').then(data => {
            expect(data).toStrictEqual(['this is my prompt', 'this is my input']);
        });
    });
});