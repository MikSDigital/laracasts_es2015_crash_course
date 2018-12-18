class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return 'Hello ' +  this.name + ' !';  // use template string!
    }
}

console.log(new Person('Mixa').greet());