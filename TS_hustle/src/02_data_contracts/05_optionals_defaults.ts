function greetPersonOptional(name?: string): string {
  const upperRes = name?.toUpperCase();
  //   const upperRes = name ? name?.toUpperCase() : "Guest";

  return `Hello $(upperRes)`;
}

console.log(greetPersonOptional("Afnan"));
console.log(greetPersonOptional()); // undefined case

//
function greetPersonDefault(name: string = "Guest"): string {
  return `Hello $(name.toUpperCase())`;
}

//
function connect(host: string, port?: number, secure?: boolean) {
  const p = port ?? 80;
  const s = secure ?? false;

  return `Connect ${host} ${p} ${secure}`;
}
connect("localhost", 12, true);
