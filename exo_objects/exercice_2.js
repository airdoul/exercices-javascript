function Person(firstName,lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.greet = function() {
        console.log('Hello, my name is' + this.firstName + this.lastName);
    }      
}

const person1 = new Person ('Bob','Dilanne' , 45)
console.log(person1);
person1.greet()