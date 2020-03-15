/*$(document).ready(function() {
	$('#ballon').jqFloat({
		width: 150,
		height: 150,
		speed: 1000
	});
});*/
$(document).ready(function () {
    
   $('#welcome').addClass('animated bounceInDown');
    
    $("#CM").click(function () {
        
        $( ".divballon" ).addClass( "showballon" );
        
          $('#ballon').jqFloat({
            width: 150,
            height: 150,
            speed: 1500
        });
        $( "#cloud" ).jqFloat({
            width: 150,
            height: 150,
            speed: 1500
        });
    });
  
    });


/*
$(document).ready(function () {
    $("#test").click(function () {
        
        $('#ballon').animate({
            left: 50,
            opacity: 1
        }, 500);
    });
    if($('#ballon').animate()){
        $('#ballon').jqFloat({
            width: 150,
            height: 150,
            speed: 1500
        });
    }
});*/

