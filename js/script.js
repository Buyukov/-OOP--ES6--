'use script';

// Constructor Function -> Function orqali object/ '{}' yasash
const Person = function(firstName, birthYear, email){
this.ismi = firstName
this.birthYear = birthYear
this.email = email

};

// 1. new {} is created
// 2. this === {}
// 3. {} linked to prototype
// 4. function automatically returns {}
const dilmurod = new Person('Dilmurod', 2003, 'Dilmurod@gamil.com'); // Olgiga new qoyilsa Object yasash boshlanadi va bu (OOP) yo'nalishi
const jonas = new Person('Jonas', 1992, 'Jonas@gmail.com');
const matilda = new Person('Matilda', 1999, 'Matilda@gmail.com');
const admin = new Person('Admin', 2000, 'Admin@gmail.com');
admin.permission = ['Delete user', 'Add user'];
console.log(dilmurod, jonas, matilda, admin);


Person.prototype.calcAge = function() {
    console.log(2023 - this.birthYear)
};
dilmurod.calcAge();
console.log(dilmurod);


console.log(dilmurod.__proto__); // Otasidan olayotgan qiymatlar va ularni ko'rish 
console.log(dilmurod.__proto__ === Person.prototype);


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





































