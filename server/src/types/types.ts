export type Admin = {
  id?: number;
  name: string;
  password?: string;
};

export type AdminToken = {
  token: string;
  id: number;
  name: string;
};

export type Contact = {
  id?: number;
  name: string;
  number: number;
};

export type TableQuality = {
  id?: number;
  type: "pros" | "cons";
  text: string;
};

export type Todo = {
  id?: number;
  text: string;
  created_at?: Date;
};

export type User = {
  id?: number;
  name: string;
};

export type TableType = "pros" | "cons";
