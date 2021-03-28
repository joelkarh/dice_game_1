//variables
const randomNumber1= Math.floor(Math.random()*6)+1;//random number from 1-6
const randomNumber2= Math.floor(Math.random()*6)+1;

const image1 = "images/dice" +randomNumber1 + ".png";// images/dice(1-6).png
const image2 = "images/dice" +randomNumber2 + ".png";

//Use the random number you created in the last step
// to pick out a random dice image between dice1.png to dice 6.png then place this image inside the left <img> element.
document.querySelector(".img1").setAttribute("src",image1);//
document.querySelector(".img2").setAttribute("src",image2);

//Method
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins"
  }
    else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML = "player 2 wins"
    }else{
        document.querySelector("h1").innerHTML = "Draw"
    }
