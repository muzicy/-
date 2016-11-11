// JavaScript Document

$(function(){
  $(".imgList li img").livequery("click",function(){
	 var str = $(this).attr("src");
	 var i = str.lastIndexOf(".");
	 var unit = str.substring(i);
	 str = str.substring(0,i);
	 
	 var imgSmall = str+"_small"+unit;
	 var imgBig = str+"_big"+unit;
	 $("#bigImg").attr({"src": imgSmall,"jqimg": imgBig });
	 
	 $("#thickImg").attr("href", imgBig); 
  })	
})