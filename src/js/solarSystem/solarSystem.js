import * as metadata from './solarSystem.metadata.js';
import Planets from './planets/planets.js';
import Stars from './stars/stars.js';

class SolarSystem {
    constructor(app) {
      this.app = app;
      this.pivot = {};
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
      this.bodies = {
        stars: Stars,
        planets: Planets
      }
    }
    lookAt(name) {
      const body = this.app.scene.getObjectByName(name);
      if(!body) {
        const defaultPosition = this.app.defaultCameraPosition;
        this.app.camera.lookAt(defaultPosition);
      } else {
        const position = body.getWorldPosition();
        this.app.camera.lookAt(position);
      }
    }
    add(body, destination='pivot') {
      this[destination].add(body);
    }
    assignPivot(body) {
      this.pivot = body;
      this.add(body, 'app');
    }
    addAllBodies() {
      this.assignPivot(Stars.sun.body)
      this.addAllPlanets();
    }
    addAllPlanets() {
      Object.keys(Planets).forEach(planet => {
        this.add(Planets[planet].body);
      });
    }
    addStars() {

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
    updateAllPlanetaryRotations() {
      Object.keys(Planets).forEach(planet => {
        Planets[planet].rotation = {
          axis: 'y',
          radians: metadata[planet].rotationSpeed
        }
      })
    }
    render() {
      this.updateAllOrbitAngles();
      this.updateAllOrbitPositions();
      this.updateAllPlanetaryRotations();
    }
}

export default SolarSystem;
