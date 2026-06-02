let value: unknown = "Hello TypeScript";
let length1 = (value as string).length;
let length2 = (<string>value).length;
console.log(length1);