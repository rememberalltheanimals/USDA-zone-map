// Variables declaration
var zoneNum = 0;
var message = "";

// Condition (SWITCH statement)
while (zoneNum <= 0) {
	zoneNum = prompt("enter your USDA zone number");
	zoneNum = Number(zoneNum);
	
	switch(zoneNum) {
	  case 1:
		message = "In your zone " + zoneNum + ", "  +  "the best crops to grow are lettuce or eggplant";
		break;
	  case 2:
		message = "In your zone " + zoneNum + ", "  +  "the best crops to grow are lettuce or eggplant";
		break;
	  case 3:
		message = "In your zone " + zoneNum + ", " +  "the best crops to grow are strawberry or potato";
		break;
	  case 4:
		message = "In your zone " + zoneNum + ", " +  "the best crops to grow are strawberry or potato";
		break;
	  case 5:
		message = "In your zone " + zoneNum + ", " +  "the best crops to grow are tomato or squash"; 
		break;
	  case 6:
		message = "In your zone " + zoneNum + ", " +  "the best crops to grow are tomato or squash"; 
		break;
	  case 7:
		message ="In your zone " + zoneNum + ", " +  "the best crops to grow are corn or carrot";
		break;
	  case 8:
		message ="In your zone " + zoneNum + ", " +  "the best crops to grow are corn or carrot";
		break;
	  case 9:
		message ="In your zone " + zoneNum + ", " +  "the best crops to grow are peach or peanut";
		break;
	  case 10:
		message ="In your zone " + zoneNum + ", " +  "the best crops to grow are peach or peanut";
		break;
	  case 11:
		message ="In your zone " + zoneNum + ", " + "the best crops to grow are banana or pepper";
		break;
	  case 12:
		message ="In your zone " + zoneNum + ", " + "the best crops to grow are banana or pepper";
		break;
	}
	document.write(message);
}

function monthToPlant() {
  if (zoneNum < 5 && zoneNum !== 0) {
	  alert("Wait until May to plant outside");
  } else if (zoneNum > 4 && zoneNum < 9) {
	  alert("Wait until April to plant outside");
  } else if (zoneNum > 8) {
	  alert("Wait until March to plant outside");
  }
}

monthToPlant();

// Display
