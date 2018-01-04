import $ from 'jquery';
import * as THREE from 'three'
import {
  STATE_PROFILE, STATE_SS,
  PROFILE_VIEW, PROFILE_VIEW_INFO, PROFILE_VIEW_MENU, SS_VIEW,
  TOGGLER, BODY
} from './constants.js';
import SceneManager from './sceneManager.js';
import SolarSystem from './solarSystem/solarSystem.js';
import ProfileRenderer from './profile/profile.js';

BODY.height(window.innerHeight);
BODY.width(window.innerWidth);

const app = new SceneManager(BODY);
app.constructScene();
app.initWindowResizeHandler();
app.cameraPosition = {z: 60};
app.addOrbitControls();

BODY.append(app.renderer.domElement);
let SS = new SolarSystem(app);
let Profile = new ProfileRenderer(PROFILE_VIEW_INFO, PROFILE_VIEW_MENU);

let currentState = STATE_SS;
const Views = {
  [STATE_SS]: () => {
    SS = new SolarSystem(app);
    SS.addAllBodies();
    SS.timeFactor = 40;
    app.addPointLight({x: 200, y: 200, z: 400});
    app.addAmbientLight();
  },
  [STATE_PROFILE]: () => {
    Profile = new ProfileRenderer(PROFILE_VIEW_INFO, PROFILE_VIEW_MENU, app);
    Profile.init();
    app.addPointLight({x: 200, y: 200, z: 400});
    app.addAmbientLight();
  },
}
const Renderers = {
  [STATE_SS]: () => {
    SS.render();
  },
  [STATE_PROFILE]: () => {
    Profile.render();
  }
}

const toggleViews = () => {
  app.clearScene();
  if(currentState == STATE_SS) {
    currentState = STATE_PROFILE;
    PROFILE_VIEW.fadeIn();
  } else {
    currentState = STATE_SS;
    PROFILE_VIEW.fadeOut();
  }
  Views[currentState]();
}


const GameLoop = () => {
  requestAnimationFrame(GameLoop);
  Renderers[currentState]();
  app.render();
}

Views[currentState]();
TOGGLER.click(toggleViews);

GameLoop();
