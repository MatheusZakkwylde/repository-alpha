
  $(document).ready(function () {
    var expanded = true;
  
    $('#toggleBtn').click(function () {
      if (expanded) {
        $('.body-abstract-one').removeClass('col-lg-3').addClass('col-lg-1');
        $('.body-abstract').removeClass('col-lg-3').addClass('col-lg-2');
        $('.body-dimension').removeClass('col-lg-3').addClass('col-lg-4');
        $('.body-abstract-fila-one').removeClass('col-lg-2').addClass('col-lg-0');
        $('.body-dimension-fila').removeClass('col-lg-5').addClass('col-lg-6');
        $('.body-dimension-fila-one').removeClass('col-lg-4').addClass('col-lg-5');
        expanded = false;
      } else {
        $('.body-abstract-one').removeClass('col-lg-1').addClass('col-lg-3');
        $('.body-abstract').removeClass('col-lg-2').addClass('col-lg-3');
        $('.body-dimension').removeClass('col-lg-4').addClass('col-lg-3');
        $('.body-abstract-fila-one').removeClass('col-lg-0').addClass('col-lg-2');
        $('.body-dimension-fila').removeClass('col-lg-6').addClass('col-lg-5');
        $('.body-dimension-fila-one').removeClass('col-lg-5').addClass('col-lg-4');
        expanded = true;
      }
    });
    
  });
  
  
  
  
  
  
  