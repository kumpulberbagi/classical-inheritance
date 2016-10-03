"use strict"
var wildLevel = Symbol();
class Animal {
  constructor(name) {
    this.name = name;
    this._kelas = "" ;
    this._ordo ;
    this._wildLevel;

  }


  get kelas(){
    return this._kelas
  }

  set kelas(value){
    this._kelas = value
  }

  get ordo(){
    return this._ordo
  }

  set ordo(value){
    this._ordo = value
  }


  get wildLevel(){
    return this._wildLevel
  }

  set wildLevel(value){

    if (value > 5) {
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

  }
  dataAnimal(){
      console.log(`class of ${this.name} is ${this.kelas}`);
      console.log(`ordo of ${this.name} is ${this.ordo}`)
  }

}

class amphibi extends Animal{
  constructor(name){
    super(name);
  }
  myNameis(){
    super.myNameis();
  }
  dataAnimal(){
      console.log(`class of ${this.name} is ${this.kelas}`);
      console.log(`ordo of ${this.name} is ${this.ordo}`);
  }

}


 var monyet = new Mamal("monyet pantai")
monyet.wildLevel = 9  ;
monyet.kelas = "mamal";
monyet.ordo = "primata"
monyet.myNameis()
monyet.dataAnimal()
console.log("---------------------------");
var katak = new amphibi("katak hijau");
katak.wildLevel = 2;
katak.myNameis();
katak.kelas = "amphibi";
katak.ordo = "Anaurans"
katak.dataAnimal();




// var monyet = new Mamal("monyet liar");
// monyet.myNameis();
