const Utils = {
	init: {
		webGL: (canvas) => {
			let msg,  gl = null;
			try {
				gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
			} catch(err) {
				msg = `Error creating WebGL context: ${err.toString()}`;
			}
			if(!gl) return alert(msg);
			return gl;
		},
		viewport: (gl, canvas) => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			gl.viewportWidth = canvas.width;
			gl.viewportHeight = canvas.height;
		}
	},
	create: {
		buffer: (gl, shaderProgram, bufferData, bufferType=gl.ARRAY_BUFFER, drawType=gl.STATIC_DRAW) => {
			 const buffer = gl.createBuffer();
			 gl.bindBuffer(bufferType, buffer);
			 gl.bufferData(bufferType, bufferData, drawType);
			 gl.bindBuffer(bufferType, null);

			 return buffer;
		},
		shader: (gl, shaderProgram, shaderCode, type=gl.VERTEX_SHADER) => {
			 const shader = gl.createShader(type);

			 gl.shaderSource(shader, shaderCode);
			 gl.compileShader(shader);
			 gl.attachShader(shaderProgram, shader);
		 }
	}

};

module.exports = Utils;