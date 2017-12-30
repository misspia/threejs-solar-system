import Planet from './planet.js';
import {jupiter as metadata} from '../solarSystem.metadata.js';

const Jupiter = new Planet(metadata.label);

const base = {
  color: metadata.color,
  radius: metadata.radius,
  detail: 1
};

Jupiter.addBase(base);

export default Jupiter;
