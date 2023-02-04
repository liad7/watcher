import { Component } from "react"
import { connect } from "react-redux"

class _MovieDetails extends Component {

    render() {
        const { selectedMovie } = this.props
        console.log('selectedMovie:', selectedMovie)
        return (
            <section className="movie-details">

            </section>
        )
    }
}

const mapStateToProps = storeState => ({
    selectedMovie: storeState.watcherModule.selectedMovie,
})

export const MovieDetails = connect(mapStateToProps)(_MovieDetails)
