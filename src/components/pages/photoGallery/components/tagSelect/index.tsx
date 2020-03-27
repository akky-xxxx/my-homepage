/**
 * import node_modules
 */
import React, { ChangeEvent, memo } from "react"
import { NextPage } from "next"
import { InputLabel, Select, MenuItem, Checkbox, ListItemText, FormControl, makeStyles } from "@material-ui/core"

/**
 * import others
 */
import { HandleSelectViewTag } from "../../../../../store/modules/pages/photo-gallery/viewTags/types"
import { IsNoReRender } from "../../../../../shared/types/common"

/**
 * main
 */
export interface TagSelectProps {
  handleSelectViewTag: HandleSelectViewTag
  selectedViewTags: string[]
  tags: string[]
}

const useStyles = makeStyles({
  formControl: {
    width: "100%",
  },
})

const TagSelect: NextPage<TagSelectProps> = (props) => {
  const { selectedViewTags, tags, handleSelectViewTag } = props
  const classes = useStyles()

  const handleOnChange = (event: ChangeEvent<{ name?: string; value: unknown }>) => {
    const selectedTags = event.target.value as string[]
    const [targetTag] =
      selectedTags.length > selectedViewTags.length
        ? selectedTags.filter((selectedTag) => !selectedViewTags.includes(selectedTag))
        : selectedViewTags.filter((selectedViewTag) => !selectedTags.includes(selectedViewTag))

    handleSelectViewTag({ targetTag })
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="tag-select">タグ</InputLabel>
        <Select
          multiple
          labelId="tag-select"
          value={selectedViewTags}
          onChange={handleOnChange}
          renderValue={() => selectedViewTags.join(", ")}
        >
          {tags.map((tag) => {
            return (
              <MenuItem key={tag} value={tag}>
                <Checkbox checked={selectedViewTags.includes(tag)} />
                <ListItemText primary={tag} />
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}

const isNoReRender: IsNoReRender<TagSelectProps> = (beforeProps, afterProps) =>
  beforeProps.selectedViewTags.join("") === afterProps.selectedViewTags.join("")

export default memo(TagSelect, isNoReRender)
