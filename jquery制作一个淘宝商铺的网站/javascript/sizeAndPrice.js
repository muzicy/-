// JavaScript Document
$(function(){
  $(".pro_size li span").click(function(){
	 $(this).parents("ul").siblings("strong").text($(this).text());  
  })	
})

$(function(){
  var $span = $("div.pro_price span");
  var price=$span.text();
  $("#num_sort").change(function(){
	 var num = $(this).val();
	 var totalPrice = num*price;
	 $span.text(totalPrice);  
  }).change();	
})