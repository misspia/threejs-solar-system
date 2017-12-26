import * as THREE from 'three';
import OrbitControls from 'three-orbit-controls';
import SceneManager from './sceneManager.js';
import Planet from './planets/planet.js';
const OrbitController = OrbitControls(THREE);

const entryElement = document.getElementById('app');
entryElement.height = window.innerHeight;
entryElement.width = window.innerWidth;

const app = new SceneManager(entryElement);
app.constructScene();
app.initWindowResizeHandler();
app.cameraPosition = {z: 5};
app.addPointLight({x: 200, y: 200, z: 400});
const controls = new OrbitController(app.camera, app.renderer.domElement);

entryElement.appendChild(app.renderer.domElement);

const planet = new Planet();
planet.initBase({color: 0x37BE95, radius: 1, detail: 1});

app.add(planet.base)

const update = () => {
  planet.rotation = {axis: 'x', scalar: 0.01};
  planet.rotation = {axis: 'y', scalar: 0.005};
}

const GameLoop = ()  => {
  requestAnimationFrame(GameLoop);
  update();
  app.render();
}

GameLoop();
