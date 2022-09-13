window.onload=function() {
  var btnToTop = document.querySelector('#btnToTop');
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
      behavior: 'smooth'
    });
  }
  btnToTop.addEventListener('click', scrollToTop);

  var btnMenu = document.querySelector('#btnMenu');
  var popUpMenu = document.querySelector('#popUpMenu');
  var links = document.querySelectorAll('a')
  btnMenu.addEventListener('click', function() {
    if(!popUpMenu.classList.contains('active')) {
      popUpMenu.classList.add('active');
    } else {
      popUpMenu.classList.remove('active');
    }
  });
  links.forEach(link => {
    link.addEventListener('click', () => popUpMenu.classList.remove('active'));
  })
}



