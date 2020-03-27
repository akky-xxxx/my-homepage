/**
 * import node_modules
 */
import React, { FC, memo, useState, Fragment } from "react"
import gsap from "gsap"

/**
 * import other
 */
import { IsNoReRender } from "../../../shared/types/common"

/**
 * main
 */
interface NumberTransitionProps {
  toNumber: number
}

const getNumberTransition = () => {
  let beforeNumber = 0

  const NumberTransition: FC<NumberTransitionProps> = (props) => {
    const { toNumber } = props
    const [currentNumber, setNumber] = useState(0)
    const target = { count: beforeNumber }

    React.useEffect(() => {
      gsap.to(target, {
        delay: 0.1,
        duration: 0.5,
        count: toNumber,
        onUpdate: () => {
          setNumber(Math.floor(target.count))
        },
        onComplete: () => {
          beforeNumber = toNumber
        },
      })
    }, [toNumber, beforeNumber])

    return <Fragment>{currentNumber}</Fragment>
  }

  const isNoReRender: IsNoReRender<NumberTransitionProps> = (beforeProps, afterProps) =>
    beforeProps.toNumber === afterProps.toNumber

  return memo(NumberTransition, isNoReRender)
}

export default getNumberTransition
