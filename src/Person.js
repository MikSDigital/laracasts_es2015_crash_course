class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return 'Hello ' +  this.name + ' !';  // use template string!
    }
}

class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;

    }

    prepare() {
        this.tasks.forEach(task => task.toGulp())
    }

    log() {
        this.tasks.forEach((task, index) => {
            console.log(task, index);
        })
    }
}

class Task{
    toGulp() {
        console.log('converting to gulp...');
    }
}

new TaskCollection([
    new Task,
    new Task
]).log();

new TaskCollection([
    new Task,
    new Task
]).prepare();

let testOne = new TaskCollection([
    new Task,
    new Task,
    new Task
]);


testOne.prepare();
testOne.log();


console.log(new Person('Mixa').greet());