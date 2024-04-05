import fs from "fs/promises";
import { request, type FullConfig } from "@playwright/test";
import { setTimeout } from "timers/promises";
import path from "path";

async function globalTeardown(config: FullConfig) {
  const ctx = await request.newContext();

  const testResults = config.reporter.find((r) => r[0] === "blob")[1];

  await setTimeout(10000);

  const blob = await fs.readFile(
    path.join(process.cwd(), testResults.outputDir, testResults.fileName)
  );

  const resp = await ctx.put("http://localhost:3000/api/result/upload", {
    form: {
      file: blob.toString("base64"),
      name: "10-mar-pw-workshop",
    },
  });

  const { data } = await resp.json()

  console.log(data);
}

export default globalTeardown;
