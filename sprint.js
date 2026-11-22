// How many story points the team finishes per day (fictional demo value).
const POINTS_PER_DAY = 5;

// How many points the team can still finish before the sprint ends.
function sprintCapacity(daysLeft) {
  return daysLeft * POINTS_PER_DAY;
}

// Returns "green", "yellow" or "red" for the sprint.
function sprintStatus(pendingPoints, daysLeft) {
  const capacity = sprintCapacity(daysLeft);

  if (pendingPoints <= capacity * 0.9) return "green"; // comfortable
  if (pendingPoints <= capacity) return "yellow";      // tight
  return "red";                                        // won't make it
}

// Lets the tests (Node) use the function too; the browser ignores this line.
if (typeof module !== "undefined") module.exports = { sprintStatus, sprintCapacity };
