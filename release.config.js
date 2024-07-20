/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  plugins: [
    // "@semantic-release/commit-analyzer",
    // "@semantic-release/release-notes-generator",
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
      },
    ],
    "@semantic-release/changelog",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
      },
    ],
    "@semantic-release/github",
  ],
};
