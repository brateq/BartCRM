$(document).ready ->
  $("#activities .page").infinitescroll
    navSelector: "nav.pagination" # selector for the paged navigation (it will be hidden)
    nextSelector: "nav.pagination a[rel=next]" # selector for the NEXT link (to page 2)
    itemSelector: "#activities tr.post" # selector for all items you'll retrieve
  $(window).scroll()