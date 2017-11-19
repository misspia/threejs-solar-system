import * as THREE from 'three';

function Sphere(scene, radius=1, material={ color: 0xffffff, wireframe: true }) {
  this.geometry = new THREE.SphereGeometry(radius, 15, 15);
  this.material = new THREE.MeshBasicMaterial(material);
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
