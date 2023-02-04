import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { AnimalList } from './cmps/aminal-list'
import { AppHeader } from './cmps/app-header'
import { CountDown } from './cmps/count-down'
import { MouseMonitor } from './cmps/mouse-monitor'
import { SeasonClock } from './cmps/season-clock'
import { Home } from './views/home'
import { MovieDetails } from './views/movie-details'
import { WatcherDetails } from './views/watcher-details'
import { WatcherIndex } from './views/watcher-index'

function App() {
  return (
    <Router>
      <div className="app main-layout">
        <AppHeader />
        <main className="full main-layout">
          <Switch>
            <Route path="/animal" component={AnimalList} />
            <Route path="/clock" component={SeasonClock} />
            {/* <Route path="/count" component={CountDown} /> */}
            {/* <CountDown startFrom={10} onDone={() => console.log('Done!')} /> */}
            <Route path="/mouse" component={MouseMonitor} />
            <Route path="/watcher/:id/:movieId" component={MovieDetails} />
            <Route path="/watcher/:id" component={WatcherDetails} />
            <Route path="/watcher" component={WatcherIndex} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
