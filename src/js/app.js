const app = {
	start: () => {
		const canvas = document.getElementById('canvas');
		const gl = app.initWebGL(canvas);
		app.initViewport(gl, canvas);

		gl.clearColor(0.0, 0.0, 0.0, 1.0);
		console.log(gl);
	},
	initWebGL: (canvas) => {
		let gl = null;
		let msg = "WebGL is not supported or is not enabled";

		try {
			gl = canvas.getContext('webgl');
		} catch(e) {
			msg = `Error creating WebGL context: ${e.toString()}`;
		}

		if(!gl) return alert(msg);

		return gl;
	},
	initViewport: (gl, canvas) => {
		gl.viewport(0, 0, canvas.width, canvas.height);
	}
};

export default app;