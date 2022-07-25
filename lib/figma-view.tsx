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

export function FigmaView(node: SceneNode) {
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
      return <FigmaFrameNode {...node} />;
    case "GROUP":
      return <FigmaGroupNode {...node} />;
    case "ELLIPSE":
      return <FigmaEllipseNode {...node} />;
    case "INSTANCE":
      return <FigmaInstanceNode {...node} />;
    case "LINE":
      return <FigmaLineNode {...node} />;
    case "POLYGON":
      return <FigmaPolygonNode {...node} />;
    case "RECTANGLE":
      return <FigmaRectangleNode {...node} />;
    case "SHAPE_WITH_TEXT":
      return <></>;
    case "SLICE":
      return <></>;
    case "STAMP":
      return <></>;
    case "STAR":
      return <FigmaStarNode {...node} />;
    case "STICKY":
      return <></>;
    case "TEXT":
      return <FigmaTextNode {...node} />;
    case "VECTOR":
      return <FigmaVectorNode {...node} />;
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
