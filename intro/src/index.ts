//Basic Types
let id: number = 5;
let company: string = "Sirvan Doukchi";
let isPublished: boolean = true;
let x: any = "Hello";
let age: number = 787;

let ids: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr: any[] = [1, true, "Great"];

//Tuple Types
let person: [number, string, boolean] = [1, "Sirvs", false];
//Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "Rose"],
  [3, "Matt"],
];

//Union Type
let pid: string | number = 22;
pid = 54;
pid = "fifty four";

//Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1.Left);

//Objects

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "john",
};
