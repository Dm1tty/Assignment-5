function makeBigger() {
    alert("Making Bigger!");
    document.getElementById('textBox').style.fontSize = "24pt";
};


function makeFancyShmancy() {
    alert("Making Fancy Shmancy, world!");
    document.getElementById('textBox').style.fontWeight = "bold";
    document.getElementById('textBox').style.textDecoration = "underline";
    document.getElementById('textBox').style.color = "blue";
};

function makeBoringBetty() {
    alert("Making Boring Betty, world!");
    document.getElementById('textBox').style.fontWeight = "normal";

};

function makeMoo() {
	var str = document.getElementById("textBox").value
	var parts = str.split(".");
	str = parts.join("-Moo.");     
    document.getElementById("textBox").value = str
};


