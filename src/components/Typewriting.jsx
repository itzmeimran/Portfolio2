import React from "react";
import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";

const Typewriting = () => {
  const { border } = useSelector((state) => state.colors);

  return (
    <div>
      <Typewriter
        options={{
          strings: ["React JS Developer","JavaScript Developer"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Typewriting;
