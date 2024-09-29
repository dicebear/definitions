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
import promiseAll from "p-props";
import sortKeys from "sort-keys";

// Setup
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// Build
const collection = await getCollection();

await Promise.all([buildLicenseFile(collection)]);

// Helpers
async function getCollection() {
  const collection = await promiseAll({
    adventurerNeutral: import("../src/adventurer-neutral.json"),
    adventurer: import("../src/adventurer.json"),
    avataaarsNeutral: import("../src/avataaars-neutral.json"),
    avataaars: import("../src/avataaars.json"),
    bigEarsNeutral: import("../src/big-ears-neutral.json"),
    bigEars: import("../src/big-ears.json"),
    bigSmile: import("../src/big-smile.json"),
    botttsNeutral: import("../src/bottts-neutral.json"),
    bottts: import("../src/bottts.json"),
    croodlesNeutral: import("../src/croodles-neutral.json"),
    croodles: import("../src/croodles.json"),
    dylan: import("../src/dylan.json"),
    funEmoji: import("../src/fun-emoji.json"),
    glass: import("../src/glass.json"),
    icons: import("../src/icons.json"),
    identicon: import("../src/identicon.json"),
    initials: import("../src/initials.json"),
    loreleiNeutral: import("../src/lorelei-neutral.json"),
    lorelei: import("../src/lorelei.json"),
    micah: import("../src/micah.json"),
    miniavs: import("../src/miniavs.json"),
    notionistsNeutral: import("../src/notionists-neutral.json"),
    notionists: import("../src/notionists.json"),
    openPeeps: import("../src/open-peeps.json"),
    personas: import("../src/personas.json"),
    pixelArtNeutral: import("../src/pixel-art-neutral.json"),
    pixelArt: import("../src/pixel-art.json"),
    rings: import("../src/rings.json"),
    shapes: import("../src/shapes.json"),
    thumbs: import("../src/thumbs.json"),
  });

  return sortKeys(collection);
}

async function buildLicenseFile(
  collection: UnwrapPromise<ReturnType<typeof getCollection>>
) {
  let licsenseMd = `# License

The avatar styles are licensed under different licenses. See the following table:`;

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
}
