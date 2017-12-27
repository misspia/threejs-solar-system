import * as THREE from 'three';

class Planet {
  constructor() {
      this.body = new THREE.Group();
      this.base = {};
      this.ring = {};

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
  addRing({radius, tube, radialSegments, tubularSegments, arc, color}) {
    const geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments, arc);
    const material = new THREE.MeshStandardMaterial({
      color,
      flatShading: true
    });
    this.ring = new THREE.Mesh(geometry, material);
    this.base.castShadow = true;
    this.base.receiveShadow = true;
    this.add(this.ring);
  }
  set rotation({axis, scalar}) {
    this.body.rotation[axis] += scalar;
  }
}

export default Planet;
