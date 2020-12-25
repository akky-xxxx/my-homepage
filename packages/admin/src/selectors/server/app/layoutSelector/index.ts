// import
import { RootState } from "@@/store"
import { LayoutState } from "@@/store/modules/server/app/layout/types"

type SampleSelector = (state: RootState) => LayoutState
export const layoutSelector: SampleSelector = (state) => state.server.app.layout
