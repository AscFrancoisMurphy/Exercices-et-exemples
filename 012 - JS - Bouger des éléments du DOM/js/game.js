var debugmode = true;

// global variables

var direction; // string : up right down left
var gameSpeed = playersize / 2;
var boardsize = 500; // size of the board in pixel
var playersize = 20; // size of the player in pixel



// DOM elements

var player = document.getElementById("player");
var board = document.getElementById("board");


/** ***********
 * Functions  *
 **************/

function initialize() {
    player.style.width = playersize;
    player.style.height = playersize;
    board.style.width = playersize;
    player.style.height = boardsize;
}



/** moveToward a direction
 * direction : The direction that the object move toward
 *    must be "up", "right", "down", "left"
 * speed : of the object
 *    must be a number
 * object : object that move
 *    must be a DOM element
 */


function moveToward(direction, speed, object) {

    var objectPositionX;
    var objectPositionY;

    function savePosition(object) {
        // save the object position
        objectPositionX = object.offsetLeft;
        objectPositionY = object.offsetTop;

        if (debugmode) {
            console.log("position", objectPositionX, objectPositionY);
        }
    }

    savePosition(object);

    //move an object
    if (direction === "up") {
        object.style.top = objectPositionY - speed + "px";
    } else if (direction === "right") {
        object.style.left = objectPositionX + speed + "px";
    } else if (direction === "down") {
        object.style.top = objectPositionY + speed + "px";
    } else if (direction === "left") {
        object.style.left = objectPositionX - speed + "px";
    } else {
        console.log("rien")
    }

    //check and resolve border collision
    if (objectPositionX > (boardsize - playersize / 2)) {
        object.style.left = boardsize - playersize / 2 + "px";
    } else if (objectPositionY > (boardsize - playersize / 2)) {
        object.style.top = boardsize - playersize / 2 + "px";
    } else if (objectPositionX < playersize / 2) {
        object.style.left = playersize / 2 + "px";
    } else if (objectPositionY < playersize / 2) {
        object.style.top = playersize / 2 + "px";
    }

    savePosition(object);


}

/** record a key
 * e : eventListener
 * 
 * function result : a direction or an action
 */

function recordKey(e) {
    var keyCode = e.keyCode;

    if (debugmode) {
        console.log("key " + e.keyCode);
    }

    if (keyCode == 37) {
        moveToward("left", gameSpeed, player);
    } else if (keyCode == 39) {
        moveToward("right", gameSpeed, player);
    } else if (keyCode == 38) {
        moveToward("up", gameSpeed, player);
    } else if (keyCode == 40) {
        moveToward("down", gameSpeed, player);
    }
}

/**
 * Action !!!
 */

// initialize();
window.addEventListener("keypress", recordKey);