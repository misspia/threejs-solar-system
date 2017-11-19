import * as THREE from 'three';
import OrbitControls from 'three-orbit-controls';

const OrbitController = OrbitControls(THREE);

const entryElement = document.body;
const canvas = document.getElementById('canvas');

const viewport = { height: window.innerHeight, width: window.innerWidth }
const aspectRatio = viewport.width / viewport.height;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( viewport.width, viewport.height );
entryElement.appendChild( renderer.domElement );

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize( width, height );
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
})

const controls = new OrbitController(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.z = 3;

// doesnt with mesh, must use meshlambert, phong, basic, etc
const ambientLight = new THREE.AmbientLight( 0xFFFFFF, 5.0);
scene.add( ambientLight );


const update = () => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;
}

const render = () => {
  renderer.render( scene, camera );
}

const GameLoop = () => {
  requestAnimationFrame( GameLoop );
  update();
  render();

}

export default GameLoop;