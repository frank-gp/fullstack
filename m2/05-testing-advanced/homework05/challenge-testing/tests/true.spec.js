/* 
cd challenge-testing
npx jest --watchAll tests/true.spec.js
npx jest tests/true.spec.js
npx jasmine challenge-testing/tests/true.spec.js
 */

it("true is true", () => expect(true).toBe(true));
