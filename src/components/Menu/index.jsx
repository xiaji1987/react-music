import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './style.scss'
import classnames from 'classnames'
import { IconFont } from '../../createLabel/index'

const menuLists = [{
  title: '个性推荐',
  link: '/music',
  menuDetails: [{
    iconSrc: 'icon-yinle',
    title: '发现音乐',
    link: '/music'
  },
  {
    iconSrc: 'icon-fasheta',
    title: '私人FW',
    link: '/radio'
  },
  {
    iconSrc: 'icon-zhibo',
    title: '直播',
    link: '/radio'
  },
  {
    iconSrc: 'icon-shipin',
    title: '视频',
    link: '/video'
  },
  {
    iconSrc: 'icon-pengyou',
    title: '朋友',
    link: '/friend'
  }]
},
{
  title: '我的音乐',
  link: '/mymusic',
  menuDetails: [{
    iconSrc: 'icon-yinle',
    title: '本地音乐',
    link: '/localmusic'
  },
  {
    iconSrc: 'icon-fasheta',
    title: '下载管理',
    link: '/download'
  },
  {
    iconSrc: 'icon-zhibo',
    title: '我的音乐云盘',
    link: '/musiccloud'
  }]
},
{
  title: '创建的歌单',
  link: '/songlist',
  menuDetails: []
}]
class index extends Component {
  state = {
    clickIndex: {
      listIndex: 0,
      detailIndex: 0
    }
  }
  handleClickAdd = (clickIndex) => {
    let newClickIndex = Object.assign({}, clickIndex)
    this.setState({
      clickIndex: newClickIndex
    })
  }
  render() {
    let winHeight = document.body.clientHeight
    return (
      <div className='B_menu' style={{height: (winHeight - 110) + 'px'}}>
        <ul className='B_menu_ul'>
          {
            menuLists.map((list, listIndex) => {
              return (
                <li key={listIndex + 'menu'} className='B_menu_li'>
                  <Link to={list.link}>
                    <p className="B_menu_list_p">{list.title}</p>
                  </Link>
                  <ul className="B_menu_detail_ul">
                    {
                      // console.log(list.children)
                      list.menuDetails.map((detail, detailIndex) => {
                        return (
                          <Link to={detail.link} key={detailIndex + 'detail'} onClick={() => this.handleClickAdd({listIndex, detailIndex})}>
                            <li className={classnames("B_menu_detail_li", {'B_menu_active': this.state.clickIndex.listIndex === listIndex && this.state.clickIndex.detailIndex === detailIndex })}>
                              <IconFont type={detail.iconSrc} className="B_menu_detail_icon"/>
                              <span>{detail.title}</span>
                            </li>
                          </Link>
                        )
                      })
                    }
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default index;