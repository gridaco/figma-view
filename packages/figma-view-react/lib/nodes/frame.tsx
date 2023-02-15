import React from "react";
import type { FrameNode } from "@design-sdk/figma-types";
import { FigmaView } from "../figma-view";

export function FigmaFrameNode({
  data,
  style = {},
}: {
  data: FrameNode;
  style?: React.CSSProperties;
}) {
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
