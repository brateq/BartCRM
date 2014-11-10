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




$(document).ready(function() {
  $('select#simple-example').select2();
});

$(document).ready(function(){
  $("#add").click(function(){
    if ($("#adddiv").is(":visible")){
        $("#add").html("add");
    }else {
        $("#add").html("hide");
    }
    $("#adddiv").toggle(700);
  });
});

<!-- require jquery.ui.all -->
