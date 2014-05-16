(function() {
  var hideForm, showForm;

  showForm = function(item) {
    var a_item, b_item, holder;
    holder = item.parents('.holder');
    a_item = holder.children('span.a');
    b_item = holder.children('span.b');
    a_item.hide().off('click');
    b_item.css('visibility', 'visible');
    holder.find('.btn-warning').click(function() {
      item = $(this);
      hideForm(item);
      return item.parents('form')[0].reset();
    });
    holder.find('.btn-success').click(function() {
      return $(this).parents('form')[0].submit();
    });
    return b_item.find('input').keypress(function(event) {
      var ENTER, form;
      ENTER = 13;
      form = $(event.target).parents('form');
      if (event.which === ENTER) {
        return form.submit();
      }
    });
  };

  hideForm = function(item) {
    var a_item, b_item, holder;
    holder = item.parents('.holder');
    a_item = holder.children('span.a');
    b_item = holder.children('span.b');
    a_item.show();
    b_item.css('visibility', 'hidden');
    holder.find('.btn').off('click');
    return a_item.click(function() {
      return showForm(item);
    });
  };

  $(function() {
    return $('span.a', 'h3, h5').click(function() {
      return showForm($(this));
    });
  });

}).call(this);
