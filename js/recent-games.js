var x = document.cookie.split(";");
var i = 0;
while (i<x.length){
  if(x[i].indexOf("recentgames") !== -1){
    var RecentGames = x[i].split("=");
    var RecentGames = RecentGames[1].split(",");
  }
  i+=1;
}
if(RecentGames === undefined){
  console.log("No recent games");
}else if (RecentGames !== undefined) {
  //Recent games
  document.getElementById('recentgames').style.display = "block";
  var i = 0;
  while ( i < RecentGames.length) {
    //document.getElementsByClassName('rowrecent')[0].innerHTML += "<p>heloo ut</p>";
    RenderRecentGame(RecentGames[i]);
    i+=1;
  }
}
function RenderRecentGame(GameId){
  console.log(gameElements[GameId]);
  document.getElementsByClassName('rowrecent')[0].innerHTML += gameElements[GameId];
}
