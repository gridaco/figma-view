import React from "react";
import type { NodeViewProps, GroupNode } from "./types";

export function FigmaGroupNode({ data }: NodeViewProps<GroupNode>) {
  const { type, name } = data;
  return (
    <>
      {type} : {name}
    </>
  );
}
