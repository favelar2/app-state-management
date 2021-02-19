import { layoutTypes } from './layout.types'


function setSidebar(state) {
  return {
    type: layoutTypes.SET_SIDEBAR,
    sideBar: state,
  }
}

export const layoutActions = {
  setSidebar,
}