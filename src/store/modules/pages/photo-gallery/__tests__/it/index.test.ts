/**
 * import
 */
import reducer, { actions, initialState } from "../.."
import { State } from "../../types"

/**
 * main
 */
const { openModal, closeModal, selectViewPref, resetViewPref, selectViewTag, resetViewTag } = actions
// TODO: any の厳密化
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Test = (state: State, action: any) => State
// TODO: pref の State と ViewPref の違いによるともの思われる肩エラーの解消
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const test: Test = (state, action) => reducer(state, action)

describe("Photo Gallery Reducer", () => {
  it("モーダルの開閉", () => {
    // モーダルオープン
    const openModalState = test(initialState, openModal({ targetId: 1 }))
    expect(openModalState.modal).toMatchObject({ currentImageId: 1, isOpen: true })

    // モーダルクローズ
    const closeModalState = test(openModalState, closeModal())
    expect(closeModalState.modal).toMatchObject({ currentImageId: null, isOpen: false })
  })

  it("都道府県の指定・解除", () => {
    // 都道府県の指定
    const selectPrefState = test(initialState, selectViewPref({ targetPref: "01" }))
    expect(selectPrefState.selectedViewPref).toEqual("01")

    // 都道府県の変更
    const changePrefState = test(selectPrefState, selectViewPref({ targetPref: "02" }))
    expect(changePrefState.selectedViewPref).toEqual("02")

    // 都道府県の解除
    const resetPrefState = test(changePrefState, resetViewPref())
    expect(resetPrefState.selectedViewPref).toEqual("00")
  })

  it("タグの追加・解除", () => {
    const TAG1 = "tag1"
    const TAG2 = "tag2"

    // １つ目のタグを追加
    const selectTag1state = test(initialState, selectViewTag({ targetTag: TAG1 }))
    expect(selectTag1state.selectedViewTags).toEqual([TAG1])

    // 2つ目のタグを追加
    const selectTag2state = test(selectTag1state, selectViewTag({ targetTag: TAG2 }))
    expect(selectTag2state.selectedViewTags).toEqual([TAG1, TAG2])

    // 1つ目のタグを再度指定
    const reselectTag1state = test(selectTag2state, selectViewTag({ targetTag: TAG1 }))
    expect(reselectTag1state.selectedViewTags).toEqual([TAG2])

    // 2つ目のタグを再度指定
    const reselectTag2state = test(reselectTag1state, selectViewTag({ targetTag: TAG2 }))
    expect(reselectTag2state.selectedViewTags).toEqual([])

    // リセット確認用
    const confirmationState = test(reselectTag2state, selectViewTag({ targetTag: TAG1 }))

    // タグの解除
    const resetTagState = test(confirmationState, resetViewTag())
    expect(resetTagState.selectedViewTags).toEqual([])
  })
})
