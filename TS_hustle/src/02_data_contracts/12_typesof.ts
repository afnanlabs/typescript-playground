

// typesof for premitives
function describeTypeOf(x: unknown){

}

console.log(
    describeTypeOf("Hi"),
    describeTypeOf(26),
    describeTypeOf(true,)
    describeTypeOf(10n),
    describeTypeOf(Symbol("Afnan")),
    describeTypeOf(undefined),
    describeTypeOf(() => {}),
    describeTypeOf(null),
    describeTypeOf({}),
)
