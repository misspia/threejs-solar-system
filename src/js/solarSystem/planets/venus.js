import Planet from './planet.js';
import { venus as metadata } from '../solarSystem.metadata.js';

const Venus = new Planet(metadata.label);

const base = {
    color: metadata.color,
    radius: metadata.radius,
    detail: 1
};

Venus.addBase(base);
Venus.tilt = {x: metadata.obliquity};


export default Venus;
