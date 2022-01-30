const number = document.getElementById("number");
const button1 = document.getElementById("button1");
const judgement = document.getElementById("judgement");
const divisor = document.getElementById("divisor");
var r = "";
var s = "";
var t = 0;
var d = 0;
var answer = Math.floor(Math.random() * 65280) + 256;
var a = 0;
var array = [];
button1.addEventListener("click", (e) => {
    e.preventDefault();
    if(t == 0 || number.value % d == 0){
	if(number.value < answer){
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
    t += 1;
});

function EA(m, n){
    this.c = 0;
    this.gcd = 1;
    var l, s, g;
    l = Math.max(m, n);
    s = Math.min(m, n);
    while(x != 0){
	g = s;
	s = l % g;
	array[a] = l;
	a++;
	l = g;
	this.c++;
    }
    array[a] = g;
    a++;
    this.gcd = s;
}
	
function divshow(m, n){
    var l, s;
    l = Math.max(m, n);
    s = Math.max(m, n);
    if(array.indexOf([l, s] > -1){
    }
}
