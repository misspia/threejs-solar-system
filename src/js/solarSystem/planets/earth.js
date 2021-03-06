import Planet from './planet.js';
import { earth as metadata } from '../solarSystem.metadata.js';

import textureImage from '../../../assets/earth_texture.png';

const Earth = new Planet(metadata.label);

const base = {
    texture: 'https://raw.githubusercontent.com/misspia/threejs-solar-system/master/src/assets/earth_texture.png',
    radius: metadata.radius,
    detail: 1
};

Earth.addBase(base);
Earth.tilt = {x: metadata.obliquity};

export default Earth;
