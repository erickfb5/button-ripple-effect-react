import { useEffect, useRef } from "react";
import './App.css';

const App = () => {
  const buttonRef = useRef(null);
  
  useEffect(() => {
    const buttons = buttonRef.current.querySelectorAll(".ripple");

    buttons.forEach(button => {
      button.addEventListener("click", function(e) {
        const x = e.pageX;
        const y = e.pageY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement("span");
        circle.classList.add("circle");
        circle.style.top = yInside + "px";
        circle.style.left = xInside + "px";

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
      });
    });
  }, []);

  return (
    <div ref={buttonRef}>
      <button className="ripple">Click Me</button>
    </div>
  );
};

export default App;
