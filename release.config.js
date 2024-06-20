/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github",
    [
      "semantic-release-github-pullrequest",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
        baseRef: "main",
      },
    ],
    // [
    //   "@semantic-release/git",
    //   {
    //     assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
    //   },
    // ],
  ],
};
