var timer = null;
var countdownNumber = 10;
var changeState = function (state) {
	document.body.className = 'body-state' + state;				clearInterval(timer);
				countdownNumber = 10;
	
// countdown
	if (state == 2){
		timer = setInterval(function () {
		document.getElementById('countdown').
		innerHTML = countdownNumber;
		countdownNumber = countdownNumber -1;
		
		if (countdownNumber > 4 && countdownNumber <=7) {
			// excited
			document.getElementById('excited').className = "excited show";
				}else {
					document.getElementById('excited').className = "excited";
				}

		if (countdownNumber > 1 && countdownNumber <=4 ) {
			//can't wait
	document.getElementById('wee').className = "wee show";
	}
		else {
			document.getElementById('wee').className = "wee";
		}
	{
		};

		if (countdownNumber <= 0){

		changeState(3);
		};
		}, 500);	
	} else if (state == 3){
		var success = setTimeout(function ()
		{
				var randomNumber = Math.round(Math.random()*10);
				
				console.log('randomNumber:',
					randomNumber)

				// success
				if (randomNumber > 3) {
					changeState(4);
					//do something

				} else {
					changeState(5);
					// do something else
				} 

 	}, 2000);

	};
}