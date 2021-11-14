import { isPositiveInteger } from './validate';

describe("Is positive integer function", () => {
    test("it should accept 0", () => {
        expect(isPositiveInteger(0)).toEqual(true);
    });

    test("it should accept a number above 0", () => {
        expect(isPositiveInteger(1)).toEqual(true);
    });

    test("it should not accept a number less than 0", () => {
        expect(isPositiveInteger(-1)).toEqual(false);
    });

    test("it should not accept a data type other than number", () => {
        expect(isPositiveInteger(NaN)).toEqual(false);
    });
});