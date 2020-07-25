import React, { Component, Fragment } from 'react';
import { getInfo } from '../../../api/index'
import './songsheet.scss'
import SongLists from './common/songLists'
import classnames from 'classnames'

class Songsheet extends Component {
  state = {
    clickTag: 0,
    songTags: [],
    songSheets: []
  }
  componentDidMount () {
    getInfo.getSongTags().then(res => {
      this.setState({
        songTags: res.data.tags
      })
    })
    this.handleGetSongSheets()
  }
  handleGetSongSheets = (sheetCat = '华语', sheetLimit = 18, index = 0) => {
    let sheetDate = new Date().getTime()
    getInfo.getSongSheets({ cat: sheetCat, limit: sheetLimit, before: sheetDate }).then(res => {
      this.setState({
        songSheets: res.data.playlists,
        clickTag: index
      })
    })
  }
  render() {
    console.log(this.state.songSheets)
    return (
      <Fragment>
        <div className="B_song_tags">
          <span className="B_tags_title">热门标签：</span>
          <div className="B_tags_lists">
            {
              this.state.songTags.map((item, index) => {
                return (
                  <div className={classnames('B_tags_list', {'B_tag_active': this.state.clickTag === index})} key={index + 'tags'} onClick={() => { this.handleGetSongSheets(item.name, 18, index) }}>
                    <span>{item.name}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="B_song_list">
          <SongLists songLists={this.state.songSheets} />
        </div>
      </Fragment>
    );
  }
}

export default Songsheet;