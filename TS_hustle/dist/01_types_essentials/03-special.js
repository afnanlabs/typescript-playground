// strictNullChecks
// let title: string = "intro";
// title = undefined;
let subtitle = "afnan khan";
// void: function doesn't return a usefull value
function log(msg) {
    console.log(msg);
}
// never returns
function fail(msg) {
    throw new Error(msg);
}
// DO NOT USE ANY -> Try tto ignore as much as possible
const valueAny = JSON.parse('{"x" : 1}');
valueAny.notThere.toFixed(2); // this compiles but can break/explode at runtime, so try to avoid 'any'
export {};
