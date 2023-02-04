import { Link } from 'react-router-dom'

export function WatcherPreview({ watcher, onRemoveWatcher }) {

    return (
        <Link to={`/watcher/${watcher._id}/`}>
            <article className="watcher-preview">
                <section className="img-container">
                    <img src={watcher.img || "http://occ-0-2719-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"} alt="" />
                </section>
                <p>{watcher.fullName}</p>
                {/* <button onClick={() => onRemoveWatcher(watcher._id)}>✖️</button> */}
            </article>
        </Link>
    )
}