        
        
        

        function showWaitDialog() {
            dialog.style.visibility = "visible";
        };

        function hideWaitDialog() {
            dialog.style.visibility = "hidden";
        };

        function unsetResults() {

          var result = document.getElementById("results");
          result.style.height = "0";
          res = "";

        };

        function showResults() {
          document.getElementById("results").style.height = "50vh";
        };