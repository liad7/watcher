import { MoviePreview } from "./movie-preview"

export function MovieList({ movies }) {

    return (
        <section className="movie-list">
            {movies.map(movie => <MoviePreview key={movie._id} movie={movie} />)}
        </section>
    )
}