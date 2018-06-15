const littleYacht1 = {
  hornSound: "Ride of the Walkeries",
  playHorn: function() {
     console.log(this.hornSound);
}
};

littleYacht1.playHorn();

const biggerYacht = {
  hornSound: "Fog Horn",
  playHorn: littleYacht4.playHorn
};

biggerYacht.playHorn();

//***************************************************

const littleYacht1 = {
  hornSound: "Ride of the Walkeries",
  playHorn: function() {
     console.log(this.hornSound);
}
};

littleYacht1.playHorn();  //Ride of the Walkeries

const biggerYacht = {
  hornSound: "Fog Horn",
  playHorn: littleYacht4.playHorn
};

littleYacht1.playHorn = function (){
  console.log('Hello There');
};

littleYacht1.playHorn(); //Hello There
biggerYacht.playHorn(); //Fog Horn


//******************************************
const littleYacht1 = {
  hornSound: "Ride of the Walkeries",
  playHorn: function() {
     console.log(this.hornSound);
}
};

littleYacht1.playHorn();  //Ride of the Walkeries

littleYacht1.playHorn = function (){
  console.log('Hello There');
};

const biggerYacht = {
  hornSound: "Fog Horn",
  playHorn: littleYacht4.playHorn
};

littleYacht1.playHorn(); //Hello There
biggerYacht.playHorn(); //Hello There

//****************************************

//lets write an insureance program that helps us finding the cost
/*
function insuranceType
return type

function insuranceCost

return cost

*/

class Insurance { //super
  constructor(type,cost){
      this.type = type;
      this.cost = cost;
  }
  //get the information from my Insurance class
  getType(){
      return this.type;
  }
  getCost(){
      return this.cost;
  }

}

//life 
class Life extends Insurance { //subclass
  constructor(){
      super('Life',100);
      this.setCost();
  }
  //set the cost of life insurance
  setCost(){
      this.cost = super.getCost() + 30;
  }
  display(){
      console.log(`${this.type} insurance will cost me ${this.cost} per month`);
  }
}

class Health extends Insurance { //subclass
  constructor(){
      super('Health',300);
      
  }
  //add functions as you like
 
}

class Auto extends Insurance { //subclass
  constructor(){
      super('Auto',250);
      
  }
  //add functions as you like
  
}

function main(){
  let life = new Life();
  life.display();


  let health = new Health();
  //health.WHATEVERFUNCTION()

  let auto = new Auto();
  //auto.WHATEVERFUNCTION()

}
main();