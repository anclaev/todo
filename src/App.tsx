import { Route, Switch } from 'react-router'

import Navbar from './components/Navbar'
import Auth from './containers/Auth'

import Chaos from './pages/Chaos'
import Schemes from './pages/Schemes'
import Todos from './pages/Todos'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Auth />
      <Switch>
        <Route exact path="/" component={Todos} />
        <Route path="/chaos" component={Chaos} />
        <Route path="/schemes" component={Schemes} />
      </Switch>
    </>
  )
}
export default App
