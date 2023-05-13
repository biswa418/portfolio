import React, { useRef } from "react";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";

export default function Grad(props) {
    const { nodes, materials } = useGLTF("/hat.gltf");
    return (
        <group {...props} dispose={null}>
            <PerspectiveCamera makeDefault position={[10, 6, 10]} />
            <group rotation={[-Math.PI / 2, 0, 0]}>

                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group
                        position={[0, 1.17, 0]}
                        rotation={[0, Math.PI / 4, 0]}
                        scale={[3.33, 1.24, 3.33]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_4.geometry}
                            material={materials["Material.001"]}
                        />
                    </group>
                    <group
                        position={[-0.63, 0.86, -7.1]}
                        rotation={[0, Math.PI / 4, Math.PI / 2]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_6.geometry}
                            material={materials["Material.002"]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_7.geometry}
                            material={materials["Material.003"]}
                        />
                    </group>
                    <group position={[0, 3.64, 0]} scale={[5.97, 1, 0.48]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_9.geometry}
                            material={materials["Material.002"]}
                        />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/hat.gltf");