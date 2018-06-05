$(document).ready(()=>{
	$(".tabContent1").hide();
	$(".tabContent2").hide();
	$(".tabContent3").hide();
	$(".tabContent4").hide();

	$("#tab1").click(function(){
		$(".tabContent1").show();
		$(".tabContent2").hide();
		$(".tabContent3").hide();
		$(".tabContent4").hide();
	})

	$("#tab2").click(function(){
		$(".tabContent1").hide();
		$(".tabContent2").show();
		$(".tabContent3").hide();
		$(".tabContent4").hide();
	})

	$("#tab3").click(function(){
		$(".tabContent1").hide();
		$(".tabContent2").hide();
		$(".tabContent3").show();
		$(".tabContent4").hide();
	})

	$("#tab4").click(function(){
		$(".tabContent1").hide();
		$(".tabContent2").hide();
		$(".tabContent3").hide();
		$(".tabContent4").show();
	})
})