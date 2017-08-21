const square = (gl) => {
	const vertexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

	const vertices = [
		0.5, 0.5, 0.0,
		-0.5, 0.5, 0.0,
		0.5, -0.5, 0.0,
		-0.5, -0.5, 0.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Floar32Array(vertices), gl.STATIC_DRAW);
	const square = {
		buffer: vertexBuffer, 
		vertSize: 3,
		nVerts: 4,
		type: gl.TRIANGLE_STRIP
	};
	return square;
}