// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import { sync as glob } from "glob";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { filekey } = req.query;

  // check if file exists with designated filekey
  const filePath = path.join(process.cwd(), "samples", filekey as string);

  // read the directory, get the files with .json
  const files = glob(`${filePath}/*.json`);

  // read the files (meta only)
  const data: {
    filekey: string;
    nodes: { [key: string]: any };
  } = {
    filekey: filekey as string,
    nodes: {},
  };

  for (const file in files) {
    const id = path.basename(files[file], ".json");
    const nodefile = path.join(filePath, `${id}.json`);
    const fileContents = await fs.readFileSync(nodefile);
    const f = JSON.parse(fileContents.toString());
    const { name, type, size } = f;
    data.nodes[id] = {
      id,
      name,
      type,
      size,
    };
  }

  res.status(200).json(data);
};
