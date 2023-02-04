import { Component } from "react"
import { connect } from "react-redux"
import { watcherService } from "../services/watcher-service"

export class MovieDetails extends Component {
        
    state = {
        videoUrl: null,
    }

    async componentDidMount() {
        const videoUrl = await this.getMovieTrailer(this.props.movie.title)
        this.setState({ videoUrl })
    }

    getMovieTrailer = async (title) => {
        return await watcherService.getMovieTrailer(title)
    }
    render() {
        const { videoUrl } = this.state
        return (
            <section className="movie-details">
                {videoUrl && <iframe src={videoUrl}></iframe>}
            </section>
        )
    }
}
