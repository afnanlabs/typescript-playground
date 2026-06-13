// Interface -> name shape for objects

interface User333 {
  id: string;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

const user333: User333 = {
  id: "1",
  name: "Afnan",
  createdAt: new Date(),
  email: "afnankhan11@gmail.com",
};

// Single interfaces
interface Admin333 extends User333 {
  permission: string[];
}

const admin333: Admin333 = {
  id: "1",
  name: "Boss",
  createdAt: new Date(),
  email: "boss01@gmail.com",
  permission: ["admin"],
};

// Mutiple Interfaces
interface WithMeta1 {
  meta: {
    active: boolean;
  };
}

interface AdminWithMeta extends Admin33, WithMeta1 {
      id: "1",
  name: "Boss",
  createdAt: new Date(),
  email: "boss01@gmail.com",
  permission: ["admin"],
  meta : {
    active : true
  }
}