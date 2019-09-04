import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Switch, HashRouter} from 'react-router-dom'
import RegisterProf from './RegisterProf'
import ListDisplay from './ListDisplay'
import ProfEdit from './ProfEdit'

const App = () => {
  return(

    <HashRouter>
        <Switch>
            <Route exact path = '/' component = { ListDisplay } />
            <Route path = '/register' component = { RegisterProf } />
            <Route path = '/ProfEdit' component = { ProfEdit } />
        </Switch>
    </HashRouter>
  )
}


ReactDOM.render(<App />, document.getElementById('container'))
