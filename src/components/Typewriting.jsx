import React from "react";
import Typewriter from "typewriter-effect";

const Typewriting = () => {
  return (
    <div>
      <Typewriter
        options={{
          strings: [
            "React JS Developer",
            "Coder",
            "Frontend Developer",
            "Problem Solver",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Typewriting;
