window.onload=function() {
  var btnToTop = document.getElementById("btnToTop");
  window.addEventListener('scroll', function() {
    if(scrollY > 500) {
      btnToTop.classList.add('show');
    } else {
      btnToTop.classList.remove('show');
    }
    popUpMenu.classList.remove('active');
  });
  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  btnToTop.addEventListener("click", scrollToTop);

  var btnMenu = document.getElementById("btnMenu");
  var popUpMenu = document.getElementById("popUpMenu");
  var links = document.getElementsByTagName("a")
  btnMenu.addEventListener("click", function() {
    if(!popUpMenu.classList.contains('active')) {
      popUpMenu.classList.add('active');
    } else {
      popUpMenu.classList.remove('active');
    }
  });
  links.addEventListener("click", popUpMenu.classList.remove('active'));
  
}



