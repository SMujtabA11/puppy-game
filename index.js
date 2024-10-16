var pet = {
    name:"Mela",
    type:"Dog",
    age:15,
    happiness:50,
    hunger:30,
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
