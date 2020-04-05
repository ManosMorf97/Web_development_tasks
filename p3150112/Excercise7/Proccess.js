let definitions=['definition1','definition2'];
let colors=['darkblue','blue'];
let hide=true;
function loaded(){
	const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
	   "Saturday"
	];
	function CreateDate(){
		const d = new Date();
		function createColors(){

			if (dayNames[d.getDay()]=="Sunday")
				document.getElementsByTagName('body')[0].style.backgroundColor="Crimson";
			else if (dayNames[d.getDay()]=="Monday")
				document.getElementsByTagName('body')[0].style.backgroundColor="Coral";
			else if  (dayNames[d.getDay()]=="Tuesday")
				document.getElementsByTagName('body')[0].style.backgroundColor="CadetBlue";
			else if  (dayNames[d.getDay()]=="Wednesday")
				document.getElementsByTagName('body')[0].style.backgroundColor="CornflowerBlue";
			else if  (dayNames[d.getDay()]=="Thursday")
				document.getElementsByTagName('body')[0].style.backgroundColor="Chartreuse";
			else if  (dayNames[d.getDay()]=="Friday")
				document.getElementsByTagName('body')[0].style.backgroundColor="Aquamarine";
			else 
				document.getElementsByTagName('body')[0].style.backgroundColor="Aqua";
		}
		createColors()
	}
	CreateDate()
}

function DisappearContent(){
	if(hide){
		for(let i=0; i<2; i++)
			document.getElementById(definitions[i]).innerHTML="<p>Το περιεχόμενο εξαφανήστηκε</p>"
		document.getElementById("Hide").innerHTML="Im useless now"
    }
    hide=!hide;
}
function swapColors(){
	for(let i=0; i<2; i++)
		document.getElementById(definitions[i]).style.backgroundColor=colors[i];
	colors=[colors[1],colors[0]];
}