document.getElementById('nav-bar').childNodes.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

function openNav() {
  document.getElementById('nav-bar').style.width = '170px';
};

function closeNav() {
  document.getElementById('nav-bar').style.width = '0';
};