var onOff = 0;
console.log(onOff);

var flip = function(){
	if(onOff === 0){
		onOff = 1;

		$('p').css("color", "black");
		$('.black-menu').css("background-color", "white");
		$('body').css("background-color", "white");
		$('.second-screen').css("background-color", "black");
		$('.img-flip').css("display", "inline");
		console.log(onOff);
	}
	else{
		onOff = 0;

		$('p').css("color", "white");
		$('.black-menu').css("background-color", "black");
		$('body').css("background-color", "black");
		$('.second-screen').css("background-color", "white");
		$('.img-flip').css("display", "none");
		console.log(onOff);
	}
};

$(".pos1").click(function(){flip();});