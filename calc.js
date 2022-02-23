function add(){
	var x=document.getElementById('num1').value;
	var y=document.getElementById('num2').value;
	 document.getElementById("num3").value = parseInt(x)+parseInt(y);
}
function sub(){
	var x=document.getElementById('num1').value;
	var y=document.getElementById('num2').value;
	document.getElementById("num3").value = parseInt(x)-parseInt(y);


}

function mul(){
	var x=document.getElementById('num1').value;
	var y=document.getElementById('num2').value;
	document.getElementById("num3").value = parseInt(x)*parseInt(y);
}

function div(){
	var x=document.getElementById('num1').value;
	var y=document.getElementById('num2').value;
	document.getElementById("num3").value = parseInt(x)/parseInt(y);
}


function resetit() {
  document.getElementById("form").reset();
}



function hello(){
	console.log("hello world");
}