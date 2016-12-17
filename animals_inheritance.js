"use strict"

class Animal {
    constructor(params) {
        this.nama = params['nama']
        this.status = params['status']
    }
}

class Mammal extends Animal {
    constructor(params) {
        super(params)
    }
}

class Primate extends Mammal {
    constructor(params) {
        super(params);
        this.num_legs = 2;
    }
}

class Chimpanzee extends Primate {
    constructor(params) {
        super(params);
    }

    detail() {
        return `Chimpanzee Bernama "${this.nama}"" Adalah Hewan "${this.status}" Berkaki "${this.num_legs}"`
    }
}

class Fish extends Animal {
    constructor(params) {
        super(params)
    }
}

class SuperPoweredFish extends Fish {
    constructor(params) {
        super(params)
        this.swim = "100Km/Jam"
    }

    ability() {
        return `Ikan Bernama "${this.nama}"" Adalah Hewan "${this.status}" Dengan Kecepatan Berenang "${this.swim}"`
    }

}

var lumba = {
  nama: "Lumba-Lumba",
  status :"Air"
}
var hominidae = {
    nama: 'Pan',
    status: "Darat",
}
var lumba2 = new SuperPoweredFish(lumba)
console.log(lumba2.ability());
var chimp = new Chimpanzee(hominidae, 2)
console.log(chimp.detail());
