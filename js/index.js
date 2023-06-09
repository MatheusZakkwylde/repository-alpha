document.addEventListener("DOMContentLoaded", function() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
      var src = images[i].getAttribute("src");
      new Image().src = src;
    }
  });