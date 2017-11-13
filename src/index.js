// http://maplestory.nexon.net/game/classes-and-jobs/2892/luminous
import * as THREE from 'three';

import './scss/main.scss';
import Visualize from './js/visualize.js';

import './scss/main.scss';

const entryElement = document.body;

const viewport = { height: window.innerHeight, width: window.innerWidth };
const aspectRatio = viewport.width / viewport.height;

window.addEventListener( 'resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize( width, height );
  camera.aspect = width / height;
  camera.updateProjectionMatrix;
})

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( viewport.width, viewport.height );
entryElement.appendChild( renderer.domElement );

camera.position.z = 3;

const render = () => {
  renderer.render( scene, camera );
}

const cube = new Visualize(scene);
const animate = () => {
  requestAnimationFrame( animate );
  cube.update();
  render();
}

animate();
