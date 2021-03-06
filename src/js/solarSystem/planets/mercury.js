import Planet from './planet.js';
import {mercury as metadata} from '../solarSystem.metadata.js'

const Mercury = new Planet(metadata.label);

const base = {
    color: metadata.color,
    radius: metadata.radius,
    detail: 1
};

Mercury.addBase(base);
Mercury.tilt = {x: metadata.obliquity};

export default Mercury;
