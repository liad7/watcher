import { Component } from "react"
import { connect } from "react-redux"
import { WatcherList } from "../cmps/watcher-list"
import { watcherService } from "../services/watcher-service"
import { loadWatchers, removeWatcher, saveWatcher } from "../store/watcher/watcher-action"

class _WatcherIndex extends Component {

    componentDidMount() {
        this.props.loadWatchers()
    }

    onRemoveWatcher = async (watcherId) => {
        try {
            this.props.removeWatcher(watcherId)
        } catch (err) {
            console.log('err:', err)
        }
    }

    onAddWatcher = async () => {
        const fullName = prompt('Your name')
        const watcher = watcherService.getEmptyWatcher(fullName)
        this.props.saveWatcher(watcher)
    }

    onSaveWatcher = async (watcher) => {
        try {
            this.props.saveWatcher(watcher)
        } catch (err) {
            console.log('err:', err)
        }
    }

    render() {
        const { watchers } = this.props

        return (
            <section className="watcher-index full">
                <h1>Who's watching Metflix?</h1>
                <WatcherList watchers={watchers} onRemoveWatcher={this.onRemoveWatcher} />
                <button className="btn add-btn" onClick={this.onAddWatcher}>Add watcher</button>
            </section>
        )
    }
}

const mapStateToProps = storeState => ({
    watchers: storeState.watcherModule.watchers,
})

const mapDispatchToProps = {
    loadWatchers,
    removeWatcher,
    saveWatcher,
}

export const WatcherIndex = connect(mapStateToProps, mapDispatchToProps)(_WatcherIndex)