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
    this.ringTilt = {axis: 'x', radians: radians90Degrees};
    this.ring.castShadow = true;
    this.ring.receiveShadow = true;
    this.add(this.ring);
  }
  set ringTilt({axis, radians}) {
    this.ring.rotation[axis] = radians;
  }
  set tilt({axis, radians}) {
    this.body.rotation[axis] = radians;
  }
}

export default Planet;
