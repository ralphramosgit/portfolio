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
const viewmwBt = document.getElementById('viewmwBt');
const pfp = document.getElementById('pfp');
const contactPfp = document.getElementById('contactPfp');
const vwPfp = document.getElementById('vwPfp');

contactMeBt.addEventListener('mouseenter', () => {
  pfp.style.transform = 'rotateY(180deg)';
  setTimeout(() => {
    pfp.style.display = 'none';
    contactPfp.style.display = 'block';
    contactPfp.style.transform = 'rotateY(0deg)';
  }, 100);
});

contactMeBt.addEventListener('mouseleave', () => {
   contactPfp.style.transform = 'rotateY(-180deg)';
  setTimeout(() => {
    contactPfp.style.display = 'none';
    pfp.style.display = 'block';
    pfp.style.transform = 'rotateY(0deg)';
  }, 100);
});



viewmwBt.addEventListener('mouseenter', () => {
  pfp.style.transform = 'rotateY(180deg)';
  setTimeout(() => {
    pfp.style.display = 'none';
    vwPfp.style.display = 'block';
    vwPfp.style.transform = 'rotateY(0deg)';
  }, 100);
});

viewmwBt.addEventListener('mouseleave', () => {
 vwPfp.style.transform = 'rotateY(-180deg)';
  setTimeout(() => {
    vwPfp.style.display = 'none';
    pfp.style.display = 'block';
    pfp.style.transform = 'rotateY(0deg)';
  }, 100);
});


function scrollAbt() {
  window.scrollTo({
    top:1080,
    behavior:'smooth'
  });
}


var abtAnch = document.getElementById('abtAnch');
abtAnch.addEventListener('click', scrollAbt);
