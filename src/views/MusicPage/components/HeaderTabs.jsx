import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames'
const tabList = [{
  title: '个人推荐',
  route: '/music/recommend'
},
{
  title: '歌单',
  route: '/music/songsheet'
},
{
  title: '排行榜',
  route: '/music/rank'
},
{
  title: '歌手',
  route: '/music/singer'
},
{
  title: '最新音乐',
  route: '/music/newmusic'
},
{
  title: '主播电台',
  route: '/music/anchorstation'
}]
let clickIndex = 0
const handleClickIndex = (index) => {
  clickIndex = index
}
function headerTabs() {
  return (
    <div className="B_header_tab">
      <ul className="B_tab_ul">
        {
          tabList.map((item, index) => {
            return (
              <Link key={index + 'music'} to={item.route} className="B_tab_link" onClick={() => {handleClickIndex(index)}}>
                <li className={classnames("B_tab_li", {'B_tab_click': clickIndex === index})}>
                  {item.title}
                </li>
              </Link>
            )
          })
        }
      </ul>
    </div>
  );
}

export default headerTabs;