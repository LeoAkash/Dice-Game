ludo = () =>{

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var number1Dice = "images/dice"+randomNumber1+".png";
document.getElementById("img1").setAttribute("src",number1Dice);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var number2Dice = "images/dice"+randomNumber2+".png";
document.getElementById("img2").setAttribute("src",number2Dice);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Vikram Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Betal Wins!";

}else{
    document.querySelector("h1").innerHTML="Try again :(";
}
}
