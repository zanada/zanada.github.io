precision highp float;
uniform float u_time;
uniform float u_scroll;
uniform vec2 u_resolution;

void main() {
	vec2 coordFlipped = gl_FragCoord.xy;
	coordFlipped.y = u_resolution.y - coordFlipped.y;

	float worldY = coordFlipped.y + u_scroll + coordFlipped.x;

	// Simple example logic using scroll and time
	float color = 0.5 + 0.5 * sin(worldY / 15.0);
	if (color < 0.5) discard;
	gl_FragColor = vec4(vec3(color * 0.2, 0.1, color * 0.5), 1.0);
}