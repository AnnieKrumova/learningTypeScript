// interface ILoan { 
//     interest:number 
//  } 

//  class AgriLoan implements ILoan { 
//     interest:number 
//     rebate:number 

//     constructor(interest:number,rebate:number) { 
//        this.interest = interest 
//        this.rebate = rebate 
//     } 
//  } 

//  var obj = new AgriLoan(10,1) 
//  console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )

interface IDamagable {
    takeDamage: (damageToTake: number) => number;
}

class Character {
    protected health: number;
    constructor() {
        this.health = 100;
    }
}

class Druid extends Character implements IDamagable {
    constructor() {
        super();
        this.health = 90;

    }
    takeDamage(damageToTake: number) {
        damageToTake *= 0.9;
        this.health -= damageToTake;
        return this.health;
    }

}

class Warrior extends Character implements IDamagable {
    private armor: number;
    constructor() {
        super();
        this.health = 110;
        this.armor = 3;

    }
    takeDamage(damageToTake: number) {
        damageToTake -= this.armor;
        this.health -= damageToTake;
        return this.health;
    }

}

class Rogue extends Character implements IDamagable {
    constructor() {
        super();
    }
    takeDamage(damageToTake: number) {
        let chance = Math.random() * 100;
        if (chance > 75) {
            this.health -= damageToTake;
        }
        return this.health;
    }

}

function doDamage(target: IDamagable, damageToDo: number) {
    console.log('Health left: ' + target.takeDamage(damageToDo));
}

let druid = new Druid();
let warrior = new Warrior();
let rogue = new Rogue();

doDamage(druid, 10);
doDamage(warrior, 10);
doDamage(rogue, 10);
doDamage(rogue, 10);
doDamage(rogue, 10);
doDamage(rogue, 10);
doDamage(rogue, 10);