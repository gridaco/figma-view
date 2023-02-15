import React from "react";
import type { SceneNode } from "@design-sdk/figma-types";
import {
  FigmaEllipseNode,
  FigmaFrameNode,
  FigmaGroupNode,
  FigmaLineNode,
  FigmaPolygonNode,
  FigmaRectangleNode,
  FigmaStarNode,
  FigmaTextNode,
  FigmaVectorNode,
  FigmaInstanceNode,
} from "./nodes";

export function FigmaView({
  data: node,
  style = {},
}: {
  data: SceneNode;
  style?: React.CSSProperties;
}) {
  const passprops = {
    style: style,
  };

  switch (node.type) {
    case "BOOLEAN_OPERATION":
      return <></>;
    case "COMPONENT":
      return <></>;
    case "COMPONENT_SET":
      return <></>;
    case "CONNECTOR":
      return <></>;
    case "FRAME":
      return <FigmaFrameNode data={node} {...passprops} />;
    case "GROUP":
      return <FigmaGroupNode data={node} {...passprops} />;
    case "ELLIPSE":
      return <FigmaEllipseNode data={node} {...passprops} />;
    case "INSTANCE":
      return <FigmaInstanceNode data={node} {...passprops} />;
    case "LINE":
      return <FigmaLineNode data={node} {...passprops} />;
    case "POLYGON":
      return <FigmaPolygonNode data={node} {...passprops} />;
    case "RECTANGLE":
      return <FigmaRectangleNode data={node} style={style} />;
    case "SHAPE_WITH_TEXT":
      return <></>;
    case "SLICE":
      return <></>;
    case "STAMP":
      return <></>;
    case "STAR":
      return <FigmaStarNode data={node} {...passprops} />;
    case "STICKY":
      return <></>;
    case "TEXT":
      return <FigmaTextNode data={node} {...passprops} />;
    case "VECTOR":
      return <FigmaVectorNode data={node} {...passprops} />;
  }
}

function nodePreference(type: SceneNode["type"]) {
  switch (type) {
    case "BOOLEAN_OPERATION":
    case "COMPONENT":
    case "COMPONENT_SET":
    case "CONNECTOR":
    case "FRAME":
    case "GROUP":
    case "ELLIPSE":
    case "INSTANCE":
    case "LINE":
    case "POLYGON":
    case "RECTANGLE":
    case "SHAPE_WITH_TEXT":
    case "SLICE":
    case "STAMP":
    case "STAR":
    case "STICKY":
    case "TEXT":
    case "VECTOR":
      return;
  }
}
