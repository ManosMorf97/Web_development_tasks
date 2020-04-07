let definitions=['#definition1','#definition2'];
let colors=['darkblue','blue'];
let hide=true;
window.onload= function(){
	const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
	   "Saturday"
	];
	function CreateDate(){
		const d = new Date();
		function createColors(){

			if (dayNames[d.getDay()]=="Sunday")
				document.querySelector('body').style.backgroundColor="Crimson";
			else if (dayNames[d.getDay()]=="Monday")
				document.querySelector('body').style.backgroundColor="Coral";
			else if  (dayNames[d.getDay()]=="Tuesday")
				document.querySelector('body').style.backgroundColor="CadetBlue";
			else if  (dayNames[d.getDay()]=="Wednesday")
				document.querySelector('body').style.backgroundColor="CornflowerBlue";
			else if  (dayNames[d.getDay()]=="Thursday")
				document.querySelector('body').style.backgroundColor="Chartreuse";
			else if  (dayNames[d.getDay()]=="Friday")
				document.querySelector('body').style.backgroundColor="Aquamarine";
			else 
				document.querySelector('body').style.backgroundColor="Aqua";
		}
		createColors()
	}
	CreateDate()
}

function DisappearContent(){
	if(hide){
		for(let i=0; i<2; i++)
			document.querySelector(definitions[i]).innerHTML="<p>Το περιεχόμενο εξαφανήστηκε</p>"
		document.querySelector("#Hide").innerHTML="Im useless now"
    }
    hide=!hide;
}
function swapColors(){
	for(let i=0; i<2; i++){
		document.querySelector(definitions[i]).style.backgroundColor=colors[i];
		document.querySelector(definitions[i]).style.backgroundColor=colors[i];
	}
	colors=[colors[1],colors[0]];
}