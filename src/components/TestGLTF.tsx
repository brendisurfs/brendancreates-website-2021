/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
    nodes: {
        grid1: THREE.Mesh;
        sphere1: THREE.Mesh;
    };
    materials: {
        sphere_and_ground: THREE.MeshStandardMaterial;
    };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
    const group = useRef<THREE.Group>();
    const { nodes, materials } = useGLTF("/testGLTF.gltf") as GLTFResult;
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes.grid1.geometry}
                material={nodes.grid1.material}
            />
            <mesh
                geometry={nodes.sphere1.geometry}
                material={nodes.sphere1.material}
            />
        </group>
    );
}

useGLTF.preload("/testGLTF.gltf");
