"use strict"

class Animal{
  constructor(args){
    this.name = args['name']
    this.health = true
  }

  getAlive(){
    var rng = Math.floor((Math.random() * 10) + 1)
    if(rng < 8){
      return `The ${this.name} is alive and well!`
    }
    else{
      return `The ${this.name} has died.`
    }
  }
}

  class Fish extends Animal{
    constructor(args){
      super(args)
      this.swims = true
    }
  }

  class Goldfish extends Fish{
    constructor(args){
      super(args)
      this.numLegs = 0
    }
    getAlive(){
      return `${this.name} the goldfish is alive!`
    }
  }

  class SuperFish extends Fish{
    constructor(args){
      super(args)
      this.superpower = "Mind Control"
    }
    mindcontrol(){
      return `${this.name} has ${this.superpower} powers!`
    }
  }
// let animal = new Animal("lion")
// console.log(animal.getAlive());
let fishy = new Goldfish({name: "Dog"});
console.log(fishy.getAlive());

let superfish = new SuperFish({name: "Cat"})
console.log(superfish.mindcontrol());
