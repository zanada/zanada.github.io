precision highp float;

float cnoise3(vec3 p);
float snoise3(vec3 p);
float pnoise3(vec3 p);
//float bayer2(vec2 coords);
//float bayer4(vec2 coords);
#pragma glslify: cnoise3 = require('glsl-noise/classic/3d')
#pragma glslify: snoise3 = require('glsl-noise/simplex/3d')
#pragma glslify: pnoise3 = require('glsl-noise/periodic/3d')
#pragma glslify: bayer2 = require('./dither/bayer2.glsl')
#pragma glslify: bayer4 = require('./dither/bayer4.glsl')

uniform float u_time;
uniform float u_scroll;
uniform vec2 u_resolution;

void main() {
	vec2 coordFlipped = gl_FragCoord.xy;
	coordFlipped.y = u_resolution.y - coordFlipped.y;

	vec2 worldCoord = vec2(coordFlipped.x, coordFlipped.y + u_scroll);

	// Simple example logic using scroll and time
	float value = cnoise3(vec3(worldCoord * 0.04, u_time/15.0));
	//value = pow(value, 3.0) * 4.0;

	float threshold = bayer2(worldCoord);

	if (value < threshold) discard;
	gl_FragColor = vec4(vec3(0.624, 0.435, 0.761), 1.0);
}
//float(value > threshold)
//(0.624, 0.435, 0.761)