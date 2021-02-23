import React from "react";

const CheckedSvg: React.FunctionComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" id="completed">
    <path
      d="M0,3c0-1.7,1.3-3,3-3h8c1.7,0,3,1.3,3,3v8c0,1.7-1.3,3-3,3H3c-1.7,0-3-1.3-3-3V3z M3.5,6.5 c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1l3,3c0.3,0.3,0.8,0.3,1.1,0l6-6c0.3-0.3,0.3-0.8,0-1.1s-0.8-0.3-1.1,0L6,8.9L3.5,6.5 z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);
const CheckSvg: React.FunctionComponent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" id="checkbox">
    <path d="M0,2c0-1.1,0.9-2,2-2h10c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H2c-1.1,0-2-0.9-2-2V2z M1,2v10c0,0.6,0.4,1,1,1h10 c0.6,0,1-0.4,1-1V2c0-0.6-0.4-1-1-1H2C1.4,1,1,1.4,1,2z" />
  </svg>
);

const DeleteSvg: React.FunctionComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    id="task-menu-delete"
  >
    <path
      d="M5.3,3.5l0.5-1h4.4l0.5,1H12c0.3,0,0.5,0.2,0.5,0.5v1h-9V4c0-0.3,0.2-0.5,0.5-0.5H5.3z M5,6h6c0.6,0,1,0.4,1,1 v4.5c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V7C4,6.4,4.4,6,5,6z"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

export { CheckedSvg, CheckSvg, DeleteSvg };
