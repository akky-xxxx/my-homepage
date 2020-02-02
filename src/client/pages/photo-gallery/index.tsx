/**
 * import node_modules
 */
import { connect } from "react-redux"

/**
 * import component
 */
import PhotoGallery from "../../components/pages/photoGallery"

/**
 * import others
 */
import { State, actions } from "../../store/modules"
import { HandleActions } from "../../store/modules/pages/photo-gallery/types"

/**
 * import main
 */
const {
  pages: {
    photoGallery: { openModal, closeModal, selectViewPref, resetViewPref, selectViewTag, resetViewTag },
  },
} = actions

export default connect<{}, HandleActions, {}, State>(
  state => state.pages.photoGallery,
  dispatch => ({
    handleOpenModal: payload => dispatch(openModal(payload)),
    handleCloseModal: () => dispatch(closeModal()),
    handleSelectViewPref: payload => dispatch(selectViewPref(payload)),
    handleResetViewPref: () => dispatch(resetViewPref()),
    handleSelectViewTag: payload => dispatch(selectViewTag(payload)),
    handleResetViewTag: () => dispatch(resetViewTag()),
  }),
)(PhotoGallery)
