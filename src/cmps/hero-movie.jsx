
export function HeroMovie({ movie }) {
    console.log('movie:', movie)

    return (
        <section className="hero-movie">
            <section className="movie-img" style={{ backgroundImage: `url(${movie.img})` }}>
                <h2>{movie.title}</h2>
                <p>{movie.desc}</p>
                <section className="btns-container">
                    <button className="btn play-btn">Play <i class="fa-solid fa-play"></i></button>
                    <button className="btn info-btn">Info <i class="fa-solid fa-circle-info"></i></button>
                </section>
            </section>
        </section>
    )
}