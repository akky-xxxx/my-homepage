// import
import { createLoggerBase } from "./index"

// main
describe("createLoggerBase", () => {
  describe("logger 使用準備", () => {
    it("引数を渡して実行し、関数が返ってくる", () => {
      const createLogger = createLoggerBase(false)
      expect(typeof createLogger).toEqual("function")
    })

    it("返ってくる関数の引数はファイルパスを指定でき、 logger object を返す", () => {
      const logger = createLoggerBase(true)(__filename)
      expect(typeof logger).toEqual("object")
    })
  })

  describe("logger method", () => {
    it("logger は info method を持つ", () => {
      const logger = createLoggerBase(true)(__filename)
      expect(typeof logger.info).toEqual("function")
    })

    it("logger は debug method を持つ", () => {
      const logger = createLoggerBase(true)(__filename)
      expect(typeof logger.debug).toEqual("function")
    })

    it("logger は warn method を持つ", () => {
      const logger = createLoggerBase(true)(__filename)
      expect(typeof logger.warn).toEqual("function")
    })

    it("logger は error method を持つ", () => {
      const logger = createLoggerBase(true)(__filename)
      expect(typeof logger.error).toEqual("function")
    })
  })
})
