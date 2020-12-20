// import
import { ModalHeaderProps } from "../components/atoms/ModalHeader"
import { ModalFooterProps } from "../components/atoms/ModalFooter"

// main
// TODO: template literal types `${number}${"px" | "%"}` にしたい
export type UnitString = string
export type ModalWrapperProps = {
  width?: number | UnitString
  height?: number | UnitString
}
export type ModalProps = ModalWrapperProps & ModalHeaderProps & ModalFooterProps
