var x = document.cookie;
var y = x.split(";");
var i = 0;
while (i<y.length){
  if(y[i] == "recentgames"){
    var RecentGames = y[i].split("=");
    var RecentGames = RecentGames[1].split(",");
  }
  i+=1;
}
if(RecentGames === undefined){
  //No recent games
  console.log("No recent games");
}else if (RecentGames !== undefined) {
  //Recent games
  document.getElementById('recentgames').style.display = "block";
  var i = 0;
  while (i<0) {
    document.getElementsByClassName('rowrecent')[0].innerHTML += "<p>heloo ut</p>";
  }
}
