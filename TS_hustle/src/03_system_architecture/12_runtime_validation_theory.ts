// GOAL: Master the theoretical architecture of Runtime Validation (Zod) vs Static Compiling.
// LOCATION: Save this file inside 'src/03_system_architecture/12_runtime_validation_theory.ts'

/*

             THE RUNTIME VALIDATION BREAKDOWN (Q&A ARCHITECTURE)


Q1: Why do my beautifully designed TypeScript types completely fail to protect 
    my application once it is deployed and running live?

A1: Because of Type Erasure. TypeScript is purely a development-time tool. 
    When the compiler outputs your code, it strips out every single interface, 
    type alias, and generic signature. 
    
    The running application is written in raw, vanilla JavaScript, which has no 
    concept of your "User" type. If an external API changes its payload shape or 
    sends a 'null' instead of a string, your typed boundaries offer zero protection, 
    frequently leading to silent failures or complete application crashes at runtime.





Q2: What exactly is Zod, and how does it bridge this critical runtime safety gap?

A2: Zod is a TypeScript-first schema declaration and validation library. Instead of 
    writing standard static types that disappear, you build an actual executable JavaScript 
    object called a "Schema" (e.g., z.object({ id: z.string() })). 
    
    At runtime, this schema acts as an active gatekeeper. When un-trusted data enters 
    via an API call, database query, or form submission, the schema parses the data 
    character by character. If the payload matches, it passes through; if it fails, 
    Zod intercepts the failure immediately and throws a clean, actionable validation error.


Q3: Does using a runtime validation library mean I have to write everything twice—
    once as a Zod schema and once as a TypeScript interface?

A3: Absolutely not. This is Zod's greatest design superpower: Type Inference. 
    You declare your structural validation schema exactly *once* as your single source 
    of truth. Zod then provides a special utility type called 'z.infer<typeof schema>'. 
    
    The compiler automatically reads your runtime object and extracts a perfect, 
    immutable static TypeScript type from it. This completely eliminates code duplication 
    and prevents type drift when your data contracts evolve.


Q4: Where are the most critical integration choke points for runtime validation 
    within full-stack applications (like ThinkTrack or FitScore)?

A4: There are three non-negotiable boundaries where static types cannot be trusted:
    
    1. HTTP Request Payloads: Validating incoming 'req.body' and query strings inside 
       backend API routing controllers before processing database logic.
    2. External Third-Party APIs: Wrapping 'fetch' or 'axios' response vectors to guarantee 
       that outside microservices haven't changed their contract models unexpectedly.
    3. Input Forms: Intercepting user client-side form submissions to check data bounds 
       (like min/max lengths or emails) before passing data further into system memory.
*/

// SIMULATED STRUCTURAL ARCHITECTURE BLOCK

/* (Mental model of how the code lays out cleanly without actual execution boilerplate)

  // Step 1: Declare the real-world executable gatekeeper schema
  const UserSchema = z.object({
    id: z.string().uuid(),
    email: z.string().email(),
    age: z.number().min(18)
  });

  // Step 2: Auto-infer the compile-time type (Single Source of Truth)
  type User = z.infer<typeof UserSchema>;

  // Step 3: Parse un-trusted runtime payloads safely
  const untrustedApiResponse = await fetch("/api/v1/user/7").then(res => res.json());
  
  // Zod parses data here. If it's invalid, it intercepts immediately before application code runs!
  const safePayload: User = UserSchema.parse(untrustedApiResponse); 
*/
