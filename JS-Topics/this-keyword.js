/*
The JavaScript this keyword which is used in a function, refers to the object it belongs to.
It makes function reusable by letting you decide the object value.
This value is determined entirely by how a function is called.



If this keyword in function strict mode then it will show undifiened 
 in not strict mode it will take window object or global object because of this substitution

 arrow function they don't have there own this context they are taking from their texcial context
*/




// -----------------example 1 ---------------- //

/*
let person = {
  name: "bittu",
  sayMyName: function () {
    console.log(this.name);
  },
};

person.sayMyName(); // here this refers to person so person.name = bittu

// If we want to change reference object for this , we need to use call and provide object reference.
let person1 = { name: "Vivek" };

person.sayMyName.call(person1);

*/


// -----------------example 2 ---------------- //

/*
let obj = {
  firstname: "bittu",
  lastname: "kumar",
  getFullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
  address: {
    city: "blr",
    state: "karnataka",
    getAddress: function () {
      console.log(this.city + " " + this.state);
    },
  },
};

obj.getFullName();  // here value of this will be obj
obj.address.getAddress();  // here value of this will be address

*/
// -----------------example 3 ---------------- //

function PersonDetails(firstName, lastName) {
    // this={}
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function () {
    console.log("Regular Function - this:", this);
    console.log(this.firstName + " " + this.lastName);
  }
}

let p1 = new PersonDetails("Vivek", "Sharma");


p1.getFullName();  // here value of this will be p1 object

/*
function printMe(name){
    this.name= name;
    console.log(this)
}

let obj1= new printMe("bb");
console.log(obj1);

*/


// -----------------example 4 ---------------- //

// arrow function example with this keyword
const obj = {
    name: "obj",
    sayName: function() {
      console.log(this.name);
    },
    arrowSayName: () => {
      console.log(this.name);
    }
  };
  
  obj.sayName();   // obj
  obj.arrowSayName();   //undefined


  // -----------------example 5 ---------------- //
  
  var value= 30;
  function Outer(){
    this.value= 1;
    this.getValue= function(){
      console.log("regular function",this.value);
    }
  }

  Outer.prototype.getArrowValue= ()=>{
    console.log("arrow function",this.value);
  }

  const outer1= new Outer();

  outer1.getArrowValue();
  outer1.getValue();