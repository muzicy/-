// JavaScript Document
$(function(){
 var $product = $(".pro_detail_right");
 $("#cart a").click(function(){
	 var proName = $product.find("h4:first").text();
	 var proSize = $product.find(".pro_size strong").text();
	 var proColor = $product.find(".color_change strong").text();
	 var proNum = $product.find("#num_sort").val();
	 var proPrice = $product.find(".pro_price span").text();
	 var dialog = "感谢您的购买。\n您购买的\n"+"产品："+proName+";\n"+"尺寸："+proSize+";\n"+
	               "颜色："+proColor+";\n"+"数量："+proNum+";\n"+"总价"+proPrice+"元";
	 if(confirm(dialog)){
		alert("您已经下单了"); 
	  }
	  
	  return false;			   
  })
})