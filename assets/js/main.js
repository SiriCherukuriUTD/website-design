console.log("Hello from main.js");

let targetElement = document.querySelector("h2");

console.log(targetElement.outerHTML);

targetElement.addEventListener("mouseover", function () {
	console.log(this.innerText);
	this.innerText = "WASTE";
	this.style = "cursor: wait";
});

targetElement.addEventListener("mouseout", function () {
	this.innerText = "Coca Cola";
	this.style = "cursor: pointer";
});