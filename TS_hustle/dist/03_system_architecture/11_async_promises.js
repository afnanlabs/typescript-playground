// GOAL: Master static type-safety contracts for asynchronous data layers and concurrent execution wrappers.
// 1. Explicit Async Return Signatures
// Mark function signatures clearly as returning a typed promise wrapper
async function fetchUserById(id) {
    // Simulating an API/Database asynchronous fetch
    return {
        id: id,
        name: "Afnan Khan",
        role: "dev",
    };
}
// 2. Typing Explicit Promises & Reject States
function delayExecution(ms) {
    // Note: The rejection state ('reject') cannot be typed explicitly via generics.
    // Standard practice treats rejected errors as 'any' or 'unknown' at runtime catching.
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject(new Error("Time delay boundary must be positive."));
        }
        setTimeout(() => resolve("Execution delayed successfully!"), ms);
    });
}
// 3. Typing Concurrent Tasks (Promise.all)
async function fetchSystemMetadata() {
    return { version: "1.0.4", healthy: true };
}
async function runParallelOperations() {
    // Promise.all preserves structural positions as a strictly typed tuple
    const [user, meta] = await Promise.all([
        fetchUserById("usr-77"),
        fetchSystemMetadata(),
    ]);
    // The compiler reads the explicit positions instantly:
    console.log(`User details: ${user.name.toUpperCase()}`);
    console.log(`System Status Healthy: ${meta.healthy}`);
}
export {};
