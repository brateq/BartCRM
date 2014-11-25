//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

//= require jquery.turbolinks
//= require select2
//= require bootstrap.min
//= require bootstrap
//= require moment
//= require bootstrap-datetimepicker
//= require autocomplete-rails



/* quick select element */
$(document).ready(function() {
  $('select#simple-example').select2();
});


/* show / hide button */
$(document).ready(function(){
  $("button.add").click(function(){

    if ($( "#" + this.dataset.add ).is(":visible")){
        $(this).html("add");
    }else {
        $( this ).html("hide");
    }
    
    $( "#" + this.dataset.add).toggle(400);
  });
});

/* form validation */

function isNotEmpty(field){
	
	if(field.value === ""){
		errorInfo(field, "empty");
		return false;
	}else{
		errorInfo(field, "ok");
		return true;
	}
}

function isANumber(field){
	if(isNotEmpty(field) === true){
		if(isNaN(field.value)){
			errorInfo(field, "NaN");
		}else{
			errorInfo(field, "ok");
		}
	}
}

function isEmail(field){
	if(isNotEmpty(field) === true){
		var atPosition = field.value.indexOf("@");
		var dotPosition = field.value.lastIndexOf(".");
		
		if (atPosition<1 || dotPosition+1 == field.value.length || atPosition+3 > dotPosition){
			errorInfo(field, "wrongEmail");
		}else{
			errorInfo(field, "ok");
		}
	}
}

function errorInfo(field, status){
	switch(status){
		case "ok":
			document.getElementById("i" + field.name).innerHTML = "";
			break;
		case "empty":
			document.getElementById("i" + field.name).innerHTML = "Don't let me be empty!";
			break;
		case "NaN":
			document.getElementById("i" + field.name).innerHTML = "This is not a number!";
			break;
		case "wrongEmail":
			document.getElementById("i" + field.name).innerHTML = "This is not a valid email";
			break;
		}
}
window.onload = Init;

function Init(){
	var person = document.getElementById("person");
	person.onblur = function(){
		isNotEmpty(this);
		};
	
	var account = document.getElementById("account");
	account.onblur = function(){
		isANumber(this);
		};
		
	var email = document.getElementById("email");
	email.onblur = function(){
		isEmail(this);
	};
}

