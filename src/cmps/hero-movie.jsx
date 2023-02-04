
export function HeroMovie({ movie }) {
    console.log('movie:', movie)

    return (
        <section className="hero-movie">
            <section className="movie-img" style={{ backgroundImage: `url(${movie.img})` }}>
                <h2>{movie.title}</h2>
                <p>{movie.desc}</p>
                <section className="btns-container">
                    <button>Play</button>
                    <button>Info</button>
                </section>
            </section>
        </section>
    )
}