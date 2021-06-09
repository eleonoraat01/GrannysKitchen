// JavaScript Document

//падащо меню рецепти
$(document).ready(function(){
  $("#show1").click(function(){
    $("#showRecipe1").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show2").click(function(){
    $("#showRecipe2").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show3").click(function(){
    $("#showRecipe3").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show4").click(function(){
    $("#showRecipe4").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show5").click(function(){
    $("#showRecipe5").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show6").click(function(){
    $("#showRecipe6").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show7").click(function(){
    $("#showRecipe7").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show8").click(function(){
    $("#showRecipe8").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show9").click(function(){
    $("#showRecipe9").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show12").click(function(){
    $("#showRecipe12").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show13").click(function(){
    $("#showRecipe13").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show14").click(function(){
    $("#showRecipe14").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show18").click(function(){
    $("#showRecipe18").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show19").click(function(){
    $("#showRecipe19").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show20").click(function(){
    $("#showRecipe20").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show25").click(function(){
    $("#showRecipe25").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show26").click(function(){
    $("#showRecipe26").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#show27").click(function(){
    $("#showRecipe27").slideToggle("slow");
  });
});

//валидация форма
function Validate(){
	var FirstName = document.getElementById("FirstName").value;
	if(FirstName == ""){
		alert("Моля, въведете име!");
		return false;
	}
	
	var LastName = document.getElementById("LastName").value;
	if(LastName == ""){
		alert("Моля, въведете фамилия!");
		return false;
	}
	
	var Email = document.getElementById("Email").value;
	if(Email == ""){
		alert("Моля, въведете имейл!");
		return false;
	}
	
	if(document.form.TypeRecipe.value=="-1"){
		alert("Моля, изберете какъв тип е вашата рецепта!");
		return false;
	}
	
	var recipeName = document.getElementById("RecipeName").value;
	if(recipeName == ""){
		alert("Моля, въведете име на рецептата!");
		return false;
	}
	
	var products = document.getElementById("RecipeProducts").value;
	if(products == ""){
		alert("Моля, въведете необходимите продукти за рецептата!");
		return false;
	}
	
	var method = document.getElementById("Recipe").value;
	if(method == ""){
		alert("Моля, въведете начина на приготвяне!");
		return false;
	}
}