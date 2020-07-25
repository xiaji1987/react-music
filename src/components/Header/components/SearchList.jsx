import React from 'react';
import { connect } from 'react-redux'

const SearchList = (props) => {
  return (
    <div>
      {
        props.songsList.toJS().map((item, index) => {
          return (
            <div key={index}>{item.id}</div>
          )
        })
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  songsList: state.getIn(['header', 'songsList'])
})

export default connect(mapStateToProps, null)(SearchList);