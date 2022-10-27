// console.log("hello node js ")

// const fs = require('fs')

// fs.writeFileSync('hello.txt' , 'Hi! i am from node js file')

// var name = 'Hanaa';
// var age = 22;
// var hobbies = 'doing coding';

// const summarized = (username , age , hobbies) => {
//     return `my name is ${ username} , i am ${ age} years old , mostly i like to do ${ hobbies}`;

// }
// console.log(summarized(name , age ,hobbies));



// const student = {
//     Name: 'Hanaa',
//     Grade: 99,
//     sub: 'python',
//     greet(){
//         console.log('Hi ' + this.Name);
//     }
// };
// student.greet();

//  const hobbies = ['coding' , 'eating' , 'traveling'];
 //console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//  hobbies.map(hobby => 'Hobby: ' + hobby);
//  hobbies.push('runing')
//  console.log(hobbies)
// const copyarray = [hobbies]
// console.log(copyarray)




// const fetchData = () =>{
//     const promise = new Promise((resolve , reject) => {
//         setTimeout(() =>{
//             resolve('done');
//         },  1500);  
//     });
//     return promise;
// };

// setTimeout(() =>{
//     console.log('Timer is done');
//     fetchData()
//     .then(text => {
//         console.log(text);
//         return fetchData();
//     })
//     .then(text2 => {
//         console.log(text2);
//     });
// } , 2000);