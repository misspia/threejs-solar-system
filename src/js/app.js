import * as THREE from 'three';
import OrbitControls from 'three-orbit-controls';
import SceneManager from './sceneManager.js';
import Draw from './draw.js';
const OrbitController = OrbitControls(THREE);

const entryElement = document.getElementById('app');
entryElement.height = window.innerHeight;
entryElement.width = window.innerWidth;

const app = new SceneManager(entryElement);
app.constructScene();
app.initWindowResizeHandler();

entryElement.appendChild(app.renderer.domElement);
const controls = new OrbitController(app.camera, app.renderer.domElement);
app.cameraPosition = {z: 3};

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
app.add(cube);

const update = () => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.005;
}

const GameLoop = ()  => {
  requestAnimationFrame(GameLoop);
  update();
  app.render();
}

GameLoop();
