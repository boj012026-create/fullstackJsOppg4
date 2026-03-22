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

artSubmit.addEventListener("click", e => {
    e.preventDefault();//prevents page reload
    let square = createSquare();
    let diamond = squareToDiamond(square);
    artScreen.appendChild(square);
    
});

/*returns a square with random color*/
function createSquare() {
    let shape = document.createElement("div");
    shape.classList.add("square");
    return shape;
}

function squareToDiamond(square) {
    square.classList.add("diamond");
    return square;
}

/*returns a random integer between positive min and max numbers*/
function rand(min, max) {
    let range = max - min;
    if (isNaN(range)) {
	throw new Error("Parameter is NaN");
    }
    return Math.round(Math.random() * range + min);
}


