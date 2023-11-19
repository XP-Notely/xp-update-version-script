/**
 * @file Deprecated: This file is deprecated and will be removed in future releases.
 * Please use the alternative module/file: [AlternativeModuleName]
 *
 * [Additional information about why it's deprecated and any relevant details]
 */

// Rest of the existing code

const fs = require("fs");
const path = require("path");

// Path to the package.json file of the project that installed this package
const project_package_json_path = path.join(
  process.env.INIT_CWD,
  "package.json"
);

// Parse the JSON and add the update-version script
const project_package_json = JSON.parse(
  fs.readFileSync(project_package_json_path, "utf8")
);

project_package_json.scripts = project_package_json.scripts || {};
project_package_json.scripts["update-version"] =
  "node node_modules/xp-update-version-script/update-version";

// Write the update package.json back toi the project
fs.writeFileSync(
  project_package_json_path,
  JSON.stringify(project_package_json, null, 2)
);
