// JavaScript Document
$(function(){
  var $oli = $(".tab_menu ul li");
  $oli.click(function(){
	 $(this).addClass("selected").siblings().removeClass("selected"); 
	 
	 var index = $oli.index($(this));
	 
	 $(".tab_box div").eq(index).show().siblings().hide(); 
  }).hover(function(){
	 $(this).addClass("hover");  
  },function(){
	 $(this).removeClass("hover");  
  })	
})