/*!
 * Copyright 2024 Florian Körner
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
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

The designs are licensed under different licenses, which the designers can
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
        ? ["Designer", `[${metadata.creator.name}](${metadata.creator.url})`]
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
