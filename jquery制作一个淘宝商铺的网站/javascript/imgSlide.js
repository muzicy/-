// JavaScript Document
$(function(){
  var num = 4;
  var page = 1;
  var pageCount = Math.ceil($("img",".prolist_content").length/4);
  var frameWidth = $(".prolist").width();
  var $parent = $(".prolist_content");
  
  $(".goRight").click(function(){
	 if(!$parent.is(":animated")){
	   if(page == pageCount) {
		  $parent.animate({"left":0},800);
		  page=1;   
	   } else {
		  $parent.animate({"left":"-="+frameWidth},800); 
		  page++;   
	   }	 
	 }  
  })	
  
  $(".goLeft").click(function(){
	 if(!$parent.is(":animated")){
	   if(page == 1) {
		  $parent.animate({"left":"-="+frameWidth*(pageCount-1)},800);
		  page=pageCount;   
	   } else {
		  $parent.animate({"left":"+="+frameWidth},800); 
		  page--;   
	   }	 
	 }  
  })
})

//当鼠标划过img时出现的效果
$(function(){
       $(".prolist ul li").each(function(index){
			  var position = $(this).position();
			  var li_left = position.left;
			  var li_top = position.top;
			  var img_width = $(this).find("img").width();
			  var img_height = $(this).find("img").height();
              var spanHtml = '<span style="position: absolute; top: '+li_top+'px; left: '+li_left+'px; width:'+img_width+'px; height: '+img_height+'px; cursor: pointer;" class="imageMask"></span>';
			  $(spanHtml).hover(function(){
						$(this).addClass("imageOver");
				    },function(){
						$(this).removeClass("imageOver");
				 }).appendTo( $(this).find("a") );
		 })
})