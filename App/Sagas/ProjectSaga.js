import { call, put } from "redux-saga/effects";
import { ProjectApi, InspectionApi } from "../Services/Api";

import {
  FETCH_PROJECTS_ERROR,
  FETCH_PROJECTS_SUCCESS,
  fetchSuccess
} from "../Redux/ProjectRedux";

/**
 * Fetch projects from api
 */
export function* onFetchProjects() {
  try {
    let projects = yield call(ProjectApi.fetch);
    projects = projects.data.data;

    console.log("projects", projects);

    // testing stuff
    // const inspections = yield fetchInspectionsForProjects(projects)
    // console.log('inspections', inspections)
    // END of testing stuff

    yield put({ type: FETCH_PROJECTS_SUCCESS, payload: projects });
    // yield put(fetchSuccess(projects))
  } catch (error) {
    yield put({ type: FETCH_PROJECTS_ERROR, error });
  }
}

// testing stuff
// async function fetchInspectionsForProjects(projects) {
//   const promisses = projects.map(project => {
//     // testing
//     return InspectionApi.fetchBy({ project_id: 1002409 })
//   })
//   return await Promise.all(promisses)
// }
