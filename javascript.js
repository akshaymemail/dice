//  Player 1
let randomNumber1 = Math.floor( Math.random() * 6 ) + 1;
document.querySelector('.dice .img1').src='images/dice'+randomNumber1+'.png';

//  Player 2
let randomNumber2 = Math.floor( Math.random() * 6 ) + 1;
document.querySelector('.dice .img2').src='images/dice'+randomNumber2+'.png';

// Show Result
if(randomNumber1==randomNumber2){
    document.querySelector('h1').innerHTML = "Draw!";
}else if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 Wins!";
}else{
    document.querySelector('h1').innerHTML = "Player 2 Wins!";
}