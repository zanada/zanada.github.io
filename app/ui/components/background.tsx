"use client";

import React, { useEffect, useRef, useState } from "react";
import createREGL from "regl";

import fragmentShader from "../shaders/background.frag";

const Background: React.FC = () => {
	const pixelSize = 4.0;
	const lowPixelRatio = 1.0/pixelSize; // 1/n => nxn "pixels"
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		// Initialize regl with the canvas
		const regl = createREGL({
			canvas: canvas,
			attributes: {
				antialias: true, alpha: true,
			},
		});

		const resize = () => {
			// 1. Sync canvas internal pixel dimensions with its CSS/offset size
			// Using devicePixelRatio ensures it stays sharp on Retina displays
			canvas.width = window.innerWidth * lowPixelRatio;
			canvas.height = window.innerHeight * lowPixelRatio;
		};

		let ticking = false;
		
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					const subPixelOffset = -(window.scrollY % pixelSize);
					canvas.style.transform = `translate3d(0, ${subPixelOffset}px, 0)`;
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		window.addEventListener("resize", resize);
		resize(); // call once initially

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
			frag: fragmentShader,

			attributes: {
				// Creates a single large triangle that covers the screen
				position: [[-1, -1], [4, -1], [-1, 4]],
			},

			uniforms: {
				u_time: ({ tick }) => tick * 0.01,
				u_scroll: () => Math.floor(window.scrollY / pixelSize),
				u_resolution: ({ drawingBufferWidth, drawingBufferHeight }) => [drawingBufferWidth, drawingBufferHeight],
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
			window.removeEventListener("scroll", handleScroll)
			window.removeEventListener("resize", resize);
			frame.cancel();
			regl.destroy();
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{height: `calc(100vh + ${pixelSize}px)`}}
			className="fixed top-0 left-0 -z-10 w-full pointer-events-none bg-transparent [image-rendering:crisp-edges]"
		/>
	);
};

export default Background;