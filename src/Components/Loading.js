import React from 'react';
import { SpinnerRoundOutlined } from "spinners-react";
const Loading = () => {
    return (
      <div className="flex justify-center w-full h-full">
        <div className="left-1/2 top-1/2 absolute ">
          <SpinnerRoundOutlined />
        </div>
      </div>
    );
};

export default Loading;