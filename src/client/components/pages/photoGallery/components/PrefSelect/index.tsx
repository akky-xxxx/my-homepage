/**
 * import node_modules
 */
import React, { Fragment } from "react"
import { NextPage } from "next"
import { InputLabel, Select, MenuItem } from "@material-ui/core"

/**
 * import others
 */
import { HandleSelectViewPref, ViewPref } from "../../../../../store/modules/pages/photo-gallery/types"
import PREF_MAP from "../../../../../shared/const/prefMap"

/**
 * main
 */

export interface PrefSelectProps {
  handleSelectViewPref: HandleSelectViewPref
  viewPref: ViewPref
}

type ViewPrefOptions = {
  [K in ViewPref]: string
}

const viewPrefOptionsBase: ViewPrefOptions = {
  ...PREF_MAP,
  "00": "全て",
} as const

interface ViewPrefOption {
  code: string
  label: string
}

const viewPrefOptions: ViewPrefOption[] = (Object.keys(viewPrefOptionsBase) as ViewPref[])
  .map(key => ({
    code: key,
    label: viewPrefOptionsBase[key],
  }))
  .sort((a, b) => {
    if (a.code > b.code) return 1
    return -1
  })

const PrefSelect: NextPage<PrefSelectProps> = props => {
  const { handleSelectViewPref, viewPref } = props

  return (
    <Fragment>
      <InputLabel id="pref-select">地域</InputLabel>
      <Select
        labelId="pref-select"
        value={viewPref}
        onChange={event => handleSelectViewPref({ targetPref: event.target.value as ViewPref })}
      >
        {viewPrefOptions.map(prefData => {
          const { code, label } = prefData
          return (
            <MenuItem key={code} value={code}>
              {label}
            </MenuItem>
          )
        })}
      </Select>
    </Fragment>
  )
}

export default PrefSelect
