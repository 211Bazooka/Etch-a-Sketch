//jQuery

	var start = function(){
	$("#wrapper").html("")

	var input = prompt("Grid Size:")
	var box = $('#wrapper').width()/input-2

	for(var i = 1; i <= input; i++){
		for(var j = 1; j <= input; j++){
			$("#wrapper").append("<div class='box'></div>")
		};
			$("#wrapper").append("<div class='new_row'></div>");
				};

			$(".box").css("width", box);
			$(".box").css("height", box);

	$(".box").on("mouseover", function(){
			$(this).addClass("fill")
		});
	};
	