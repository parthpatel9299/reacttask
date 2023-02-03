import React from "react";

const Slot = (props) => {
  const { X, Y, Z } = props;
  if (X === Y && Y === Z) {
    return (
      <div className="text-center">
        <h1>
          {X} {Y} {Z}
        </h1>
        <h1>hey You Win</h1>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <h1>
          {X} {Y} {Z}
        </h1>
        <h1>pls Try Again</h1>
      </div>
    );
  }
};
export default function Game() {
  return (
    <>
      <h1 className="heading_style"> Game </h1>
      <Slot X=" " Y=" P " Z=" P " />
      <Slot X=" P " Y=" P " Z=" Z " />
      <div className="space"></div>
    </>
  );
}
