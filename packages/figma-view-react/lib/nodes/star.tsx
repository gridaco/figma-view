import React from "react";
import type { NodeViewProps, StarNode } from "./types";

export function FigmaStarNode({ data }: NodeViewProps<StarNode>) {
  const { type, name } = data;
  return (
    <>
      {type} : {name}
    </>
  );
}
