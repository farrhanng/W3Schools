const Vanessa = {firstname: "Vanessa", lastname: "Ng", age: 27, weight: 70, fullname: function(){return this.firstname + " " + this.lastname}};

console.log(this.fullname + " is " + Vanessa.age + " years old.");