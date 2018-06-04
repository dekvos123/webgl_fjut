function web3d(img) {
    const loader = document.createElement('ul');
    loader.innerHTML = `
      <div class="loader-inner">
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
        <div class="loader-line-wrap">
          <div class="loader-line"></div>
        </div>
      </div>
    `
    loader.className = 'loader';
    // loader.innerText = 'loading...';

    // Panorama display
    var div = document.getElementById('canvas-frame');

    var PSV = new window.PhotoSphereViewer({
      // Path to the panorama
      panorama: img,

      // Container
      container: div,

      // Deactivate the animation
      time_anim: false,

      // Display the navigation bar
      navbar: true,

      // Resize the panorama
      size: {
        width: '100%',
        height: '500px'
      },

      // HTML loader
      loading_html: loader,

      min_fov: 1,

      max_fov: 30

      // Overlay
      // overlay: {
      //   image: 'overlay.png',
      //   size: {
      //     width: '42px'
      //   },
      //   position: {
      //     x: 'right',
      //     y: 'top'
      //   }
      // }
    });
  }

  module.exports = web3d;
