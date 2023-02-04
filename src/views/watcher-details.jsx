import { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { watcherService } from "../services/watcher-service"

class _WatcherDetails extends Component {

    state = {
        watcher: null,
    }

    componentDidMount() {
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
                <h3>{watcher.fullName}</h3>
                <h5>Movies</h5>
                {!!watcher.movies.length ?
                    <ul>{watcher.movies.map(movie => <li key={movie._id}>{movie.title}</li>)}</ul>
                    :
                    <p>No movies to display</p>
                }
                <hr />
                <Link to="/watcher">Back</Link>
            </section>
        )
    }
}

export const WatcherDetails = connect()(_WatcherDetails)