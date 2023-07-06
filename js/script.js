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

//------------------------- JavaScript constructor --------------------------//
// constructor = A special method for assigning properties.
//                Automatically  called when creating an object.

// class Car{

//     constructor(make, model, year, color) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }

//     drive(){
//         console.log("You drive the car!");
//     }
//     brake(){
//         console.log("You step on the brakes!");
//     }
// }

// let car1 = new Car("Ford", "Mustang", 2022, "Red");
// let car2 = new Car("Chevy", "Corvette", 2021, "black");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);



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
// const Bekzod = new personCl('Bekzod Buyukov', 2001);
// console.log(person);
// console.log(Bekzod);
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
// const PersonProto = {
//     calcAge() {
//         console.log(2023 - this.birthYear);
//     }
// };
// const steven = Object.create(PersonProto);
// const Dilmurod  = Object.create(PersonProto);

// console.log(steven);
// console.log(Dilmurod);
// steven.firstName = 'Steven';
// steven.birthYear = 1997;
// steven.calcAge();
// //-------------------------------

// //-------------------------------
// const PersonProto2 = {
//     calcAge() {
//         console.log(2023 - this.birthYear);
//     },

//     init(firstName, birthYear, email) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//         this.email = email;
//     }
// };
// const steven2 = Object.create(PersonProto2);

// steven2.init('Dilmurod', 2003, 'DilmurodBuyukov@gmail.com');
// console.log(steven2);
// steven2.calcAge();



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

// class CarCl {
//     constructor(CurrentSpeed) {
//         this.current = CurrentSpeed
//     };

//     get speedUs(){
//         return this.current * 1.6 
//     };

//     set speedUs(val) {
//         return val * 2
//     };
// }
// const Ford = new CarCl(220);
// CarCl.speedUs = 240
// console.log(Ford.speedUs);
// console.log(CarCl.speedUs);




//-------------------------- INHERITANCE BETWEEN CLASSES: CONSTRUCTOR FUNCTION ---------------------------//
// const Person = function (firstName, birthYear, job) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     // this.job = job
// };

// Person.prototype.calcAge = function() {
//     console.log(2023 - this.birthYear);
// };

// const Student = function(firstName, birthYear, course) {
// //    this.firstName = firstName; // canceled
// //    this.birthYear = birthYear; // candeled

// Person.call(this, firstName, birthYear); // Agar bir xil qiymatlar ishlatilayotgan bo'lsa shu qiymatlarni boshqa bir joydan call qilib chaqirsak bo'ladi.
//    this.course = course;
// };

// Student.prototype = Object.create(Person.prototype); // Boshqa bir constructer functiondan prototypeni chaqirib olish

// const mike = new Student('Mike', 1993, 'Computer Science');
// console.log(mike);
// mike.calcAge();
 

// console.log(mike instanceof Student); // instanceof shu asosida paydo qilingan degani, Misol uchun mike Student classi asosida yasalgan


/*
Coding Challenge #3
Your tasks:
1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has the
current battery charge in % ('charge' property)
2. Implement a 'chargeBattery' method which takes an argument
'chargeTo' and sets the battery charge to 'chargeTo'
3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'
4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
you 'accelerate'! Hint: Review the definiton of polymorphism 😉
Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/
        


//----------------------------- INHERITANCE BETWEEN CLASSES: ES6 CLASSES -------------------------------//

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
 
// class StudentCl extends personCl {
//     constructor(fullName, birthYear, course){
//         super(fullName, birthYear) // super() Parent classni constructorini ishga tushurib beradi va super()ni ichiga parent class constructorini orgumentlarini kirgizib qo'yishimiz kerak
//         this.course = course
//     }

//     introduce(){
//         console.log(`My name is ${this._fullName} and I study ${this.course}`)
//     }
// }

// const mike2 = new StudentCl('Dilmurod Dilmurod', 2003, 'cl');
// console.log(mike2); // Birinchi extends qib qolamiz keyin constructorni ichida birinchi bo'lib super()ni chaqiramiz
// mike2.introduce();




//---------------------------- INHERITANCE BETWEEN CLASSES: Object.create() --------------------------//
// const PersonProto = {
//     calcAge(){
//         console.log(2023 - this.birthYear);
//     },

//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },

// };

// //const steven = Object.create(PersonProto)

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function(firstName, birthYear, course) {
// PersonProto.init.call(this, firstName, birthYear);
// this.course = course;
// };

// const jay = Object.create(StudentProto);

// console.log(jay)
// console.log(StudentProto);

// jay.init('Jay', 2000, 'CS');



//------------- ES6 ANOTHER CLASS EXAMPLES -------------//
// class Account {
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this._pin = pin;
//         this._movements = [];
//         this.locale = navigator.language;

//         console.log(`Thanks for opening an  account ${this.owner}`);

//     } // ENCAPSULATION: PROTECTED PROPERTIES AND METHODS // Oldiga _ qo'yib ketilgan bo'lsa u mahfiy ma'lumot classdan tashqarida ishlatmaslikni anglatadi va bu bilan biz dasturchilarni ogohlantiramiz

//     deposite(val) {
//         this._movements.push(val)
//     }

//     withdrawal(val) {
//         this._movements.push(-val)
//     }

//     approveLoan(val) {
//         return true
//     }

//     requestLoan(val) {
//         if(this._approveLoan(val)) {
//             this._movements.push(val)
//         }
//     }
// }

// const acc1 = new Account("Jonas", "EUR", 1111,);
// const acc2 = new Account("Jessica", "USD", 2222);
// const acc3 = new Account("Dilmurod", "SOM", 3333);
// console.log(acc1, acc2, acc3);

// acc1.deposite(250);
// acc1.withdrawal(100);

// acc1.requestLoan(1000);



//--------------------- ENCAPSULATION: PRIVATE CLASS FIELDS AND METHODS --------------------//
// class Account {
//     // PUBLIC FIELDS
//     local = navigator.language;

//     //PRIVATE FIELD
//     #movements = [];
//     #pin;
//     #owner

//     constructor(owner, currency, pin) {
//         this.#owner = owner;
//         this.currency = currency;
//         this.#pin = pin;

//         console.log(`Thanks for opening an  account ${this.owner}`);

//     } 

//     deposite(val) {
//         this.#movements.push(val)
//         return this
//     }

//     withdrawal(val) {
//         this.#movements.push(-val)
//     }

//     #approveLoan(val) {
//         return true
//     }

//     requestLoan(val) {
//         if(this.#approveLoan(val)) {
//             this.#movements.push(val)
//         }
//     }

//     getMovements() {
//         return this.#movements
//     }
// }

// const acc1 = new Account("Jonas", "EUR", 1111,);

// acc1.deposite(300).deposite(200).withdrawal(100) // deposite chaining bo'lishi uchun class ichidagi deposite ichiga return this qilishimiz kerak Agar withdrawalga ham chaining qilmoqchi bo'lsak unga ham return this qilishimiz kerak

// // console.log(acc1.#movements);
// console.log(acc1.getMovements());
// console.log(acc1.owner);


/*
Coding Challenge #4
Your tasks:
1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
child class of the 'CarCl' class
2. Make the 'charge' property private
3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
methods of this class, and also update the 'brake' method in the 'CarCl'
class. Then experiment with chaining!
Test data:
§ Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

















