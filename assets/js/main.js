// constructor function which can be used to create "digitalpal" objects
const TotoroObj = function() {
  this.name = "";
  this.age = 0;
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.outside = false;
  this.hygiene = 100;
  this.houseCondition = 100;
}

// Feeds Totoro when they are hungry and sets them to sleepy
TotoroObj.prototype.eat = function() {
  if (this.hungry) {
    console.log("Your Totoro looks happy to eat such a tasty treat");
    this.hungry = false;
    this.sleepy = true;
  }
  else {
    console.log("Your Totoro is not hungry");
  }
}

// Allows the user to play with their Totoro when they are bored and sets them to hungry
TotoroObj.prototype.play = function() {
  if (this.bored) {
    console.log("Your Totoro looks excited!");
    this.bored = false;
    this.sleepy = true;
  }
  else {
    console.log("Your Totoro does not want to play right now");
  }
}

// Puts the Totoro to sleep when they are sleepy, increases their age by one, and sets them to bored
TotoroObj.prototype.sleep = function() {
  if (this.sleepy) {
    console.log("ZzzZzz");
    this.sleepy = false;
    this.bored = true;
    this.age++;
  }
  else {
    console.log("Your Totoro is not sleepy");
  }
}

// Decreases the "houseCondition" value by ten
TotoroObj.prototype.makeMess = function() {
  if (this.houseCondition - 10 > 0) {
    this.houseCondition -= 10;
    this.bored = false;
    this.sleepy = true;
    console.log("The house is a mess");
  }
}

// Sets the "houseCondition" to 100
TotoroObj.prototype.cleanHouse = function() {
  this.houseCondition === 100;
  console.log("The house looks much cleaner!");
}

// Sets "hygiene" to 100
TotoroObj.prototype.cleanHouse = function() {
  this.hygiene === 100;
  console.log("Your Totoro looks relaxed!");
}

// method which is called in "this.sleep" to increase the age of the digitalpal by one
TotoroObj.prototype.increaseAge = function() {
  this.age++;
  console.log(`It's your Totoro's birthday! Totoro is ${this.age} old!`);
}

// adds the method "goOutside" to the prototype which lets "dog" outside when it is outside
TotoroObj.prototype.goOutside = function() {
  if (!this.outside) {
    console.log("Your Totoro feels at peace in the forest");
    this.outside = true;
  }
  else {
    console.log("You are already in the forest...");
  }
}

// adds the method "goInside" to the prototype which lets our DigitalPal inside when it is outside
TotoroObj.prototype.goInside = function() {
  if (this.outside) {
    console.log("Let's go home!");
    this.outside = false;
  }
  else {
    console.log("You are already at home...");
  }
}

// Function calls
document.getElementById("eatBtn").addEventListener("click", function() {
  event.preventDefault();
  TotoroObj.prototype.eat();
});

document.getElementById("sleepBtn").addEventListener("click", function() {
  event.preventDefault();
  TotoroObj.prototype.sleep();
});

document.getElementById("playBtn").addEventListener("click", function() {
  event.preventDefault();
  TotoroObj.prototype.play();
});

document.getElementById("cleanBtn").addEventListener("click", function() {
  event.preventDefault();
  if (this.outside) {
    TotoroObj.prototype.bath();
  }
  else if (!this.outside) {
    TotoroObj.prototype.cleanHouse();
  }
});

document.getElementById("homeBtn").addEventListener("click", function() {
  event.preventDefault();
  TotoroObj.prototype.goInside();
});

document.getElementById("forestBtn").addEventListener("click", function() {
  event.preventDefault();
  TotoroObj.prototype.goOutside();
});

// Totoro calls
TotoroObj.prototype.chibi = function() {
  console.log("Chi! Chi!");
};

TotoroObj.prototype.chuu = function() {
  console.log("Chuu!");
};

TotoroObj.prototype.oh = function() {
  console.log("OHH");
};

// Create a new "totoros" object to contain the Totoros
const totoros = {};

// Instantiate three new Totoro Objects - grey, blue, and white
totoros.grey = new TotoroObj();
totoros.blue = new TotoroObj();
totoros.white = new TotoroObj();

// Grabbing command line arguments for animal and method
const totoro = process.argv[2];
const method = process.argv[3];

// Call the selected Totoro and method from the terminal 
// Example: 'node main blue bored'
totoros[totoro][method]();