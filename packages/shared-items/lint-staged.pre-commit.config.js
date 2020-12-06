/**
 * @description ファイルパス配列を半スペで結合した文字列を返す
 * @param filenames -  {string[]}
 * @returns {string}
 */
const getJoinedPaths = (filenames) => filenames.join(" ")

/**
 * @description ルート相対パスに書き換えたファイルパス配列を返す
 * @param filenames -  {string[]}
 * @returns {string[]}
 */
const getReplacedFilePaths = (filenames) =>
  filenames.map((filename) => filename.replace(`${__dirname}/`, ""))

module.exports = {
  "src/**/*.{ts,tsx}": (filenames) => {
    const joinedHalfSpace = getJoinedPaths(filenames)
    return [
      `cspell ${getJoinedPaths(filenames)}`,
      `stylelint ${joinedHalfSpace}`,
    ]
  },
  "!(src/)**/*.{ts,tsx}": (filenames) => [
    `cspell ${getJoinedPaths(filenames)}`,
  ],
  "*.js": (filenames) => {
    const joinedHalfSpace = getJoinedPaths(filenames)
    return [
      `cspell ${getJoinedPaths(filenames)}`,
      `eslint  ${joinedHalfSpace} --fix`,
    ]
  },
  "package.json": () => ["fixpack"],
}
