import React from "react";

const HazardousMaterials = props => (
  <svg viewBox="0 0 32 32"   {...props}>
    <path d="M31 10s0 17-3 17H13c-3 0-3-17-3-17z" fill="#ef6565" />
    <path d="M31 5v5H10V5s0-4 4-4h13s4 0 4 4" fill="#f27c7c" />
    <path d="M14 1v5s0 2 2 2h9s2 0 2-2V1z" fill="#ef6565" />
    <g fill="#4d5152">
      <path d="M26.996 2c.506.006 3.004.18 3.004 3v4H11V5.006C11.006 4.504 11.177 2 14 2zM27 1H14c-4 0-4 4-4 4v5h21V5c0-4-4-4-4-4" />
      <path d="M26 2v4c0 .805-.55.988-1 1h-9c-.805 0-.988-.55-1-1V2zm1-1H14v5s0 2 2 2h9s2 0 2-2zM30 10c0 7.826-.957 15.251-2.056 16H13.056c-1.117-.756-2.055-8.035-2.056-16zm1-1H10v1s0 17 3 17h15c3 0 3-17 3-17z" />
    </g>
    <path
      d="M17.31 21.86l-4.95 4.95-9.2-9.2-.71.71-.7-.71 2.83-2.83-2.13-2.12-1.41 1.41-.71-.7 3.54-3.54.71.71-1.42 1.41 2.12 2.13 2.83-2.83.71.7-.71.71z"
      fill="#67dde0"
    />
    <path
      d="M22.25 31.05l-.7.7-3.54-3.53-.71.7-1.41-1.41h-2.83l-.7-.7 4.95-4.95.7.7v2.83l1.41 1.41-.7.71z"
      fill="#aaa"
    />
    <path
      d="M3.868 9.832L.333 13.367l.707.707 1.414-1.414 2.121 2.122-2.828 2.829.707.707.707-.708 9.9 9.898h2.828l1.414 1.415.707-.707 3.535 3.535.707-.707-3.535-3.535.707-.707-1.414-1.415V22.56l-9.899-9.898.707-.707-.707-.707-2.829 2.829-2.121-2.122 1.414-1.414zm13.145 13.727v2.248l.998.996-.707.707-.998-.996h-2.248zm-9.61-10.19l2.121 2.121-1.414 1.414.707.707 1.414-1.414 1.415 1.415-1.414 1.414.707.707 1.414-1.414 1.414 1.414-1.414 1.414.707.706 1.414-1.413 2.122 2.12-3.535 3.535-9.193-9.191z"
      fill="#4d5152"
    />
  </svg>
);

export default HazardousMaterials;
