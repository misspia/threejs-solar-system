import * as THREE from 'three';

class CelestialBody {
  constructor(name) {
    this.body = new THREE.Group();
    this.body.name = name;
    this.base = {};
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
  move({axis, scalar}) {
    this.body.position[axis] += scalar;
  }
  set rotation({axis, radians}) {
    this.body.rotation[axis] += radians;
  }
  set position({axis, scalar}) {
    this.body.position[axis] = scalar;
  }
}

export default CelestialBody;
