/**
 * import node_modules
 */
import React, { FC } from "react"
import { Card, CardMedia, CardContent, Typography, CircularProgress, Grid, makeStyles } from "@material-ui/core"
import { format } from "date-fns"
import { useInView } from "react-intersection-observer"

/**
 * import others
 */
import { GalleryItem } from "../../../../../shared/types/pages/galleryList"
import PREF_MAP from "../../../../../shared/const/prefMap"

/**
 * main
 */
interface GalleryCardProps extends Omit<GalleryItem, "imageId"> {
  handleClick: () => void
}

const useStyles = makeStyles({
  card: {
    cursor: "pointer",
  },
  media: {
    height: 200,
  },
})

const BeforeLoad = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.media} container alignItems="center" justify="center">
      <CircularProgress />
    </Grid>
  )
}

const GalleryCard: FC<GalleryCardProps> = props => {
  const { path, date, prefCode, handleClick } = props
  const classes = useStyles()
  const [ref, inView] = useInView()

  return (
    <Card onClick={handleClick} className={classes.card} ref={ref}>
      {inView ? (
        <CardMedia className={classes.media} image={`/images/gallery${path}`} title={PREF_MAP[prefCode]} />
      ) : (
        <BeforeLoad />
      )}
      <CardContent>
        <Typography component="h3">{PREF_MAP[prefCode]}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {format(new Date(date), "yyyy年M月d日")}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default GalleryCard
