import React from "react";
import type { NodeViewProps, VectorNode } from "./types";

export function FigmaVectorNode({ data }: NodeViewProps<VectorNode>) {
  const { type, name } = data;
  return (
    <>
      {type} : {name}
    </>
  );
}
