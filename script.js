
/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 150; // x-positie van speler
var spelerY = 650; // y-positie van speler

  var vijandX = 250;
  var vijandY = 50;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand

if (health != 0) {
vijandY = vijandY +5;
}
 

if(vijandY>690) {
  vijandY=0;
}
  // kogel

  // speler
var movingSpeed = 30;
if (health != 0) {
if(spelerX>=25) {
if(keyIsDown(37)) { // key_left
  spelerX=spelerX-movingSpeed;
  }
}

if(spelerX<=1250) {
if(keyIsDown(39)) { // keyr_right
  spelerX=spelerX+movingSpeed;
  }
}

if(spelerY>=30) {
if(keyIsDown(38)) { // key_up
  spelerY=spelerY-movingSpeed;
  }
}

if(spelerY<=690) {
if(keyIsDown(40)) { // key_down
  spelerY=spelerY+movingSpeed;
  }
}
}



};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
  var health = 5;
var verwerkBotsing = function () {
  // botsing speler tegen vijand
  if (vijandX - spelerX < 50 && 
      vijandX - spelerX > -50 &&
      vijandY - spelerY <50 &&
      vijandY - spelerY > -50) {
        vijandY = vijandY - 700;
        
    
        
        if (health != 1) {
console.log("hit");
        }
    health = health - 1;
document.getElementById("insert").innerHTML = "You have " + health + " hp";
  if (health <= 0) {
  console.log("DOOD");
  console.log("GAME OVER")
  document.getElementById("insert").innerHTML = "GAMEOVER";
  var yCoord = 601;
}
  }
  // botsing kogel tegen vijand

};


/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill('white');

rect(0,0,1280,720)
  // vijand
  fill("white");
  rect(vijandX - 25, vijandY - 25, 50, 50);
  fill("black");
  ellipse(vijandX, vijandY, 10, 10);

  // kogel

  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);


  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}

