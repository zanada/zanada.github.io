const mat4 halftoneMatrix4x4 = (mat4(
	0.0, 8.0, 2.0, 10.0,
	4.0, 12.0, 6.0, 14.0,
	3.0, 11.0, 1.0, 9.0,
	7.0,15.0, 5.0, 13.0
) + 0.5) / 16.0;

// returns dither threshold for coord using an nxn bayer matrix
float halftoneThreshold4x4(vec2 coord) {
	float n = 4.0;
	vec2 matrixCoord = floor(mod(coord, n));
	int x = int(matrixCoord.x);
    int y = int(matrixCoord.y);
    
    vec4 col;
	if (x == 0) col = halftoneMatrix4x4[0];
	else if (x == 1) col = halftoneMatrix4x4[1];
	else if (x == 2) col = halftoneMatrix4x4[2];
	else col = halftoneMatrix4x4[3];

	if (y == 0) return col[0];
	else if (y == 1) return col[1];
	else if (y == 2) return col[2];
	else return col[3];
}
#pragma glslify: export(halftoneThreshold4x4)