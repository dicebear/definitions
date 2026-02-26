# DiceBear Definitions

> [!NOTE]  
> This project is still in beta stage and will only be used in future versions
> of DiceBear.

This repository contains all official avatar style definitions for
[DiceBear](https://www.dicebear.com). An avatar style definition is a JSON file
that describes how to create an avatar. It contains all necessary information
like available elements and colors. The JSON files are ideal for creating
avatars in different programming languages with the corresponding DiceBear
wrapper. The JSON schema for the avatar style definitions can be found here:
[https://static.dicebear.com/schema/definition.json](https://static.dicebear.com/schema/definition.json)

## Generate definitions

Most of the JSON files were created using the
[DiceBear Exporter](https://www.dicebear.com/guides/create-an-avatar-style-with-figma/)
for Figma. The used Figma files are linked in the `figma` folder. Files created
with this plugin are marked accordingly and should not be adjusted manually, but
exported again with the Figma plugin.

## Usage

**JavaScript**

```js
import adventurer from '@dicebear/definitions/adventurer.json' assert { type: 'json' };
import lorelei from '@dicebear/definitions/lorelei.json' assert { type: 'json' };
```

**PHP**

```php
$adventurer = json_decode(file_get_contents(__DIR__ . '/vendor/dicebear/definitions/src/adventurer.json'), true);
$lorelei    = json_decode(file_get_contents(__DIR__ . '/vendor/dicebear/definitions/src/lorelei.json'), true);
```

## Development

```sh
# Install dependencies
npm install

# Run tests
npm test
```

## Publishing

**npm**

Releases are published to npm automatically via GitHub Actions when a version tag is pushed.

```sh
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0

git push origin main --follow-tags
```

`npm version` updates `package.json`, creates a commit, and creates the Git tag in one step. The [publish workflow](.github/workflows/publish.yml) will then install dependencies, run the tests, and publish the package to npm with provenance.

**Packagist**

Once the repository is linked on [packagist.org](https://packagist.org), new releases are picked up automatically from the same Git tags — no separate step needed.

## License

The avatar styles are licensed under different licenses. More information can be
found in the file [LICENSE.md](./LICENSE.md) or in the definition files
themselves.

## Sponsors

Advertisement: Many thanks to our sponsors who provide us with free or discounted products.

<a href="https://bunny.net/" target="_blank" rel="noopener noreferrer">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://www.dicebear.com/sponsors/bunny-light.svg">
        <source media="(prefers-color-scheme: light)" srcset="https://www.dicebear.com/sponsors/bunny-dark.svg">
        <img alt="bunny.net" src="https://www.dicebear.com/sponsors/bunny-dark.svg" height="64">
    </picture>
</a>
