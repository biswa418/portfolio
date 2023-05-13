import React, { useRef } from "react";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";

export default function Workhat(props) {
    const { nodes, materials } = useGLTF("/portfolio/workhat.gltf");
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[0, -0.01, -0.01]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials.coalmine_helmet}
                        >
                        </mesh>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/portfolio/workhat.gltf");