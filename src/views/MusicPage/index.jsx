import React, { Component, Fragment } from 'react';
import './style.scss'
import { HeaderTab, Recommend, Songsheet, Rank, Singer, Newmusic, Anchorstation } from './components/index'
import { Route, Switch, Redirect } from 'react-router-dom'

class index extends Component {
  render() {
    return (
      <Fragment>
        <HeaderTab />
        <div className="B_music_page">
          <Switch>
            <Route path="/music/recommend" component={Recommend}/>
            <Route path="/music/songsheet" component={Songsheet}/>
            <Route path="/music/rank" component={Rank}/>
            <Route path="/music/singer" component={Singer}/>
            <Route path="/music/newmusic" component={Newmusic}/>
            <Route path="/music/anchorstation" component={Anchorstation}/>
            <Redirect to='/music/recommend' from='/music' />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

export default index;