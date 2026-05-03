const mat3 halftoneMatrix3x3 = (mat3(
	7.0, 2.0, 6.0, 
	3.0, 0.0, 1.0, 
	5.0, 4.0, 6.0
) + 0.5) / 9.0;

// returns dither threshold for coord using an nxn bayer matrix
float halftoneThreshold3x3(vec2 coord) {
	float n = 3.0;
	vec2 matrixCoord = floor(mod(coord, n));
	int x = int(matrixCoord.x);
    int y = int(matrixCoord.y);
    
    vec3 col;
	if (x == 0) col = halftoneMatrix3x3[0];
	else if (x == 1) col = halftoneMatrix3x3[1];
	else col = halftoneMatrix3x3[2];

	if (y == 0) return col[0];
	else if (y == 1) return col[1];
	else return col[2];
}
#pragma glslify: export(halftoneThreshold3x3)