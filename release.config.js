/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: [
    {
      name: "main",
      prerelease: true
    },
  ],
  preset: "angular",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/github", // Creating the release and tag on GitHub
    [
      // This will increase the version in the main project without publishing it
      "@semantic-release/npm",
      {
        "npmPublish": false
      }
    ],
    [
      // This will increase the version in the dist folder of the library will publish to npm
      "@semantic-release/npm",
      {
        "pkgRoot": "dist/design-angular-kit"
      }
    ],
    [
      // Commit with the new updated files
      "@semantic-release/git",
      {
        "assets": [
          "package.json",
          "package-lock.json",
          "projects/design-angular-kit/package-lock.json",
          "CHANGELOG.md"
        ],
        "message": "chore(release): ${nextRelease.version} :tada: [skip ci]\n\n${nextRelease.notes}"
      }
    ]
  ]
}
