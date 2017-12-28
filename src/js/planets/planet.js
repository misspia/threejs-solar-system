import * as THREE from 'three';

const radians90Degrees = 90 * Math.PI / 180;
class Planet {
  constructor() {
      this.body = new THREE.Group();
      this.base = {};
      this.ring = {};
      this.fog = {};
  }
  add(part) {
    this.body.add(part);
  }
  addBase({color, radius, detail}) {
    const geometry = new THREE.IcosahedronGeometry(radius, detail);
    const material = new THREE.MeshPhongMaterial({
      color,
      flatShading: true
    });
    this.base = new THREE.Mesh(geometry, material);
    this.base.castShadow = true;
    this.base.receiveShadow = true;
    this.add(this.base);
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
  move({axis, scalar}) {
    this.body.position[axis] += scalar;
  }
  set ringTilt({axis, radians}) {
    this.ring.rotation[axis] = radians;
  }
  set tilt({axis, radians}) {
    this.body.rotation[axis] = radians;
  }
  set rotation({axis, radians}) {
    this.body.rotation[axis] += radians;
  }
  set position({axis, scalar}) {
    this.body.position[axis] = scalar;
  }
}

export default Planet;
