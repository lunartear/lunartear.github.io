window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("header-content-text").style.fontSize = "30px";
  } else {
    document.getElementById("header-content-text").style.fontSize = "10px";
  }
}