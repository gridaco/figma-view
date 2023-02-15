import type {
  SceneNode,
  RectangleNode,
  EllipseNode,
  TextNode,
  FrameNode,
  GroupNode,
  LineNode,
  StarNode,
  InstanceNode,
  VectorNode,
  PolygonNode,
} from "@design-sdk/figma-types";

interface NodeViewProps<T extends SceneNode> {
  data: T;
  style?: React.CSSProperties;
}

export type {
  NodeViewProps,
  SceneNode,
  RectangleNode,
  EllipseNode,
  TextNode,
  FrameNode,
  GroupNode,
  LineNode,
  StarNode,
  InstanceNode,
  PolygonNode,
  VectorNode,
};
