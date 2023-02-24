import React from "react";
import type { NodeViewProps, TextNode } from "./types";

type TextAlignHorizontalType = "left" | "right" | "center" | "justify";
type TextAlignVerticalType = "top" | "bottom" | "center";
type SmallCapsType = "normal" | "small-caps" | "all-small-caps";

export function FigmaTextNode({ data, style = {} }: NodeViewProps<TextNode>) {
  console.log(data);
  const {
    x,
    y,
    width,
    height,
    characters,
    fills,
    textCase,
    fontName,
    fontSize,
    fontWeight,
    textDecoration,
    textAlignHorizontal,
    textAlignVertical,
    textAutoResize,
    letterSpacing,
    lineHeight,
  }: {
    x: number;
    y: number;
    width: number;
    height: number;
    characters: string;
    fills: any;
    textCase: any;
    fontName: any;
    fontSize: any;
    fontWeight?: number;
    textDecoration: any;
    textAlignHorizontal: string;
    textAlignVertical: string;
    textAutoResize: string;
    letterSpacing: any;
    lineHeight: any;
  } = data;
  // color
  const color = fills?.[0]?.color ?? { r: 0, g: 0, b: 0, a: 0 };

  // text fit option
  const size = fitHandler(width, height, textAutoResize);

  // text case
  const { text, smallCaps }: { text: string; smallCaps: SmallCapsType } =
    textCaseHandler(textCase, characters);

  // text align
  const {
    _textAlignHorizontal,
    _textAlignVertical,
  }: {
    _textAlignHorizontal: TextAlignHorizontalType;
    _textAlignVertical: TextAlignVerticalType;
  } = textAlignHandler(textAlignHorizontal, textAlignVertical);

  // text decoration
  const _textDecoration = textDecorationHandler(textDecoration);

  return (
    <div
      id={data.id}
      style={{
        position: "absolute",
        color: `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${
          color.a
        })`,
        top: y,
        left: x,
        fontFamily: fontName.family,
        fontSize: fontSize,
        fontWeight: fontWeight,
        textAlign: _textAlignHorizontal,
        verticalAlign: _textAlignVertical,
        fontVariantCaps: smallCaps,
        letterSpacing: letterSpacing.value,
        lineHeight:
          lineHeight.unit === "AUTO" ? "normal" : lineHeight.value + "px",
        textDecoration: _textDecoration,
        ...size,
        ...style,
      }}
    >
      {text}
    </div>
  );
}

function fitHandler(width: number, height: number, textAutoResize: string) {
  let size = {};
  switch (textAutoResize) {
    case "WIDTH_AND_HEIGHT":
      size = {
        minWidth: width,
        minHeight: height,
      };
      break;
    case "HEIGHT":
      size = {
        width: width,
        minHeight: height,
      };
      break;
    case "TRUNCATE":
      size = {
        width: width,
        height: height,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      };
      break;
    case "NONE":
      size = {
        width: width,
        height: height,
      };
      break;
    default:
      size = {
        minWidth: width,
        minHeight: height,
      };
  }
  return size;
}

function textCaseHandler(textCase: any, characters: string) {
  let text = characters;
  let smallCaps: SmallCapsType = "normal";

  switch (textCase) {
    case "UPPER":
      text = characters.toUpperCase();
      break;
    case "LOWER":
      text = characters.toLowerCase();
      break;
    case "TITLE":
      text = characters
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
      break;
    case "SMALL_CAPS":
      text = characters.toUpperCase();
      smallCaps = "small-caps";
      break;
    case "SMALL_CAPS_FORCED":
      text = characters.toUpperCase();
      smallCaps = "all-small-caps";
      break;
    default:
      text = characters;
  }

  return { text, smallCaps };
}

function textAlignHandler(
  textAlignHorizontal: string,
  textAlignVertical: string
) {
  let _textAlignHorizontal: TextAlignHorizontalType = "left";
  let _textAlignVertical: TextAlignVerticalType = "top";
  switch (textAlignHorizontal) {
    case "LEFT":
      _textAlignHorizontal = "left";
      break;
    case "RIGHT":
      _textAlignHorizontal = "right";
      break;
    case "CENTER":
      _textAlignHorizontal = "center";
      break;
    case "JUSTIFIED":
      _textAlignHorizontal = "justify";
      break;
    default:
      _textAlignHorizontal = "left";
  }

  switch (textAlignVertical) {
    case "TOP":
      _textAlignVertical = "top";
      break;
    case "BOTTOM":
      _textAlignVertical = "bottom";
      break;
    case "CENTER":
      _textAlignVertical = "center";
      break;
    default:
      _textAlignVertical = "top";
  }

  return {
    _textAlignHorizontal,
    _textAlignVertical,
  };
}

function textDecorationHandler(textDecoration: string) {
  let _textDecoration = "none";
  switch (textDecoration) {
    case "UNDERLINE":
      _textDecoration = "underline";
      break;
    case "STRIKETHROUGH":
      _textDecoration = "line-through";
      break;
    default:
      _textDecoration = "none";
  }

  return _textDecoration;
}
