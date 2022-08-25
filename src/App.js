import './App.css';
import { Canvas, } from "@react-three/fiber";
import {OrbitControls, Stars, PerspectiveCamera} from "@react-three/drei";
import Plane from "./Component/Plane"
import Box from "./Component/Box"
import React from 'react'
import SpotLight from "./Component/SpotLight"
import { MyControls } from './Component/MyControls';

function App() {
  return (
      <Canvas>
      {/* <OrbitControls /> */}
      <MyControls />
        <SpotLight />
        <PerspectiveCamera makeDefault position={[4, 0, 4]} near={1} />
        <Plane width={20} height={20}/> 
      </Canvas> 
  );
}


export default App;
