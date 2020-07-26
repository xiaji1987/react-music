import React from 'react';
import './App.scss';
import 'antd/dist/antd.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { MusicPage, NoPage, SongDetail } from './views/index' 
import { Header, Footer, Menu } from './components/index'
import { Provider} from 'react-redux'
import store from './store/index'

function App() {
  let winWidth = document.body.clientWidth
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Menu />
        <div className="B_show_page" style={{width: (winWidth - 200) +'px'}}>
          <Switch>
            <Route path='/music' component={MusicPage} />
            <Route path='/song/detail' component={SongDetail} />
            <Redirect to='/music' from='/' exact />
            <Route to='/404' component={NoPage} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
