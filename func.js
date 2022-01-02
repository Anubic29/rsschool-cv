window.onload=function() {
  var btnToTop = document.getElementById("btnToTop");
  window.addEventListener('scroll', function() {
    if(scrollY > 500) {
      btnToTop.classList.add('show');
    } else {
      btnToTop.classList.remove('show');
    }
  });
  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  btnToTop.addEventListener("click", scrollToTop);
}



