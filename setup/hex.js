const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
//Varijablama btn i color smo dodali vrijednosti da je btn dugme da je color boja

//Ovom metodom kažemo da kad kliknemo dugme to jeste btn da će on odraditi function to jeste šta nam se nalazi u našoj funkciji u našem slučaju generisat će random brojeve i slova iz naše gore zadane liste.
btn.addEventListener('click', function(){
let hexColor = "#";
for(let i = 0; i<6; i++){
hexColor += hex[getRandomNumber()];
}
color.textContent = hexColor //settamo naš text koji slijedi nakon background colora na vrijednost koja je generisana tj hexColor color je jer nam se tako klasa zove spana u kojoj se nalazi naš text 
document.body.style.backgroundColor = hexColor;
//Seta našu backgorund boju u našem dokumentu na generisanu vrijednost. 
});
function getRandomNumber(){
return Math.floor(Math.random() * hex.length);
}