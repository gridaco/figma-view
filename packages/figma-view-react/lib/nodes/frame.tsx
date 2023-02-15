import React from "react";
import { FigmaView } from "../figma-view";
import type { NodeViewProps, FrameNode } from "./types";

export function FigmaFrameNode({ data, style = {} }: NodeViewProps<FrameNode>) {
  const { children, fills, x, y, width, height, parent } = data;
  const { color } = fills?.[0] ?? {};
  const { r, g, b, a } = color ?? {};

  return (
    <>
      <div
        id={data.id}
        style={{
          position: "absolute",
          top: y,
          left: x,
          width,
          height,
          backgroundColor: `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${a})`,
          zIndex: 1,
          ...style,
        }}
      >
        {children.map((child: any) => (
          <FigmaView key={child.id} data={child} style={style} />
        ))}
      </div>
    </>
  );
}
