import { Component } from "react"
import { connect } from "react-redux"
import { watcherService } from "../services/watcher-service"

class _MovieDetails extends Component {
    state = {
        videoUrl: null
    }

    async componentDidMount() {
        console.log('this.props.selectedMovie:', this.props.selectedMovie);
        const videoUrl = await this.getMovieTrailer(this.props.selectedMovie.title)
        this.setState({ videoUrl })
    }

    getMovieTrailer = async (title) => {
        return await watcherService.getMovieTrailer(title)
    }
    render() {
        const { selectedMovie } = this.props
        const { videoUrl } = this.state
        return (
            <section className="movie-details">
                {videoUrl && <iframe src={videoUrl}></iframe>}
            </section>
        )
    }
}

const mapStateToProps = storeState => ({
    selectedMovie: storeState.watcherModule.selectedMovie,
})

export const MovieDetails = connect(mapStateToProps)(_MovieDetails)
