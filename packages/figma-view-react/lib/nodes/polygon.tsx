import React from "react";
import type { PolygonNode } from "@design-sdk/figma-types";

export function FigmaPolygonNode({ type, name }: PolygonNode) {
  return (
    <>
      {type} : {name}
    </>
  );
}
