import Planet from './planet.js';
import { saturn as metadata } from '../solarSystem.metadata.js';

const saturn = new Planet;
saturn.initBase({color: metadata.color, radius: 1, detail: 1});

export default saturn;
