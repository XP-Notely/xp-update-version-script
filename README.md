# Package.json Version Updater

## Overview

This script provides a simple and convenient way to programmatically update version numbers in your `package.json` file. Whether you are releasing a new version manually or as part of an automated CI/CD pipeline, this script can help you streamline the versioning process.

## Usage

1. Ensure Node.js is installed on your machine.

2. Install the script globally using npm:

   ```bash
   npm install xp-update-version-script
   ```

3. Navigate to your project directory containing the `package.json` file.

4. Run the following command to update the version:

   ```bash
   xp-update-version-script <version-type>
   ```

   Replace `<version-type>` with one of the following options:

   - `patch`: Increment for bug fixes.
   - `minor`: Increment for backward-compatible feature additions.
   - `major`: Increment for backward-incompatible changes.

5. The script will automatically update the version in the `package.json` file, and you can commit the changes to your version control system.

## Example

```bash
xp-update-version-script patch
```
