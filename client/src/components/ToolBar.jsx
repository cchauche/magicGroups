import React from "react";
import { TOOL_TYPES } from "./shapes/constants";

const ToolBar = ({ handleButtonClick }) => {
  return (
    <aside className="tool-bar">
      <h4>Tools</h4>
      <button onClick={handleButtonClick} data-tool={TOOL_TYPES.SEL}>
        Select
      </button>
      <button onClick={handleButtonClick} data-tool={TOOL_TYPES.RECT}>
        Rect
      </button>
      <button onClick={handleButtonClick} data-tool={TOOL_TYPES.ELLI}>
        Circle
      </button>
      <button onClick={handleButtonClick} data-tool={TOOL_TYPES.TEXT}>
        Text
      </button>
    </aside>
  );
};

export default ToolBar;
