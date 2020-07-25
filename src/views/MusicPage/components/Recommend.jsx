import React, { Component, Fragment } from 'react';
import { Carousel } from 'antd';
import { getInfo } from '../../../api/index'
import './recommend.scss'
import { IconFont } from '../../../createLabel/index'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import SongLists from './common/songLists' 

class recommend extends Component {
  state = {
    banners: [],
    recomSongs: [],
    recomSole: [],
    newMusic: [],
    newIndex: -1
  }
  componentDidMount() {
    getInfo.getSwiperList({type: 0}).then(res => {
      this.setState({
        banners: res.data.banners
      })
    })
    getInfo.getRecomSongSheet({limit: 12}).then(res => {
      this.setState({
        recomSongs: res.data.result
      })
    })
    getInfo.getRecomPrivatecontent().then(res => {
      this.setState({
        recomSole: res.data.result
      })
    })
    getInfo.getRecomNewMusic().then(res => {
      this.setState({
        newMusic: res.data.result
      })
    })
  }
  handleAddActive = (index) => {
    this.setState({
      newIndex: index
    })
  }
  handleRemoveIndex = () => {
    this.setState({
      newIndex: -1
    })
  }
  handleDoubleCLick = (index) => {
    console.log('双击事件', index)
  }
  render() {
    return (
      <Fragment>
        <div className="B_recom_swipers">
          <Carousel autoplay>
            {
              this.state.banners.map((item, index) => {
                return (
                  <div className="B_recom_swiper" key={index + 'banner'}>
                    <img src={item.imageUrl} alt={item.encodeId} />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="B_recom_songsheet">
          <p className="B_recom_song_title">推荐歌单</p>
          <SongLists songLists={this.state.recomSongs} />
        </div>
        <div className="B_recom_sole">
          <p className="B_recom_sole_title">独家放送</p>
          <div className="B_recom_sole_lists">
            {
              this.state.recomSole.map((item, index) => {
                return (
                  <Link to="/" key={index + 'sole'}>
                    <div className="B_recom_sole_list">
                      <img src={item.picUrl} alt={item.id}/>
                      <p className="B_recom_sole_info">{item.name}</p>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>
        <div className="B_new_music">
          <p className="B_recom_sole_title">最新音乐</p>
          <div className="B_new_lists" onMouseLeave={this.handleRemoveIndex}>
            {
              this.state.newMusic.map((item, index) => {
                return (
                  <div className={classnames("B_new_list", {'B_new_active': index === this.state.newIndex})} key={index + 'newMusic'} onMouseEnter={() => {this.handleAddActive(index)}} onDoubleClick={() => {this.handleDoubleCLick(index)}}>
                    <span className="B_new_list_num">{index + 1}</span>
                    <div className="B_new_list_icon">
                      <IconFont type="icon-bofang" />
                    </div>
                    <img src={item.picUrl} alt={item.id}/>
                    <span className="B_new_list_info">
                      <p>{item.name}</p>
                      <p className="B_new_list_p">{item.song.album.company}</p>
                    </span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Fragment>
    );
  }
}

export default recommend;