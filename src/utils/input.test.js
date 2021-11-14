describe("Get Input", () => {
    const mockGetInput = jest.fn((promptText) => {
        return new Promise((resolve, reject) => {
            resolve([promptText, 'this is my input']);
            reject(new Error('get input failed'));
        });
    });

    test('it should get input', () => {
        return mockGetInput('this is my prompt').then(data => {
            expect(data).toStrictEqual(['this is my prompt', 'this is my input']);
        });
    });
});