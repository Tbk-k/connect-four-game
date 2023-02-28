const [isHovering, setIsHovering] = useState(false);
const [mouseX, setMouseX] = useState(null);
const [markerPosition, setMarkerPosition] = useState(null);
const bordRef = useRef(null);
const handleMouseEnter = () => {
  setIsHovering(true);
};
const handleMouseLeave = () => {
  setIsHovering(false);
};

let Marker = activePlayer === 1 ? <RedMarker /> : <YellowMarker />;



import React, { useState } from "react";

function App() {
  const [targetId, setTargetId] = useState(null);

  const handleMouseMove = (event) => {
    if (event.target.id === targetId) {
      throttle(() => {
        // your code for handling mouse move event goes here
      }, 100);
    }
  };

  // Throttle function to limit the rate at which the handleMouseMove function is called
  const throttle = (callback, delay) => {
    let timeoutId = null;
    let lastExecTime = 0;

    return (...args) => {
      const currentTime = new Date().getTime();
      if (currentTime - lastExecTime > delay) {
        lastExecTime = currentTime;
        callback(...args);
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          lastExecTime = currentTime;
          callback(...args);
        }, delay - (currentTime - lastExecTime));
      }
    };
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter target ID"
        value={targetId}
        onChange={(e) => setTargetId(e.target.value)}
      />
      <div onMouseMove={handleMouseMove}>Mouse move here</div>
    </div>
  );
}

export default App;