var puppyName = prompt("Enter your pet name");
var type = prompt("What type of pet do you have?");
var age = +prompt("What is the age of your pet?");
var happiness = +prompt("How happy is your pet on a scale of 0-100?");
var hunger = +prompt("What is your pet's hunger level on a scale of 0-100?");
var userInput = +prompt("What would you like to do with your pet?\n1 - Feed\n2 - Play\n3 - Age");

var pet = {
    Pname: puppyName,
    type: type,
    age: age,
    happiness: happiness,
    hunger: hunger,
    feed: function() {
        if (this.hunger < 20) {
            alert("Your pet's hunger level is " + this.hunger + ". They are not hungry!");
        } else {
            this.hunger -= 20;
            alert(`You fed ${this.Pname}. Hunger level is now ` + this.hunger);
        }
    },
    play: function() {
        if (this.hunger > 100) {
            alert("Your pet is too hungry to play! Happiness level is " + this.happiness);
        } else {
            this.happiness += 20; 
            alert(`You played with ${this.Pname}. Happiness level is now ` + this.happiness);
        }
    },
    agePet: function() {
        this.age += 1;
        this.happiness -= 5;
        this.hunger += 10;
        alert(`${this.Pname} is now ` + this.age + " years old! Happiness level is now " + this.happiness + " and hunger level is " + this.hunger);
    }
};

if (userInput === 1) {
    pet.feed();
} else if (userInput === 2) {
    pet.play();
} else if (userInput === 3) {
    pet.agePet();
} 
