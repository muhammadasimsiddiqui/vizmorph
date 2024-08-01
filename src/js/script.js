document.querySelectorAll('.nav-hero li a').forEach(link => {
    link.addEventListener('mouseenter', function(event) {
      const { left, right } = this.getBoundingClientRect();
      const x = event.clientX;
  
      if (x - left < right - x) {
        this.classList.add('hover-left');
        this.classList.remove('hover-right');
      } else {
        this.classList.add('hover-right');
        this.classList.remove('hover-left');
      }
    });
  
    link.addEventListener('mouseleave', function() {
      this.classList.remove('hover-left', 'hover-right');
    });
  
    // Add event listener to ensure active state is maintained correctly
    link.addEventListener('click', function() {
      document.querySelectorAll('.nav-hero li a').forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.querySelector('.nav-hero');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navBar.classList.add('heronavscroll');
      } else {
        navBar.classList.remove('heronavscroll');
      }
    });
  });
  
 
  
  