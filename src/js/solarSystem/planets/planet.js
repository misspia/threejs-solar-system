import * as THREE from 'three';
import CelestialBody from '../celestialBody.js';

const radians90Degrees = 90 * Math.PI / 180;

class Planet extends CelestialBody {
  constructor(name) {
    super(name);
    this.ring = {};
    this.fog = {};
  }
  addRing({radius, tube, radialSegments, tubularSegments, color}) {
    const geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);
    const material = new THREE.MeshStandardMaterial({
      color,
      flatShading: true
    });
    this.ring = new THREE.Mesh(geometry, material);
    this.ringTilt = {x: radians90Degrees};
    this.ring.castShadow = true;
    this.ring.receiveShadow = true;
    this.add(this.ring);
  }
  set ringTilt(tilt) { //axisName: radians
    for(let axis in tilt) {
      this.ring.rotation[axis] = tilt[axis];
    }
  }
  set tilt(tilt) { //axisName: radians

    for(let axis in tilt) {
      this.body.rotation[axis] = tilt[axis];
    }
  }
}

export default Planet;
