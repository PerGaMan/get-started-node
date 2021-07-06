var items = ["clubs A", "clubs 2", "clubs 3", "clubs 4", "clubs 5", "clubs 6", "clubs 7", "clubs 8", "clubs 9", "clubs 10", "clubs J", "clubs D", "clubs K", "diamonds A", "diamonds 2", "diamonds 3", "diamonds 4", "diamonds 5", "diamonds 6", "diamonds 7", "diamonds 8", "diamonds 9", "diamonds 10", "diamonds J", "diamonds D", "diamonds K", "hearts A", "hearts 2", "hearts 3", "hearts 4", "hearts 5", "hearts 6", "hearts 7", "hearts 8", "hearts 9", "hearts 10", "hearts J", "hearts D", "hearts K", "spades A", "spades 2", "spades 3", "spades 4", "spades 5", "spades 6", "spades 7", "spades 8", "spades 9", "spades 10", "spades J", "spades D", "spades K"];

const myCard = [];

function pullOne (arr) {
 return arr[Math.floor(Math.random()*arr.length)];

};

function createPlayers(){

	const myName = document.getElementById("plyrname").value
	

const par = document.getElementById("div1");
if(myName=== ""){
	document.getElementById("ran").innerHTML = "Give a valid username";
}
else {
document.getElementById("ran").innerHTML = "";
var newDiv = document.createElement("div");
newDiv.setAttribute('class', "trainee");

var kez = document.createElement("span");
kez.setAttribute("id", myName);
var playBut = document.createElement("button");
playBut.setAttribute("id", myName + "b");
playBut.setAttribute('onclick', "ezaz('" + myName + "')");
playBut.innerHTML = myName;
newDiv.appendChild(playBut);
newDiv.appendChild(kez);
par.appendChild(newDiv);

};
};

function ezaz(idi) {
	
	
	let card = pullOne(items);
	let remain = (items.length - 1);
	
	if (remain >= 0) {
	let myArray = document.getElementById(idi)
	
	let myHand = document.createTextNode(card + ", ");
	myArray.appendChild(myHand);
	
	document.getElementById("ran").innerHTML = card;
	myCard.unshift(card);
	document.getElementById("mine").innerHTML = myCard;
	let myIndex = items.indexOf(card, 0);
	items.splice(myIndex, 1);
	document.getElementById("sink").innerHTML = items;
	
	document.getElementById("rest").innerHTML = remain;
	} else {
		let myArray = document.getElementById(idi)
		let bravo = document.createTextNode("Bravo!");
		myArray.appendChild(bravo);
		document.getElementById(idi + "b").disabled = true;
		document.getElementById("rest").innerHTML = "Good job, start again!";
	};
};

