
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");
var text1 = document.getElementById("text1");
const r= rock.value;
const p= paper.value;
const s= scissors.value;
let score = JSON.parse(localStorage.getItem('score'))||{
wins:0,
lose:0,
ties:0
};

function game(value){
  const cmove = cMove();
  if(value === 'rock'){
     if(cmove==='rock'){
      score.ties+=1;
      console.log("youtied")
     }else if(cmove==='paper'){
      score.lose+=1;
      console.log("youlose")
     }else{
      score.wins+=1
      console.log("youwin")
     }
  }
  else if(value === 'paper'){
    if(cmove==='rock'){
      score.wins+=1;
      console.log("youwins")
     }else if(cmove==='paper'){
      score.ties+=1;
      console.log("youtied")
     }else{
      score.lose+=1
      console.log("youlose")
     }
  }
  else if(value === 'scissors'){
    if(cmove==='rock'){
      score.lose+=1;
      console.log("youlose")
     }else if(cmove==='paper'){
      score.wins+=1;
      console.log("youwin")
     }else{
      score.ties+=1
      console.log("youtied")
     }
  }
        
     
        text1.innerText = "wins :"+" "+score.wins;
        text2.innerText = "lose :"+" "+score.lose;
        text3.innerText = "ties :"+" "+score.ties;
        text4.innerText = "you picked"+" "+value +". "+"computer picked"+" "+cmove;
        localStorage.setItem('score' ,JSON.stringify(score));

}
function cMove(){
  const cNum = Math.floor(Math.random()*10);
  if(cNum <= 3){
    return 'rock';
  }else if(cNum <= 6){
    return 'paper'
  }else if(cNum <= 9){

    return 'scissors';
  }

}

function reset(){
  localStorage.removeItem('score');
  score.wins=0;
  score.lose=0;
  score.ties=0;
  text1.innerText = "wins :"+" "+score.wins;
  text2.innerText = "lose :"+" "+score.lose;
  text3.innerText = "ties :"+" "+score.ties;
  text4.innerText = "score reset done,pick again to play.";
}
