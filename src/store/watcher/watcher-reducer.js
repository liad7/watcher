export const SET_WATCHERS = 'SET_WATCHERS'
const initalState = {
    watchers: [],
    selectedWatcher: null
}


export function watcherReducer(state = initalState, action) {

    switch (action.type) {
        case SET_WATCHERS:
            return { ...state, watchers: action.watchers }

        default:
            return state
    }

}