import Planet from './planet.js';
import { neptune as metadata } from '../solarSystem.metadata.js';

const Neptune = new Planet;

const base = {
    color: metadata.color,
    radius: metadata.radius,
    detail: 1
};

const ring = {
  color: metadata.color,
  radius: metadata.ringRadius,
  tube: 0.3,
  // tube: metadata.ringThickness,
  radialSegments: 5,
  tubularSegments: 12
};

Neptune.addBase(base);
Neptune.addRing(ring);
Neptune.tilt = {axis: 'x', radians: metadata.obliquity};

export default Neptune;