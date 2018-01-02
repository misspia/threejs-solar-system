import * as THREE from 'three';
import OrbitControls from 'three-orbit-controls';

const OrbitController = OrbitControls(THREE);

class SceneManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.dimmensions = { width: canvas.width(), height: canvas.height() };
    this.clock = new THREE.Clock();
    this.scene = {};
    this.camera = {};
    this.defaultCameraPosition = {x: 0, y: 0, z: 60};
    this.renderer = {};
    this.light = {
      point: {},
      ambient: {},
      directional: {}
    };
    this.controls = {};
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
  addPointLight({x, y, z, color, intensity, distance, decay}) {
    this.light.point = new THREE.PointLight(color, intensity, distance, decay);
    this.light.point.position.set(x, y, z);
    this.add(this.light.point);
  }
  addAmbientLight(color, intensity) {
    this.light.ambient = new THREE.AmbientLight(color, intensity);
    this.add(this.light.ambient);
  }
  addDirectionalLight({x, y, z}) {
    this.light.directional = new THREE.DirectionalLight();
    this.light.directional.position.set(x, y, z);
    this.add(this.light.directional);
  }
  addOrbitControls() {
    this.controls = new OrbitController(this.camera, this.renderer.domElement);
  }
  initWindowResizeHandler() {
    window.addEventListener( 'resize', () => this.resizeHandler());
  }
  removeWindowResizeHander() {
    window.removeEventListener('resize', () => this.resizeHandler());
  }
  resizeHandler() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    // const width = this.canvas.width();
    // const height = this.canvas.height();
    this.renderer.setSize( width, height );
    this.camera.aspect = width /height;
    this.camera.updateProjectionMatrix();
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
  set height(height) {
    this.renderer.height = height;
  }
  set width(width) {
    this.renderer.width = width;
  }
}

export default SceneManager;
