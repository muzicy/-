// JavaScript Document
$(function(){
  var index = 0;
  var timeAd = null;
  
  $(".num li").mouseover(function(){
	  index = $(".num li").index(this);
	  scrollAd(index); 
   }).eq(0).mouseover();
   
  $(".ad").hover(function(){
	 clearInterval(timeAd); 
  },function(){
	 timeAd=setInterval(function(){
	  scrollAd(index);index++;
	  if(index==$("img",".ad").length){
		index=0;  
	   }
  },3000);
  }).trigger("mouseleave");

   function scrollAd(index) {
	 var imgHeight = $(".ad li").height();
	  $(".slider").stop(true,false).animate({"marginTop":-imgHeight*index+"px"},1000); 
	  $(".num li").removeClass("on").eq(index).addClass("on"); 
   }   
   
})