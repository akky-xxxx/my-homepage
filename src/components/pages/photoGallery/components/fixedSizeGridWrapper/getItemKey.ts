import { GridItemKeySelector } from "react-window"
import { v4 as uuid } from "uuid"

type GetItemKey = (colNum: number) => GridItemKeySelector

const getItemKey: GetItemKey = (colNum) => {
  return (props) => {
    const { columnIndex, rowIndex, data } = props
    const index = rowIndex * colNum + columnIndex
    if (!data[index]) return uuid()
    return data[index].imageId
  }
}

export default getItemKey
