function active_list(header_id) {
  $(".nonactive").removeClass("active");
  $(header_id).addClass("active");
  if (header_id =='#chats'){
    $(".nonactive2").removeClass("active2");
    $("#main_chats").addClass("active2");
    $('#plus').css("display", 'block');
    $('#search').css("display", 'block');
    $('#menu').css("display", 'block');
  }
  else if (header_id =='#notice') {
    $(".nonactive2").removeClass("active2");
    $("#main_notice").addClass("active2");
    $('#plus').css("display", 'none');
    $('#search').css("display", 'none');
  }
  else {
      $(".nonactive2").removeClass("active2");
      $("#main_lines").addClass("active2");
      $('#plus').css("display", 'none');
      $('#search').css("display", 'none');
      $('#menu').css("display", 'none');
  }
}
function new_menu() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
