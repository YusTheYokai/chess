import React from "react"
import "./App.scss"
import Tile from "./gui/Tile.js"

import { Canvas } from "react-three-fiber"

import { useGLTFLoader } from "drei"

function Board() {
    var positions = []
    for (var x = -3; x < 4; x++) {
        for (var y = -3; y < 4; y++) {
            positions.push([x, y])
        }
    }
    return (
        positions.map(position => {
            return <Tile key={position} x={position[0]} y={position[1]} color={(position[0] + position[1]) % 2 === 0 ? "black" : "white"} />
        })
    )
}

function App() {
    return (
        <>
            <Canvas colorManagement camera={{position: [0, 5, -10], fov: 80}}>
                <ambientLight intensity={0.1} />
                <pointLight position={[0, 2, 0]}  intensity="0.5" />
                <Board />
            </Canvas>
        </>
    );
}

export default App;