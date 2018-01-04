import $ from 'jquery';
import Control from '../controls/control.js';
import * as ssMetadata from '../solarSystem/solarSystem.metadata.js';
import Planets from '../solarSystem/planets/planets.js';
import Stars from '../solarSystem/stars/stars.js';

const defaultModel = 'neptune';

class Profile extends Control {
  constructor(infoContainer, menuContainer, app) {
    super();
    this.app = app;
    this.infoContainer = infoContainer;
    this.menuContainer = menuContainer;
    this.title = {};
    this.model = {};
  }
  init() {
    this.menuContainer.empty();
    this.infoContainer.empty();
    this.renderInfo();
    this.renderMenuButtons();
    this.appendModel(defaultModel);
  }
  appendModel(name) {
    this.model = Planets[name];
    this.model.position = {x: 0};
    this.app.add(this.model.body);
  }
  rotateModel() {
    this.model.rotation = {
      y: ssMetadata[defaultModel].rotationSpeed
    }
  }
  renderInfo() {
    this.title = $('<div>', {'class': 'title'});
    this.updateTitle(defaultModel);
    this.append(this.title, this.infoContainer);
  }
  renderMenuButtons() {
    Object.keys(ssMetadata).forEach(bodyName => {
      const label = ssMetadata[bodyName].label;
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
      this.updateTitle(name);
      this.app.remove(this.model.body);
      this.appendModel(name);
  }
  updateTitle(name) {
    this.title.text(name);
  }
  render() {
    this.rotateModel();
  }
}

export default Profile;
