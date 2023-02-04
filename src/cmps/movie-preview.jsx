export function MoviePreview({ movie }) {
    
    return (
        <article className="movie-preview" style={{ backgroundImage: `url(${movie.img})` }}>
        </article>
    )
}