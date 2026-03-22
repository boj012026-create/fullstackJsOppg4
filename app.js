const artSubmit = document.getElementById("art-submit");

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
    console.log(artSeed);
});
