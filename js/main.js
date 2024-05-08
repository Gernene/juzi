toggleMenu = function(x) {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  sidebar.classList.toggle("expand");
}

document.addEventListener("DOMContentLoaded", yall);


window.onload = () => {
  const header = document.getElementsByClassName('header')[0];
  const navbar = document.getElementsByClassName('mobile-header')[0];
  const scrollBound = header.offsetTop;
  const onScroll = () => {
    const scroll = document.documentElement.scrollTop;

    if (scroll > scrollBound) {
      navbar.classList.add("visible");
    }
    else {
      navbar.classList.remove("visible");
    }
  }
  window.addEventListener('scroll', onScroll);

  document.getElementsByClassName("newsletter-form")[0].addEventListener("submit", onSubmitNewsletter);
}

function onSubmitNewsletter(e) {
  e.preventDefault();
  document.getElementsByClassName("newsletter-success")[0].classList.add("show");
  document.getElementsByClassName("newsletter-form")[0].classList.add("hide");
  this.submit();
}

