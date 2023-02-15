import React, { useMemo } from "react";
import Head from "next/head";
import type { GetServerSidePropsContext } from "next";
import Axios from "axios";
import { mapper } from "@design-sdk/figma-remote";
import FigmaView from "figma-view/lib";

export default function NodePage({
  data,
  filekey,
}: {
  filekey: string;
  data: any;
}) {
  const node = useMemo(() => {
    return mapper.mapFigmaRemoteToFigma(data);
  }, []);

  return (
    <>
      <Head>
        <title>{`${data.name} (${data.type})`}</title>
      </Head>
      <main
        style={{
          background: "rgba(0,0,0,0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <>
          <FigmaView
            data={{ ...node, x: 0, y: 0 }}
            style={{
              border: "1px solid red",
            }}
          />
        </>
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const filekey = context.params?.filekey as string;
  const id = context.params?.id as string;
  const client = Axios.create({
    baseURL: "http://localhost:7777/api",
  });
  const { data } = await client.get(`/${filekey}/${id}`);

  return {
    props: {
      filekey,
      data: data,
    },
  };
}
