player1name=localStorage.getItem("player1 name");
player2name=localStorage.getItem("player2 name");
player1score=0;
player2score=0;
document.getElementById("player1name").innerHTML=player1name+ " : ";
document.getElementById("player2name").innerHTML=player2name+ " : ";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerques").innerHTML="Question turn- "+player1name;
document.getElementById("playerans").innerHTML="Answer turn- "+player2name;
function send(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();
    charAt1=word.charAt(1);
    logic1=Math.floor(word.length/2);
    charAt2=word.charAt(logic1);
    logic2=word.length-1;
    charAt3=word.charAt(logic2);
    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_word +input_box +check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
questionturn="player1";
answerturn="player2";
function check(){
getanswer=document.getElementById("input_check_box").value;
answer=getanswer.toLowerCase();
if(answer==word){
    if(answerturn=="player1"){
        player1score=player1score+1;
        document.getElementById("player1score").innerHTML=player1score;
    }
    else{
        player2score=player2score+1;
        document.getElementById("player2score").innerHTML=player2score;
    }
}
if(questionturn=="player1"){
    questionturn="player2";
    document.getElementById("playerques").innerHTML="Question turn- "+player2name;
}
else{
    questionturn="player1";
    document.getElementById("playerques").innerHTML="Question turn- "+player1name; 
}
if(answerturn=="player1"){
    answerturn="player2";
    document.getElementById("playerans").innerHTML="Answer turn- "+player2name;
}
else{
    answerturn="player1";
    document.getElementById("playerans").innerHTML="Answer turn- "+player1name; 
}
document.getElementById("output").innerHTML="";
}