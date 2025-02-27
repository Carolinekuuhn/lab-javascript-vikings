// Soldier
class Soldier {
    constructor(health, strength) {
        this.health= health;
        this.strength= strength;
    }


 attack(){
    return this.strength; 
 
}

 receiveDamage(theDamage){
        this.health -= theDamage; 
    } 
}
// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name     
    }

    attack(){
        return this.strength 
    }

    receiveDamage(theDamage){
        this.health -= theDamage; 

    if (this.health > 0) {
        return `${this.name} has received ${theDamage} points of damage`
    } else {
        return `${this.name} has died in act of combat`
    }
    }
     
    battleCry() {
    return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super(health, strength);
    } 
    receiveDamage(theDamage){
        this.health -= theDamage; 

    if (this.health > 0) {
        return `A Saxon has received ${theDamage} points of damage`
    } else {
        return `A Saxon has died in combat`
    }
    }
}

// War
class War {
    constructor() {
  this.vikingArmy = [];
  this.saxonArmy = [];
    }

    addViking(viking) {
  this.vikingArmy.push(viking);    
    }

    addSaxon(saxon) {
  this.saxonArmy.push(saxon);

    }

    vikingAttack() {
        let randonViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randonSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
        let result = randonSaxon.receiveDamage(randonViking.strength); 
        if (randonSaxon.health <= 0) {
            this.saxonArmy.splice(randonSaxon, 1);
        } return result;

    }

    saxonAttack() {
        let randonViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
        let randonSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]

        let result = randonViking.receiveDamage(randonSaxon.strength); 
        if (randonViking.health <= 0) {
            this.vikingArmy.splice(randonViking, 1);
        } return result;


    }

    showStatus() {
        if (this.saxonArmy.length < 0 && this.vikingArmy.length >= 0 ) {
            return `Vikings have won the war of the century!`
        } else if (this.Viking.length <= 0 && this.saxonArmy.length > 0 ) {
            return `Saxons have fought for their lives and survived another day...`
        } else if (this.Viking.length > 0 && this.saxonArmy.length > 0 ) { 
            return `Vikings and Saxons are still in the thick of battle.`
        }

    }
}