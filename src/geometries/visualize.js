// https://www.google.ca/search?rlz=1C1CHBF_enCA761CA761&biw=1012&bih=921&tbm=isch&sa=1&ei=lAkNWpyGOMicjwO4yp6ACA&q=maplestory+luminous+skills&oq=maplestory+luminous+skills&gs_l=psy-ab.3..0i24k1.9544.11054.0.11150.6.6.0.0.0.0.122.548.0j5.5.0....0...1.1.64.psy-ab..1.5.546....0.9lFjZ_ooUcA#imgrc=0YYm2tsH-LTV7M:
import * as THREE from 'three';

function Visualize(scene) {
  this.geometry = new THREE.BoxGeometry(1, 1, 1);
  this.material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
  this.cube = new THREE.Mesh( this.geometry, this.material );
  this.add = () => {
    scene.add(this.cube);
  }
  this.draw = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.005;
  }
}

export default Visualize;
