function feststellcheck(check) {
	ck = check.keyCode?check.keyCode:check;
	sk = check.shiftKey?check.shiftKey:((ck==16)?true:false);
	if(((ck>=65 && ck<=90) && !sk) || ((ck>=97 && ck<=122) && sk))
		document.getElementById('upperCase').style.visibility='visible';
	else
		document.getElementById('upperCase').style.visibility='hidden';
}

// Change script to onclick detection for caps lock in final build
// too tired to do it now - Mon, March 25, 2019 - 8:43 GMT 