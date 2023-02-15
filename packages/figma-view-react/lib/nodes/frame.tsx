import React from "react";
import type { FrameNode } from "@design-sdk/figma-types";

export function FigmaFrameNode({ type, name }: FrameNode) {
  return (
    <>
      {type} : {name}
    </>
  );
}
