import { Component } from "react"
import { connect } from "react-redux"

class _WatcherIndex extends Component {

    render() {

        return (
            <section className="watcher-index">
                index
            </section>
        )
    }
}

const mapStateToProps = storeState => ({

})

const mapDispatchToProps = {

}

export const WatcherIndex = connect(mapStateToProps, mapDispatchToProps)(_WatcherIndex)