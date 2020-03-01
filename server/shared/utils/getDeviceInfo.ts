/**
 * import node_m
 */
import { UAParser } from "ua-parser-js"
import { pick } from "remeda"

/**
 * main
 */
type PickChildProp = "name" | "version"
type PickProp = "browser" | "engine" | "os"
type ChildProps = Partial<Record<PickChildProp, string>>
type DeviceInfo = Record<PickProp, ChildProps> | Record<"userAgent", string>
type GetDeviceInfo = (ua?: string) => DeviceInfo

const pickProps: PickChildProp[] = ["name", "version"]

const getDeviceInfo: GetDeviceInfo = ua => {
  const deviceInfoOrigin = new UAParser(ua)
  const { browser, engine, os } = deviceInfoOrigin.getResult()

  return {
    browser: pick(browser, pickProps),
    engine: pick(engine, pickProps),
    os: pick(os, pickProps),
    userAgent: ua,
  }
}

export default getDeviceInfo
