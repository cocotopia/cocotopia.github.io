var $j = jQuery.noConflict(); $j(document).ready(function () {

	$j('#clock').countdown('2018/11/18', function (event) {
		var $this = $j(this).html(event.strftime(''
			//+ '<span>%w</span> weeks '
			+ '<span>%D</span> días '
			+ '<span>%H</span> horas '
			+ '<span>%M</span> min '
			+ '<span>%S</span> seg'));
	});

});