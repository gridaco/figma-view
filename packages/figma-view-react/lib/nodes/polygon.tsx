import React from "react";
import type { NodeViewProps, PolygonNode } from "./types";

export function FigmaPolygonNode({ data }: NodeViewProps<PolygonNode>) {
  const { type, name } = data;
  return (
    <>
      {type} : {name}
    </>
  );
}
