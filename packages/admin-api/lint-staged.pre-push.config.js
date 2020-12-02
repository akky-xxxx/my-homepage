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
  "src/**/*.ts": (filenames) => {
    const joinedHalfSpace = getJoinedPaths(filenames)
    return [
      `cspell ${getReplacedFilePaths(filenames)}`,
      `eslint --fix ${joinedHalfSpace}`,
      "tsc",
      `stylelint '${joinedHalfSpace}'`,
      "test IS_TEST=true jest",
      "git add .",
    ]
  },
  "!(src/)**/*.ts": (filenames) => {
    const joinedHalfSpace = getJoinedPaths(filenames)
    return [
      `cspell ${getReplacedFilePaths(filenames)}`,
      `eslint --fix ${joinedHalfSpace}`,
      "git add .",
    ]
  },
  "*.js": (filenames) => {
    const joinedHalfSpace = getJoinedPaths(filenames)
    return [
      `cspell ${getReplacedFilePaths(filenames)}`,
      `eslint ${joinedHalfSpace} --fix`,
      "git add .",
    ]
  },
  "package.json": () => ["fixpack", "git add ."],
}
