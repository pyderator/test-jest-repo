const sum = require("./index");

test("adds 1+2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("This will now pass", () => {
  expect(sum(1, 1)).toBe(2);
});

test("This will also pass", () => {
  expect(sum(2, 3)).toBe(5);
});
