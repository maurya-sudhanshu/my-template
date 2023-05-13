window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("topheader").style.top = "0";
    document.getElementById("bottomheader").style.top = "-500";
  } else {
    document.getElementById("topheader").style.top = "-500px";
    document.getElementById("bottomheader").style.top = "0";
  }
}
