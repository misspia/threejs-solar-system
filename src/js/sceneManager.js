import * as THREE from 'three';

class SceneManager {
  constructor(canvas) {
    this.dimmensions = { width: canvas.width, height: canvas.height };
    this.clock = new THREE.Clock();
    this.scene = {};
    this.camera = {};
    this.renderer = {};
  }
  constructScene() {
    this.initScene();
    this.initCamera();
    this.initRenderer();
  }
  initScene() {
    this.scene = new THREE.Scene();
  }
  initCamera() {
    const { width, height } = this.dimmensions;
    const aspectRatio = width / height;
    const fieldOfView = 75;
    const nearPlane = 0.1;
    const farPlane = 1000;
    this.camera = new THREE.PerspectiveCamera( fieldOfView, aspectRatio, nearPlane, farPlane);
  }
  initRenderer() {
    const { width, height } = this.dimmensions;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
  }
  initWindowResizeHandler() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    window.addEventListener( 'resize', () => {
      this.renderer.setSize( width, height );
      this.camera.aspect = width /height;
      this.camera.updateProjectionMatrix();
    })
  }
  render() {
    this.renderer.render( this.scene, this.camera );
  }
  add(obj) {
    this.scene.add( obj );
  }
  set cameraPosition(coords) { //x, y, z
    for(let axis in coords) {
      this.camera.position[axis] = coords[axis];
    }
  }
}

export default SceneManager;
