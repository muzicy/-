// JavaScript Document

$(function(){
  $(".color_change ul li img").click(function(){
	 var str = $(this).attr("src");
	 var i =str.lastIndexOf(".");
	 var unit = str.substring(i);
	 var str = str.substr(0,i);
	 var imgSmall = str+"_one_small"+unit;
	 var imgBig = str+"_one_big"+unit;
	 $("#bigImg").attr({"src":imgSmall,"jqimg":imgBig});
	 $("#thickImg").attr("href",imgBig);
	 var alt = $(this).attr("alt");
	 $(".color_change strong").text(alt);
	 var url = str+".html";
	 $(".pro_detail_left ul.imgList").empty().load(url);  
  })	
})