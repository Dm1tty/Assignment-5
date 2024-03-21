function makeBigger() {
    document.getElementById('textBox').style.fontSize = "24pt";
};


function makeFancyShmancy() {
    document.getElementById('textBox').style.fontWeight = "bold";
    document.getElementById('textBox').style.textDecoration = "underline";
    document.getElementById('textBox').style.color = "blue";
};

function makeBoringBetty() {
    document.getElementById('textBox').style.fontWeight = "normal";

};

function makeMoo() {
	var str = document.getElementById("textBox").value
	var parts = str.split(".");
	str = parts.join("-Moo.");     
    	document.getElementById("textBox").value = str
};


