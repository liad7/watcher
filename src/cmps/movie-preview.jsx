import { Link } from "react-router-dom"

export function MoviePreview({ movie, onSelectMovie }) {

    return (
        <Link to={`${movie._id}`}>
            <article className="movie-preview"
                onClick={() => onSelectMovie(movie)}
                style={{ backgroundImage: `url(${movie.img})` }}>
            </article>
        </Link>
    )
}