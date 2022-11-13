function adduser(){
    player1=document.getElementById("player1input").value;
    player2=document.getElementById("player2input").value;
    localStorage.setItem("player1 name",player1);
    localStorage.setItem("player2 name",player2);
    window.location="game_page.html";
}