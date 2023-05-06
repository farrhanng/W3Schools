const Farrhan = {height:"tall", skin:"dark", looks:"handsome"}
console.log(Farrhan);
console.log("Farrhan is a " + Farrhan.height + " guy.");
console.log("Farrhan is a " + Farrhan["height"] + " guy.");
Farrhan[0] = "short";
height = Farrhan[0];
console.log("Farrhan is a " + Farrhan[0] + " guy.");

const Vanessa = ["cute", "white", "sheep"];
console.log(Vanessa.length);
console.log(Vanessa.sort());

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

Vanessa.push("hungry");
console.log(Vanessa.sort());
console.log(Array.isArray(Vanessa));
console.log(Array.isArray(Farrhan));
console.log(typeof Vanessa);
console.log(typeof Farrhan);