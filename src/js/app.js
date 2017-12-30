import $ from 'jquery';
import * as THREE from 'three'
import SceneManager from './sceneManager.js';
import SolarSystem from './solarSystem/solarSystem.js';
import Focuser from './controls/focuser.js';

const controlsElement = $('#focusControls');
const ssElement = $('#solarSystem');
ssElement.height = window.innerHeight;
ssElement.width = window.innerWidth;

const app = new SceneManager(ssElement);
app.constructScene();
app.initWindowResizeHandler();
app.cameraPosition = {z: 60};
app.addOrbitControls();
app.addPointLight({x: 200, y: 200, z: 400});
app.addAmbientLight();

ssElement.append(app.renderer.domElement);

const SS = new SolarSystem(app);
SS.addAllBodies();
SS.timeFactor = 40;

const FocusControls = new Focuser(controlsElement, SS);
FocusControls.init();

const GameLoop = ()  => {
  requestAnimationFrame(GameLoop);
  SS.draw();
  app.render();
}

GameLoop();
