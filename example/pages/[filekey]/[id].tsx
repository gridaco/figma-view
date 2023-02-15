import React from "react";
import Head from "next/head";
import type { GetServerSidePropsContext } from "next";
import Axios from "axios";

export default function NodePage({ data }: { data: any }) {
  return (
    <>
      <Head>
        <title>
          {data.name} ({data.type})
        </title>
      </Head>
      <>
        <FrameRender data={data} />
      </>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </>
  );
}

function FrameRender({ data }: any) {
  const { children, background, absoluteBoundingBox } = data;
  console.log(data, data.background);
  const { color } = background[0];
  const { r, g, b, a } = color;
  const { x, y, width, height } = absoluteBoundingBox;

  return (
    <>
      <div
        style={{
          position: "absolute",
          // top: y,
          // left: x,
          width,
          height,
          backgroundColor: "red", // `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${a})`,
          zIndex: 1,
        }}
      >
        {children.map((child: any) => {
          if (child.type === "TEXT") {
            return (
              <TextRender
                data={{
                  ...child,
                  x: child.absoluteBoundingBox.x - x,
                  y: child.absoluteBoundingBox.y - y,
                }}
              />
            );
          } else if (child.type === "RECTANGLE") {
            return <RectangleRender data={child} />;
          }
        })}
      </div>
    </>
  );
}

function TextRender({ data }: any) {
  const { x, y, characters } = data;
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
      }}
    >
      {characters}
    </div>
  );
}

function RectangleRender({ data }: any) {
  return <>RECTANGLE</>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const filekey = context.params?.filekey as string;
  const id = context.params?.id as string;
  const client = Axios.create({
    baseURL: "http://localhost:3000/api",
  });
  const { data } = await client.get(`/${filekey}/${id}`);
  return {
    props: {
      filekey,
      data: data,
    },
  };
}
