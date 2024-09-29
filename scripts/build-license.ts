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

import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { writeFile } from "node:fs/promises";
import { markdownTable } from "markdown-table";
import { capitalCase, kebabCase } from "change-case";
import * as collection from "./collection";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

let licsenseMd = `# License

The avatar styles are licensed under different licenses, which the artists can
choose themselves.`;

for (const styleName in collection) {
  const style = collection[styleName as keyof typeof collection];

  licsenseMd += `\n\n## ${capitalCase(styleName)}\n\n`;

  const jsonFile = `src/${kebabCase(styleName)}.json`;

  const tableRows: [string, string][] = [
    ["File", `[${jsonFile}](./${jsonFile})`],
  ];

  if ("creator" in style.metadata) {
    tableRows.push([
      "Artist",
      `[${style.metadata.creator.name}](${style.metadata.creator.url})`,
    ]);
  }

  tableRows.push([
    "License",
    `[${style.metadata.license.name}](${style.metadata.license.url})`,
  ]);

  if ("source" in style.metadata) {
    tableRows.push([
      "Source",
      `[${style.metadata.source.name}](${style.metadata.source.url})`,
    ]);
  }

  licsenseMd += markdownTable(tableRows, { align: ["r", "l"] });
}

await writeFile(join(__dirname, "..", "LICENSE.md"), licsenseMd);
