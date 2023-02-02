export function WatcherPreview({ watcher, onRemoveWatcher }) {

    return (
        <article className="watcher-preview">
            <h3>{watcher.fullName}</h3>
            <hr />
            <button onClick={() => onRemoveWatcher(watcher._id)}>✖️</button>
            {/* // <button onClick={() => onSelectWatcher(id)}>Select</button> */}
        </article>
    )
}