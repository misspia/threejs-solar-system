import * as metadata from './solarSystem.metadata.js';
import Planets from './planets/planets.js';

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
      };
    }
    addPlanets() {
      Object.keys(Planets).forEach(planet => {
        this.app.add(Planets[planet].body);
      });
    }
    updateAllOrbitAngles() {
      Object.keys(this.orbitAngle).forEach((planet, index) => {
        this.orbitAngle[planet] += metadata[planet].orbitSpeed * this.timeFactor;
      });
    }
    updateAllOrbitPositions() {
      Object.keys(Planets).forEach(planet => {
        const angle = this.orbitAngle[planet];
        const orbitRadius = metadata[planet].orbitRadius;
        const x = Math.cos(angle) * orbitRadius;
        const z = Math.sin(angle) * orbitRadius;
        Planets[planet].position = {axis: 'x', scalar: x};
        Planets[planet].position = {axis: 'z', scalar: z};
      });
    }
    draw() {
      Planets.saturn.rotation = {axis: 'y', radians: metadata.saturn.rotationSpeed};
      this.updateAllOrbitAngles();
      this.updateAllOrbitPositions();
    }
}

export default SolarSystem;
