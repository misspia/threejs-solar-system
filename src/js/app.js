import * as THREE from 'three';
import OrbitControls from 'three-orbit-controls';
import SceneManager from './sceneManager.js';
import Planet from './planets/planet.js';
import Saturn from './planets/saturn.js';
 console.log('saturn', Saturn);
const OrbitController = OrbitControls(THREE);

const entryElement = document.getElementById('app');
entryElement.height = window.innerHeight;
entryElement.width = window.innerWidth;

const app = new SceneManager(entryElement);
app.constructScene();
app.initWindowResizeHandler();
app.cameraPosition = {z: 5};
app.addPointLight({x: 200, y: 200, z: 400});
app.addAmbientLight();
const controls = new OrbitController(app.camera, app.renderer.domElement);

entryElement.appendChild(app.renderer.domElement);

app.add(Saturn.body);

const update = () => {
  Saturn.rotation = {axis: 'x', scalar: 0.01};
  Saturn.rotation = {axis: 'y', scalar: 0.005};
}

const GameLoop = ()  => {
  requestAnimationFrame(GameLoop);
  update();
  app.render();
}

GameLoop();
