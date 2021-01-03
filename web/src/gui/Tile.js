const pointerOver = event => {
    console.log(event.eventObject.material)
    event.eventObject.material.color = {r: 0, g: 1, b: 0, isColor: true}
}

const pointerOut = (event, originalColor) => {
    event.eventObject.material.color = originalColor === "white" ? {r: 1, g: 1, b: 1, isColor: true} : {r: 0, g: 0, b: 0, isColor: true}
}

function Tile({x, y, color}) {
    return (
        <mesh onPointerOver={pointerOver} onPointerOut={event => pointerOut(event, color)} position={[x, 0, y]}>
            <boxBufferGeometry attach="geometry" args={[1, 0.25, 1]} />
            <meshStandardMaterial attach="material" color={color} roughness="1" metalness="1" />
        </mesh>
    )
}

export default Tile;