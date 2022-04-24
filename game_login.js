function go()
{

play1= document.getElementById("input1").value;
play2= document.getElementById("input2").value;
localStorage.setItem("text1", play1);
localStorage.setItem("text2", play2);
window.location="game_page.html"

}

