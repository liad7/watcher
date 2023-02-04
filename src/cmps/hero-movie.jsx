
export function HeroMovie({ movie }) {
    console.log('movie:', movie)

    return (
        <section className="hero-movie">
            <section className="movie-img" style={{backgroundImage: `url(${movie.img})`}}>
                {/* <img src={movie.img} alt="" /> */}
            </section>
        </section>
    )
}