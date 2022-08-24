import React from "react";

const Plane = (props) => {
    const {width, length} = props;
    return(
        <mesh>
            <planeBufferGeometry attach="geometry" args={[width, length]} />
            <meshLambertMaterial attach="material" color="lightblue" />
        </mesh>
    )
}

export default Plane;