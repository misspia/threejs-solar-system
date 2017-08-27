import {create} from './utils.js';
import fShader from '../shaders/rectangle.frag';
import vShader from '../shaders/rectangle.vert';

const drawScene = (gl, indices) => {
	  gl.clearColor(1.0, 1.0, 0.0, 0.5);

	 gl.enable(gl.DEPTH_TEST);
	 gl.clear(gl.COLOR_BUFFER_BIT);
	 gl.viewport(0,0, gl.viewportWidth, gl.viewportHeight);

	 gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);
};

const Rectangle = (gl, shaderProgram) => {
	const vertices = [
		-0.5,0.5,0.0,
		-0.5,-0.5,0.0,
		0.5,-0.5,0.0, 
		0.5, 0.5, 0.0
	];
	const indices = [
		0,1,2,
		0, 2, 3
	];

	create.shader(gl, shaderProgram, vShader, gl.VERTEX_SHADER);
	create.shader(gl, shaderProgram, fShader, gl.FRAGMENT_SHADER);
	
	gl.linkProgram(shaderProgram);
	gl.useProgram(shaderProgram);
	
	const vertexBuffer = create.buffer(gl, shaderProgram, new Float32Array(vertices), gl.ARRAY_BUFFER);
	const indexBuffer =  create.buffer(gl, shaderProgram, new Uint16Array(indices), gl.ELEMENT_ARRAY_BUFFER);
	
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

	const coord = gl.getAttribLocation(shaderProgram, "coordinates");

	 gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0); 
	 gl.enableVertexAttribArray(coord);

	drawScene(gl, indices);
};

export default Rectangle;