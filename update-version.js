const fs = require("fs");

// Read package.json
const packageJsonPath = "./package.json";
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// Increment the patch version
const versionParts = packageJson.version.split(".");
versionParts[2] = (parseInt(versionParts[2], 10) + 1).toString();
const newVersion = versionParts.join(".");

// Update package.json with the new version
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log(`Version updated to ${newVersion}`);
