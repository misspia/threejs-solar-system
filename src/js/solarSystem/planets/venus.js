import Planet from './planet.js';
import { venus as metadata } from '../solarSystem.metadata.js';

const Venus = new Planet;

const base = {
    color: metadata.color,
    radius: metadata.radius,
    detail: 1
};

Venus.addBase(base);
Venus.tilt = {axis: 'x', radians: metadata.obliquity};

export default Venus;
