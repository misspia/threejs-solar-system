import $ from 'jquery';
import * as THREE from 'three'
import SceneManager from './sceneManager.js';
import SolarSystem from './solarSystem/solarSystem.js';
import Profile from './profile/profile.js';

const ssParent = $('#solarSystem');
ssParent.height(window.innerHeight);
ssParent.width(window.innerWidth);

const app = new SceneManager(ssParent);
app.constructScene();
app.initWindowResizeHandler();
app.cameraPosition = {z: 60};
app.addOrbitControls();
app.addPointLight({x: 200, y: 200, z: 400});
app.addAmbientLight();

ssParent.append(app.renderer.domElement);

const SS = new SolarSystem(app);
SS.addAllBodies();
SS.timeFactor = 40;

const profileContainer = $('#planetProfile .profile');
const menuContainer = $('#planetProfile .menu');

const ProfileView = new Profile(profileContainer, menuContainer);
ProfileView.render();

const profileParent = $('#planetProfile');
const toggleElement = $('#controls .profileToggler');
profileParent.fadeOut();

toggleElement.click(() => {
  profileParent.fadeToggle();
  ssParent.fadeToggle();
});

const GameLoop = ()  => {
  requestAnimationFrame(GameLoop);
  SS.render();
  app.render();
}

GameLoop();
