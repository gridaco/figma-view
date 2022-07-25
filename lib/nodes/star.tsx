import React from "react";
import type { StarNode } from "@design-sdk/figma-types";

export function FigmaStarNode({ type, name }: StarNode) {
  return (
    <>
      {type} : {name}
    </>
  );
}
