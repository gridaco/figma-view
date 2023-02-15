import React from "react";
import type { VectorNode } from "@design-sdk/figma-types";

export function FigmaVectorNode({ type, name }: VectorNode) {
  return (
    <>
      {type} : {name}
    </>
  );
}
