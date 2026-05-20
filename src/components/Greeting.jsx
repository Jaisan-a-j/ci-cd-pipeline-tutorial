import React from "react";

function Greeting({ name }) {
  return <p>Hai, {name || "Guest"}!</p>;
}

export default Greeting;
