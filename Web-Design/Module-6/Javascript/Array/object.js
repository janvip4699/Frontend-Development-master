/*  
object : object is an entity
         object is stored data with property and its values
         object is stored inside of {}

*/

// var emp={
//     id:1001,
//     name:"janvi",
//     age:24,
//     salary:89500
// };

// // console.log(emp);
// console.log(typeof(emp));


// var emp=new Object;
// var emp=
// {
//     id:1001,
//     name:"janvi",
//     age:24,
//     salary:89500
// };

// console.log(emp);
// console.log(typeof(emp));


function Display(name,age,salary)
{
  
    this.name=name;
    this.age=age;
    this.salary=salary;
}
var emp=new Display("janvi",24,89500);
// console.log(emp);
console.log(typeof(emp));