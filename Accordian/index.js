$(document).ready(()=>{
	var isOpen = false;
	$("#minus").hide();
	$("#plus").show();
	$("#accordian-body").hide();
	$("#accordian-header").click(function(){
		isOpen = !isOpen;
		if(isOpen){
			$("#accordian-body").show();
			$("#minus").show()
			$("#plus").hide();
		}
		else{
			$("#accordian-body").hide();
			$("#plus").show();
			$("#minus").hide()

		}
	})
})