import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Switch, HashRouter} from 'react-router-dom'
import RegisterProf from './RegisterProf'
import ListProf from './ListProf'
import EditProf from './EditProf'

const App = () => {
  return(

    <HashRouter>
        <Switch>
            <Route exact path = '/' component = { ListProf } />
            <Route path = '/RegisterProf' component = { RegisterProf } />
            <Route path = '/EditProf' component = { EditProf　} />
        </Switch>
    </HashRouter>
  )
}


ReactDOM.render(<App />, document.getElementById('container'))
