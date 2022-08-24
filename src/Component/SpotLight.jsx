import React from "react";
const SpotLight = () => {
    return (
        <spotLight
        intensity={2}
        position={[40, 50, 50]}
        shadow-bias={-0.00005}
        penumbra={1}
        angle={Math.PI / 6}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        castShadow
      />
    )
}

export default SpotLight;