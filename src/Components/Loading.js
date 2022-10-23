import React from "react";
import { SpinnerRoundOutlined } from "spinners-react";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm">
      <SpinnerRoundOutlined />
    </div>
  );
}


