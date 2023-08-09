
  $(document).ready(function () {
    var expanded = true;
  
    $('#toggleBtn').click(function () {
      if (expanded) {
        $('.body-abstract-one').removeClass('col-lg-3').addClass('col-lg-1');
        $('.body-abstract').removeClass('col-lg-3').addClass('col-lg-2');
        $('.body-dimension').removeClass('col-lg-3').addClass('col-lg-4');
        expanded = false;
      } else {
        $('.body-abstract-one').removeClass('col-lg-1').addClass('col-lg-3');
        $('.body-abstract').removeClass('col-lg-2').addClass('col-lg-3');
        $('.body-dimension').removeClass('col-lg-4').addClass('col-lg-3');
        expanded = true;
      }
    });
    
  });
  
  
  
  
  
  
  