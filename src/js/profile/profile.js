import $ from 'jquery';
import Control from '../controls/control.js';
import * as ssMetadata from '../solarSystem/solarSystem.metadata.js';

class Profile extends Control {
  constructor(profileContainer, menuContainer) {
    super();
    this.profileContainer = profileContainer;
    this.menuContainer = menuContainer;
    this.title = {};
  }
  renderProfile() {
    this.title = $('<div>', {'class': 'title'});
    this.updateTitle('earth');
    this.append(this.title, this.profileContainer);
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
    this.renderProfile();
    this.renderMenuButtons();
  }
}

export default Profile;
