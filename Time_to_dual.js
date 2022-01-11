class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        this.res -=this.power;
        console.log(this.name +"  attacked  " + target.name);
    }

    showStats(){
        console.log("name:"+this.name +"power:"+this.power +"resilience:"+this.res);
    }

}

class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitude=magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
                // implement card text here
       if( this.stat=== "res"){
        target.res += this.magnitude;
       }
       else if(this.stat === "power"){
           target.power += this.magnitude;
       }
        } else {
        throw new Error( "Target must be a unit!" );
        }
        }
        
}
console.log("first");
const red_belt_ninja = new Unit("Red Belt Ninja",3,3,4);


const hard_algorithm = new Effect("Hard Alogorithm",2,"increase target resilience by 3",'res',3);
hard_algorithm.play(red_belt_ninja);
red_belt_ninja.showStats();

console.log("second");
const black_belt_ninja = new Unit("Black Belt Ninja",4,5,4);
const Unhandled_promise_rejection = new Effect("Unhandled Promise Rejection",1,"reduce target resilience by 2","res",-2);
Unhandled_promise_rejection.play(black_belt_ninja);
black_belt_ninja.showStats();

console.log("third");

const Pair_programming = new Effect("Pair Programming",3,"increase target power by 3","power",2);
Pair_programming.play(red_belt_ninja);
red_belt_ninja.showStats();

console.log("forth");
red_belt_ninja.attack(black_belt_ninja);
