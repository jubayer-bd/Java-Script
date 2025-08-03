// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// Print even numbers from 2 to 20
// for (let i = 2; i <= 20; i += 2) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// multiplication table of 5

// for (let i = 1; i <= 12; i++) {
//   // console.log(" 5 X " + i + " = " + 5 * i);
//   if (i === 11) {
//     continue; // Skip the iteration when i is 11
//     // break; // This line will never be reached due to the continue statement
//   }
//   console.log(`5 X ${i} = ${5 * i}`);
//   // console.log(5 * i);
// }

// let myMarks = 85;
// let yourMarks = 90;
// while (myMarks <= yourMarks) {
//   console.log("I am still behind you");
// }

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i > 10);

// * type of variable

// let greeting = " hello. world !";
// console.log(typeof greeting);
// let isActive = true;
// console.log(typeof isActive);
// let numbers = 1;
// console.log(typeof numbers);

// // *Immutable
// let myName = "John";
// myName[0] = "j"; // This will not change the string
// console.log(myName); // Output: John
// // Strings are immutable in JavaScript, so you cannot change a character directly.

// // *Mutable
// myName = "j" + myName.slice(1); // Create a new string with the first character changed
// console.log(myName); // Output: john

// *toUpperCase and toLowerCase and trim
// let msg = "  Hello JavaScript!  ";

// console.log(msg.toLowerCase()); // "  hello javascript!  "
// console.log(msg.toUpperCase()); // "  HELLO JAVASCRIPT!  "
// console.log(msg.trim());
// let fatherName = "Bazlur Rahman";
// console.log(fatherName.toUpperCase());
// console.log(fatherName.toLowerCase());
// console.log(fatherName.trim());
// console.log(fatherName.length); // Length of the string
// console.log(fatherName[0]); // Accessing the first character of the string
// console.log(fatherName.charAt(0)); // Accessing the first character using charAt
// console.log(fatherName.indexOf("Rahman")); // Finding the index of a substring
// console.log(fatherName.lastIndexOf("a")); // Finding the last index of a character
// console.log(fatherName.slice(0, 5)); // Extracting a substring from index 0 to 5

// *slice(), concat(), includes()
// let text = "javascript";

// slice
// console.log(text.slice(0, 4).toUpperCase());
// let text = "javascript";
// let newText = "hello";
// console.log(text.includes("script")); // true
// console.log(newText.concat(" ", text)); // "hello javascript"

// let str = "hello";
// let reversed = str.split("");
// console.log(reversed); // ["h", "e", "l", "l", "o"]
// console.log(reversed.join("")); // "hello"
// console.log(reversed.reverse().join("")); // "olleh"

// let mySelf = {
//   name: "Md.Jubayer Hossain",
//   age: 25,
//   isActive: true,
// };
// console.log(mySelf);
// // console.log(mySelf.age);

// mySelf.height = 5.6; // Adding a new property
// // console.log(mySelf);
// mySelf.age = 20;
// // age = mySelf.age; // Accessing property using dot notation

// // console.log(mySelf["age"]); // Accessing property using bracket notation
// console.log(mySelf);
// mySelf.name = "Jubayer Hossain"; // Changing the value of a property
// console.log(mySelf.name);
// console.log(mySelf); // Accessing property using bracket notation

// let user = {
//   name: "Jubu",
//   greet: function () {
//     return "Hello, " + this.name;
//   },
// };

// // console.log(user.greet()); // "Hello, Jubu"
// let user = {
//   name: "Jubu",
//   age: 25,
//   greeting: function () {
//     return "Hello, I am " + this.name + " and I am " + this.age + " years old.";
//   },
// };
// console.log(user);
// console.log(user.greeting()); // "Hello, Jubu and I am 25 years old."

// let mySelf = {
//   name: "Md.Jubayer Hossain",
//   age: 25,
//   marks: {
//     math: 85,
//     english: 90,
//     science: 95,
//   },
//   hobbies: ["reading", "gaming"],
// };
// mySelf.hobbies[3] = "coding";
// mySelf.hobbies[2] = "eating"; // Adding a new hobby to the hobbies array
// console.log(mySelf);
// console.log(mySelf.marks); // Accessing nested object
// console.log(mySelf.marks.math);
// console.log(mySelf.hobbies); // Accessing array in object
// console.log(mySelf.hobbies[0]); // Accessing first element of the array in object

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
};

// for (let key in car) {
//   console.log(key + ": " + car[key]);
// }

for (let key in car) {
  console.log(car[key]);
}
// Output:
// brand: Toyota
// model: Corolla
// year: 2022
