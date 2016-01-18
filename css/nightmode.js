var onOff = 0;

var flip = function(){
	if(onOff === 0){
		onOff = 1;

		$('p').css("color", "black");
	}
};

$(".pos1").click(function(){flip();});