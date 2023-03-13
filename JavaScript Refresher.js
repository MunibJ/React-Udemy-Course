// // Inheritance class, create it with constructor and give its variable and call it with the method.
// class Human {
//     gender = 'Male';

//     printGender = () => {
//         console.log(this.gender)
//     }
// }

// // All classess start with "class" and you can inheriet another class by adding extends
// class Person extends Human{
//         name = 'Munib';
//         lastname = 'Javed';
//         myage = 24;
//          //You can change the defined variable in the constructor of one class,even if its pre-set in another class.
//         gender = 'Female'

//     //methods for printing out the class constructor and are basically functions that you can attach to classes that do specific things
//     //This method just simply prints out the object in the class
//     printmyName = () => {
//         console.log(this.name, this.lastname);
//     }
//     printmyAge = () => {
//         console.log(this.myage);
//     }
// }

// //call the class but assigning it a variable and adding new to the front of the class name.
// const person = new Person();
// person.printmyName();
// person.printmyAge();
// person.printGender();

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Spread and Rest Operator

//Spread:
// const newArray = [...oldArray, 1, 2]
// const newObject = {...OldObject, newProp:5}

// function sortArgs(...args) {
//     return args.sort()
// }

// //A array with list of numbers
// const numbers = [1,2,3,4,];

// //the new array can call and spread the old arry by using ...[array name] and then you can add to it by putting more numbers to it.
// const newNumbers = [...numbers,5];

// console.log(newNumbers)


// const persons = {
//     Name: 'Munib'
// };

// const newPerson = {
//     ...persons,
//     Age: 28
// }

// console.log(newPerson)


// REST 
// Used in Functions

// const filter = (...args) => {
//     return args.filter(el => el === 1);
// }

// console.log(filter(1,2,3))

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Destructuring: Easily extracts array elements or object properties and store them in variables;

// Array Destrucrtruting 

// [a,b] = ['Hello', 'Munib'];
// console.log(a);
// console.log(b);

// Object Destructruing

// const numbers = [1,2,3,4];
// [x,y,z] = numbers;
// console.log(x,y,y)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Primative type 
// const number = 1;
// const num2 = number;
// console.log(num2);
// // output = 1 cause it copies the variable 


// const person = {
//     name: 'Munib'

// }
// const secondPerson = person;


// console.log(secondPerson)

// person.name = 'Javed';
// console.log(secondPerson)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Array Methods

// const numbers = [1,2,3];

// const doubleNumArray = numbers.map((num) => {
//     return num * 2
// });

// console.log(doubleNumArray)

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Exercise: Array Methods:
//Your task is to add the missing logic to a transformToObjects() function that transforms a list of numbers into a list of JavaScript objects.
//For the provided input [1, 2, 3] the transformToObjects() function should return [{val: 1}, {val: 2}, {val: 3}].
// function transformToObjects(numberArray) {
//     return numberArray.map((val) => {
//         return {val}
//     })
//     // should return an array of objects
// }
// console.log(transformToObjects(1))