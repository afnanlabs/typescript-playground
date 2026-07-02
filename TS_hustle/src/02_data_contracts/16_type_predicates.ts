// GOAL: Master User-Defined Type Predicates ('parameter is Type') to force conditional type narrowing across isolated scopes.

interface WebDeveloper {
  techStack: string[];
  writeCode: () => void;
}

interface Powerlifter {
  oneRepMaxWeight: number;
  liftWeights: () => void;
}

// 1. Defining the Type Predicate Contract

// Using ': candidate is WebDeveloper' instead of a simple ': boolean'
function isDeveloper(
  candidate: WebDeveloper | Powerlifter,
): candidate is WebDeveloper {
  // Runtime validation logic: Check if the 'techStack' property exists on the object
  return (candidate as WebDeveloper).techStack !== undefined;
}

// 2. Practical Application & Consumption

function executeDailyRoutine(person: WebDeveloper | Powerlifter) {
  if (isDeveloper(person)) {
    // 👍 Safe Checkpoint: Narrows context directly to 'WebDeveloper' inside this block
    console.log("Status: Developer detected.");
    person.writeCode();
  } else {
    // 🧠 Fallback Inference: Because it failed the predicate check, TS knows it MUST be a 'Powerlifter'
    console.log("Status: Athlete detected.");
    person.liftWeights();
  }
}

// 3. Array Filtering Superpower (Real-World Use Case)

const mixedGymAndOfficeList: (WebDeveloper | Powerlifter)[] = [
  {
    techStack: ["Node.js", "MySQL"],
    writeCode: () => console.log("Coding..."),
  },
  { oneRepMaxWeight: 180, liftWeights: () => console.log("Lifting...") },
];

// Standard array filtering drops type context unless you explicitly hook a Type Predicate function into it
const pureDeveloperTeam: WebDeveloper[] =
  mixedGymAndOfficeList.filter(isDeveloper);

console.log(`Filtered Developer Count: ${pureDeveloperTeam.length}`); // Output: 1
