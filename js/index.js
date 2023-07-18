$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();  // Ativa o recurso de tooltip
});

document.addEventListener("DOMContentLoaded", function() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
      var src = images[i].getAttribute("src");
      new Image().src = src;
    }
  });

  function adjustAccordionContainerHeight() {
    const windowHeight = window.innerHeight;
    const footerHeight = document.querySelector('footer').offsetHeight;
    const container = document.querySelector('.container-fluid');
    const containerTop = container.getBoundingClientRect().top;
    const containerMarginBottom = parseInt(window.getComputedStyle(container).marginBottom);

    const availableHeight = windowHeight - footerHeight - containerTop - containerMarginBottom;
    container.style.maxHeight = availableHeight + 'px';
  }

  window.addEventListener('DOMContentLoaded', adjustAccordionContainerHeight);
  window.addEventListener('resize', adjustAccordionContainerHeight);