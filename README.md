# DiceBear Definitions

> [!NOTE]  
> This project is still in beta stage and will only be used in future versions
> of DiceBear.

This repository contains all official avatar style definitions for DiceBear. An
avatar style definition is a JSON file that describes how to create an avatar.
It contains all necessary information like available elements and colors. The
JSON files are ideal for creating avatars in different programming languages
with the corresponding DiceBear wrapper. The JSON schema for the avatar style
definitions can be found here:
[https://static.dicebear.com/schema/definition.json](https://static.dicebear.com/schema/definition.json)

## Generate definitions

Most of the JSON files were created using the
[DiceBear Exporter](https://www.dicebear.com/guides/create-an-avatar-style-with-figma/)
for Figma. The used Figma files are linked in the `figma` folder. Files created
with this plugin are marked accordingly and should not be adjusted manually, but
exported again with the Figma plugin.

## Create new build

Create a new build using the `scripts/build.ts` file.

```
npm install
npm run build
```

## License

The avatar styles are licensed under different licenses. More information can be
found in the file [LICENSE.md](./LICENSE.md) or in the definition files
themselves.

## Sponsors

<a href="https://bunny.net/" target="_blank" rel="noopener noreferrer">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://www.dicebear.com/sponsors/bunny-light.svg">
        <source media="(prefers-color-scheme: light)" srcset="https://www.dicebear.com/sponsors/bunny-dark.svg">
        <img alt="bunny.net" src="https://www.dicebear.com/sponsors/bunny-dark.svg" height="64">
    </picture>
</a>
