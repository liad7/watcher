export const SET_WATCHERS = 'SET_WATCHERS'
export const ADD_WATCHER = 'ADD_WATCHER'
export const UPDATE_WATCHER = 'UPDATE_WATCHER'
export const REMOVE_WATCHER = 'REMOVE_WATCHER'
export const SET_SELECTED_WATCHER = 'SET_SELECTED_WATCHER'
const initalState = {
    watchers: [],
    selectedWatcher: null
}


export function watcherReducer(state = initalState, action) {
    let watchers
    switch (action.type) {
        case SET_SELECTED_WATCHER:
            return { ...state, selectedWatcher: action.selectedWatcher }
        case SET_WATCHERS:
            return { ...state, watchers: action.watchers }
        case REMOVE_WATCHER: {
            watchers = state.watchers.filter(watcher => watcher._id !== action.watcherId)
            return { ...state, watchers }
        }
        case ADD_WATCHER: {
            watchers = [action.watcher, ...state.watchers]
            return { ...state, watchers }
        }
        case UPDATE_WATCHER: {
            const { watcher } = action
            watchers = state.watchers.map(currWatcher => currWatcher._id === watcher._id ? watcher : currWatcher)
            return { ...state, watchers }
        }

        default:
            return state
    }

}