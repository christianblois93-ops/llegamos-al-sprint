// Run with: node --test
const test = require("node:test");
const assert = require("node:assert");
const { sprintStatus, sprintCapacity } = require("./sprint.js");

test("5 days left means capacity 25", () => {
  assert.strictEqual(sprintCapacity(5), 25);
});

// 5 days x 5 points = capacity 25
test("10 points in 5 days is green", () => {
  assert.strictEqual(sprintStatus(10, 5), "green");
});

test("22 points in 5 days is yellow", () => {
  assert.strictEqual(sprintStatus(22, 5), "yellow");
});

test("30 points in 5 days is red", () => {
  assert.strictEqual(sprintStatus(30, 5), "red");
});

test("pending points with 0 days left is red", () => {
  assert.strictEqual(sprintStatus(3, 0), "red");
});
