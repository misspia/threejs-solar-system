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
  radiusStart: metadata.ringRadiusStart,
  radiusEnd: metadata.ringRadiusEnd,
};

Saturn.addBase(base);
Saturn.addRing(ring);
Saturn.tilt = {x: metadata.obliquity};

export default Saturn;
