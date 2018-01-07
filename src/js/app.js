import $ from 'jquery';
import * as THREE from 'three'
import {
  STATE_PROFILE, STATE_SS,
  PROFILE_VIEW, PROFILE_VIEW_INFO, PROFILE_VIEW_MENU, SS_VIEW,
  TOGGLER, INSTRUCTIONS, BODY
} from './constants.js';
import SceneManager from './sceneManager.js';
import SolarSystem from './solarSystem/solarSystem.js';
import ProfileRenderer from './profile/profile.js';

BODY.height(window.innerHeight);
BODY.width(window.innerWidth);

const app = new SceneManager(BODY);
app.constructScene();
app.initWindowResizeHandler();
app.addOrbitControls();

BODY.append(app.renderer.domElement);
let SS, Profile;

let currentState = STATE_SS;
const Views = {
  [STATE_SS]: () => {
    SS = new SolarSystem(app);
    SS.addAllBodies();
    SS.timeFactor = 20;
    app.addPointLight({x: 200, y: 200, z: 400});
    app.addAmbientLight();
    app.cameraPosition = {z: 65};
  },
  [STATE_PROFILE]: () => {
    Profile = new ProfileRenderer(PROFILE_VIEW_INFO, PROFILE_VIEW_MENU, app);
    Profile.init();
    app.addPointLight({x: 200, y: 200, z: 400});
    app.addAmbientLight();
    app.cameraPosition = {x: 0, y: 0, z: 4};
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
  // const symbol = '&#x022B7;';
  const symbol = '&#x02592;';
  app.clearScene();
  app.resetCamera();

  if(currentState == STATE_SS) {
    currentState = STATE_PROFILE;
    TOGGLER.html(`${symbol} view solar system`);
    INSTRUCTIONS.text('');
    PROFILE_VIEW.fadeIn();

  } else {
    currentState = STATE_SS;
    TOGGLER.html(`${symbol}  view planetary profiles`);
    INSTRUCTIONS.text('scroll and drag to zoom/ navigate');
    PROFILE_VIEW.fadeOut();
  }
  Views[currentState]();
}

// app.initPerformanceMonitor();
const GameLoop = () => {
  // app.stats.begin();

  Renderers[currentState]();
  app.render();

  // app.stats.end();
  requestAnimationFrame(GameLoop);
}

toggleViews();
TOGGLER.click(toggleViews);

GameLoop();
