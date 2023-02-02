import { Component } from "react"

export class MouseMonitor extends Component {
    state = {
        isOn: false,
        pos: {
            x: 0,
            y: 0
        }
    }

    componentDidMount() {
        this.addMouseListener()
    }

    componentDidUpdate() {
        if (this.state.isOn) this.removeMouseListener()
        else this.addMouseListener()
    }

    componentWillUnmount() {
        this.removeMouseListener()
    }

    addMouseListener() {
        document.addEventListener('mousemove', this.updatePos)
    }

    removeMouseListener() {
        document.removeEventListener('mousemove', this.updatePos)
    }

    updatePos = ({ pageX, pageY }) => {
        const pos = { x: pageX, y: pageY }
        this.setState({ pos: pos })
    }

    onToogle = () => {
        this.setState({ isOn: !this.state.isOn })
    }

    render() {
        const { pos, isOn } = this.state
        console.log('pos:', pos);
        return (
            <section className="mouse-monitor">
                <h3>Mouse Position</h3>
                <span>x: {pos.x},y: {pos.y}</span>
                {/* {!isOn && <span>x: {pos.x},y: {pos.y}</span>} */}
                <button onClick={this.onToogle}>{isOn ? 'resume' : 'puase'}</button>
            </section>
        )
    }
}