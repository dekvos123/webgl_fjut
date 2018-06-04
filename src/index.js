import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "./assets/css/loader.css";

import * as THREE from './assets/js/three.min';
window.THREE = THREE;
import PhotoSphereViewer from './assets/js/PhotoSphereViewer';
window.PhotoSphereViewer = PhotoSphereViewer;
import PSVNavBarButton from './assets/js/PSVNavBarButton';
window.PSVNavBarButton = PSVNavBarButton;
import PSVNavBar from './assets/js/PSVNavBar';
window.PSVNavBar = PSVNavBar;
import Sphoords from './assets/js/Sphoords';
window.Sphoords = Sphoords;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
