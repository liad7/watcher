import { Component } from "react"
import { utilService } from "../services/util-service"

export class SeasonClock extends Component {
    state = {
        clock: new Date().toLocaleTimeString(),
        isDark: true
    }

    intervalId

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({ clock: this.time() })
        }, 1000)
    }

    onChangeMode = () => {
        this.setState({ isDark: !this.state.isDark })
    }

    time = () => {
        let d = new Date()
        return d.toLocaleTimeString()
    }

    render() {
        const date = Date.now()
        const day = utilService.getDayName(date)
        const month = utilService.getMonthName(date)
        const season = utilService.getSeasonName(date)

        console.log('this.state.clock:', this.state.clock)
        return (
            <section className={`season-clock ${this.state.isDark ? 'dark' : ''}`}>
                <h2>{month} ({season})</h2>
                <img src={require(`../assets/images/seasons/${season}.png`)} />
                <p>{day}</p>
                <button onClick={this.onChangeMode}>Change mode</button>

                <section className="clock">
                    {this.state.clock}
                </section>
            </section>
        )
    }
}