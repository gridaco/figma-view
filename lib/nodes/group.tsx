import React from "react";
import { GroupNode } from "@design-sdk/figma-types";

export function FigmaGroupNode({ type, name }: GroupNode) {
  return (
    <>
      {type} : {name}
    </>
  );
}
