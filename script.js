// functions in javascript
function level(name) {
    console.log("hey, " + name + " you are nice!");
    console.log("hey, " + name + " you are good!");
    console.log("hey, " + name + " you are great!");
    console.log("hey, " + name + " you are greatest!");

}
level("virat kohli");
level("aditya ranjan");

function add(a, b,c=18) {
    return a + b + c;
}

result = add(10, 20);
result1 = add(30, 40);
result2 = add(50, 60);
result3 = add(70, 80);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);

// arrow function
const func1 = (a) => {
    console.log("i am an arrow function",a);
}
func1(18);
func1(20);
func1(30);
