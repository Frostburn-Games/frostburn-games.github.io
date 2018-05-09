var backgrounds = ["background01.jpg","background02.jpg","background03.png", "background04.jpg", "background05.jpg", "background06.jpg", "background07.jpg", "background08.jpg", "background09.jpg", "background10.jpg", "background10.jpg", "background11.jpg"]
var background = backgrounds[Math.floor(Math.random()*backgrounds.length)];
//console.log(background)
document.body.style.background = "#f3f3f3 url('../images/backgrounds/"+background+"') right top";
