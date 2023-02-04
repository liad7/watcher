import { storageService } from './async-storage.service.js'
import { utilService } from './util-service.js'

const WATCHER_KEY = 'watcherDB'
const API_KEY = '281dd39c6a06db04bf7424826d6146f0'


function getMovies() {
    getAns(renderGenres, `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
}

_createWatchers()

export const watcherService = {
    query,
    get,
    remove,
    save,
    getEmptyWatcher
}
async function query() {
    return await storageService.query(WATCHER_KEY)
}

async function get(watcherId) {
    return await storageService.get(WATCHER_KEY, watcherId)

}

async function remove(watcherId) {
    return await storageService.remove(WATCHER_KEY, watcherId)
}

async function save(watcher) {
    if (watcher._id) {
        return await storageService.put(WATCHER_KEY, watcher)
    } else {
        return await storageService.post(WATCHER_KEY, watcher)
    }
}

function getEmptyWatcher(fullName = '') {
    return {
        fullName,
        movies: [],
    }
}
function _createWatchers() {
    let watchers = utilService.loadFromStorage(WATCHER_KEY)
    if (!watchers) {
        watchers = [
            _createWatcher('Liad Ja'),
            _createWatcher('Or Pa'),
            _createWatcher('Dror La'),
            _createWatcher('Oren Sa'),
        ]
        utilService.saveToStorage(WATCHER_KEY, watchers)
    }
}

function _createWatcher(fullName = 'Puki Ba') {
    return {
        _id: utilService.makeId(),
        fullName,
        movies: ['Rambo', 'Rocky']
    }
}
