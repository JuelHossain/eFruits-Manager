import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  let matchStyle = "text-amber-500 border-b border-amber-500 hover:text-white hover:border-white";
  return (
    <Link
      style={
        match && {
          backgroundColor: "#ed1e79",
          color: "#white",
        }
      }
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}

export default CustomLink;
