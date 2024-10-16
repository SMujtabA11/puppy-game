var Pname = prompt("enter your pet name");
var type = prompt("What type of pet you have");
var age = +prompt("What is age of your pet");
var happiness = +prompt("How much your pet happiness level");
var hunger = +prompt("How much your pet hunger level");
var userInput = +prompt("What you want with your pet\n1-feed\n2-play\n3-age");
var pet = {
    Pname: Pname,
    type: type,
    age: age,
    happiness: happiness,
    hunger: hunger,
    feed:function(){
        if(this.hunger <20){
            alert("Your pet's hunger level is " + this.hunger + ". They are not hungry!");
        }
        else{
            this.hunger = this.hunger-20;
            alert("You fed Mela! Hunger level is now " + this.hunger);
        }
    },
    play:function(){
        if(this.hunger >100){
            alert("Your pet is too hungry to play! Happiness level is " + this.happiness);
        }
        else{
            alert("You played with Mela! Happiness level is now " + this.happiness);
        }
    },
    agePet:function(){
       this.age = this.age+1;
       this.happiness = this.happiness-5;
       this.hunger = this.hunger+10;
       alert("Mela is now " + this.age + " years old! Happiness level is now " + this.happiness + " and hunger level is " + this.hunger);

    }
}

if (userInput === 1){
    pet.feed();
}else if(userInput === 2)
{
    pet.play();
}
else if (userInput === 3) {
    pet.agePet();
} else {
    alert("Invalid input. Please enter 1, 2, or 3.");
}
