import Immutable from 'seamless-immutable'

/* ------------- Types ------------- */

export const FETCH_INSPECTIONS = 'FETCH_INSPECTIONS'
export const FETCH_INSPECTIONS_SUCCESS = 'FETCH_INSPECTIONS_SUCCESS'
export const FETCH_INSPECTIONS_ERROR = 'FETCH_INSPECTIONS_ERROR'

/* ------------- Actions ------------- */

export const fetch = () => ({ type: FETCH_INSPECTIONS })

export const fetchSuccess = (inspections) => ({ type: FETCH_INSPECTIONS_SUCCESS, payload: inspections })

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  inspections: null,
  fetching: false,
  error: false,
})

/* ------------- Reducer ------------- */

export const reducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INSPECTIONS:
      return { ...state, inspections: null, error: false, fetching: true };
    case FETCH_INSPECTIONS_SUCCESS:
      return { ...state, inspections: action.payload, error: false, fetching: false };
    case FETCH_INSPECTIONS_ERROR:
      return { ...state, inspections: null, error: true, fetching: false };
    default: return state
  }
}