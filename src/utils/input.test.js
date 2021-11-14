describe("Get Input", () => {
    const mockGetInput = jest.fn((promptText) => {
        return[promptText, 'this is my input']
    });

    test("it should get input", () => {
        expect(mockGetInput('please type some input')).toEqual(['please type some input', 'this is my input']);
    });
});