import * as THREE from 'three';

class Planet {
  constructor() {
      this.base = {};

  }
  initPlanet() {

  }
  initBase({color, radius, detail}) {
    const geometry = new THREE.IcosahedronGeometry(radius, detail);
    const material = new THREE.MeshPhongMaterial({
      color,
      flatShading: true
    });
    this.base = new THREE.Mesh(geometry, material);
  }
  set rotation({axis, scalar}) {
    this.base.rotation[axis] += scalar;
  }
}

export default Planet;
