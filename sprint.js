// How many story points the team finishes per day (fictional demo value).
const POINTS_PER_DAY = 5;

// Returns "green", "yellow" or "red" for the sprint.
function sprintStatus(pendingPoints, daysLeft) {
  const capacity = daysLeft * POINTS_PER_DAY;

  if (pendingPoints <= capacity * 0.8) return "green"; // comfortable
  if (pendingPoints <= capacity) return "yellow";      // tight
  return "red";                                        // won't make it
}

// Lets the tests (Node) use the function too; the browser ignores this line.
if (typeof module !== "undefined") module.exports = { sprintStatus };
