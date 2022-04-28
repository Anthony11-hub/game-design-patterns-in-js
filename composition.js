// This is another approach to game design pattern

//create a constant gameObject
const gameObject = {
    x:0,
    y:0,
    type:''
};

//...add a constant movable
const movable = {
    moveTo(x,y){
        this.x = x;
        this.y = y;
    }
}

//then the constant movable object is composed of the gameObject and movable
const movableObject = {...gameObject, ...movable};

//then create a function to create a new hero that inherits the movableObject
function createHero(x,y){
    return{
        ...movableObject,
        x,
        y,
        type: 'Hero'
    }
}

//create a hero and move it
const hero = createHero(10,10);
hero.moveTo(5,5)

//and create a static tree which only stands around
const tree = crateStatic(0,0, 'Tree')