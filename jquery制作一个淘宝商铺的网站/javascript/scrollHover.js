// JavaScript Document
$(function(){
 var x=10,y=10;
 var myTitle=null;
 $(".scrollNews ul li a").hover(function(e){
	myTitle = $(this).attr("title");
	$(this).attr("title","");
	var oDiv=$("<div class='newsHover'>"+myTitle+"</div>");
	oDiv.appendTo("body");
	 oDiv.css({"left":e.pageX+x+"px","top":e.pageY+y+"px"}).show("fast");
 },function(){
	$("a" ,".scrollNews").attr("title",myTitle);
	$(".newsHover").remove();
 })	
})

$(function(){
  $(".catelog >li> span").click(function(){
	 var $oUl = $(this).siblings("ul");  
	 if($oUl.is(":visible")){
	   $(this).parent().attr("class","callapsed");
	   $oUl.hide(500);	 
	 } else {
	   $(this).parent().attr("class","mExpanded");
	   $oUl.show(500);	 
	 }
	 return false;
   }) 	
})