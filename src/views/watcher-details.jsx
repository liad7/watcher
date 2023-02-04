import { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { HeroMovie } from "../cmps/hero-movie"
import { MovieList } from "../cmps/movie-list"
import { WatcherDetailsHeader } from "../cmps/watcher-details-header"
import { watcherService } from "../services/watcher-service"
import { selectMovie } from "../store/watcher/watcher-action"

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

    onSelectMovie = (movie) => {
        this.props.selectMovie(movie)
    }

    render() {
        const { watcher } = this.state
        if (!watcher) return <section>Loading...</section>
        return (
            <section className="watcher-details full">
                <WatcherDetailsHeader watcher={watcher} />
                {!!watcher.movies.length &&
                    <>
                        <HeroMovie movie={watcher.movies[0]} />
                        <MovieList movies={watcher.movies} onSelectMovie={this.onSelectMovie}/>
                    </>
                }
                <Link to="/watcher">Back</Link>
            </section>
        )
    }
}

const mapStateToProps = storeState => ({
})

const mapDispatchToProps = {
    selectMovie,
}

export const WatcherDetails = connect(mapStateToProps,mapDispatchToProps)(_WatcherDetails)