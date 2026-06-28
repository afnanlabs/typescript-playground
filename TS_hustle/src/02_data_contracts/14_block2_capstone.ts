// GOAL: Combine Interfaces, Tuples, Index Signatures, and Narrowing into a single data-processing runtime engine.

// 1. Define our structural data models
interface UserMetric {
  role: "admin" | "user";
  activityLogs: number[]; // Array basics
}

// Index Signature: Dynamic dictionary mapping names to user data contracts
interface AnalyticsData {
  [username: string]: UserMetric;
}

// Tuple definition for safe pipeline input: [KeyToFind, ProcessOperation]
type FilterTuple = [string, "sum" | "average" | "statusCheck"];

// 2. The processing engine showcasing absolute type narrowing defense
function processAnalytics(
  data: AnalyticsData,
  Pipeline: FilterTuple,
): string | number | undefined {
  const [targetUser, operation] = Pipeline; // Destructuring our Tuple
  const userObj = data[targetUser];

  // Defensive Check: Defend against missing index paths safely
  if (!userObj) {
    return undefined;
  }

  // Type Narrowing using structural 'in' operator & literals
  if (operation === "statusCheck") {
    if ("role" in userObj) {
      return `Access Level: ${userObj.role.toUpperCase()}`;
    }
  }

  // Narrowing arrays to execute mathematical processing bounds
  if (operation === "sum" || operation === "average") {
    const logs = userObj.activityLogs;

    if (logs.length === 0) return 0;

    const total = logs.reduce((acc, current) => acc + current, 0);

    return operation === "sum" ? total : total / logs.length;
  }

  return "Unknown Action";
}

// ==========================================
// 3. Runtime Verification Execution
// ==========================================
const mockDb: AnalyticsData = {
  afnan_khan: { role: "admin", activityLogs: [10, 20, 30] },
  guest_user: { role: "user", activityLogs: [5, 0, 15] },
};

// Test Pipeline operations using strict tuple structures
const pipelineA: FilterTuple = ["afnan_khan", "average"];
const pipelineB: FilterTuple = ["guest_user", "statusCheck"];

console.log("Afnan Average:", processAnalytics(mockDb, pipelineA)); // Output: 20
console.log("Guest Status:", processAnalytics(mockDb, pipelineB)); // Output: Access Level: USER
