import * as metadata from './solarSystem.metadata.js';
import Planets from './planets/planets.js';

const orbit = (planet, angle, orbitRadius) => {
  const x = Math.cos(angle) * orbitRadius;
  const z = Math.sin(angle) * orbitRadius;
  planet.position = {axis: 'x', scalar: x};
  planet.position = {axis: 'z', scalar: z};
}

class SolarSystem {
    constructor(app) {
      this.app = app;
      this.timeFactor = 0;
      this.orbitAngle = {
        mercury: 0,
        venus: 0,
        earth: 0,
        mars: 0,
        jupiter: 0,
        saturn: 0,
        uranus: 0,
        neptune: 0
      }
    }
    addPlanets() {
      this.app.add(Planets.saturn.body);
    }
    incrementAllOrbitAngles() {
      Object.keys(this.orbitAngle).forEach((planet, index) => {
        this.orbitAngle[planet] += metadata[planet].orbitSpeed * this.timeFactor;
      })
    }
    updateAllOrbitPositions() {
        Object.keys(metadata).forEach(planet => {
          if(Planets[planet]) {
            const angle = this.orbitAngle[planet];
            const orbitRadius = metadata[planet].orbitRadius;
            const x = Math.cos(angle) * orbitRadius;
            const z = Math.sin(angle) * orbitRadius;
            Planets[planet].position = {axis: 'x', scalar: x};
            Planets[planet].position = {axis: 'z', scalar: z};
          }
        })
    }
    draw() {
      Planets.saturn.rotation = {axis: 'y', radians: metadata.saturn.rotationSpeed};
      this.incrementAllOrbitAngles();
      this.updateAllOrbitPositions();
    }
}

export default SolarSystem;
