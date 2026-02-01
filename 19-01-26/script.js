// scoping
// hoisting
// lexical scoping
// closures
// call, apply, bind

// console.log("object")

// let a = 1;
// const b = 2;
// var c = 3;

// console.log(a)
// console.log(b)
// console.log(c)


// let a = 3; //global scope
// {
//     // let a = 1;
//     const b = 2;
//     // var c = 3;
//     console.log("inner", a)
// } 

// console.log("outer", b)
// var a = 3
// {
//     var a = 5;
// }
// console.log(a)

//********************************

// {
//     var a;
//     a = 10;
//     console.log(a)
// }

//  


// {
//     a = 10;
//     console.log(a)
//     var a;
// }


// let Greet =  function(){
//     console.log("hello")
// }

// Greet();

// ***************************



// function init() {
//     let name = "Mozilla"; 
//     function displayName() {
//       console.log(name);
//     }
//     displayName();
//   }
//   init();

// function init(){
//     let name = 'pranav';
//     function inner1(){
//         let inner1Var = 'abc'
//         console.log("inside inner1", name)
//         function inner2(){
//             console.log("inside inner2", name)
//         }
//         inner2();
//     }
//     inner1()
//     function inner2(){
//         console.log(inner1Var)
//         let inner2Var = 'pqr'
//         console.log(name)
//     }
//     inner2()
// }
// init();


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
//     document.body.style.backgroundColor='pink'
// }

// document.getElementById('pink').onclick = handleCLick('pink')
// document.getElementById('red').onclick = handleCLick('red')

// function handleCLick(color){
//     // color is the variable of the outer function
//     return function(){
//         document.body.style.backgroundColor=`${color}`
//     }
// }



// function SetFirstName(fname){
//     console.log("hello")
//     this.fname = fname
// }

// function CreateUser(fname, lname, email){
//     //complete this function 
//     // this.fname = fname
//     SetFirstName.call(this,fname);
//     this.lname = lname
//     this.email = email
// }

// let person = new CreateUser('pranav', 'raju', 'pranav@gmail.com');

// console.log(person)


// let person1 = {
//     // fname: "pranav",
//     // lname: 'raju'
// }

// let person = {
//     // fullname: function(fname,lname){
//     fullname: function(fname,lname){
//         return fname + " " + lname
//     }
// }

// // let result = person.fullname.call(person1,'pranav','raju');

// let result = person.fullname.apply(person1,['pranav','raju']);

// console.log(result)


function greet(){
    console.log(`Hello my name is: ${this.name}`);
}
const person = {
    name: 'pranav'
};

const greetPranav = greet.bind(person);

greetPranav();





