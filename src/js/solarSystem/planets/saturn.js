import Planet from './planet.js';
import { saturn as metadata } from '../solarSystem.metadata.js';

const Saturn = new Planet(metadata.label);

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

Saturn.addBase(base);
Saturn.addRing(ring);
Saturn.tilt = {x: metadata.obliquity};

export default Saturn;
