import axios from 'axios'
import { storageService } from './async-storage.service.js'
import { utilService } from './util-service.js'

const WATCHER_KEY = 'watcherDB'
const API_KEY = '281dd39c6a06db04bf7424826d6146f0'

_createWatchers()

export const watcherService = {
    query,
    get,
    remove,
    save,
    getEmptyWatcher,
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

async function _getMovies() {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
        const { genres } = res.data
        const idx = utilService.getRandomIntInclusive(0, genres.length - 1)
        const movieRes = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genres[idx].id}`)
        const { results } = movieRes.data
        return _cleanMoviesData(results)
    } catch (err) {
        console.log('Cannot get watcher\'s movies:', err)
        throw err
    }
}

function _cleanMoviesData(movies) {
    return movies.map(movie => {
        return {
            _id: utilService.makeId(),
            img: `https://api.themoviedb.org${movie.backdrop_path}`,
            title: movie.title,
            publishedAt: movie.release_date,
            popularity: movie.popularity,
        }
    })
}

async function _createWatchers() {
    let watchers = utilService.loadFromStorage(WATCHER_KEY)
    if (!watchers) {
        watchers = [
            await _createWatcher('Liad Ja'),
            await _createWatcher('Or Pa'),
            await _createWatcher('Dror La'),
            await _createWatcher('Oren Sa'),
        ]
        utilService.saveToStorage(WATCHER_KEY, watchers)
    }
}

async function _createWatcher(fullName = 'Puki Ba') {
    return {
        _id: utilService.makeId(),
        fullName,
        movies: await _getMovies()
    }
}
