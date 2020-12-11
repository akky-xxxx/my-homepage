// import
import { SampleProps } from "@@/components/templates/Sample/types"
import { useSelector, useDispatch, actions } from "@@/store"

// main
const { sample } = actions

type UseSampleHooks = () => SampleProps
export const useSampleHooks: UseSampleHooks = () => {
  const state = useSelector((_state) => _state.sample)
  const dispatch = useDispatch()
  const handlers = {
    handleIncrement: () => {
      dispatch(sample.increment())
    },
    handleDecrement: () => {
      dispatch(sample.decrement())
    },
  }

  return { ...state, ...handlers }
}
