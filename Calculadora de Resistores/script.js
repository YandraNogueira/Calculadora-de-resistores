function pegarDados(){
	let PriFaixa = document.getElementById("PriFaixa").value;
	let SegFaixa = document.getElementById("SegFaixa").value;
	let TerFaixa = document.getElementById("TerFaixa").value;
	let QuaFaixa = document.getElementById("QuaFaixa").value;

	let concatenar = parseFloat(PriFaixa + SegFaixa);
	let result = concatenar * TerFaixa;
	let tole1 = result * QuaFaixa;
	let tole2 = result - tole1;
	let tole3 = result + tole1;
	
	document.getElementById('result').innerHTML = result + ' Ohms com tolerância mínima de ' + tole2 + ' Ohms e máxima de ' + tole3 + ' Ohms ';
}