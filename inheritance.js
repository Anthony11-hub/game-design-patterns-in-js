//This is an approach to Game Design pattern
// This approach applies classes and inheritance to accomlsh adding certain behavior to class



// set up the class object
class GameObject{
    constructor(x, y, type){
        this.x = x;
        this.y = y;
        this.type = type;
    }
}

// this class will extend the GameObject's inheritance class properties
class Movable extends GameObject{
    constructor(x, y, type){
        super(x,y,type)
    }
    // this movable object can be moved on the screen
    moveTo(x, y) {
        this.x =x;
        this.y = y;
    }
}

//this is a specific class that extends the movable class
class Hero extends Movable{
    constructor(x,y){
        super(x,y, 'Hero')
    }
}

//This class on the other and only inherits the GameObject properties
class Tree extends GameObject{
    constructor(x,y){
        super(x,y, 'Tree')
    }
}

// a hero can move
const hero = new Hero();
hero.moveTo(5,5);

//but a tree cannot
const tree = new Tree()