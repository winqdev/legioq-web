function disappear() {
  var text = document.getElementById("contacth2");
  text.style.animation = "blinker 0.2s step-start infinite";
  text.style.opacity = 0;
  setTimeout(function() {
    text.style.display = "none";
    location.href = "https://t.me/legioq";
  }, 1000);
}