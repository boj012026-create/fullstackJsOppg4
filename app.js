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
    console.log(art);
    artScreen.append(...art);
    
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

/*returns a random integer between positive min and max numbers*/
function rand(min, max) {
    let range = max - min;
    if (isNaN(range)) {
	throw new Error("Parameter is NaN");
    }
    return Math.round(Math.random() * range + min);
}


