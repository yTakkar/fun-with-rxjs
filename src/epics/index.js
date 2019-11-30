import { from, of } from "rxjs";
import { map, mergeMap, catchError } from 'rxjs/operators'
import { combineEpics, ofType } from "redux-observable";
import { ADD_CITY } from "../action-types";
import { fetchUserDetails } from "../actions";

const epics = {
  [ADD_CITY]: [fetchUserDetails]
}

const TYPES = Object.keys(epics);
export const tradeEpic = action$ =>
  action$.pipe(
    ofType(...TYPES),
    map(action => epics[action.type]),
    mergeMap(postActions =>
      of(...postActions).pipe(
        map(pAction => pAction()),
        catchError(err => console.log('DEBUG:\n', err))
      )
    )
  );

export default combineEpics(
  tradeEpic
)
