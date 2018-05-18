var AmountToLoadAtATime = 15;

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
const gameElements = [
  '<div class="games"><p><image class="tgimages" src="images/zombotron2.png" alt="zombotron" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=zombotron2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=zombotron2&quot;;"> Zombotron 2</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/strikeforceheroes.png" alt="strike force heroes" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=strikeforceheroes&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=strikeforceheroes&quot;;"> Strike Force Heroes</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/stickfigurebadminton2.png" alt="stick figure badminton 2" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=stickfigurebadminton2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=stickfigurebadminton2&quot;;"> Stick Figure Badminton 2</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/plazmaburst2.png" alt="Plazma Burst 2" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=plazmaburst2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=plazmaburst2&quot;;"> Plazma Burst 2</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/strikeforceheroes2.png" alt="Strike Force Heroes 2" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=strikeforceheroes2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=strikeforceheroes2&quot;;"> Strike Force Heroes 2</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/raze2.png" alt="Raze 2" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=raze2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=raze2&quot;;"> Raze 2</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/ageofwar.png" alt="Age of War" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=ageofwar&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=ageofwar&quot;;"> Age of War</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/strikeforceheroes3.png" alt="Strike Force Heroes 3" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=strikeforceheroes3&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=strikeforceheroes3&quot;;"> Strike Force Heroes 3</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/worldbasketcup.png" alt="World Basket Cup" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=worldbasketcup&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=worldbasketcup&quot;;"> World Basket Cup</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/raze.png" alt="Raze" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=raze&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=raze&quot;;"> Raze</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/zombotron.png" alt="Raze" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=zombotron&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=zombotron&quot;;"> Zombotron</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/raze3.png" alt="Raze 3" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=raze3&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=raze3&quot;;"> Raze 3</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/knightmaretower.png" alt="Knightmare Tower" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=knightmaretower&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=knightmaretower&quot;;"> Knightmare Tower</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/jacksmith.png" alt="Jack Smith" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=jacksmith&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=jacksmith&quot;;"> Jack Smith</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/cyclomaniacs.png" alt="Cyclomaniacs" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=cyclomaniacs&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=cyclomaniacs&quot;;"> Cyclomaniacs</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/idlesword.png" alt="Idle Sword" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=idlesword&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=idlesword&quot;;"> Idle Sword</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/flight.png" alt="Flight" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=flight&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=flight&quot;;"> Flight</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/hauntthehouse.png" alt="Haunt The House" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=hauntthehouse&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=hauntthehouse&quot;;"> Haunt The House</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/cyclomaniacs2.png" alt="cyclomaniacs 2" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=cyclomaniacs2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=cyclomaniacs2&quot;;"> Cyclomaniacs 2</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/dolphinolympics2.png" alt="Dolphin Olympics 2" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=dolphinolympics2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=dolphinolympics2&quot;;"> Dolphin Olympics 2</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/armormayhemme.png" alt="Armor Mayhem Map Editor" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=armormayhemme&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=armormayhemme&quot;;"> Armor Mayhem Map Editor</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/ageofwar2.png" alt="Age of War 2" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=ageofwar2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=ageofwar2&quot;;"> Age of War 2</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/sydneyshark.png" alt="Sydney Shark" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=sydneyshark&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=sydneyshark&quot;;"> Sydney Shark</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/superstacker2.png" alt="Super Stacker 2" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=superstacker2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=superstacker2&quot;;"> Super Stacker 2</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/bubbletanks2.png" alt="Bubble Tanks 2" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=bubbletanks2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=bubbletanks2&quot;;"> Bubble Tanks 2</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/benjibirdicon.png" alt="Flappy Benji" style="width:65px;height:65px" onclick="window.location.href = &quot;games/benjibird.html&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;games/error.html&quot;;"> Benji Bird</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/benjiclicker.png" alt="Benji Clicker" style="width:65px;height:65px" onclick="window.location.href = &quot;games/benjiclicker.html&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;games/error.html&quot;;"> Benji Clicker</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/tbenjiicon.png" alt="T-Benji" style="width:65px;height:65px" onclick="window.location.href = &quot;games/T-Benji/index.html&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;games/error.html&quot;;"> T-Benji</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/Thumb_Fighter.png" alt="Thumb Fighter" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=thumbfighter&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=thumbfighter&quot;;"> Thumb Fighter</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/theuntitledgame2.png" alt="The Untitled Game" style="width:65px;height:65px" onclick="window.location.href = &quot;games/theuntitledgame/index.html&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;games/theuntitledgame/index.html&quot;;"> The Untitled Game</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/growtower.png" alt="Grow Tower" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=growtower&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=growtower&quot;;"> Grow Tower</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/learn2fly.png" alt="Learn To Fly" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=learntofly&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=learntofly&quot;;"> Learn To Fly</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/boxhead2.png" alt="Boxhead 2" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=boxhead2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=boxhead2&quot;;"> Boxhead 2</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/happywheels.png" alt="Happy Wheels" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=happywheels&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=happywheels&quot;;"> Happy Wheels</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/linerider.png" alt="Line Rider" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=linerider&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=linerider&quot;;"> Line Rider</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/electricman2.png" alt="ElectricMan 2" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=electricman2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=electricman2&quot;;"> Electric Man 2</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/swordsandsandals.png" alt="Swords and Sandals" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=swords_and_sandals_gladiator&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=swords_and_sandals_gladiator&quot;;"> Swords and Sandals</p></div>',
  '<div class="games"><p><image class="tgimages" src="images/playing-with-fire-2.png" alt="Playing with fire 2" style="width:65px;height:65px" onclick="window.location.href = &quot;gameplayer.html?game=playing-with-fire-2&quot;;" /><input class="buttontg" type="button" value="Play Game" onclick="window.location.href = &quot;gameplayer.html?game=playing-with-fire-2&quot;;"> Playing with fire 2</p></div>'
]
var RandomizedGameElements = gameElements;
shuffleArray(RandomizedGameElements);
var LoadMoreBtn = '<input type="button" id="loadmore" class="button" value="Load More Games" onclick="LoadMoreGames()">';
var remainingElements = RandomizedGameElements;
var i = 0;

/* //Loads some games but dublicates in some cases.
while (i < gameElements.length) {
  document.getElementsByClassName('row')[0].innerHTML += gameElements[i];
  remainingElements.shift();
  console.log(i);
  if(i > AmountToLoadAtATime){
    console.log("Exceeded 10");
    document.getElementsByClassName('row')[0].innerHTML += LoadMoreBtn;
    break;
  }
  i+=1;
}*/
while (i < RandomizedGameElements.length) { //Randomizes and loads all games at once.
  document.getElementsByClassName('row')[0].innerHTML += RandomizedGameElements[i];
  //console.log(i);
  i+=1;
}
/*
while (i < remainingElements.length) { //Randomizes and loads some games at once, loads more games when butten pressed.
  document.getElementsByClassName('row')[0].innerHTML += remainingElements[0];
  remainingElements.shift();
  if(i > AmountToLoadAtATime){
    document.getElementsByClassName('row')[0].innerHTML += LoadMoreBtn;
    break;
  }
  i+=1;
}*/

/*
function LoadMoreGames(){
  i = 0;
  document.getElementById("loadmore").parentNode.removeChild(document.getElementById("loadmore"));
  while (0 < remainingElements.length) {
    document.getElementsByClassName('row')[0].innerHTML += remainingElements[0];
    remainingElements.shift();
    if(i > AmountToLoadAtATime){
      document.getElementsByClassName('row')[0].innerHTML += LoadMoreBtn;
      break;
    }
    i+=1;
  }
}
*/
