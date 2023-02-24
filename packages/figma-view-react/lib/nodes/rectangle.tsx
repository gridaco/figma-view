import React from "react";
import type { NodeViewProps, RectangleNode } from "./types";

export function FigmaRectangleNode({
  data,
  style,
}: NodeViewProps<RectangleNode>) {
  const { x, y, width, height, fills } = data;
  const color = fills?.[0]?.color ?? { r: 0, g: 0, b: 0, a: 0 };
  return (
    <div
      id={data.id}
      style={{
        position: "absolute",
        backgroundColor: `rgba(${color.r * 255}, ${color.g * 255}, ${
          color.b * 255
        }, ${color.a})`,
        top: y,
        left: x,
        width,
        height,
        ...style,
      }}
    ></div>
  );
}
