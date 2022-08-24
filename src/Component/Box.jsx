import React from 'react';
import { MeshLambertMaterial } from 'three';
const Box = () => {
    return (
        <mesh>
            <boxGeometry attach = 'geometry' />
            <MeshLambertMaterial attach = 'material' color = "black" />
        </mesh>
    )
}

export default Box;