// JavaScript Document
$(function(){

  $(".moduleUpDown").toggle(function(){
					var $self = $(this);
					$self.prev().slideToggle(600,function(){
						  $("img",$self).attr("src","images/up.gif");
					});
			 },function(){
					var $self = $(this);
					$self.prev().slideToggle(600,function(){
						  $("img",$self).attr("src","images/down.gif");
					});
		 })
}) 

