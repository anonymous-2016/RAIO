/**
 * @description Simple Canvas Game
 * @author xgqfrms
 * @param {any} params
 */

const SCG = (params, debug = false) => {
    //
};

// IIFE

// Create the canvas
let canvas = document.createElement(`canvas`),
    ctx = canvas.getContext(`2d`);
// set properties
canvas.width = 512;
canvas.height = 480;
// insert into DOM
// document.body.appendChild(canvas);
document.body.insertAdjacentElement(`beforeend`, canvas);


// Background image
let bgReady = false,
    bgImage = new Image();
bgImage.onload = () => {
    bgReady = true;
};
bgImage.src = `./images/background.png`;


// Hero image
let heroReady = false,
    heroImage = new Image();
heroImage.onload = () => {
    heroReady = true;
};
heroImage.src = `./images/hero.png`;


// Monster image
let monsterReady = false,
    monsterImage = new Image();
monsterImage.onload = () => {
    monsterReady = true;
};
monsterImage.src = `./images/monster.png`;

// Game objects
const hero = {
    speed: 256*3
    // movement in pixels per second
};
let monster = {},
    monstersCaught = 0;

// Handle keyboard controls
let keysDown = {};

addEventListener(`keydown`, (e) => {
    keysDown[e.keyCode] = true;
}, false);

addEventListener(`keyup`, (e) => {
    delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
let reset = () => {
    hero.x = (canvas.width / 2);
    hero.y = (canvas.height / 2);
    // Throw the monster somewhere on the screen randomly
    monster.x = (Math.random() * (canvas.width - 64) + 32);
    monster.y = (Math.random() * (canvas.height - 64) + 32);
};

// Update game objects
let update = (modifier) => {
    // switch (key) {
    //     case value:
    //         //
    //         break;
    //     default:
    //         break;
    // }
    if (38 in keysDown) {
        // Player holding up
        hero.y -= hero.speed * modifier;
    }
    if (40 in keysDown) {
        // Player holding down
        hero.y += hero.speed * modifier;
    }
    if (37 in keysDown) {
        // Player holding left
        hero.x -= hero.speed * modifier;
    }
    if (39 in keysDown) {
        // Player holding right
        hero.x += hero.speed * modifier;
    }
    // Are they touching?
    if (
        hero.x <= (monster.x + 32) && monster.x <= (hero.x + 32)
        && hero.y <= (monster.y + 32) && monster.y <= (hero.y + 32)
    ) {
        ++monstersCaught;
        reset();
    }
};

// Draw everything
let render = () => {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }
    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }
    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(`Goblins caught: ${monstersCaught}.` , 32, 32);
};

// The main game loop ??? timestamp & requestAnimationFrame ???
let main = (timestamp) => {
    let now = Date.now(),
        delta = now - then;
        // delta = now - timestamp;
    // if (debug) {
    //     console.log(`then =`, then);// 1521098214292
    //     console.log(`timestamp =`, timestamp);//  67904.36899999622
    //     console.log(`now =`, now);// 1521098214313
    // }
    update(delta / 1000);
    render();
    then = now;
    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
let w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
let then = Date.now();// 1521095855487 ms
reset();
main();
