window.addEventListener('load', function() {
  var loader = document.querySelector('.cssload-preloader');
  var content = document.getElementById('content');

  // Check if loader element is found before accessing its style property
  if (loader) {
    loader.style.display = 'block';

    // Simulate some loading time (you can replace this with your actual loading process)
    setTimeout(function() {
      // Hide the loader
      loader.style.display = 'none';

      // Show the content with fade-in and drop-down animation
      content.classList.add('content-visible');
    }, 1490); // Adjust the duration as needed
  }
});

const contactMeBt = document.getElementById('contactMeBt');
const pfp = document.getElementById('pfp');
const contactPfp = document.getElementById('contactPfp');

contactMeBt.addEventListener('mouseenter', () => {
  pfp.style.display = 'none';
  contactPfp.style.display = 'block';
});

contactMeBt.addEventListener('mouseleave', () => {
  pfp.style.display = 'block';
  contactPfp.style.display = 'none';
});

