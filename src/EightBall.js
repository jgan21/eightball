import React, {useState } from "react";

/**
 * Props:
 * answers - array of objects
 * [{msg:..., color:...},...]
 *
 *
 * State:
 * - color : string
 * - message : string
 *
 *
 * App -> EightBall ->
 */

function EightBall({ answers }){
  const [message, setMessage] = useState("Think of a Question");
  const [color, setColor] = useState("black");

  function handleClick(evt){
    const random = Math.floor(Math.random() * answers.length);
    setMessage(answers[random].msg);
    setColor(answers[random].color);
  }

  return (
    <div className="EightBall"
         onClick={handleClick}
         style={{ backgroundColor: color }}>
      <p>{message}</p>
    </div>
  );
}

export default EightBall;