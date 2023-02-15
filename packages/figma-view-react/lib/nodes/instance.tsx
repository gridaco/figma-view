import React from "react";
import type { NodeViewProps, InstanceNode } from "./types";

export function FigmaInstanceNode({ data }: NodeViewProps<InstanceNode>) {
  const { type, name } = data;

  return (
    <>
      {type} : {name}
    </>
  );
}
