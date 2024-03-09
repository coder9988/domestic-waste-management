document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll effect for navigation links
    const navLinks = document.querySelectorAll('.link a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offsetTop = targetElement.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    // Highlight active navigation link on scroll
    window.addEventListener('scroll', highlightActiveLink);

    function highlightActiveLink() {
        const fromTop = window.scrollY;
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section.offsetTop <= fromTop + 50 && section.offsetTop + section.offsetHeight > fromTop + 50) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
});
function calculateWaste() {
    var recyclables = parseFloat(document.getElementById('recyclables').value) || 0;
    var compostables = parseFloat(document.getElementById('compostables').value) || 0;
    var landfill = parseFloat(document.getElementById('landfill').value) || 0;
  
    var totalWaste = recyclables + compostables + landfill;
    
    document.getElementById('totalWaste').textContent = totalWaste.toFixed(2);
  }
  document.querySelectorAll('.calculator input').forEach(input => {
    input.addEventListener('keypress', function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        const nextInput = this.parentElement.nextElementSibling.querySelector('input');
        if (nextInput) {
          nextInput.focus();
        }
      }
    });
  });
