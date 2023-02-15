import React from "react";
import type { TextNode } from "@design-sdk/figma-types";

export function FigmaTextNode({ type, name }: TextNode) {
  return (
    <>
      {type} : {name}
    </>
  );
}
