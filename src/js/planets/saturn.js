import Planet from './planet.js';
import { saturn as metadata } from '../solarSystem.metadata.js';

const saturn = new Planet;
saturn.addBase({color: metadata.color, radius: 1, detail: 1});
saturn.addRing({color: metadata.ringColor, radius: 1.3, tube: 0.15, radialSegments: 6, tubularSegments: 15});

export default saturn;
