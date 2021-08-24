let p1score= document.querySelector('#p1score');
let p2score= document.querySelector('#p2score');
let p1button=document.querySelector('#p1button');
let p2button=document.querySelector('#p2button');  
let reset=document.querySelector('#reset');
let winnerScore=document.querySelector('#playto');

let isgameover=false;
let maxnum=3;
let p1=0;
let p2=0;

p1button.addEventListener('click',()=>{
if(!isgameover)
{
   
        p1+=1;
        p1score.textContent=p1;
  
    if(p1===maxnum)
    {
        isgameover=true;
        p1score.classList.add('winner');
        p2score.classList.add('loser');
    }
}
});
p2button.addEventListener('click',()=>{
if(!isgameover)
{
  
        p2+=1;
        p2score.textContent=p2;

    if(p2===maxnum)
    {
        isgameover=true;
        p2score.classList.add('winner');
        p1score.classList.add('loser');
    }
}
});

winnerScore.addEventListener('change',function (){
    maxnum=parseInt(this.value);
    Reset();
});


reset.addEventListener('click',Reset);
function Reset(){
    isgameover=false;
    p1=0;p2=0;
    p1score.textContent=0;
    p2score.textContent=0;
    p2score.classList.remove('winner','loser');
    p1score.classList.remove('loser','winner');
}

