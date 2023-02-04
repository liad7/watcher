import { watcherService } from "../../services/watcher-service"
import { ADD_WATCHER, REMOVE_WATCHER, SET_SELECTED_MOVIE, SET_WATCHERS, UPDATE_WATCHER } from "./watcher-reducer"

export function loadWatchers() {
    return async (dispatch) => {
        try {
            const watchers = await watcherService.query()
            dispatch({ type: SET_WATCHERS, watchers })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function saveWatcher(watcher) {
    const type = watcher._id ? UPDATE_WATCHER : ADD_WATCHER
    return async (dispatch) => {
        try {
            const savedWatcher = await watcherService.save(watcher)
            dispatch({ type, watcher: savedWatcher })
        } catch (err) {
            console.log(`Cannot save watcher`, err)
        }
    }
}

export function removeWatcher(watcherId) {
    return async (dispatch) => {
        try {
            await watcherService.remove(watcherId)
            dispatch({ type: REMOVE_WATCHER, watcherId })
        } catch (err) {
            console.log(`Cannot remove watcher id:${watcherId}:`, err)
        }
    }
}