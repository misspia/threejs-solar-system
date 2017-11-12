import * as THREE from 'three';

const entryElement = document.body;

const viewport = { height: window.innerHeight, width: window.innerWidth };
const aspectRatio = viewport.width / viewport.height;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, aspectRatio, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( viewport.width, viewport.height );
entryElement.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const cube = new THREE.Mesh( geometry, material );
scene.add(cube);
camera.position.z = 3;

const update = () => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;
}

window.addEventListener( 'resize', () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize( width, height );
  camera.aspect = width / height;
  camera.updateProjectionMatrix;
})
const render = () => {
  renderer.render( scene, camera );
}

const animate = () => {
  requestAnimationFrame( animate );
  update();
  render();
}


export default animate;
