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
    this.ring = {};
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
    const rock = this.createRock(rockConfig);
    let mergedRockGeometry = new THREE.Geometry();
    for(let rockIndex = 0; rockIndex < numRocks; rockIndex ++) {
      const radians = toRadians(rockIndex * angleIncrement);
      const randomRadius = getRandomArbitrary(radiusStart, radiusEnd);
      const translate = this.getRockTranslationCoords(randomRadius, radians);
      const rotate = this.getRandomRotationAngles();

      rock.geometry.rotateX(rotate.x); // order of transformations: S R T
      rock.geometry.rotateY(rotate.y);
      rock.geometry.rotateZ(rotate.z);
      rock.geometry.translate(translate.x, translate.y, translate.z);

      mergedRockGeometry.merge(rock.geometry);

      rock.geometry.translate(-translate.x, -translate.y, -translate.z);
      rock.geometry.rotateX(-rotate.x);
      rock.geometry.rotateY(-rotate.y);
      rock.geometry.rotateZ(-rotate.z);
    }
    this.ring = new THREE.Mesh(mergedRockGeometry, rock.material)
  }
  createRock({color, radius}) {
    const geometry = new THREE.TetrahedronGeometry(radius, 0);
    const material = new THREE.MeshPhongMaterial({
          color,
          shininess: 100,
          flatShading: true
        });
    return {geometry, material};
  }
  getRockTranslationCoords(radius, radians) {
    const x = radius * Math.cos(radians);
    const z = radius * Math.sin(radians);
    const y = getRandomArbitrary(-0.05, 0.05);
    return {x, y, z};
  }
  getRandomRotationAngles(geometry) {
    const x = toRadians(getRandomArbitrary(0, 360));
    const y = toRadians(getRandomArbitrary(0, 360));
    const z = toRadians(getRandomArbitrary(0, 360));
    return {x, y, z};
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
