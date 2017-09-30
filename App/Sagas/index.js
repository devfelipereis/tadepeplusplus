import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { FETCH_PROJECTS } from '../Redux/ProjectRedux'

/* ------------- Sagas ------------- */
import { onFetchProjects } from './ProjectSaga'

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield all([
    takeLatest(FETCH_PROJECTS, onFetchProjects)
  ])
}
