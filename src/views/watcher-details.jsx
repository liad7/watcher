import { watcherService } from "../services/watcher-service"

class _WatcherDetails extends Component {

    state = {
        watcher: null,
    }

    componentDidMount() {
        console.log('this.props:', this.props)
        this.loadWatcher()
    }

    loadWatcher = async () => {
        const watcher = await watcherService.get(this.props.match.params.id)
        this.setState({ watcher })
    }

    render() {
        return (
            <section className="watcher-details">
            </section>
        )
    }
}

const mapStateToProps = storeState => ({
    selectedWatcher: storeState.watcherModule.selectedWatcher,
})

const mapDispatchToProps = {
    selectWatcher,
}

export const WatcherDetails = connect(mapStateToProps, mapDispatchToProps)(_WatcherDetails)