$(function(){
    var bgimage = new Image();      
    bgimage.src="images/careers.jpg";       
    $(bgimage).load(function(){
  		$('.careers-hero').addClass('visible');                  
    });
});