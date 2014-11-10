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
    $("#adddiv").toggle();
  });
});

<!-- require jquery.ui.all -->
