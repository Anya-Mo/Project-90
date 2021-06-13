function addUser() {
    player1_name=localStorage.setItem("player1_name", player1_name);
    player2_name=localStorage.setItem("player2_name", player2_name);
    document.getElementById("player1_name").innerHTML=player1_name+":";
    document.getElementById("player2_name").innerHTML=player2_name+":";
    document.getElementById("player1_score").innerHTML=player1_score;
    document.getElementById("player2_score").innerHTML=player2_score;
    document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
    document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
    localStorage.setItem("player1_name_input");
    localStorage.setItem("player2_name_input");
}
function send() {
    window.location="quiz_game_login.html";
}