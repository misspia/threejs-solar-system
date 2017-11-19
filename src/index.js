// http://maplestory.nexon.net/game/classes-and-jobs/2892/luminous
import * as THREE from 'three';
import WindowEvents from './components/windowEvents.js';
import './scss/main.scss';
import Sphere from './geometries/sphere.js';

const entryElement = document.body;
const viewport = { height: window.innerHeight, width: window.innerWidth };
const aspectRatio = viewport.width / viewport.height;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

WindowEvents.resize( renderer, camera );

renderer.setSize( viewport.width, viewport.height );
entryElement.appendChild( renderer.domElement );

camera.position.z = 3;

const render = () => {
  renderer.render( scene, camera );
}

const orb = new Sphere(scene);
orb.add();
const animate = () => {
  requestAnimationFrame( animate );
  orb.draw();
  render();
}

animate();
