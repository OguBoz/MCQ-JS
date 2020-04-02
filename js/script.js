function submitAnswers() {
    var total = 4;
    var score = 0;
    var i;
    var j;

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;


    for(i = 1; i<=4; i++) {
        if(eval('q'+i) == null || eval('q'+i) == '') {
            alert("You missed question " + i);
            return false;
        }
    }

    var answers = ["a","a","a","a"];

    for(j = 1; j<=answers.length; j++) {
        if(eval('q'+j) == answers[j-1]) {
            score++;
        }
    }
    document.querySelector(".results").innerHTML = "<h3>You scored <span>" + score + " out of " + total +"</span>";

    return false;
}