import Planet from './planet.js';
import {mercury as metadata} from '../solarSystem.metadata.js'

const Mercury = new Planet;

const base = {
    color: metadata.color,
    radius: metadata.radius,
    detail: 1
};

Mercury.addBase(base);

export default Mercury;
