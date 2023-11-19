# xp-update-version-script

[![npm version](https://badge.fury.io/js/xp-update-version-script.svg)](https://www.npmjs.com/package/xp-update-version-script)

A script to programmatically update version numbers in `package.json`.

## Installation

Install the package globally using Yarn:

```bash
yarn global add xp-update-version-script
```

## Usage

After installing the package globally, you can run the update-version command in any project. The script increments the patch version in the package.json file.

## Adding to package.json

To use the update-version script as a npm script in your project, add the following to your package.json:

```Json

{
  "scripts": {
    "update-version": "update-version"
  },
  // ... other fields ...
}

```

Now, you can run the script using:

```bash

yarn run update-version

```
