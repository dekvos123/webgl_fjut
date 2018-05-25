function web3d(img) {
  const loader = document.createElement('div');
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