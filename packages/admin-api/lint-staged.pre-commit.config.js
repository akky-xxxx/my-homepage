/**
 * @description ファイルパス配列を半スペで結合した文字列を返す
 * @param filenames -  {string[]}
 * @returns {string}
 */
const getJoinedPaths = (filenames) => filenames.join(" ")

module.exports = {
  "src/**/*.ts": (filenames) => [`cspell ${getJoinedPaths(filenames)}`],
  "!(src/)**/*.ts": (filenames) => [`cspell ${getJoinedPaths(filenames)}`],
  "*.js": (filenames) => {
    const joinedHalfSpace = getJoinedPaths(filenames)
    return [
      `cspell ${getJoinedPaths(filenames)}`,
      `eslint  ${joinedHalfSpace} --fix`,
    ]
  },
  "package.json": () => ["fixpack", "git add ."],
}
