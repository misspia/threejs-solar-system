import * as THREE from 'three';
import CelestialBody from '../celestialBody.js';

const radians90Degrees = 90 * Math.PI / 180;

const circumference = (radius) => {
  return 2 * Math.PI * radius;
};

const toRadians = (degrees) => {
  return degrees * Math.PI / 180;
};

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

class Planet extends CelestialBody {
  constructor(name) {
    super(name);
    this.ring = new THREE.Group();
    this.fog = {};
  }
  addRing({color, radiusStart, radiusEnd}) {
    this.generateRingRocks({color, radiusStart, radiusEnd});
    this.add(this.ring);
  }
  generateRingRocks({color, radiusStart, radiusEnd}) {
    const rockRadius = (radiusEnd - radiusStart) / 5;
    const numRocksMultiplier = 0.8;
    const numRocks = circumference(radiusEnd) / rockRadius * numRocksMultiplier;
    const angleIncrement = 360 / circumference(radiusEnd);
    const rockConfig = {
      color,
      radius: rockRadius
    }
    for(let rockIndex = 0; rockIndex < numRocks; rockIndex ++) {
      const rock = this.createRock(rockConfig);
      const radians = toRadians(rockIndex * angleIncrement);
      const randomRadius = getRandomArbitrary(radiusStart, radiusEnd);
      rock.position.x = randomRadius * Math.cos(radians);
      rock.position.z = randomRadius * Math.sin(radians);
      rock.position.y = getRandomArbitrary(-0.05, 0.05);

      this.randomlyRotateMesh(rock);
      this.ring.add(rock);
    }
  }
  createRock({color, radius}) {
    const geometry = new THREE.TetrahedronBufferGeometry(radius, 0);
    const material = new THREE.MeshPhongMaterial({
          color,
          shininess: 100,
          flatShading: true
        });
    const rock = new THREE.Mesh(geometry, material);
    return rock;
  }
  randomlyRotateMesh(mesh) {
    const x = toRadians(getRandomArbitrary(0, 360));
    const y = toRadians(getRandomArbitrary(0, 360));
    const z = toRadians(getRandomArbitrary(0, 360));
    mesh.rotation.set(x, y, z);
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
