import { watcherService } from "../../services/watcher-service"
import { SET_WATCHERS } from "./watcher-reducer"

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