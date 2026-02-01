// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a)
// console.log(b)
// console.log(c)

// {}  //scope don't confuse this with object declaration


// let a = 100 
// if(true){
//     let a = 10;
//     console.log('inner',a)
// }
// console.log('outer', a)


// let i = 10

// for(let i=0 ;i<5; i++){
//     console.log("inner",i)

// }

// console.log("outer",i)

// {
//     a = 2;
//     console.log(a)
//     var a;
// }

    // after hoisting the above code looks like the below one


// {
//     var a;
//     a = 2
//     console.log(a)
// }



// function init() {
//     let name = "Mozilla"; 
//     function displayName() {
//         let innerVar1 = 'a'
//     }
//     displayName();
//     function innerFunc() {
//         let innerVar2 = 'b'
//     }
//     innerFunc()
//   }
//   init();



// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms a closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
//   init();



// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();



// document.getElementById('pink').onclick = function(){
//     document.body.style.backgroundColor = 'pink';
// }
// document.getElementById('red').onclick = function(){
//     document.body.style.backgroundColor = 'red';
// }


// document.getElementById('pink').onclick = handleClick('pink')
// document.getElementById('red').onclick = handleClick('red')


// function handleClick(color){
//     return function(){
//         document.body.style.backgroundColor = `${color}`;
//     }
// }


// function SetUsername(username){
//     console.log("hello")
//     this.username = username;
// }

// function createUser(username, email, password){
//     // SetUsername(username);
//     SetUsername.call(this,username);
//     this.email = email;
//     this.password = password;
// }

// const person1 = new createUser('pranav', 'pranav@gmail.com', '12345');
// console.log(person1)


// let person1 = {
//     fname: 'pranav',
// }
// let person2 = {
//     fname: 'iop',
// }

// let person = {
//     fullname: function(lname){
//         return this.fname + " " + lname;
//     }
// }

// let result =  person.fullname.apply(person1,['raju'])
// console.log(result)

// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     // display: function () {
//     //   let x = document.getElementById("demo");
//     //   x.innerHTML = this.firstName + " " + this.lastName;
//     // }
//     display: function(){
//         return this.firstName + " " + this.lastName
//     }
//   }
  
//  let result =  person.display();
//  console.log()


// let person1 = {
//     fname: 'pranav',
//     lname: 'raju'
// }
// let person2 = {
//     fname: 'iop',
// }

// function fullname(){
//     // return this.fname + " " + this.lname;
//     console.log(this.fname + " " + this.lname)
// }


// let result = fullname.call(person1)

function greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
const person = { name: "Alice" };

const greetAlice = greet.bind(person);

greetAlice(); // Hello, my name is Alice
  