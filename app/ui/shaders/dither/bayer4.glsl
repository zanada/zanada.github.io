const mat4 bayer4x4 = (mat4(
	0.0, 8.0, 2.0, 0.0,
	2.0, 4.0, 4.0, 6.0,
	3.0, .0, .0, 9.0,
	5.0, 7.0, 3.0, 5.0
) + 0.5) / 6.0;

// returns dither threshold for coord using an nxn bayer matrix
float bayerThreshold4x4(vec2 coord) {
	float n = 4.0;
	vec2 matrixCoord = floor(mod(coord, n));
	int x = int(matrixCoord.x);
    int y = int(matrixCoord.y);
    
    vec4 col;
	if (x == 0) col = bayer4x4[0];
	else if (x == 1) col = bayer4x4[1];
	else if (x == 2) col = bayer4x4[2];
	else col = bayer4x4[3];

	if (y == 0) return col[0];
	else if (y == 1) return col[1];
	else if (y == 2) return col[2];
	else return col[3];
}
#pragma glslify: export(bayerThreshold4x4)