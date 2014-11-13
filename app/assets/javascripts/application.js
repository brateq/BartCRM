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