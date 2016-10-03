"use strict"
// var name = Symbol("name");

class Animal {
  // Initiating the class Animal as follows
  constructor(parameter) {
    this.name = parameter["name"];
    this.num_leg = parameter["num_leg"];
    this.color = parameter["color"];
    this.eat = parameter["eat"];
    this.age = parameter["age"];
  }


  printAll() {
    console.log(`My name is ${this.name}`);
  }
}

class Mamals extends Animal {
  constructor(parameter) {
    super(parameter);
    this.kingdom = parameter["kingdom"]
  }
}

class Primate extends Mamals {
  constructor(parameter) {
    super(parameter);
    this.breeding = parameter["breeding"]
  }
}

class SuperPower extends Animal {
  constructor(parameter) {
    super(parameter);
    this.ability = parameter["ability"];
  }

  use_laser_vision() {
    return true;
  }

  be_invisible() {
    if (randomNumber() < 5) {
      return "Yeaaa master, I am invisible";
    } else {
      return "Oh you cannot make me invisible";
    }
  }
}

// assign random number to get its ability
function randomNumber() {
  return Math.floor(Math.random() * 10)
}



// Vertabrata is Animal
var vertebrata = new Animal({
  name: "vetebrata",
  age: 200
});

// lion is Mamals
var lion = new Mamals({
  name: "waw",
  num_leg: 4,
  color: "belang waw",
  kingdom: "heaven"
});


// monkey is primate
var monkey = new Primate({
  name: "U",
  num_leg: 2,
  color: "brown",
  breeding: "on summer"
})


var superAnimalFox = new SuperPower({
  name: "Blanford",
  num_leg: 4,
  color: "orange",
  ability: "jump"
});

var c = superAnimalFox.be_invisible();
console.log(c);

console.log(lion);
console.log(lion.name);

console.log(monkey);
