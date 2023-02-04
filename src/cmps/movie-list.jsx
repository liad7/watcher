import { MoviePreview } from "./movie-preview"

export function MovieList({ movies,onSelectMovie }) {

    return (
        <>
            <h5>New</h5>
            <section className="movie-list">
                {movies.map(movie => <MoviePreview key={movie._id} movie={movie} onSelectMovie={onSelectMovie}/>)}
            </section>
        </>
    )
}