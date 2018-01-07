import $ from 'jquery';
import * as THREE from 'three';
import Control from '../controls/control.js';
import * as ssMetadata from '../solarSystem/solarSystem.metadata.js';
import Planets from '../solarSystem/planets/planets.js';
import Stars from '../solarSystem/stars/stars.js';
import { animateProfileInfo, animateMenuEntry } from './animations.js';

const defaultModel = 'saturn';

const desiredFields = {
  radius: {
    label: 'Radius',
    formatter: (radius) => {
      return `${radius.toFixed(2)} km`;
    }
  },
  distanceFromSun: {
    label: 'Distance from sun',
    formatter: (distance) => {
      return `${distance.toFixed(2)} AU`;
    }
  },
  orbitPeriod: {
    label: 'Orbit period',
    formatter: (days) => {
      days = (days / 365).toFixed(2);
      if(days == 1) return `${days} Earth year`;
      return `${days} Earth years`;
    }
  },
  rotationPeriod: {
    label: 'Rotation period',
    formatter: (days) => {
      days = days.toFixed(2);
      if(days == 1) return `${days} Earth day`;
      return `${days} Earth days`;
    }
  }
};


class Profile extends Control {
  constructor(infoContainer, menuContainer, app) {
    super();
    this.app = app;
    this.infoContainer = infoContainer;
    this.menuContainer = menuContainer;
    this.title = {};
    this.profileInfo = {
      title: {},
      details: {}
    };
    this.model = {};
  }
  init() {
    this.menuContainer.empty();
    this.infoContainer.empty();
    this.initInfo();
    this.initMenu();
    this.appendModel(defaultModel);
  }
  appendModel(name) {
    if(Planets[name]) this.model = Planets[name];
    if(!Planets[name]) this.model = Stars[name];

    this.resetModel(); // using same instance as SS (has been repositioned, etc)
    this.app.add(this.model.body);
  }
  resetModel() {
    this.model.position = {x: 0, y: 0, z: 0};
  }
  rotateModel() {
    this.model.rotation = {
      y: ssMetadata[defaultModel].rotationSpeed
    }
  }
  initInfo() {
    this.profileInfo.title = $('<div>', {'class': 'title'});
    this.append(this.profileInfo.title, this.infoContainer);

    const detailsContainer = $('<div>', {class: 'details'});
    this.append(detailsContainer, this.infoContainer);

    this.profileInfo.details =  {};
    Object.keys(desiredFields).forEach((field) => {
      this.profileInfo.details[field] = $('<div>');
      this.append(this.profileInfo.details[field], detailsContainer);
    })
    this.selectBody(defaultModel);
  }
  initMenu() {
    this.generateMenuItems();
    animateMenuEntry({play: true});
  }
  generateMenuItems() {
    Object.keys(Planets).forEach(planetName => {
      const label = ssMetadata[planetName].label;
      const config = {
        label,
        onClick: () => this.selectBody(label),
        className: 'button'
      };
      const button = this.createButton(config);
      this.append(button, this.menuContainer);
    })
  }
  selectBody(name) {
      this.updateProfileInfo(name);
      this.app.remove(this.model.body);
      this.appendModel(name);
      this.zoomToFit();
  }
  updateProfileInfo(name) {
    this.populateProfile(name);
    animateProfileInfo({play: true});
  }
  populateProfile(name) {
    this.profileInfo.title.text(name);

    Object.keys(this.profileInfo.details).forEach((field) => {
      const rawData = ssMetadata[name]['raw'][field];
      const label = desiredFields[field].label;
      const formattedData = desiredFields[field].formatter(rawData);
      const elementText = `${label}: ${formattedData}`;
      this.profileInfo.details[field].text(elementText);
    });
  }
  zoomToFit() {
    const boundingBox = this.calcBoundingBox();
    const d = boundingBox.max.z;
    this.app.cameraPosition = { z: d * this.app.camera.aspect  +  1}
  }
  setFOV() {
    this.app.camera.fov = this.calcFOV();
    this.camera.updateProjectionMatrix();
  }
  calcBoundingBox() {
    const box = new THREE.Box3()
    const boundingBox = box.setFromObject(this.model.body);
    return boundingBox;
  }
  calcFOV() {
    const boundingBox = this.calcBoundingBox();
    const h = boundingBox.max.y;
    const d = boundingBox.max.z;
    return 2 * Math.atan(h / (2 * d) * (180 / Math.PI));
  }
  render() {
    this.rotateModel();
  }
}

export default Profile;
