// create a new component called Footer
// import React
import React from "react";
// import Link from react-router-dom
import { Link } from "react-router-dom";
// import ArrowLongRightIcon from heroicons
import Logo from "./Logo";

// create a new component called Footer

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 py-4 border-t">
      <div>
        <Logo />
      </div>
      <div>
        <p className="text-sm text-gray-600">© 2023 Notepad Labs, Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
