import * as colors from '../common/colors'

export const defaultState = {
  locale: "fr",
  color: colors["blue"]
}

const app = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default app