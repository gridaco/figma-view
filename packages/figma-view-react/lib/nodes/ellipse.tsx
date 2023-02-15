import React from "react";
import type { NodeViewProps, EllipseNode } from "./types";

export function FigmaEllipseNode({ data }: NodeViewProps<EllipseNode>) {
  const { type, name } = data;
  return (
    <>
      {type} : {name}
    </>
  );
}
