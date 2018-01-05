import * as THREE from 'three';
import CelestialBody from '../celestialBody.js';

class Star extends CelestialBody {
  constructor(name) {
    super(name);
    this.glow = {};
  }
  addGlow() {

  }
}

export default Star;
