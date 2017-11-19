import {init} from './utils.js';
import Rectangle from './rectangle.js';
import Sphere from './sphere.js';

const webGLStart = () => {
	const canvas = document.getElementById('canvas');
	const gl = init.webGL(canvas);
	const shaderProgram = gl.createProgram();
	init.viewport(gl, canvas);

	Rectangle(gl, shaderProgram);
}

export default webGLStart;