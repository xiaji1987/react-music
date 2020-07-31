import React, { Component } from 'react';
import { getInfo } from '../../api/index'
import './style.scss'

class index extends Component {
  state = {
    songDetails: []
  }
  componentDidMount() {
    // let id = this.props.location.query.id || null
    getInfo.getSongDetails({ id: '5136777338' }).then(res => {
      console.log(res)
      this.setState({
        songDetails: res.data.playlist
      })
    })
  }
  render() {
    let { songDetails } = this.state
    return (
      <div className="B_song_detail">
        <div className="B_song_title">
          <div className="B_song_left_img">
            <img src={songDetails.coverImgUrl} alt=""/>
          </div>
          <div className="B_song_right_info">
            <div className="B_song_right_title">
              <span className="B_song_name">{songDetails.name}</span>
              <span className="B_song_count"></span>
            </div>
            <div className="B_song_right_play">
              <div className="B_song_play_btn">
                <i></i>
                播放全部
              </div>
              <div className="B_song_collect_count">
                <i></i>
                收藏({songDetails.subscribedCount})
              </div>
              <div className="B_song_share_count">
                <i></i>
                分享({songDetails.shareCount})
              </div>
            </div>
            <div className="B_song_tags">
              {
                // songDetails.tags.map((item, index) => {
                //   return (
                //     <span key={index + 'tags'}>{item}</span>
                //   )
                // })
              }
            </div>
            <p className="B_song_info">{songDetails.description}</p>
          </div>
        </div>
        <div className="B_song_lists">
          音乐列表
        </div>
      </div>
    );
  }
}

export default index;