var array = [true, 42, "and you"];
var alt = new Array(true, 42, "and you"); //but don't do this. It is too LOOOOOOOOOONG


console.log("array item 1: " + array[0]);
console.log("array item 2: " + array[1]);
console.log("array item 3: " + array[2]);

console.log("alternative array item 1: " + alt[0]);
console.log("alternative array item 2: " + alt[1]);
console.log("alternative array item 3: " + alt[2]);

array[0] = false;

console.log(array);

console.log("array length is " + array.length);

console.log("the first itemin array is " + array[0] + ". the last item in array is" + array[array.length - 1]);

array.push("Alt");

array[array.length] = " + f4";
