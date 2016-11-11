// JavaScript Document
$(function(){
  var $li = $(".skin li");
  $li.click(function(){
	 switchSkin(this.className);  
  })
  
  var cookieSkin=$.cookie("MyCssSkin");
  if(cookieSkin) {
	 switchSkin(cookieSkin);  
  }	
  
  function switchSkin(skinName){
	 $("."+skinName).addClass("selected").siblings().removeClass("selected");
	  $("#cssfile").attr("href","css/skin/"+skinName+".css");
	  $.cookie("MyCssSkin",skinName,{path:"/",expires:10})  
  }
})