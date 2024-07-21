/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        // preset: "conventionalcommits",
        parserOpts: {
          breakingHeaderPattern: /^(\w*)(?:\((.*)\))?!: (.*)$/,
        },
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        // preset: "conventionalcommits",
        parserOpts: {
          breakingHeaderPattern: /^(\w*)(?:\((.*)\))?!: (.*)$/,
        },
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
