// GOAL: Master standard interface modeling, optional fields, immutability contracts, single inheritance extensions, and multiple composition paths.
const user333 = {
    id: "1",
    name: "Afnan",
    createdAt: new Date(),
    email: "afnankhan11@gmail.com",
};
const admin333 = {
    id: "1",
    name: "Boss",
    createdAt: new Date(),
    email: "boss01@gmail.com",
    permission: ["admin"],
};
// Instantiated the actual variable object adhering to the composite interface rules
const adminWithMeta = {
    id: "1",
    name: "Boss",
    createdAt: new Date(),
    email: "boss01@gmail.com",
    permission: ["admin"],
    meta: {
        active: true,
    },
};
export {};
