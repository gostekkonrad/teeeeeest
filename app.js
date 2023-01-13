function kalkulator(operator){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	switch(operator)
	{
		case "+":
			var wynik = parseFloat(a) + parseFloat(b);
		break;
		case "-":
			var wynik = parseFloat(a) - parseFloat(b);
		break;
		case "x":
			var wynik = parseFloat(a) * parseFloat(b);
		break;
		case "/":
		var wynik = parseFloat(a) / parseFloat(b);
		break;
	}
	document.getElementById("c").value = wynik;
}