const Vanessa = {
    firstname: "Vanessa",
    lastname: "Ng",
    age: 27,
    weight: 70,
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
};

console.log(Vanessa.fullname() + " is " + Vanessa.age + " years old.");

const person = {
    firstName: "John",
    lastName: "Doe"
};

console.log(person.firstName);