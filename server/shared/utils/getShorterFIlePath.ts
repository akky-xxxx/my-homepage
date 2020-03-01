const START_DIR = "server/"

type GetShorterFilePath = (fullFilePath: string) => string

const getShorterFilePath: GetShorterFilePath = fullFilePath => {
  const startDirPos = fullFilePath.indexOf(START_DIR)
  return fullFilePath.slice(startDirPos)
}

export default getShorterFilePath
