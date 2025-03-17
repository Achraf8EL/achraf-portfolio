import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <footer className={isDark ? "footer dark" : "footer light"}>
        {/* Your footer content here */}
        <p>Footer Content</p>
      </footer>
    </Fade>
  );
}
