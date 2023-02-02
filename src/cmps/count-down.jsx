import { Component } from "react"
import { utilService } from "../services/util-service"

export class CountDown extends Component {
    state = {
        count: this.props.startFrom,
        isDone: false
    }

    intervalId

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ count: this.state.count - 1 })
        }, 1000)
    }

    componentDidUpdate() {
        if (this.state.count === 0 && !this.state.isDone) {
            this.props.onDone()
            clearInterval(this.intervalId)
            this.setState({ isDone: true })
        }
    }

    render() {
        const { count } = this.state
        let displayCount = count > 9 ? count : utilService.padNum(count)

        return (
            <section className={`count-down ${count > 6 ? '' : 'last'}`}>
                {displayCount}
            </section>
        )
    }
}