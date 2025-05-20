//1. Arithmetic Operators
let a;

a = 10 + 5; //Addition
a = 10 - 5; //Subtraction
a = 10 * 5; //Multiplication
a = 10 / 5; //Division
a = 34 % 5; //modulus
a = 10 ** 2; //exponentiation

console.log(a);

// 2. Comparison Operators
// == loose equality(coerces type)
// ==== strict equality
/* != loose equality */
/* !=- strict equality */
// > greater than
// < less than
// >= greater than or equal
// <= less than or equal

let b;
let x = 10;
let y = 5;
let z = '10';

b = x == z; // true
b = x === z; // false
b = x != z; // false
b = x !== z; // true
b = x > y; // true
b = x < y; // false
b = x >= y; // true
b = x <= y; // false


console.log(b);

//3. Logical operators
// && and
// || or
/* ! not */;

let c;
let p = true;
let q = false;

c = p && q; // false
c = p || q; // true
c = !p; // false

console.log(c);

//4. Assignment Operators
// =
// +=
// -=
/* *= */
// /=
// %=
/* ** */

let d;

d = 10;
d += 5; // d = d + 5
d -= 5; // d = d - 5
d *= 5; // d = d * 5
d /= 5; // d = d / 5
d %= 5; // d = d % 5
d **= 5; // d = d ** 5

console.log(d);