const color = ['green', 'blue', 'aqua', 'white', 'black'];
let scoreWinOne = 0;
let scoreWinTwo = 0;
let losesOne = 0;
let losesTwo = 0;
function randomOne(){
    const randomOne = Math.floor(Math.random() * color.length);
    const randomTwo = Math.floor(Math.random() * color.length);
    document.querySelector('.div1').style.backgroundColor = color[randomOne];
    document.querySelector('.div2').style.backgroundColor = color[randomTwo];
    if (randomOne == randomTwo){
        scoreWinOne += 1;
        document.querySelector('.score1').innerHTML = scoreWinOne;
    } else {
        losesOne += 1;
        document.querySelector('.losesOne').innerHTML = losesOne;
    }
}
function randomTwo(){
    const randomOne = Math.floor(Math.random() * color.length);
    const randomTwo = Math.floor(Math.random() * color.length);
    document.querySelector('.div1').style.backgroundColor = color[randomOne];
    document.querySelector('.div2').style.backgroundColor = color[randomTwo];
    if (randomOne == randomTwo){
        scoreWinTwo += 1;
        document.querySelector('.score2').innerHTML = scoreWinTwo;
    } else {
        losesTwo += 1;
        document.querySelector('.losesTwo').innerHTML = losesTwo;
    }
}
