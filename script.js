//Challenge 1: Given an array of strings, write a code to return a new array that only includes the strings that are 5 characters or more in length using filter method.
const strings = ["dog", "by", "cat", "camping", "large", "flower", "rabbit"];

const filterstrings = strings.filter((str) => str.length <= 5);
console.log(filterstrings);
//Challenge 2: Given an array of numbers, write a code to return a new array of squares for each item in an array using map method.
const numbers = ["45", "55", "65", "75", "85"];

const square = numbers.map((num) => num * num);
console.log(square);
//Challenge 3: Given an array of alphabets, write a code to concatenate all the elements of the array "alphabets" to make it as a string and print the same in console. Hint: Use reduce method.
const alphabets = ["K", "a", "l", "v", "i", "u", "m"];

const word = alphabets.reduce((acc, current) => acc + current + "");
console.log(word);
//Challenge 4: Given an array of numbers, write a code to return a first even number using find method.
const number = [1, 2, 3, 4, 5];

const even = number.find((num) => num % 2 === 0);
console.log(even);
//Challenge 5: Given a list of ranks, write a code to return the index of the first occurrence of the number 7 in the ranks array using findIndex method.
const ranks = [1, 5, 7, 8, 10, 7];

const index = ranks.findIndex((num) => num === 7);
console.log(index);
//Challenge 6: Given a list of numbers, using forEach loop iterate over each element of the array to print the output as:
// 0:2
//1:4
//2:6
//3:8
const num = [2, 4, 6, 8];
num.forEach((value, index) => {
  console.log(`${index}:${value}`);
});
//Challenge 7: Given an array of marks, using "some method", check if the following array has at least one element less than 45 and print true.
const marks = [35, 66, 25, 85, 75, 45];

const LessThan45 = marks.some((mark) => mark < 45);
console.log(LessThan45);
//Challenge 8: Given an array of numbers, write a code to check if all the array elements are positive by using "every method" and print true if all the numbers are positive, else print false.
const positive = [2, 3, 4, -1];

const arePositive = positive.every((num) => num > 0);
console.log(arePositive);
//Challenge 9: Given an array of objects, using dot and bracket notation print the output as :
//1. "Audi"
//2. "Toyota  red"
//3. "Hyundai black 5"
//4. "Renault silver 6"
const cars = [
  {
    name: "Audi",
    color: ["black", "red", "grey"],
    capacity: 5,
  },
  {
    name: "Hyundai",
    color: ["white", "grey", "black"],
    capacity: 5,
  },
  {
    name: "Toyota",
    color: ["red", "white", "black"],
    capacity: 7,
  },
  {
    name: "Renault",
    color: ["blue", "silver", "red"],
    capacity: 6,
  },
];

const oneDot = cars[0].name;
console.log(oneDot);
const oneBracket = cars[0]["name"];
console.log(oneBracket);

const twoDot = cars[2].name + " " + cars[2].color[0];
console.log(twoDot);
const twoBracket = cars[2]["name"] + " " + cars[2]["color"][0];
console.log(twoBracket);

const threeDot = cars[1].name + " " + cars[1].color[0] + " " + cars[1].capacity;
console.log(threeDot);
const threeBracket =
  cars[1]["name"] + " " + cars[1]["color"][0] + " " + cars[1]["capacity"];
console.log(threeBracket);

const fourDot = cars[3].name + " " + cars[3].color[1] + " " + cars[3].capacity;
console.log(fourDot);
const fourBracket =
  cars[3]["name"] + " " + cars[3]["color"][1] + " " + cars[3]["capacity"];
console.log(fourBracket);

//Challenge 10: Given a nested object,
//1. Delete the "phoneno" property from the object person.
//2. Using the hasOwnProperty check whether the person object has the property "bike", "house".
//3. Using dot and bracket notation get the output as "Mr Ajay Kumar travels by plane called Air123".
//4. Change the email property of person object to "ajaykumar@gmail.com".
//5. Generate an array of keys to the object person using object.keys() method.

const person = {
  name: "Ajay Kumar",
  age: 27,
  vehicles: {
    car: "limousine",
    bike: "ktm-duke",
    plane: "lufthansa",
  },
  email: "ajay@gmail.com",
  phoneno: 9978425555,
};

delete person.phoneno;

const hasBike = person.hasOwnProperty("bike");
const hasHouse = person.hasOwnProperty("house");
console.log("Does the person have a 'bike'? " + hasBike);
console.log("Does the person have a 'house'? " + hasHouse);

const lineDot = "Mr " + person.name + " travels by plane called " + person.vehicles.plane;
console.log(lineDot); 
const lineBracket = "Mr " + person['name'] + " travels by plane called " + person['vehicles']['plane'];
console.log(lineBracket);


person.email = "ajaykumar@gmail.com";

const key = Object.keys(person);
console.log(key);
