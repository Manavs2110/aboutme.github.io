let p1={
    score=0,
    display=document.querySelector('#p1score'),
    button=document.querySelector('#p1button')
}
let p2={
    score=0,
    display=document.querySelector('#p2score'),
    button=document.querySelector('#p2button')
}
let isGameOver=false;
let maxnum=3;
function updateScore(player,opponent){
    if(!isGameOver)
    {
        player.score+=1;
        player.display.textContent=player.score;

        if(player.score===maxnum)
        {
            isGameOver=true;
            player.classList.add('winner');
            opponent.classList.add('loser');
        }
    }
}

p1.button.addEventListener('click', function (){
    updateScore(p1,p2);
});
p2.button.addEventListener('click',function (){
    updateScore(p2,p1);
} );

winnerScore.addEventListener('change',function (){
    maxnum=parseInt(this.value);
    Reset();
});


reset.addEventListener('click',Reset);
function Reset(){
    isgameover=false;
    for(let p of [p1,p2])
    {
    p.score=0;
    p.display.textContent=0;
    p.display.classList.remove('winner','loser');
}
}
