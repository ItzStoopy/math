player_1=localStorage.getItem("text1");
player_2=localStorage.getItem("text2");

score_1=0;
score_2=0;

document.getElementById("corner1").innerHTML=player_1 + " = ";
document.getElementById("corner2").innerHTML=player_2 + " = ";
document.getElementById("score_1").innerHTML=score_1 ;
document.getElementById("score_2").innerHTML=score_2 ;
document.getElementById("question").innerHTML= "Equation = " + player_1 ; 
document.getElementById("answer").innerHTML= "Answer = " + player_2 ; 

function send()
{

typo= document.getElementById("typing word1").value;
console.log(typo);
typo2= document.getElementById("typing word2").value;
console.log(typo2);


charAt1= type.charAt(1);
console.log(charAt1);

length_divide_2=Math.floor(type.length/2);
charAt2=type.charAt(length_divide_2);
console.log(charAt2);

length_minus_1=type.length-2;
charAt3=type.charAt(length_minus_2);
console.log(charAt3);

remove_charAt1=type.replace(charAt1,"_");
remove_charAt2=charAt1.replace(charAt2,"_");
remove_charAt3=charAt2.replace(charAt3,"_");
console.log(remove_charAt3);

question_word="<h4 id='word-diplay'>Q."+remove_charAt3+"</h4>";
input_box="<br>Answer : <input type='type'id='input_check'> </input>";
check_button="<br><br><br> <button id='check'onclick='chec()'></button>"; 
box=question_word+input_box+check_button;
document.getElementById("display a equation").innerHTML=box;
document.getElementById("typing word1").value="";
document.getElementById("typing word2").value="";
}

question_turn="player1";
answer_turn="player2";

function chec()
{

get_answer= document.getElementById("input_check").value=""
answer=get_answer.toLowerCase();
if (answer==type)
{
    if(answer_turn="player1")
    {
        score_1= score_1 +1;
        document.getElementById("score_1").innerHTML=score_1;
    }
    else
    { 
         score_2= score_2 +1;
        document.getElementById("score_2").innerHTML=score_2;
    }
}

}