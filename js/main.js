var gameData = {
	playerName: null
}

function tut1advance() {
	gameData.playerName = document.getElementById("playerName").value;
	document.getElementById("tut2name").innerHTML = gameData.playerName.value;
	document.getElementById("tut1").hidden = true;
	document.getElementById("tut2").hidden = false;
}