fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footerclass").innerHTML = data;
  })
  .catch((error) => console.log("Error loading footer:", error));
