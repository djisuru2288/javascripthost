<!doctype html>


  
  <script type="text/javascript">
    function redirectToURL() {
      var password = document.getElementById("password").value;
      
      // Check if the entered password is correct
      if (password === "0715744120") {
        setTimeout(function() {
          window.location.href = "https://prabath556.blogspot.com"; // Redirect to site 1
        }, 1500);
      } else {
        setTimeout(function() {
          window.location.href = "https://www.google.com"; // Redirect to site 2
        }, 1500);
      }
    }
  </script>


  <h1></h1>
  <input type="password" id="password" />
  <button onclick="redirectToURL()">Start the Virus</button>

</!doctype>
