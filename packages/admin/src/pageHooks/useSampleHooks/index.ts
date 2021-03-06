// import
import {
  SampleProps,
  SampleHandlers,
} from "@@/components/templates/Sample/types"
import { useSelector, useDispatch, actions } from "@@/store"
import { sampleSelector } from "@@/selectors/sampleSelector"

// main
const { sample } = actions

type UseSampleHooks = () => SampleProps
export const useSampleHooks: UseSampleHooks = () => {
  const state = useSelector(sampleSelector)
  const dispatch = useDispatch()
  const handlers: SampleHandlers = {
    handleIncrement: () => {
      dispatch(sample.increment())
    },
    handleDecrement: () => {
      dispatch(sample.decrement())
    },
    handleChangeText: (payload) => {
      dispatch(sample.changeText(payload))
    },
  }

  return { ...state, ...handlers }
}
