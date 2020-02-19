/**
 * import node_modules
 */
import React, { FC } from "react"
import { Card, CardHeader, CardMedia, CircularProgress, Grid, Chip, makeStyles } from "@material-ui/core"
import { format } from "date-fns"
import { useInView } from "react-intersection-observer"
import styled from "styled-components"

/**
 * import others
 */
import { GalleryItem } from "../../../../../shared/types/pages/galleryList"
import PREF_MAP from "../../../../../shared/const/prefMap"
import { HandleSelectViewTag } from "../../../../../store/modules/pages/photo-gallery/viewTags/types"

/**
 * main
 */
interface GalleryCardProps extends Omit<GalleryItem, "imageId"> {
  selectedViewTags: string[]
  handleOpenModal: () => void
  handleSelectViewTag: HandleSelectViewTag
}

const useStyles = makeStyles(theme => ({
  card: {
    cursor: "pointer",
  },
  media: {
    height: 200,
  },
  tag: {
    margin: theme.spacing(1),
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
  const { path, date, prefCode, tags, selectedViewTags, handleOpenModal, handleSelectViewTag } = props
  const classes = useStyles()
  const [ref, inView] = useInView()

  return (
    <Card className={classes.card} ref={ref}>
      <CardHeader
        onClick={handleOpenModal}
        title={PREF_MAP[prefCode]}
        subheader={format(new Date(date), "yyyy年M月d日")}
      />
      {inView ? (
        <CardMedia
          onClick={handleOpenModal}
          className={classes.media}
          image={`/images/gallery${path}`}
          title={PREF_MAP[prefCode]}
        />
      ) : (
        <BeforeLoad />
      )}
      {Boolean(tags.length) && (
        <CardContent>
          <TagWrapper>
            {tags.map(tag => (
              <Chip
                key={tag}
                className={classes.tag}
                color={selectedViewTags.includes(tag) ? "primary" : "default"}
                size="small"
                label={tag}
                onClick={() => handleSelectViewTag({ targetTag: tag })}
              />
            ))}
          </TagWrapper>
        </CardContent>
      )}
    </Card>
  )
}

const CardContent = styled.div`
  padding: 8px;
`

const TagWrapper = styled.div`
  height: 50px;
  overflow: scroll;
`

export default GalleryCard
