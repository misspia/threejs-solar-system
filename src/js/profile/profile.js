import $ from 'jquery';
import Control from '../controls/control.js';
import * as ssMetadata from '../solarSystem/solarSystem.metadata.js';
import Planets from '../solarSystem/planets/planets.js';
import Stars from '../solarSystem/stars/stars.js';

const defaultModel = 'saturn';

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
    this.appendModel();
    console.log(this.app.scene.children)
  }
  appendModel() {
    this.model = Planets[defaultModel];
    // this.model.position = {
    //   axis: 'x',
    //   scalar: -50
    // }
    // this.model.body.scale.set(2, 2, 2);
    this.app.add(this.model.body);

  }
  rotateModel() {
    this.model.rotation = {
      axis: 'y',
      radians: ssMetadata[defaultModel].rotationSpeed
    }
  }
  renderInfo() {
    this.title = $('<div>', {'class': 'title'});
    this.updateTitle('earth');
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
      this.updateTitle(name)
  }
  updateTitle(name) {
    this.title.text(name);
  }
  render() {
    this.rotateModel();
  }
}

export default Profile;
