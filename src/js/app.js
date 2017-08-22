import square from './square.js';
import testFrag from '../shaders/test.frag';
import testVert from '../shaders/test.vert';

let gl = null,
indices,
 triangleVertexPositionBuffer,
 squareVertexPositionBuffer,
 shaderProgram;

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
		const vertices = [
		-0.5,0.5,0.0,
		-0.5,-0.5,0.0,
		0.5,-0.5,0.0, 
		];

		indices = [0,1,2];

		 const vertex_buffer = gl.createBuffer();
		 gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
		 gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		 gl.bindBuffer(gl.ARRAY_BUFFER, null);

		 const Index_Buffer = gl.createBuffer();
		 gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);
		 gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

		 gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
		 gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
		 gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);

		 const coord = gl.getAttribLocation(shaderProgram, "coordinates");

		 gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0); 
		 gl.enableVertexAttribArray(coord);

	},
	shaders: () => {
		 const vertCode = testVert;
		 const vertShader = gl.createShader(gl.VERTEX_SHADER);

		 gl.shaderSource(vertShader, vertCode);
		 gl.compileShader(vertShader);

		 const fragCode = testFrag;
		 const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
		 gl.shaderSource(fragShader, fragCode); 
		 
		 gl.compileShader(fragShader);
		 shaderProgram = gl.createProgram();

		 gl.attachShader(shaderProgram, vertShader);
		 gl.attachShader(shaderProgram, fragShader);

		 gl.linkProgram(shaderProgram);
		 gl.useProgram(shaderProgram);
	 }
};

const drawScene = () => {
	  gl.clearColor(1.0, 1.0, 0.0, 0.5);

	 gl.enable(gl.DEPTH_TEST);
	 gl.clear(gl.COLOR_BUFFER_BIT);
	 gl.viewport(0,0, gl.viewportWidth, gl.viewportHeight);

	 gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);
};

const webGLStart = () => {
	const canvas = document.getElementById('canvas');
	gl = init.webGL(canvas);
	init.viewport(canvas);
	init.shaders();
	init.buffers();
	drawScene();
}

export default webGLStart;