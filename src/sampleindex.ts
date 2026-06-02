// Iterating & Common Methods

export function intermediateDemo(): void {

  let skills: string[] = ["Selenium", "Playwright", "Cypress", "API"];

  console.log("\n--- Iteration ---");

  // for-of loop
  for (let skill of skills) {
    console.log("Skill:", skill);
  }

  // forEach loop
  skills.forEach((skill, i) => {
    console.log(`forEach [${i}]: ${skill}`);
  });

  console.log("\n--- Methods ---");

  // Add element at end
  skills.push("Jest");

  // Remove last element
  skills.pop();

  // Remove first element
  skills.shift();

  // Add element at beginning
  skills.unshift("Mocha");

  console.log("Updated Skills:", skills);

  console.log("Includes Cypress?", skills.includes("Cypress"));

  console.log("Index of API:", skills.indexOf("API"));
}