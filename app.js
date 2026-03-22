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

/*returns a shape with random color*/
function create(shape) {
    let div = document.createElement("div");
    div.classList.add(shape);
    div.style.backgroundColor = randHexColor();
    return div;
}

function randHexColor() {
    const base = 16;
    const colorsTot = 16 ** 6; //16^6 possible color combinations

    //random base 10 number for a hex color
    let randColNum = Math.floor(Math.random() * colorsTot);

    //return color in hexformat
    return `#${randColNum.toString(base).padStart(6, "0")}`;

}

/*Fisher Yates Algorithm
 * randomizes given array*/
function fisherYates(arr) {

    //iterates from highest to lowest index
    for (let i = arr.length -1; i > 0; i--) {

	//gets a random index j between i and 0
	let j = Math.ceil(Math.random() * i);

	//swaps elements at random index and current
	let k = arr[i];
	arr[i] = arr[j];
	arr[j] = k;
    }
}
