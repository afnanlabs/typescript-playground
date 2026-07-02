// GOAL: Master named Enums for immutable state management and Abstract Classes for architectural base contracts.

// 1. Defining Strict Domain Enums
enum SystemRole {
  Admin = "ADMIN_ACCESS",
  Developer = "DEVELOPER_ACCESS",
  Guest = "GUEST_ACCESS",
}

// 2. Designing the Abstract Base Blueprint
abstract class PlatformUser {
  // Utilizing constructor parameter properties shorthand cleanly!
  constructor(
    public username: string,
    public role: SystemRole,
  ) {}

  // Standard Method: Inherited by all children automatically
  public logSession(): void {
    console.log(
      `User '${this.username}' connected with clearance level: [${this.role}]`,
    );
  }

  // Abstract Method: No body allowed here! Every child class MUST implement this rule differently.
  public abstract executeSystemAction(): void;
}

// 3. Concrete Implementations (Subclasses)
class AdminUser extends PlatformUser {
  constructor(username: string) {
    super(username, SystemRole.Admin); // Route data to base abstract constructor
  }

  // Fulfilling the abstract class structural requirement
  public executeSystemAction(): void {
    console.log(
      "Action: Overwriting database constraints and flushing cache memory...",
    );
  }
}

class DevUser extends PlatformUser {
  constructor(username: string) {
    super(username, SystemRole.Developer);
  }

  // Fulfilling the abstract class structural requirement
  public executeSystemAction(): void {
    console.log(
      "Action: Pushing new compiled feature branch updates to production...",
    );
  }
}

// Runtime Execution & Constraint Verification

// const incompleteUser = new PlatformUser("Afnan", SystemRole.Guest);
// ❌ Compile Error: Cannot create an instance of an abstract class.

const admin = new AdminUser("afnan_admin");
const developer = new DevUser("affu_dev");

admin.logSession(); // Output: User 'afnan_admin' connected with clearance level: [ADMIN_ACCESS]
admin.executeSystemAction(); // Output: Action: Overwriting database constraints...

developer.logSession(); // Output: User 'affu_dev' connected with clearance level: [DEVELOPER_ACCESS]
developer.executeSystemAction(); // Output: Action: Pushing new compiled feature branch updates...
