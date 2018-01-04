import Planet from './planet.js';
import { uranus as metadata } from '../solarSystem.metadata.js';

const Uranus = new Planet(metadata.label);

const base = {
    color: metadata.color,
    radius: metadata.radius,
    detail: 1
};

const ring = {
  color: metadata.color,
  radius: metadata.ringRadius * 1.25,
  tube: 0.1,
  // tube: metadata.ringThickness,
  radialSegments: 5,
  tubularSegments: 12
};

Uranus.addBase(base);
Uranus.addRing(ring);
Uranus.tilt = {x: metadata.obliquity};

export default Uranus;
