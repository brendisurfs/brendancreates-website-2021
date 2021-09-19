import {
	Environment,
	Html,
	OrbitControls,
	PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
//TESTINGTWO
//	|
//	v
import Model from "./TestGLTF";
function ThreeCanvas() {
	return (
		<div>
			<Canvas
				color="black"
				style={{
					height: window.innerHeight / 1.2,
					width: window.innerWidth,
				}}
			>
				<Suspense fallback={<Html center>Loading</Html>}>
					<pointLight intensity={2} position={[5, 5, 5]} />
					<Environment preset="city" />
					<Model />
				</Suspense>
				<PerspectiveCamera
					makeDefault
					position={new THREE.Vector3(0, 1, 6)}
					fov={24}
				/>
			</Canvas>
		</div>
	);
}

export default ThreeCanvas;
