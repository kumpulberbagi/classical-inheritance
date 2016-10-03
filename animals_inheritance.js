"use strict"

class Animal {
  constructor(name) {
    this.name = name;
    this.spesies = "" ;
    this._ordo;
    this._level;

  }
  wildlevel(){
    if (this._level > 5) {
      console.log("this animal category is wild animal");
    }else {
        console.log("this animal category is friendly");
    }

  }

  myNameis(){
    console.log(`this species name is : ${this.name}` );
  }


}

class Mamal extends Animal{
  constructor(name){
    super(name);
  }
  myNameis(){
    super.myNameis();
    super.wildlevel();
  }
  dataAnimal(){
      console.log(`species of ${this.name} is ${this.spesies}`);
      console.log(`ordo of ${this.name} is ${this.ordo}`)
  }

}

class amphibi extends Animal{
  constructor(name){
    super(name);
  }
  myNameis(){
    super.myNameis();
    super.wildlevel();
  }
  dataAnimal(){
      console.log(`species of ${this.name} is ${this.spesies}`);
      console.log(`ordo of ${this.name} is ${this.ordo}`);
  }

}


 var monyet = new Mamal("monyet")
monyet._level = 14;
monyet.spesies = "Trachypithecus auratus";
monyet.ordo = "primata";
monyet.myNameis();
monyet.dataAnimal();

console.log("---------------------------");
var katak = new amphibi("katak hijau");
katak._level = 3;
katak.myNameis();
katak.spesies = "Rana catesbeiana Shaw";
katak.ordo = "Anaurans"
katak.dataAnimal();




// var monyet = new Mamal("monyet liar");
// monyet.myNameis();
