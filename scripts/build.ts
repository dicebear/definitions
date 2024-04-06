import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { join, basename } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import { markdownTable } from "markdown-table";
import { capitalCase } from "change-case";

type Metadata = {
  creator: { name: string; url: string };
  license: { name: string; url: string };
  source: { name: string; url: string };
};

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const files = (await glob(join(__dirname, "..", "src", "*.json"))).sort(
  (a, b) => basename(a, ".json").localeCompare(basename(b, ".json"))
);

let licsenseMd = `# License

The designs are licensed under different licenses, which the designers can
choose themselves.`;

for (const file of files) {
  const content = JSON.parse(await readFile(file, "utf-8"));
  const metadata = content.metadata as Metadata;

  licsenseMd += `\n\n## ${capitalCase(basename(file, ".json"))}\n\n`;

  licsenseMd += markdownTable([
    ["File", `[src/${basename(file)}](./src/${basename(file)})`],
    ["Designer", `[${metadata.creator.name}](${metadata.creator.url})`],
    ["License", `[${metadata.license.name}](${metadata.license.url})`],
    ["Source", `[${metadata.source.name}](${metadata.source.url})`],
  ], {align: ['r', 'l']});
}

await writeFile(join(__dirname, "..", "LICENSE.md"), licsenseMd);
