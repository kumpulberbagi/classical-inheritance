"use strict"

// The class that inherits directly from object
class Animal {
  constructor(origin) {
    this.origin = origin;
  }
}


// Inherit from Animal
class Mamal extends Animal {
  constructor(origin, trait) {
    super(origin);
    this.trait = trait;
  }
}

class Amphibian extends Animal {
  constructor(origin, skin) {
    super(origin);
    this.skin = skin;
  }
}

class SuperPowered extends Animal {
  constructor(origin) {
    super(origin);
    this.vision = false;
    this.invisible = false;
  }

  use_laser_vision() {
    return this.vision = true;
  }

  be_invisible() {
    return this.invisible = true;
  }
}


// inherit from the first inheritance
class Primate extends Mamal {
  constructor(origin, trait, living) {
    super(origin, trait);
    this.living = living;
  }
}

class Chordata extends Amphibian {
  constructor(origin, skin, has_tail) {
    super(origin, skin);
    this.has_tail = true;
  }
}



// Inherit from the second inheritance
class Chimpanze extends Primate {
  constructor(origin, trait, living, is_bipedal) {
    super(origin, trait, living);
    this.is_bipedal = true;
  }
}

class Frog extends Chordata {
  constructor(origin, skin, has_tail, respiratory) {
    super(origin, skin);
    this.respiratory = respiratory;
  }
}

class SuperPowerdFox extends SuperPowered {
  constructor(origin) {
    super(origin);
  }
}

// Testing

let greenFrog = new Frog('africa', 'smooth', true, 'dual');
console.log(greenFrog.origin);

let superFox = new SuperPowerdFox('africa');
console.log(superFox.invisible); // false
superFox.be_invisible()
console.log(superFox.invisible); // true
