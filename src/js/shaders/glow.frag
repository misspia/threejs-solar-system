uniform float time;

void main(void) {
	vec4 pink = vec4(1.0, 0.0, 0.5, 0.8);
	pink.r = abs(sin(time));
	pink.b = abs(cos(time));
	pink.g = abs(cos(time) * sin(time));

	gl_FragColor = pink;
}
