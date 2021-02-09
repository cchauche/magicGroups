import React from 'react';
import { Layer, Stage } from "react-konva";

const DrawingArea = () => {
  return (
    <main id="drawing">
      <Stage
      width={window.innerWidth - 450}
      height={(window.innerWidth - 450) * (22/17)}
      >
      </Stage>
    </main>
  )
}

export default DrawingArea