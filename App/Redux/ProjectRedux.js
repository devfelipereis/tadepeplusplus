import Immutable from "seamless-immutable";
import { formatProject } from "../Transforms/Api/ApiTransform";

/* ------------- Types ------------- */

export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_ERROR = "FETCH_PROJECTS_ERROR";
export const PROJECT_SELECTED = "PROJECT_SELECTED";

/* ------------- Actions ------------- */

export const fetch = () => ({ type: FETCH_PROJECTS });

//export const fetchSuccess = (projects) => ({ type: FETCH_PROJECTS_SUCCESS, payload: projects.map(project => { formatProject(project) }) })

export const fetchSuccess = projects => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload: projects
});

export const projectSelected = project => ({
  type: PROJECT_SELECTED,
  payload: project
});

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  projects: null,
  projectSelected: null,
  fetching: false,
  error: false
});

/* ------------- Reducer ------------- */

export const reducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, projects: null, error: false, fetching: true };
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        error: false,
        fetching: false
      };
    case FETCH_PROJECTS_ERROR:
      return { ...state, projects: null, error: true, fetching: false };
    case PROJECT_SELECTED:
      return {
        ...state,
        projectSelected: action.payload,
        error: false,
        fetching: false
      };
    default:
      return state;
  }
};
