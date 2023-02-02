import { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { watcherService } from "../services/watcher-service"

class _WatcherDetails extends Component {

    state = {
        watcher: null,
    }

    componentDidMount() {
        console.log('this.props:', this.props)
        this.loadWatcher()
    }

    loadWatcher = async () => {
        const watcher = await watcherService.get(this.props.match.params.id)
        this.setState({ watcher })
    }

    render() {
        const { watcher } = this.state
        if (!watcher) return <section>Loading...</section>
        return (
            <section className="watcher-details">
                {watcher.fullName}
                <Link to="/watcher">Back</Link>
            </section>
        )
    }
}

export const WatcherDetails = connect()(_WatcherDetails)