"use client";

import React, { useEffect, useRef } from "react";
import createREGL from "regl";

const Background: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		if (!canvasRef.current) return;

		// Initialize regl with the canvas
		const regl = createREGL({
			canvas: canvasRef.current,
			attributes: {
				antialias: true, alpha: true,
			},
		});

		// Define the drawing command
		const drawBackground = regl({
			// Vertex Shader: A full-screen triangle
			vert: `
			precision highp float;
			attribute vec2 position;
			void main() {
			gl_Position = vec4(position, 0, 1);
			}
		`,

			// Fragment Shader
			frag: `
			precision highp float;
			uniform float time;
			uniform float scroll;
			uniform vec2 resolution;

			void main() {
				vec2 uv = gl_FragCoord.xy / resolution;
				// Simple example logic using scroll and time
				float color = 0.5 + 0.5 * sin(uv.y * 10.0 + scroll * 5.0 + time);
				gl_FragColor = vec4(vec3(color * 0.2, 0.1, color * 0.5), 1.0);
			}
		`,

			attributes: {
				// Creates a single large triangle that covers the screen
				position: [[-1, -1], [4, -1], [-1, 4]],
			},

			uniforms: {
				time: ({ tick }) => tick * 0.01,
				scroll: () => window.scrollY / document.documentElement.scrollHeight,
				resolution: ({ viewportWidth, viewportHeight }) => [viewportWidth, viewportHeight],
			},

			count: 3,
		});

		// The Render Loop
		const frame = regl.frame(() => {
			regl.clear({
				color: [0, 0, 0, 0],
				depth: 1,
			});
			drawBackground();
		});

		return () => {
			frame.cancel();
			regl.destroy();
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none bg-transparent"
		/>
	);
};

export default Background;