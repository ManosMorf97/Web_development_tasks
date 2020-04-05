function hovered(x){
	x.style.backgroundColor="yellow";        
}
function unhovered(x){
	x.style.backgroundColor="darkKhaki";
}
let defs=document.getElementsByClassName("definition1");
for(let i=0; i<defs.length; i++)
	document.getElementsByClassName("definition1")[i].style.backgroundColor="green";