

//  ky down events
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 81) {
        document.getElementById("q").style.boxShadow = "0px 0px 20px white";
		var q = new Audio("SK_SNR_01.wav");
		q.play();
    }
    else if(event.keyCode == 87) {
         document.getElementById("w").style.boxShadow = "0px 0px 20px white";
		 var w = new Audio("SK_SNR_03.wav");
	w.play();
    }
	else if (event.keyCode == 69){
		 document.getElementById("e").style.boxShadow = "0px 0px 20px white";
		 var e = new Audio("JK_BRSH_01.wav");
	e.play();
	}
	else if (event.keyCode == 82 ){
		 document.getElementById("r").style.boxShadow = "0px 0px 20px white";
		 var r = new Audio("JK_BRSH_02.wav");
	r.play();
	}
	else if (event.keyCode == 84 ){
		 document.getElementById("t").style.boxShadow = "0px 0px 20px white";
		 var t = new Audio("JK_HH_01.wav");
	t.play();
	}
	else if (event.keyCode == 89 ){
		 document.getElementById("y").style.boxShadow = "0px 0px 20px white";
			var y = new Audio("JK_PRC_03.wav");
	y.play();
	}
	else if (event.keyCode == 85){
		 document.getElementById("u").style.boxShadow = "0px 0px 20px white";
		 var u = new Audio("JK_PRC_06.wav");
	u.play();
	}
	else if (event.keyCode == 73 ){
		 document.getElementById("i").style.boxShadow = "0px 0px 20px white";
		 var i = new Audio("JK_SNR_01.wav");
	i.play();
	}
	else if (event.keyCode == 79 ){
		 document.getElementById("o").style.boxShadow = "0px 0px 20px white";
		 var o = new Audio("JK_SNR_03.wav");
	o.play();
	}
	else if (event.keyCode == 80 ){
		 document.getElementById("p").style.boxShadow = "0px 0px 20px white";
		 var p = new Audio("JK_SNR_07.wav");
	p.play();
	}
});

// key up events
document.addEventListener('keyup', function(event) {
    if(event.keyCode == 81) {
        document.getElementById("q").style.boxShadow = "none";
    }
    else if(event.keyCode == 87) {
         document.getElementById("w").style.boxShadow = "none";
    }
	else if (event.keyCode == 69){
		 document.getElementById("e").style.boxShadow = "none";
	}
	else if (event.keyCode == 82 ){
		 document.getElementById("r").style.boxShadow = "none";
	}
	else if (event.keyCode == 84 ){
		 document.getElementById("t").style.boxShadow = "none";
	}
	else if (event.keyCode == 89 ){
		 document.getElementById("y").style.boxShadow = "none";
	}
	else if (event.keyCode == 85){
		 document.getElementById("u").style.boxShadow = "none";
	}
	else if (event.keyCode == 73 ){
		 document.getElementById("i").style.boxShadow = "none";
	}
	else if (event.keyCode == 79 ){
		 document.getElementById("o").style.boxShadow = "none";
	}
	else if (event.keyCode == 80 ){
		 document.getElementById("p").style.boxShadow = "none";
	}
});

// on mouse down function
function down0() {
	document.getElementById("q").style.boxShadow = "0px 0px 20px white";
	}

function up0() {
	document.getElementById("q").style.boxShadow = "none";
}

function down1() {
	document.getElementById("w").style.boxShadow = "0px 0px 20px white";
	}

function up1() {
	document.getElementById("w").style.boxShadow = "none";
}

function down2() {
	document.getElementById("e").style.boxShadow = "0px 0px 20px white";
	}

function up2() {
	document.getElementById("e").style.boxShadow = "none";
}

function down3() {
	document.getElementById("r").style.boxShadow = "0px 0px 20px white";
	}

function up3() {
	document.getElementById("r").style.boxShadow = "none";
}

function down4() {
	document.getElementById("t").style.boxShadow = "0px 0px 20px white";
	}

function up4() {
	document.getElementById("t").style.boxShadow = "none";
}

function down5() {
	document.getElementById("y").style.boxShadow = "0px 0px 20px white";
	}

function up5() {
	document.getElementById("y").style.boxShadow = "none";
}

function down6() {
	document.getElementById("u").style.boxShadow = "0px 0px 20px white";
	}

function up6() {
	document.getElementById("u").style.boxShadow = "none";
}

function down7() {
	document.getElementById("i").style.boxShadow = "0px 0px 20px white";
	}

function up7() {
	document.getElementById("i").style.boxShadow = "none";
}

function down8() {
	document.getElementById("o").style.boxShadow = "0px 0px 20px white";
	}

function up8() {
	document.getElementById("o").style.boxShadow = "none";
}
function down9() {
	document.getElementById("p").style.boxShadow = "0px 0px 20px white";
	}

function up9() {
	document.getElementById("p").style.boxShadow = "none";
}

// drumkit function
function q1() {
	var q = new Audio("SK_SNR_01.wav");
		q.play();

}

function  w2() {
	var w = new Audio("SK_SNR_03.wav");
	w.play();
}

function  e3() {
	var e = new Audio("JK_BRSH_01.wav");
	e.play();

}

function  r4() {
	var r = new Audio("JK_BRSH_02.wav");
	r.play();
}

function  t5() {
	var t = new Audio("JK_HH_01.wav");
	t.play();

}

function y6 () {
	var y = new Audio("JK_PRC_03.wav");
	y.play();

}

function  u7() {
	var u = new Audio("HHK_TOM_03.wav");
	u.play();
}

function  i8() {
	var i = new Audio("JK_SNR_01.wav");
	i.play();
}

function  o9() {
	var o = new Audio("JK_SNR_03.wav");
	o.play();
}

function  p10() {
	var p = new Audio("JK_SNR_07.wav");
	p.play();

}
