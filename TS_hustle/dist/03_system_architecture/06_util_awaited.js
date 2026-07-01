// Prmoise<T>
// nested Promise<Promise<T>
// Thenables -> .then
async function fetchCount() {
    return 42;
}
async function getData() {
    return Promise.all([
        Promise.resolve(1),
        Promise.resolve("x"),
    ]);
}
export {};
