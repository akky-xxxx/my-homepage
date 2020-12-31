// import
import { RootState } from "@@/store"
import { LayoutState } from "@@/store/modules/server/app/layout/types"

type LayoutSelector = (state: RootState) => LayoutState
export const layoutSelector: LayoutSelector = (state) => state.server.app.layout
