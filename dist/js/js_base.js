let firstName = 'David';
let lastName = "Lin";
let fullName = firstName + ' ' + lastName ;

console.log(fullName);

let n1 = 1;
let n2 =1.25;
let n3 =n1 + n2;

console.log(n3);

let s1 = '10';
let ns = n1 + s1

console.log(ns);

let ns2 = n1 + parseInt(s1,10);

console.log(ns2);

let ns3 = n1 + +s1;

console.log(ns3);

let a1 = [];
let a2 =[1, 2, 3, 4];

console.log(a1);
console.log(a2);

a2.push(5);

console.log(a2);

console.log(a2.join('||'));

let index = a2.indexOf(2);

console.log(index);

a2.splice(index,1);

console.log(a2);
