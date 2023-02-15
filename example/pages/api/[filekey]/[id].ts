// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { filekey, id } = req.query;

  // check if file exists with designated filekey
  const filePath = path.join(process.cwd(), "samples", filekey as string);
  const nodefile = path.join(filePath, `${id}.json`);
  const fileContents = await fs.readFileSync(nodefile);

  const data = JSON.parse(fileContents.toString());

  res.status(200).json(data);
};
