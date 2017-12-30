import Planet from './planet.js';
import { earth as metadata } from '../solarSystem.metadata.js';

const Earth = new Planet(metadata.label);

const base = {
    color: metadata.color,
    radius: metadata.radius,
    detail: 1
};

Earth.addBase(base);
Earth.tilt = {axis: 'x', radians: metadata.obliquity};

export default Earth;
