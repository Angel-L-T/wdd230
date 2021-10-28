const images = document.querySelectorAll("img[data-src]");

// Function to replace placeholders with images
const loadingImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

// Observer options
const obsOpt = {
  threshold: 0.25
};

// Loading images only if they are in the viewport
if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if(item.isIntersecting) {
        loadingImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, obsOpt);
  images.forEach((img) => {
    observer.observe(img);
  });
} else {
  images.forEach((img) => {
    loadingImages(img);
  });
}

