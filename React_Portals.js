// React Portals are an advanced concept that allows developers to render their elements outside the React hierarchy tree
//  without comprising the parent - child relationship between components.

// When to use React Portal?
// The React portal allows you to insert a child component into a different location in the DOM rather than as a child of the nearest parent node. A few common use cases of React Portals are:

// Modals or Dialog boxes
// Tooltips
// Widgets
// Floating menus
// Notifications
// Pop-up messages
// Lightboxes
// Loaders etc.

import { useState } from "react";
import ReactDOM from "react-dom";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const showTooltip = (e) => {
    setIsVisible(true);
    setPosition({
      left: e.clientX + 10,
      top: e.clientY - 10,
    });
  };

  const hideTooltip = () => setIsVisible(false);

  const portalContainer = document.getElementById("tooltip-root");
  const tooltipStyle = {
    position: "absolute",
    display: isVisible ? "block" : "none",
    top: position.top,
    left: position.left,
    backgroundColor: "lightgray",
    padding: "8px",
    borderRadius: "4px",
    zIndex: 9999,
  };

  return (
    <>
      <div onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
        {children}
      </div>
      {isVisible &&
        ReactDOM.createPortal(
          <div style={tooltipStyle}>
            <span>{text}</span>
          </div>,
          portalContainer
        )}
    </>
  );
};

export default Tooltip;

// The ReactDOM.createPortal function is used in React to render elements outside of the component hierarchy.
// In the context of a tooltip, it's used to render the tooltip element outside of its parent DOM hierarchy to ensure proper positioning,
// especially when dealing with z - index or position - related issues.
