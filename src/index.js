import "./styles/styles.scss";
import "bootstrap-loader";
import Router from './components/Router';
import web3d from './components/web3d';
import './components/navbar';
import * as THREE from './assets/js/three.min';
import PhotoSphereViewer from './assets/js/PhotoSphereViewer';
import PSVNavBar from './assets/js/PSVNavBar';
import PSVNavBarButton from './assets/js/PSVNavBarButton';
import Sphoords from './assets/js/Sphoords';

window.THREE = THREE;
window.PhotoSphereViewer = PhotoSphereViewer;
window.PSVNavBar = PSVNavBar;
window.PSVNavBarButton = PSVNavBarButton;
window.Sphoords = Sphoords;

import sunImg from './assets/img/Sun.jpg';
import snowImg from './assets/img/snow.jpg';

window.router = new Router();

router.route('/', function() {
  console.log('sun')
  web3d(sunImg);
});

router.route('/index', function() {
  console.log('sun')
  web3d(sunImg);
});

router.route('/snow', function() {
  console.log('snow')
  web3d(snowImg);
});

router.init();