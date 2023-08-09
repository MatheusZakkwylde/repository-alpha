
 $(document).ready(function () {
   
    const portInput = $("#port-box");

    portInput.on("keypress", function (event) {
      const key = event.key;

      if (!/[0-9,]/.test(key)) {
        event.preventDefault();
      }
    });
  });