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

function getValue(value){
	var z=1;
	switch(z){
		case 1: z=1;break;
		case 2: z=2;break;
		case 3: z=3;break;
		case 4: z=4;break;
		case 5: z=5;break;
		case 6: z=6;break;
		case 7: z=7;break;
		case 8: z=8;break;
		case 9: z=9;break;
		
		
		
	}
}

function hello(){
	console.log("hello world");
}