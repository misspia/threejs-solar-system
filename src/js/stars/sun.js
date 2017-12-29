import * as THREE from 'three';
import Star from './star.js';
import { sun as metadata } from '../solarSystem.metadata.js';

const Sun = new Star;

const base = {
  color: metadata.color,
  radius: metadata.radius,
  detail: 1
}
Sun.addBase(base);

export default Sun;
