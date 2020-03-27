/**
 * import node_modules
 */
import React, { FC } from "react"
import { useInView } from "react-intersection-observer"
import { Fade } from "@material-ui/core"

/**
 * main
 */
interface SliderImageProps {
  path: string
}

const SliderImage: FC<SliderImageProps> = (props) => {
  const { path } = props
  const [ref, inView] = useInView()

  return (
    <span ref={ref}>
      {inView ? (
        <Fade in={inView} timeout={300}>
          <img src={`/images/gallery${path}`} alt="" />
        </Fade>
      ) : null}
    </span>
  )
}

export default SliderImage
