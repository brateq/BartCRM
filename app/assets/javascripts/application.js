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
  $('#company_tag_list').select2({tags:["Super firma", "Taka sobie firma", "Omijac"]})
});

$(document).ready(function() {
  $('select#simple-example').select2();
});

<!-- require jquery.ui.all -->
