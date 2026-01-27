export const preLoaderAnim = () => {
  // This is a placeholder for potential JS-based animation control
  // For now, most animation is handled via CSS in Preloader.css
  // But we can add a 'loaded' class to body here if needed
  const preloader = document.querySelector('.preloader');
  
  if(preloader) {
      setTimeout(() => {
          preloader.classList.add('fade-out');
          document.body.style.overflow = 'auto'; // Enable scroll
      }, 2000); // 2 seconds total load time
  }
};
