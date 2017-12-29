import * as THREE from 'three';
import CelestialBody from '../celestialBody.js';

class Star extends CelestialBody {
  constructor() {
    super();
    this.base = {};
  }
  testMethod() {
    // console.log('i is celeste bod', this.testvar)
    this.base = { test: ''}
  }
}

export default Star;
