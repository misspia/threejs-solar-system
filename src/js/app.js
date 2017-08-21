import square from './square.js';
import testFrag from '../shaders/test.frag';
import testVert from '../shaders/test.vert';

// https://developer.mozilla.org/en-US/docs/Web/API/WebGLShader
// http://learningwebgl.com/blog/?p=28
// https://github.com/gpjt/webgl-lessons/blob/master/lesson01/index.html

let gl = null,
	triangleVertexPositionBuffer,
	squareVertexPositionBuffer,
	shaderProgram;

const mvMatrix = mat4.create();
const pMatrix = mat4.create();

const createShader = (type, shaderSource) => {
	const shader = gl.createShader(type);
	gl.shaderSource(shader, shaderSource);
	gl.compileShader( shader );
	if( !gl.getShaderParameter(shader, gl.COMPILE_STATUS) ) {
		const info = gl.getShaderInfoLog( shader );
		console.log(`COULD NOT COMPILE SHADER: ${info}`);
	}
	return shader;
}

const init = {
	webGL: (canvas) => {
		let msg = "WebGL is not supported or is not enabled";

		try {
			gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
		} catch(e) {
			msg = `Error creating WebGL context: ${e.toString()}`;
		}

		if(!gl) return alert(msg);

		return gl;
	},
	viewport: (canvas) => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		gl.viewportWidth = canvas.width;
		gl.viewportHeight = canvas.height;
	},
	buffers:() => {
		triangleVertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
		let vertices = [
			0.0,	1.0, 	0.0,
			-1.0,	-1.0,	0.0,
			1.0,	-1.0,	0.0
		];

		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		triangleVertexPositionBuffer.itemSize = 3;
		triangleVertexPositionBuffer.numItems = 3;

		squareVertexPositionBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
		vertices = [
			1.0,	1.0, 	0.0,
			-1.0,	1.0,	0.0,
			1.0,	-1.0,	0.0
			-1.0,	-1.0,	0.0
		];
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		squareVertexPositionBuffer.itemSize = 3;
		squareVertexPositionBuffer.numItems = 4;

	},
	shaders: () => {
		const fragmentShader = createShader(gl.FRAGMENT_SHADER, testFrag);
		const vertexShader= createShader(gl.VERTEX_SHADER, testVert);
		console.log(fragmentShader, vertexShader);
		
		shaderProgram = gl.createProgram();
		gl.attachShader(shaderProgram, testVert);
		gl.attachShader(shaderProgram, testFrag);
		gl.linkProgram(shaderProgram);

		if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
			alert('could not intialize shaders');
		}
		gl.useProgram(shaderProgram);

		shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
		gl.enableVertexAttribArray(shaderProgram.vertextPositionAttribure);

		shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, 'uPMatrix');
		shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, 'uMVMatrix');
	}
};

const setMatrixUniforms = () => {
	gl.uniformMatrix4fv(shaderProgram.pMatrixUniform, false, pMatrix);
	gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mvMatrix);
}

const drawScene = () => {
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);
	mat4.identity(mvMatrix);

	mat4.translate(mvMatrix, [-1.5, 0.0, -7.0]);
	gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, triangleVertexPositionBuffer.itemSize, gl.FLOAR, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLES, 0, triangleVertexPositionBuffer.numItems);

	
	mat4.translate(mvMatrix, [3.0, 0.0, 0.0]);
	gl.bindBuffer(gl.ARRAY_BUFFER, squareVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, squareVertexPositionBuffer.numItems);

};

const webGLStart = () => {
	const canvas = document.getElementById('canvas');
	init.webGL(canvas);
	init.viewport(canvas);
	init.shaders();
	init.buffers();

	gl.clearColor(1.0, 1.0, 0.0, 0.5);
	gl.clear(gl.COLOR_BUFFER_BIT);

	drawScene();
}

export default webGLStart;



















