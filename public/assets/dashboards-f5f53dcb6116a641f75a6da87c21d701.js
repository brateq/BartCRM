(function() {
  $(document).ready(function() {
    $("#activities .page").infinitescroll({
      navSelector: "nav.pagination",
      nextSelector: "nav.pagination a[rel=next]",
      itemSelector: "#activities tr.post"
    });
    return $(window).scroll();
  });

}).call(this);
