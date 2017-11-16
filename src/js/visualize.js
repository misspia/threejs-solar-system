import * as THREE from 'three';

function Visualize(scene) {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
  const cube = new THREE.Mesh( geometry, material );
  scene.add(cube);
  this.draw = () => {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.005;
  }
}

export default Visualize;
