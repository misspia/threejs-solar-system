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
  move(movement) { // axisName: movementSize
    for(let axis in movement) {
      this.body.position[axis] += movement[axis];
    }
  }
  set rotation(rotationMap) { //axisName: radians
    for(let axis in rotationMap) {
        this.body.rotation[axis] += rotationMap[axis];
    }
  }
  set position(coord) { // axisName: value
    for(let axis in coord) {
      this.body.position[axis] = coord[axis];
    }
  }
}

export default CelestialBody;
