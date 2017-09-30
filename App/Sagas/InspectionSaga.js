import { call, put } from 'redux-saga/effects'
import { InspectionApi } from '../Services/Api'

import { FETCH_INSPECTIONS_ERROR } from '../Redux/InspectionRedux'

export function* onFetchInspectionsByProject(projectId) {
    try {
        let inspections = yield call(InspectionApi.fetchBy({ project_id: projectId }))
        inspections = inspections.data.data

        yield put(fetchSuccess(inspections))
    } catch (error) {
        console.log('error', error)
        yield put({ type: FETCH_INSPECTIONS_ERROR, error })
    }
}