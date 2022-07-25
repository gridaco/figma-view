import React from "react";
import type { InstanceNode } from "@design-sdk/figma-types";

export function FigmaInstanceNode({ type, name }: InstanceNode) {
  return (
    <>
      {type} : {name}
    </>
  );
}
