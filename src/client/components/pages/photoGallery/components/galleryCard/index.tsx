/**
 * import node_modules
 */
import React, { FC } from "react"
import { Card, CardHeader, CardMedia, CardContent, CircularProgress, Grid, Chip, makeStyles } from "@material-ui/core"
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

const useStyles = makeStyles(theme => ({
  card: {
    cursor: "pointer",
  },
  media: {
    height: 200,
  },
  tag: {
    margin: theme.spacing(0.5),
  },
}))

const BeforeLoad = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.media} container alignItems="center" justify="center">
      <CircularProgress />
    </Grid>
  )
}

const GalleryCard: FC<GalleryCardProps> = props => {
  const { path, date, prefCode, tags, handleClick } = props
  const classes = useStyles()
  const [ref, inView] = useInView()

  return (
    <Card onClick={handleClick} className={classes.card} ref={ref}>
      <CardHeader title={PREF_MAP[prefCode]} subheader={format(new Date(date), "yyyy年M月d日")} />
      {inView ? (
        <CardMedia className={classes.media} image={`/images/gallery${path}`} title={PREF_MAP[prefCode]} />
      ) : (
        <BeforeLoad />
      )}
      {Boolean(tags.length) && (
        <CardContent>
          {tags.map(tag => (
            <Chip key={tag} className={classes.tag} size="small" label={tag} />
          ))}
        </CardContent>
      )}
    </Card>
  )
}

export default GalleryCard
