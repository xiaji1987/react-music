import React from 'react';
import { Link } from 'react-router-dom'
import { IconFont } from '../../../../createLabel/index'
import './songLists.scss'

function songList(props) {
  return (
    <ul className="B_song_ul">
      {
        props.songLists.map((item, index) => {
          return (
            <Link to={'/song/detail/' + item.id} key={index + 'songs'}>
              <li className="B_song_li">
                <div className="B_song_count">
                  <IconFont type="icon-ziyuanldpi" />
                  {item.playCount}
                </div>
                <img src={item.picUrl || item.coverImgUrl} alt={item.id}/>
                <p className="B_song_info">{item.name}</p>
              </li>
            </Link>
          )
        })
      }
    </ul>
  );
}

export default songList;