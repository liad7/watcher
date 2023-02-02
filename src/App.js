import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { AnimalList } from './cmps/aminal-list'
import { CountDown } from './cmps/count-down'
import { MouseMonitor } from './cmps/mouse-monitor'
import { SeasonClock } from './cmps/season-clock'
import { WatcherDetails } from './views/watcher-details'
import { WatcherIndex } from './views/watcher-index'

function App() {
  return (
    <Router>
      <div className="app">

        <main>
          <Switch>
            <Route path="/animal" component={AnimalList} />
            <Route path="/clock" component={SeasonClock} />
            {/* <Route path="/count" component={CountDown} /> */}
            {/* <CountDown startFrom={10} onDone={() => console.log('Done!')} /> */}
            <Route path="/mouse" component={MouseMonitor} />
            <Route path="/watcher/:id" component={WatcherDetails} />
            <Route path="/watcher" component={WatcherIndex} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
