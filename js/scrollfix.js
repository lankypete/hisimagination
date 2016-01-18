/*ScrollTo plug in*/
$.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}

/*------------------------------*/

var lowEnough = $('.first-screen').height() - 40;

$(window).scroll(function(){
	if ($(window).scrollTop() > lowEnough){
		$('.content-box').css("overflow", "scroll");
		console.log('hi');
	}
	else{
		$('.content-box').css("overflow", "hidden");
	};
});



var scrollThisFar = function(project){
	var target = '#' + project;
	console.log(target);
	$('body').scrollTo($('.first-screen').height());
	$('.content-box').scrollTo(target, {duration: 'fast', offsetTop : '940'});
}
