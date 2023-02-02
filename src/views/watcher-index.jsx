import { Component } from "react"
import { connect } from "react-redux"
import { WatcherList } from "../cmps/watcher-list"
import { loadWatchers } from "../store/watcher/watcher-action"

class _WatcherIndex extends Component {
    componentDidMount() {
        this.props.loadRobots()
    }

    render() {
        const { watchers } = this.props
        return (
            <section className="watcher-index">
                index
                <WatcherList watchers={watchers} />
            </section>
        )
    }
}

const mapStateToProps = storeState => ({
    watchers: storeState.watcherModule.watchers,

})

const mapDispatchToProps = {
    loadWatchers,

}

export const WatcherIndex = connect(mapStateToProps, mapDispatchToProps)(_WatcherIndex)