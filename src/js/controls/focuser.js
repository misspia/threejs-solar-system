import $ from 'jquery';
import * as THREE from 'three';
import Control from './control.js';
import * as ssMetadata from '../solarSystem/solarSystem.metadata.js';


class Focuser extends Control {
  constructor(entryElement, SS) {
    super(entryElement);
    this.SS = SS;
  }
  init() {
    this.createButtons();
    this.appendButtons();
  }
  createButtons() {
    Object.keys(ssMetadata).forEach(bodyName => {
      const label = ssMetadata[bodyName].label;
      const config = {
        label,
        onClick: () => this.clickHandler(label),
        className: 'button'
      };
      this.createButton(config);
    })
  }
  clickHandler(bodyName) {
    this.SS.lookAt(bodyName);
  }
}

export default Focuser;
