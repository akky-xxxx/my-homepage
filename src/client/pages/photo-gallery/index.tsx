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
    photoGallery: { openModal, closeModal, changeNextImage, changePrevImage, selectViewPref },
  },
} = actions

export default connect<{}, HandleActions, {}, State>(
  state => state.pages.photoGallery,
  dispatch => ({
    handleOpenModal: payload => dispatch(openModal(payload)),
    handleCloseModal: () => dispatch(closeModal()),
    handleChangeNextImage: () => dispatch(changeNextImage()),
    handleChangePrevImage: () => dispatch(changePrevImage()),
    handleSelectViewPref: payload => dispatch(selectViewPref(payload)),
  }),
)(PhotoGallery)
