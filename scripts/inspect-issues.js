import fs from "fs";

const data = JSON.parse(fs.readFileSync("audit-screenshots/audit-summary.json", "utf-8"));
console.log("=== AXE ISSUES ===");
console.log(JSON.stringify(data.axeIssues, null, 2));

console.log("\n=== IMAGE ISSUES ===");
console.log(JSON.stringify(data.imageIssues, null, 2));

console.log("\n=== H1 ISSUES ===");
console.log(JSON.stringify(data.h1Issues, null, 2));

console.log("\n=== OVERFLOW FAILURES ===");
console.log(JSON.stringify(data.overflowFailures, null, 2));

console.log("\n=== SMALL TOUCH TARGETS ===");
console.log(JSON.stringify(data.smallTouchTargets, null, 2));

