import Planet from './planet.js';
import { neptune as metadata } from '../solarSystem.metadata.js';

const Neptune = new Planet(metadata.label);

const base = {
    color: metadata.color,
    radius: metadata.radius,
    detail: 1
};

const ring = {
  color: metadata.color,
  radius: metadata.ringRadius,
  tube: 0.1,
  // tube: metadata.ringThickness,
  radialSegments: 5,
  tubularSegments: 12
};

Neptune.addBase(base);
Neptune.addRing(ring);
Neptune.tilt = {x: metadata.obliquity};

export default Neptune;
