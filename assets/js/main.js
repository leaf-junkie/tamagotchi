document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // constructor function which can be used to create "digitalpal" objects
  const TotoroObj = function() {
    this.name = "";
    this.age = 0;
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.outside = false;
    this.houseCondition = 100;
  }


  // method which feeds the digitalpal when they are hungry and sets them to sleepy
  TotoroObj.prototype.feed = function() {
    if (this.hungry) {
      console.log("nom nom nom");
      this.hungry = false;
      this.sleepy = true;
    }
    else {
      console.log("Your Totoro is not hungry");
    }
  }


  // method which puts the digitalPal to sleep when they are sleepy, increases
  // their age by one, and sets them to bored
  TotoroObj.prototype.sleepy = function() {
    if (this.sleepy) {
      console.log("ZzzZzz");
      this.sleepy = false;
    }
    else {
      console.log("Your Totoro is not sleepy");
    }
  }


  // method which allows the user to play with their digitalpal when they are bored and sets them to hungry
  TotoroObj.prototype.bored = function() {
    if (this.bored) {
      console.log("");
      this.bored = false;
      this.sleepy = true;
    }
    else {
      console.log("");
    }
  }


  // adds the "makeMess" method to the prototype which allows us decreases the "housequality" value by ten
  TotoroObj.prototype.makeMess = function() {
    if (this.houseCondition - 10 > 0) {
      this.houseCondition -= 10;
      this.bored = false;
      this.sleepy = true;
      console.log("the house is a mess");
    }
  }

  // adds the "cleanHouse" method to the prototype which increases the "animals.cat.houseQuality" value by fifty
  TotoroObj.prototype.cleanHouse = function() {
    this.houseCondition === 100;
    console.log("the house looks much cleaner");
  }

  // method which is called in "this.sleep" to increase the age of the digitalpal by one


  // adds the method "goOutside" to the prototype which lets "dog" outside when it is outside


  // adds the method "goHome" to the prototype which lets our DigitalPal inside when it is outside



  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });