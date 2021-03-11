var prsn = function prsnDetails(name,age){
  this.name=name;
  this.age=age;
}
var person = new prsn("chandu",90);
console.log(person);
var Employee = Object.create(person);
  Employee.emp_id  = "FL1521";
console.log(Employee.name);
console.log(Employee.age);
console.log(Employee);

//classes
class person{
  constructor(name, age){
      this.name=name;
      this.age=age;
  }
}
class Employee extends person{
  constructor(empId){
      super("Chandu",90);
      this.empId=empId;
  }
}
var emp=new Employee("FL1521");
console.log(emp);

// //Prototype
// function Person(name,age){
//   this.name=name;
//   this.age=age;
// }
// var prsn= new Person("chandu",90);
// console.log(prsn);
// Person.prototype.getName = function(){ return this.name;}
// // Object.prototype.getName = function(){ return this.name;} 
// console.log(prsn.getName());
// Person.prototype.getAge = function(){ return this.age;}
// // Object.prototype.getAge = function(){ return this.age;}
// console.log(prsn.getAge());

// function Employee(name,age,emp_id)
// {
//   this.name=name;
//   this.age=age;
//   this.emp_id=emp_id;
// }
// var emp = new Employee("chandu",90,"FL1521");
// console.log(emp);
// Employee.prototype.getEmpId = function(){ return this.emp_id; }
// console.log(emp.getEmpId());
// emp.__proto__.__proto__ = Person.prototype;
// console.log(emp.getName());
// console.log(emp.getAge());



