"use strict"

class Animal{
  constructor(property){
  this.nama = property['nama']
  this.alive = true
}

  getAlive(){
    return `Binatang ${this.nama} masih hidup`
  }
}


class Mammal extends Animal{
  constructor(property){
  super(property);
  this.menyusui = true
  }
}

class Primate extends Mammal{
  constructor(property){
    super(property);
    this.numLegs = 2
  }

  eatBanana(){
    return `${this.nama} is eating banana`
  }
  getAlive(){
    return `Binatang ${this.nama} masih hidup`
  }
}

class Chimpanzee extends Primate{
  constructor(property){
    super(property);

  }
}

class SuperPoweredChimpanzee extends Chimpanzee{
  constructor(property){
    super(property)
    this.supername = property['supername']
  }

  superJump(){
    return `When ${this.nama} transform into ${this.supername}, it can jump up to 100 m High !`
  }

  eatBanana(){
    console.log(super.eatBanana());
    return `${this.supername} also eat banana`
  }
}


class Fish extends Animal{
  constructor(property){
      super(property)

    }
}


class SuperPoweredFish extends Fish{
  constructor(property){
    super(property)
    this.supername = property['supername']
  }

  superSwim(){
    return `When ${this.nama} transform into ${this.supername}, it can swim up to 1000 knot/hr`
  }
}




var simpanse = new Chimpanzee({nama: 'aladin'})
simpanse.getAlive()

var supersimpanse = new SuperPoweredChimpanzee({nama : 'monyet', supername: 'Monkey King'})
console.log(supersimpanse.superJump());
console.log(supersimpanse.eatBanana());

var ikan = new SuperPoweredFish({nama: 'fish', supername: 'Slark'})
console.log(ikan.superSwim());
