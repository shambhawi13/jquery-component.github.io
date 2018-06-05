$(document).ready(()=>{
	$("#modal").hide();

	$("#openModalButton").click(function(){
		$("#openModalButton").hide();
		//$("#modal").animate({top: '100px'},"slow");
		$("#modal").show();
		$("#modal").addClass("modalStyle");
	})

	$("#ok").click(function(){
		$("#modal").hide();
		$("#openModalButton").show();
	})

	$("#cancel").click(function(){
		$("#modal").hide();
		$("#openModalButton").show();
	})
})