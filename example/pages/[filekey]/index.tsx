import React from "react";
import Head from "next/head";
import type { GetServerSidePropsContext } from "next";
import Axios from "axios";
import Link from "next/link";

export default function FileIndexPage({
  filekey,
  nodes,
}: {
  filekey: string;
  nodes: {
    [id: string]: any;
  };
}) {
  return (
    <>
      <Head>
        <title>File Index</title>
      </Head>
      <main>
        <h1>File Index</h1>
        <ul>
          {Object.keys(nodes).map((id) => {
            const { name, type } = nodes[id];
            return (
              <li key={id}>
                <Link href={`/${filekey}/${id}`}>
                  <p>
                    {name} ({type} / {id})
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const filekey = context.params?.filekey as string;
  const client = Axios.create({
    baseURL: "http://localhost:7777/api",
  });
  const { data } = await client.get(`/${filekey}`);
  return {
    props: {
      filekey,
      nodes: data.nodes,
    },
  };
}
