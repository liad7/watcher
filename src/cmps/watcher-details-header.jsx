import { NavLink } from "react-router-dom"

export function WatcherDetailsHeader({ watcher }) {

    return (
        <header className="watcher-details-header full">
            <nav>
                <NavLink to={`/`}>Home</NavLink>
                <NavLink to={`/serie`}>Series</NavLink>
                <NavLink to={`/movie`}>Movies</NavLink>
                <NavLink to={`/popular`}>Popular</NavLink>
            </nav>
            <section className="watcher-img">
                <img src={watcher.img || "http://occ-0-2719-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"} alt="" />
            </section>
        </header>
    )
}