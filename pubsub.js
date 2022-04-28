//Another game design pattern, small but very powerful

//set up an EventEmitter class that contains listeners
class EventEmitter{
    constructor(){
        this.listeners = {};
    }
    //when a msg is received let the listener handle its payload
    on(message, listener){
        if(!this.listeners[message]){
            this.listeners[message] = [];
        }
        this.listeners[message].push(listener);
    }
    //when a message is sent, send it to the listener with some payload
    emit(message, payload = null){
        if(this.listeners[message]){
            this.listeners[message].forEach(l => l(message,payload))
        }
    }
}

// to use the above code, we create a very small implementation

//set up a message structure
const Messages = {
    HERO_MOVE_LEFT: 'HERO_MOVE_LEFT'
};
//invoke the evemtEmitter you set above
const evemtEmitter = new EventEmitter();
//set up a hero
const hero = createHero(0,0);
//let the eventEmitter know to watch for messages pertaining to the hero
eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
    hero.move(5,0);
});

//set up the window to listen for th keyup event
window.addEventListener('keyup', (evt) => {
    if(evt.key === 'ArrowLeft'){
        eventEmitter.emit(Messages.HERO_MOVE_LEFT)
    }
});

/**  Above we connect a keyboard event, ArrowLeft and send the HERO_MOVE_LEFT 
 * message. We listen to that message and move the hero as a result. 
 * The strength with this pattern is that the event listener and the hero don't 
 * know about each other. You can remap the ArrowLeft to the A key. Additionally 
 * it would be possible to do something completely different on ArrowLeft 
 * by making a few edits to the eventEmitter's on function: **/

eventEmitter.on(Messages.HERO_MOVE_LEFT, () => {
    hero.move(5,0);
})

//As things get more complicated, this pattern stays in the same complexity hence your code is clean