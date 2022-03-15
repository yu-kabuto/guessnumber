const number = document.getElementById("number");
const button1 = document.getElementById("button1");
const judgement = document.getElementById("judgement");
const divisor = document.getElementById("divisor");
var r = "";
var s = "";
var answer = Math.floor(Math.random() * 65280) + 256;
var a = 0;
var b = 0;
var arraya = [];
arraya[0] = 0;
a++;
var arrayb = [];
button1.addEventListener("click", (e) => {
    e.preventDefault();
    if(arrayb.includes(number.value)){
	r = "This input is invalid.";
    } else {
	r = "";
	if(number.value == answer){
	    r = "You win.<br>";
	} else {
	    var eventclass = new EA( number.value, answer );
	    arrayb[b] = number.value;
	    b++;
	    s += number.value;
	    s += " : division ";
	    eventclass.EA();
	    s += eventclass.c;
	    s += " time(s), ";
	    if(eventclass.ha.length){
		s += "history ";
		s += eventclass.ha.join(',');
		if(number.value > answer){
		    r = "You lose.<br>";
		}
	    } else {
		s += "no history";
	    }
	    s += "<br>";
	}
    }
    
    judgement.innerHTML = r;
    divisor.innerHTML = s;
});

class EA {
    constructor (m, n) {
	this.m = m;
	this.n = n;
	this.c = 0;
	this.gcd = 1;
	this.ha = [];
    }
    EA(){
	var l, s, g;
	l = Math.max(this.m, this.n);
	s = Math.min(this.m, this.n);
	arraya[a] = l;
	a++;
	arraya[a] = s;
	a++;
	while(s != 0){
	    g = s;
	    s = l % g;
	    var EAclass = new searchhistory( g, s );
	    EAclass.searchhistory();
	    if(!this.ha.length && g != this.m && g != this.n && EAclass.exist != -1){
		this.ha = EAclass.show;
	    }
	    arraya[a] = s;
	    a++;
	    l = g;
	    this.c++;
	}
	this.gcd = g;
    }
}

class searchhistory {
    constructor (m, n) {
	this.m = m;
	this.n = n;
	this.exist = -1;
	this.show = [];
    }
    
    searchhistory(){
	var la, sm, start, end;
	la = Math.max(this.m, this.n);
	sm = Math.min(this.m, this.n);
	start = arraya.indexOf(la);
	end = start;
	if(start > -1 && arraya[start - 1] == 0 && arraya[start + 1] == sm){
	    this.exist = 1;
	    while(arraya[end] != 0){
		end++;
	    }
	    end++;
	    this.show = arraya.slice(start, end);
	}
    }
}
