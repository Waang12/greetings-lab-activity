import React from "react";

function Greetings(props) {
  const message = `Hi, ${props.name}`;

  return (
    <div style={{ textAlign: "center" }}>
      <p
        style={{
        
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        {message}
      </p>
      <p>Welcome to our website.</p>
    </div>
  );
}

export default Greetings;
