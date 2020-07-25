import React, { Component } from 'react';
import './style.scss'
import logo from './logo.png'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import SearchList from './components/SearchList'
// function debounce(fn, ms = 500) {
//   let timeoutId = null
//   return function () {
//     clearTimeout(timeoutId)
//     timeoutId = setTimeout(() => {
//       fn.apply(this, arguments)
//     }, ms)
//   }
// }

class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputSetValue: null
    }
    // this.handleInputChange = this.handleInputChange.bind(this)
  }
  handleInputChange = (event) => {
    let newInputValue = event.currentTarget.value
    this.setState({
      inputSetValue: newInputValue
    }, () => {
      if(!this.state.inputSetValue) {
        return
      }
      let params = {
        keywords: this.state.inputSetValue,
        limit: 15
      }
      this.props.searchInfo(params)
    })
  }
  render() {
    // const { songsList } = this.props
    const { inputSetValue } = this.state
    return (
      <div className="B_header">
        <div className="B_header_left">
          <img src={logo} alt="logo图片"/>
          <span>筱竹</span>
        </div>
        <div className="B_header_input">
          <Input placeholder="搜索歌曲" value={inputSetValue} suffix={<SearchOutlined />} onChange={this.handleInputChange}/>
        </div>
        <SearchList />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   songsList: state.getIn(['header', 'songsList'])
// })
const mapDispatchToProps = (dispatch) => {
  return {
    searchInfo(params) {
      dispatch(actionCreators.searchInfo(params))
    }
  }
}

export default connect(null, mapDispatchToProps)(index);