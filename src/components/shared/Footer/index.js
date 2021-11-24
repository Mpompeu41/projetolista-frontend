import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
          Copyright:
          <a
            className="Github"
            href="https://github.com/Mpompeu41"
            rel="noreferrer"
            target="_blank"
          >
            Marcos Pompeu
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;