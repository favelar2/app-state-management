import { layoutTypes } from './layout.types'

//Action creator 
function toggleSidebar() {
  return {
    type: layoutTypes.TOGGLE_SIDEBAR
  }
}

function setSidebar(state) {
  return {
    type: layoutTypes.SET_SIDEBAR,
    payload: state,
  }
}

export const layoutActions = {
  toggleSidebar,
  setSidebar
}