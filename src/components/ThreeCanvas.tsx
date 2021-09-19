import {
	Environment,
	Html,
	OrbitControls,
	PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Model from "./TestGLTF";

//TESTINGTWO
//	|
//	v
const config = {
	maxYaw: 0.04, // Max amount camera can yaw in either direction
	maxPitch: 0.1, // Max amount camera can pitch in either direction
	maxRoll: 0.1, // Max amount camera can roll in either direction
	yawFrequency: 1, // Frequency of the the yaw rotation
	pitchFrequency: 1, // Frequency of the pitch rotation
	rollFrequency: 1, // Frequency of the roll rotation
	intensity: 0.2, // initial intensity of the shake
	decay: false, // should the intensity decay over time
	decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
	additive: true, // this should be used when your scene has orbit controls
};
const colorInfo = document.body.className;

const color = colorInfo == "chakra-ui-light" ? "blue" : "red";

function ThreeCanvas() {
	return (
		<div>
			<Canvas
				style={{
					height: window.innerHeight - 512,
					width: window.innerWidth / 2,
				}}
			>
				<Suspense fallback={<Html center>Loading</Html>}>
					<pointLight
						color={color}
						intensity={0.4}
						position={[5, 5, 5]}
					/>
					<Environment preset="forest" />
					<Model />
				</Suspense>
				<PerspectiveCamera
					makeDefault
					{...config}
					position={new THREE.Vector3(0, 1, 6)}
					fov={24}
				/>
				<OrbitControls />
			</Canvas>
		</div>
	);
}

export default ThreeCanvas;
