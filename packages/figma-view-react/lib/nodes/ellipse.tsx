import React from "react";
import type { EllipseNode } from "@design-sdk/figma-types";

export function FigmaEllipseNode({ type, name }: EllipseNode) {
  return (
    <>
      {type} : {name}
    </>
  );
}
