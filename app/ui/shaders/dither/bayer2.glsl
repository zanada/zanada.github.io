const mat2 bayer2x2 = (mat2(
	0.0, 2.0,
	3.0, 1.0
) + 0.5) / 4.0;

// returns dither threshold for coord using an nxn bayer matrix
float bayerThreshold2x2(vec2 coord) {
	float n = 2.0;
	vec2 matrixCoord = floor(mod(coord, n));
	int x = int(matrixCoord.x);
    int y = int(matrixCoord.y);
    
    if (x == 0) {
        return (y == 0) ? bayer2x2[0][0] : bayer2x2[0][1];
    } else {
        return (y == 0) ? bayer2x2[1][0] : bayer2x2[1][1];
    }
}

#pragma glslify: export(bayerThreshold2x2)