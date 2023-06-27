import { useAnimate } from "framer-motion";

import "./App.css";

function App() {
  const animationState = [
    "M 0,12.5 C 10,12.5 10,6.5 18.5,6.5",
    "M 0,12.5 C 10,12.5 10,12.5 18.5,12.5",
    "M 0,12.5 C 10,12.5 10,18.5 18.5,18.5",
  ];

  const [scope, animate] = useAnimate();

  const handleAnimation = (i: number) => async () => { 
    await animate(scope.current, { d: animationState[i] });
  };

  return (
    <div className="container">
      <div className="left-item">Fruits</div>

      <svg
        width="200px"
        height="250px"
        viewBox="0 0 20 25"
      >
        <defs>
          <marker id="arrowhead" viewBox="0 0 10 10" refX="2" refY="5">
            <path d="M 0 0 L 10 5 L 0 10 z" stroke="none" fill="#70f" />
          </marker>
        </defs>
        <path
          ref={scope}
          d="M 0,12.5 C 10,12.5 10,12.5 18.5,12.5"
          style={{
            stroke: "#70f",
            strokeWidth: .5,
            strokeLinecap: "round",
            fill: "transparent",
          }}
          marker-end="url(#arrowhead)"
        />
      </svg>

      <ul>
        <li onClick={handleAnimation(0)}>['apple', 'banana', 'carrot']</li>
        <li onClick={handleAnimation(1)}>['durian', 'eggplant', 'fig']</li>
        <li onClick={handleAnimation(2)}>null</li>
      </ul>
    </div>
  );
}

export default App;
