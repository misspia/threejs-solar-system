import $ from 'jquery';
import * as THREE from 'three'
import SceneManager from './sceneManager.js';
import SolarSystem from './solarSystem/solarSystem.js';

const entryElement = $('#app');
entryElement.height = window.innerHeight;
entryElement.width = window.innerWidth;

const app = new SceneManager(entryElement);
app.constructScene();
app.initWindowResizeHandler();
app.cameraPosition = {z: 60};
app.addOrbitControls();
app.addPointLight({x: 200, y: 200, z: 400});
app.addAmbientLight();

entryElement.append(app.renderer.domElement);

const timeFactor = 1;
const SS = new SolarSystem(app);
SS.addAllBodies();
SS.timeFactor = 40;

const GameLoop = ()  => {
  requestAnimationFrame(GameLoop);
  SS.draw();
  app.render();
}

GameLoop();
