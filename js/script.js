'use script';

// Constructor Function -> Function orqali object/ '{}' yasash
// const Person = function(firstName, birthYear, email){
// this.ismi = firstName
// this.birthYear = birthYear
// this.email = email

// };

// 1. new {} is created
// 2. this === {}
// 3. {} linked to prototype
// 4. function automatically returns {}
// const dilmurod = new Person('Dilmurod', 2003, 'Dilmurod@gamil.com'); // Olgiga new qoyilsa Object yasash boshlanadi va bu (OOP) yo'nalishi
// const jonas = new Person('Jonas', 1992, 'Jonas@gmail.com');
// const matilda = new Person('Matilda', 1999, 'Matilda@gmail.com');
// const admin = new Person('Admin', 2000, 'Admin@gmail.com');
// admin.permission = ['Delete user', 'Add user'];
// console.log(dilmurod, jonas, matilda, admin);


// Person.prototype.calcAge = function() {
//     console.log(2023 - this.birthYear)
// };
// dilmurod.calcAge();
// console.log(dilmurod);


// console.log(dilmurod.__proto__); // Otasidan olayotgan qiymatlar va ularni ko'rish 
// console.log(dilmurod.__proto__ === Person.prototype);


///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//---------------------------------- ES6 CLASSES ------------------------------------//
// // class  Expression 
// const person = class{

// };

// class declaretion
// class personCl {
//     static firstName = 'Alisher';

//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     };

//     calcAge(){
//         console.log(2023 - this.birthYear)
//     };

//     static greet() {
//         console.log(`Hey ${this.firstName}`)
//     };

//     get age()  {
//         return 2023 - this.birthYear
//     };
    
//     set fullName(name) {
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`)
//     };
// };

// const person = new personCl('Dilmurod Buyukov', 2003);
// console.log(person);
// personCl.greet();
// person.calcAge();


// 1. Classes are Not hoisted
// 2. Classes are executed in strict mode
// 3. Classes are first-class citizens




//----------------------------- SETTERS AND GETTERS -----------------------------//
// const account = {
//     owner: 'Jonas',
//     movements: [200, 340, -400],

//     get latest() {
//         return this.movements.at(-1)
//     }, // get orqali biz movementning ichidagi qaysidur qiymatni olamiz 

//     set latest(mov) {
//         this.movements.push(mov)
//     }, // set orqali unga yangi qiymat qo'sha olamiz
// };
// account.latest = 500
// console.log(account.movements);
// console.log(account);




//------------------------ STATIC METHOD --------------------------//
// const Person = function(firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function() {
//     console.log(2023 - this.birthYear);
// };

// Person.hey = function() {
//     console.log('Hey')
// }; // Bunday Methodlar turiga Static methodlar diyiladi Static Methodlar ichida this key word ishlatmang
// Person.hey();

// const person1 = new Person('jonas', 1990);
// console.log(person1)




//------------------------ Object.create() --------------------------//
const PersonProto = {
    calcAge() {
        console.log(2023 - this.birthYear);
    }
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.firstName = 'Dilmurod';
steven.birthYear = 2003;
steven.calcAge();
//-------------------------------

//-------------------------------
const PersonProto2 = {
    calcAge() {
        console.log(2023 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};

const steven2 = Object.create(PersonProto2);
steven2.init('Dilmurod', 2003);
console.log(steven2);
steven2.calcAge();



/* 
Coding challenge #2
Your tasks:

1. Re-create challenge #1, but this time using an ES6 class (call it 'Carcl')
2. add a getter called 'speedUs' which returns the current speed in mi/h (divide by 1.6)
3. Add a setter called 'speedUs' which sets the current speed in mi/h (but converts it to km/h before storing the value,
by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
Data car 1: 'Ford' going at 120 km/h
GOOD LUCK😃
*/










