$(document).ready(function () {
    var sidebarVisible = true;
  
    $('#toggleBtn').click(function () {
      if (sidebarVisible) {
        $('#sidebar').addClass('hide');
      } else {
        $('#sidebar').removeClass('hide');
      }
      sidebarVisible = !sidebarVisible;
    });
  });