class Animal{
    constructor(name, food) {
        this.name = name
        this.food = food
    }
}

class Dog extends Animal {
    constructor(name, food) {
        super(name, food)
        console.log(`${this.name} eats ${this.food}.`)
    }
    eat () {
        console.log(`${this.name} eats food.`)
    }
}

class Cat extends Animal {
    constructor(name, food) {
        super(name, food)
        console.log(`${this.name} eats ${this.food}.`)
    }
    eat () {
        console.log(`${this.name} eats food.`)
    }
}

let zack = new Dog('Zack', 'Blue Wilderness')