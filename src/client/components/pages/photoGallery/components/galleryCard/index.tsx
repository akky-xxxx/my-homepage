/**
 * import node_modules
 */
import React, { FC } from "react"
import { Card, CardMedia, CardContent, Typography, makeStyles } from "@material-ui/core"
import { format } from "date-fns"

/**
 * import others
 */
import { GalleryItem } from "../../../../../shared/types/pages/galleryList"
import PREF_MAP from "../../../../../shared/const/prefMap"

/**
 * main
 */
type GalleryCardProps = Omit<GalleryItem, "imageId">

const useStyles = makeStyles({
  media: {
    height: 200,
  },
})

const GalleryCard: FC<GalleryCardProps> = props => {
  const { path, date, prefCode } = props
  const classes = useStyles()

  return (
    <Card>
      <CardMedia className={classes.media} image={`/images/gallery${path}`} title={PREF_MAP[prefCode]} />
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
