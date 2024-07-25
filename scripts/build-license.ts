/*!
 * MIT License
 *
 * Copyright (c) 2024 Florian Körner
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { glob } from "glob";
import { fileURLToPath } from "node:url";
import { join, basename } from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import { markdownTable } from "markdown-table";
import { capitalCase, pascalCase } from "change-case";

type Metadata = {
  creator?: { name?: string; url?: string };
  license?: { name?: string; url?: string };
  source?: { name?: string; url?: string };
};

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const files = (await glob(join(__dirname, "..", "src", "*.json"))).sort(
  (a, b) => basename(a, ".json").localeCompare(basename(b, ".json"))
);

let licsenseMd = `# License

The avatar styles are licensed under different licenses, which the artists can
choose themselves.`;

for (const file of files) {
  const content = JSON.parse(await readFile(file, "utf-8"));
  const metadata = content.metadata as Metadata;

  licsenseMd += `\n\n## ${capitalCase(basename(file, ".json"))}\n\n`;

  const jsonFile = `src/${basename(file)}`;

  licsenseMd += markdownTable(
    [
      ["File", `[${jsonFile}](./${jsonFile})`],
      metadata.creator?.name
        ? ["Artist", `[${metadata.creator.name}](${metadata.creator.url})`]
        : [],
      metadata.license?.name
        ? ["License", `[${metadata.license.name}](${metadata.license.url})`]
        : [],
      metadata.source?.name
        ? ["Source", `[${metadata.source.name}](${metadata.source.url})`]
        : [],
    ],
    { align: ["r", "l"] }
  );
}

await writeFile(join(__dirname, "..", "LICENSE.md"), licsenseMd);
