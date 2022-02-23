var stremployees="";
var stremployeetable="";


function search1(){​​
var res="";
var searchdata = parseInt(document.getElementById('form').value);
searchdata=searchdata-101;
res=res+"Name:"+employeeData[searchdata].First+"<br>Place:"+employeeData[searchdata].City+"<br>state:"+employeeData[searchdata].Location;
document.getElementById("data").innerHTML=res;
}​​




function Oddemployee(){
	stremployeetable='<table class="table table-striped table-bordered table-hover table-sm ">';
	stremployeetable=stremployeetable+'<caption><b>List of Odd Employees</b></caption>';
	
	
	stremployeetable=stremployeetable+'<thead class="thead-dark">';
	
		
	stremployeetable=stremployeetable+'<tr><th scope="col">#</th><th scope="col">EmpID</th><th scope="col">First</th><th scope="col">City</tr>';
	
	stremployeetable=stremployeetable+'</thead>';
	
	stremployeetable=stremployeetable+'<tbody>';
	var empID=100;
	for(let i=0;i<employeeData.length;i++){
		if (i%2==0){
		
	stremployeetable=stremployeetable+'<tr><th scope="row">'+(i+1)+'</th><td>'+ (empID+1+i)+'</td><td>'+employeeData[i].First+'</td> <td>'+employeeData[i].City+'</td></tr>';
	}}
	stremployeetable=stremployeetable+'</tbody>';
	stremployeetable=stremployeetable+'</table>';
	
	


document.getElementById("demo").innerHTML=stremployeetable;
	
	}


function Evenemployee(){
	stremployeetable='<table class="table table-striped table-bordered table-hover table-sm ">';
	stremployeetable=stremployeetable+'<caption><b>List of Even Employees</b></caption>';
	
	
	stremployeetable=stremployeetable+'<thead class="thead-dark">';
	
		
	stremployeetable=stremployeetable+'<tr><th scope="col">#</th><th scope="col">EmpID</th><th scope="col">First</th><th scope="col">City</tr>';
	
	stremployeetable=stremployeetable+'</thead>';
	
	stremployeetable=stremployeetable+'<tbody>';
	var empID=100;
	for(let i=0;i<employeeData.length;i++){
		if (i%2!=0){
		
	stremployeetable=stremployeetable+'<tr><th scope="row">'+(i+1)+'</th><td>'+ (empID+1+i)+'</td><td>'+employeeData[i].First+'</td> <td>'+employeeData[i].City+'</td></tr>';
	}}
	stremployeetable=stremployeetable+'</tbody>';
	stremployeetable=stremployeetable+'</table>';
	
	


document.getElementById("demo").innerHTML=stremployeetable;
	
	}



function displaydata(){
	
	
	
	stremployeetable='<table width="100%"class="table table-striped table-bordered table-hover table-sm " style="border-spacing:100px;">';
	stremployeetable=stremployeetable+'<caption><b>List of Employees</b></caption>';
	
	
	stremployeetable=stremployeetable+'<thead class="thead-dark">';
	
		
	stremployeetable=stremployeetable+'<tr><th scope="col">#</th><th scope="col">EmpID</th><th scope="col">First</th><th scope="col">City</th><th scope="col">Location</tr>';
	
	stremployeetable=stremployeetable+'</thead>';
	
	stremployeetable=stremployeetable+'<tbody>';
	var empID=100;
	for(let i=0;i<employeeData.length;i++){
		
	stremployeetable=stremployeetable+'<tr><th scope="row">'+(i+1)+'</th><td>'+ (empID+1+i)+'</td><td>'+employeeData[i].First+'</td> <td>'+employeeData[i].City+'</td><td>'+employeeData[i].Location+'</td></tr>';
	}
	stremployeetable=stremployeetable+'</tbody>';
	stremployeetable=stremployeetable+'</table>';
	
	


document.getElementById("demo").innerHTML=stremployeetable;

}
function hidedata(){
	document.getElementById("demo").innerHTML="";
}



var employeeData;

employeeData=[{
"First":"Khushi",
"Last":"Maurya",
"City":"Noida",
"Location":"Uttar Pradesh"
},{
"First":"Ted",
"Last":"Mosby",
"City":"Westchester County",
"Location":"New York"
},{
"First":"Rachel",
"Last":"Green",
"City":"Los Angeles",
"Location":"United States"	
},
{
"First":"Ross",
"Last":"Geller",
"City":"Nairobi",
"Location":"Uttarakhand"		
},
{
"First":"Joey",
"Last":"Tribbiani",
"City":"Rome",
"Location":"Italy"
	
},
{
"First":"Chandler",
"Last":"Bing",
"City":"Oxford",
"Location":"United Kingdom"
},
{
"First":"Jane",
"Last":"Sloan",
"City":"Paris",
"Location":"France"
},
{
"First":"Monica",
"Last":"Geller",
"City":"Tokyo",
"Location":"Japan"
},
{
"First":"Phoebe",
"Last":"Buffay",
"City":"Boston",
"Location":"Massachussets"
},
{
"First":"Sutton",
"Last":"Brady",
"City":"Brooklyn",
"Location":"Ohio"
},
{
"First":"Saqlain",
"Last":"Khan",
"City":"Nirman Vihar",
"Location":"Delhi"
}]

