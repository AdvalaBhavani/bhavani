let a = ["John", "Bob", "Alice"];
let b = [5, 10, 12, 6, 11];

let aUppercase = a.map(name => name.toUpperCase());
let bPlusTen = b.map(num => num + 10);

console.log(aUppercase);  
console.log(bPlusTen);    


let nums = [1, 2, 3, 4, 5, 6];
let evenNums = nums.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNums);

let n = ["Tom", "Jerry", "Maxwell", "Amy"];
let longNames = n.filter(name => name.length > 3);
console.log("Names longer than 3 characters:", longNames);