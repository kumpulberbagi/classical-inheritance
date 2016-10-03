"use strict"

class SuperPowered{

  hulk_smash(){
    // console.log("Pukulan maut!");
    return "Pukulan maut!"
  }

  fly_rocket(){
    // console.log("terbang !");
    return "terbang !"
  }
}

class Animal {
  constructor(nama, jumlah_kaki, darah_panas) {
    this._nama = nama
    this._jumlah_kaki = jumlah_kaki
    this._darah_panas = darah_panas
    this.superpower = new SuperPowered();
  }
}

class Mamal extends Animal {
  constructor(nama, jumlah_kaki, darah_panas) {
    super(nama, jumlah_kaki, darah_panas)

  }
} // super class

class Reptile extends Animal{
  constructor(nama, jumlah_kaki, darah_panas) {
    super(nama, jumlah_kaki, darah_panas)

  }
} // super class

class Amphibian extends Reptile {
  constructor(nama, jumlah_kaki, darah_panas) {
    super(nama, jumlah_kaki, darah_panas)

  }
} // sub set dari class reptile

class Primate extends Mamal{
  constructor(nama, jumlah_kaki, darah_panas) {
    super(nama, jumlah_kaki, darah_panas)

  }
} // subset dari mamal

class Frog extends Amphibian{
  constructor(nama, jumlah_kaki, darah_panas) {
    super(nama, jumlah_kaki, darah_panas)

  }
} //

class Chimpanzee extends Primate{
  constructor(nama, jumlah_kaki, darah_panas) {
    super(nama, jumlah_kaki, darah_panas)
    // this.superpower
  }
}
// var binatang = new Animal()
// var primate = new Primate()
var harambe = new Chimpanzee("harambe", 2, true);
console.log(harambe.superpower.hulk_smash());
console.log(harambe);
// harambe.superpower.hulk_smash();
