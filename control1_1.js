const number = document.getElementById("number");
const button1 = document.getElementById("button1");
const judgement = document.getElementById("judgement");
const divisor = document.getElementById("divisor");
var r = "";
var s = "";
var d = 1;
var f = 0;
var answer = Math.floor(Math.random() * 65280) + 256;
button1.addEventListener("click", (e) => {
    e.preventDefault();
    if(number.value % d == 0 && number.value > f){
	if(number.value < answer){
	    f = number.value;
	    r += "";
	    s += "The answer % ";
	    s += number.value;
	    s += " = ";
	    s += answer % number.value;
	    s += " .<br>";
	    d = answer % number.value;
	    if(answer % number.value == 0){
		r = "You lose. The answer is ";
		r += answer;
		r += " .<br>"
	    }
	}
	if(number.value == answer){
	    r = "You win.<br>";
	}
	if(number.value > answer){
	    r = "You Lose. The answer is ";
	    r += answer;
	    r += " .<br>";
	}
    } else {
	r = "Your input is Invalid.<br>";
    }
    
    judgement.innerHTML = r;
    divisor.innerHTML = s;
});
