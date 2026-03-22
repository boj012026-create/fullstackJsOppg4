const artSubmit = document.getElementById("art-submit");
const artScreen = document.getElementById("art-screen"); 

const artSeed = [
    {	shape: "square",
	show: document.getElementById("show-square"),
	amount: document.getElementById("amount-square")},
    {	shape: "diamond",
	show: document.getElementById("show-diamond"),
	amount: document.getElementById("amount-diamond")},
    {	shape: "circle",
	show: document.getElementById("show-circle"),
	amount: document.getElementById("amount-circle")}
];
console.log(artSeed);

artSubmit.addEventListener("click", e => {
    e.preventDefault();//prevents page reload
    let art = generate(artSeed);
    fisherYates(art);
    artScreen.replaceChildren(...art);
    
});
/*returns array of art-elements*/
function generate(seed) {
    let art = [];

    seed.forEach(s => {//opens a shape
	if(s.show.value) { //if checked off
	    //create amount of given shape
	   for(let e = 0; e < s.amount.value; e++) {
	       art.push(create(s.shape));
	   }
	} 
    });
    return art;
}

/*returns a square with random color*/
function create(shape) {
    let div = document.createElement("div");
    div.classList.add(shape);
    return div;
}
/*randomizes given array*/
function fisherYates(arr) {
    for (let i = arr.length -1; i > 0; i--) {
	let j = Math.ceil(Math.random() * i);
	let k = arr[i];
	arr[i] = arr[j];
	arr[j] = k;
    }
}
