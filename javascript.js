const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
const q4 = document.getElementById('q4');
const q5 = document.getElementById('q5');
const q6 = document.getElementById('q6');
const q7 = document.getElementById('q7');
const q8 = document.getElementById('q8');
const q9 = document.getElementById('q9');

q1.addEventListener('click', () => play(1));
q2.addEventListener('click', () => play(2));
q3.addEventListener('click', () => play(3));
q4.addEventListener('click', () => play(4));
q5.addEventListener('click', () => play(5));
q6.addEventListener('click', () => play(6));
q7.addEventListener('click', () => play(7));
q8.addEventListener('click', () => play(8));
q9.addEventListener('click', () => play(9));

var turn = 1;

var a1;
var a2;
var a3;

var b1;
var b2;
var b3;

var c1;
var c2;
var c3;

var score1 = 0;
var score2 = 0;

var name1 = prompt('Player 1 nickname');
name1 = name1.toUpperCase();
document.getElementById('output1').innerHTML = `${name1} SCORE: <span id="outputScore1">0</span>`

var name2 = prompt('Player 2 nickname');
name2 = name2.toUpperCase();
document.getElementById('output2').innerHTML = `${name2} SCORE: <span id="outputScore1">0</span>`

const outp1 = document.getElementById('outputScore1');
const outp2 = document.getElementById('outputScore2');

function play(n) {
    switch (n) {
        case 1: //a1
            if (turn == 1) {
                turn = 2;
                q1.style.backgroundImage = "url('imgs/xIcon.png')";
                a1 = 1;
            } else if (turn == 2) {
                turn = 1;
                q1.style.backgroundImage = "url('imgs/circleIcon.png')";
                a1 = 2;
            }
            break;

        case 2: //a2
            if (turn == 1) {
                turn = 2;
                q2.style.backgroundImage = "url('imgs/xIcon.png')";
                a2 = 1;
            } else if (turn == 2) {
                turn = 1;
                q2.style.backgroundImage = "url('imgs/circleIcon.png')";
                a2 = 2;
            }
            break;

        case 3: //a3
            if (turn == 1) {
                turn = 2;
                q3.style.backgroundImage = "url('imgs/xIcon.png')";
                a3 = 1;
            } else if (turn == 2) {
                turn = 1;
                q3.style.backgroundImage = "url('imgs/circleIcon.png')";
                a3 = 2;
            }
            break

        case 4: //b1
            if (turn == 1) {
                turn = 2;
                q4.style.backgroundImage = "url('imgs/xIcon.png')";
                b1 = 1;
            } else if (turn == 2) {
                turn = 1;
                q4.style.backgroundImage = "url('imgs/circleIcon.png')";
                b1 = 2;
            }
            break

        case 5: //b2
            if (turn == 1) {
                turn = 2;
                q5.style.backgroundImage = "url('imgs/xIcon.png')";
                b2 = 1;
            } else if (turn == 2) {
                turn = 1;
                q5.style.backgroundImage = "url('imgs/circleIcon.png')";
                b2 = 2;
            }
            break

        case 6: //b3
            if (turn == 1) {
                turn = 2;
                q6.style.backgroundImage = "url('imgs/xIcon.png')";
                b3 = 1;
            } else if (turn == 2) {
                turn = 1;
                q6.style.backgroundImage = "url('imgs/circleIcon.png')";
                b3 = 2;
            }
            break

        case 7: //c1
            if (turn == 1) {
                turn = 2;
                q7.style.backgroundImage = "url('imgs/xIcon.png')";
                c1 = 1;
            } else if (turn == 2) {
                turn = 1;
                q7.style.backgroundImage = "url('imgs/circleIcon.png')";
                c1 = 2;
            }
            break

        case 8: //c2
            if (turn == 1) {
                turn = 2;
                q8.style.backgroundImage = "url('imgs/xIcon.png')";
                c2 = 1;
            } else if (turn == 2) {
                turn = 1;
                q8.style.backgroundImage = "url('imgs/circleIcon.png')";
                c2 = 2;
            }
            break

        case 9: //c3
            if (turn == 1) {
                turn = 2;
                q9.style.backgroundImage = "url('imgs/xIcon.png')";
                c3 = 1;
            } else if (turn == 2) {
                turn = 1;
                q9.style.backgroundImage = "url('imgs/circleIcon.png')";
                c3 = 2;
            }
            break
    }

    if (a1 == 1 && a2 == 1 && a3 == 1) {
        score1 += 1;
        outp1.innerText = score1;

        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }
    if (b1 == 1 && b2 == 1 && b3 == 1) {
        score1 += 1;
        outp1.innerText = score1;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }
    if (c1 == 1 && c2 == 1 && c3 == 1) {
        score1 += 1;
        outp1.innerText = score1;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }

    if (a1 == 1 && b1 == 1 && c1 == 1) {
        score1 += 1;
        outp1.innerText = score1;

        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }
    if (a2 == 1 && b2 == 1 && c2 == 1) {
        score1 += 1;
        outp1.innerText = score1;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }
    if (a3 == 1 && b3 == 1 && c3 == 1) {
        score1 += 1;
        outp1.innerText = score1;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }

    if (a1 == 1 && b2 == 1 && c3 == 1) {
        score1 += 1;
        outp1.innerText = score1;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }
    if (a3 == 1 && b2 == 1 && c1 == 1) {
        score1 += 1;
        outp1.innerText = score1;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }


    if (a1 == 2 && a2 == 2 && a3 == 2) {
        score2 += 1;
        outp2.innerText = score2;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }
    if (b1 == 2 && b2 == 2 && b3 == 2) {
        score2 += 1;
        outp2.innerText = score2;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }
    if (c1 == 2 && c2 == 2 && c3 == 2) {
        score2 += 1;
        outp2.innerText = score2;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }

    if (a1 == 2 && b1 == 2 && c1 == 2) {
        score2 += 1;
        outp2.innerText = score2;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }
    if (a2 == 2 && b2 == 2 && c2 == 2) {
        score2 += 1;
        outp2.innerText = score2;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }
    if (a3 == 2 && b3 == 2 && c3 == 2) {
        score2 += 1;
        outp2.innerText = score2;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }

    if (a1 == 2 && b2 == 2 && c3 == 2) {
        score2 += 1;
        outp2.innerText = score2;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }
    if (a3 == 2 && b2 == 2 && c1 == 2) {
        score2 += 1;
        outp2.innerText = score2;
        
        a1 = 0;
        a2 = 0;
        a3 = 0;
        b1 = 0;
        b2 = 0;
        b3 = 0;
        c1 = 0;
        c2 = 0;
        c3 = 0;
        q1.style.backgroundImage = "inherit";
        q2.style.backgroundImage = "inherit";
        q3.style.backgroundImage = "inherit";
        q4.style.backgroundImage = "inherit";
        q5.style.backgroundImage = "inherit";
        q6.style.backgroundImage = "inherit";
        q7.style.backgroundImage = "inherit";
        q8.style.backgroundImage = "inherit";
        q9.style.backgroundImage = "inherit";
    }
}