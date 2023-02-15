import React from "react";
import type { RectangleNode } from "@design-sdk/figma-types";

export function FigmaRectangleNode({ type, name }: RectangleNode) {
  return (
    <>
      {type} : {name}
    </>
  );
}
