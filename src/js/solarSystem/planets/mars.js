import Planet from './planet.js';
import {mars as metadata} from '../solarSystem.metadata.js';

const Mars = new Planet(metadata.label);

const base = {
  color: metadata.color,
  radius: metadata.radius,
  detail: 1
};

Mars.addBase(base);
Mars.tilt = {x: metadata.obliquity};

export default Mars;
