// import
import { RootState } from "@@/store"
import { SampleStates } from "@@/components/templates/Sample/types"

type SampleSelector = (state: RootState) => SampleStates
export const sampleSelector: SampleSelector = (state) => state.sample
