import { Link } from 'react-router-dom'

export function WatcherPreview({ watcher, onRemoveWatcher }) {

    return (
        <article className="watcher-preview">
            <section className="img-container">
                <img src="http://occ-0-2719-2773.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4" alt="" />
            </section>
            <p>{watcher.fullName}</p>
            {/* <h3>{watcher.fullName}</h3> */}
            <button onClick={() => onRemoveWatcher(watcher._id)}>✖️</button>
            <Link to={`/watcher/${watcher._id}`}>Select</Link>
        </article>
    )
}