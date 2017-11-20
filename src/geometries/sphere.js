import * as THREE from 'three';

function Sphere(scene, fragmentShader, radius=1,) {
  this.geometry = new THREE.SphereGeometry(radius, 15, 15);
  // this.material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
  this.material = new THREE.ShaderMaterial({ fragmentShader });
  this.cube = new THREE.Mesh( this.geometry, this.material );
  this.add = () => {
    scene.add(this.cube);
  }
  this.draw = () => {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.005;
  }
}

export default Sphere;
